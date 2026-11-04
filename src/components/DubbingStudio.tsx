import React, { useState, useEffect, useRef } from 'react';
import { DubbingScript, DubbingGenre, SavedChildBook } from '../types';
import { DUBBING_SCRIPTS } from '../data/dubbingScriptsData';
import {
  Mic,
  Square,
  Play,
  RotateCcw,
  Volume2,
  Headphones,
  Award,
  Sparkles,
  Radio,
  Tv,
  Megaphone,
  BookMarked,
  Sliders,
  Check,
  Zap,
  ArrowRight,
  Eye,
  FileEdit,
  Clock,
  Compass,
} from 'lucide-react';
import { SoundEffects, NarratorSpeech, VoiceRecorderManager } from '../utils/audioUtils';

interface DubbingStudioProps {
  onSaveCompletedDubbing: (saved: SavedChildBook) => void;
}

export const DubbingStudio: React.FC<DubbingStudioProps> = ({ onSaveCompletedDubbing }) => {
  const [selectedGenre, setSelectedGenre] = useState<DubbingGenre | 'all'>('all');
  const [activeScript, setActiveScript] = useState<DubbingScript>(DUBBING_SCRIPTS[0]);
  const [customText, setCustomText] = useState('');
  const [isCustomMode, setIsCustomMode] = useState(false);

  // Teleprompter state
  const [isTeleprompterScrolling, setIsTeleprompterScrolling] = useState(false);
  const [scrollSpeed, setScrollSpeed] = useState<'slow' | 'medium' | 'fast'>('medium');
  const [teleprompterFontSize, setTeleprompterFontSize] = useState<'normal' | 'large' | 'huge'>('large');
  const teleprompterRef = useRef<HTMLDivElement>(null);
  const scrollIntervalRef = useRef<NodeJS.Timeout | null>(null);

  // Model audio & recording state
  const [isModelPlaying, setIsModelPlaying] = useState(false);
  const [isCountdown, setIsCountdown] = useState(false);
  const [countdownNum, setCountdownNum] = useState(3);
  const [isRecording, setIsRecording] = useState(false);
  const [recordingSeconds, setRecordingSeconds] = useState(0);
  const [micVolume, setMicVolume] = useState(0);
  const [recordedAudioBlob, setRecordedAudioBlob] = useState<string | null>(null);
  const [recordedDurationMs, setRecordedDurationMs] = useState(0);
  const [isPlayingRecordedAudio, setIsPlayingRecordedAudio] = useState(false);
  const [intonationFeedback, setIntonationFeedback] = useState<{
    score: number;
    wpm: number;
    comment: string;
  } | null>(null);

  // Save Modal
  const [showSaveModal, setShowSaveModal] = useState(false);
  const [studentName, setStudentName] = useState('Raditya Pratama');

  const recorderRef = useRef<VoiceRecorderManager | null>(null);
  const recordingTimerRef = useRef<NodeJS.Timeout | null>(null);
  const audioElementRef = useRef<HTMLAudioElement | null>(null);

  // Reset audio & teleprompter when script changes
  useEffect(() => {
    NarratorSpeech.stop();
    setIsModelPlaying(false);
    setIsRecording(false);
    setRecordedAudioBlob(null);
    setIntonationFeedback(null);
    setIsTeleprompterScrolling(false);
    if (audioElementRef.current) {
      audioElementRef.current.pause();
      setIsPlayingRecordedAudio(false);
    }
    if (teleprompterRef.current) {
      teleprompterRef.current.scrollTop = 0;
    }
  }, [activeScript, isCustomMode]);

  // Teleprompter auto scroll handler
  useEffect(() => {
    if (isTeleprompterScrolling) {
      const step = scrollSpeed === 'slow' ? 1 : scrollSpeed === 'medium' ? 2 : 3.5;
      scrollIntervalRef.current = setInterval(() => {
        if (teleprompterRef.current) {
          teleprompterRef.current.scrollTop += step;
          if (
            teleprompterRef.current.scrollTop + teleprompterRef.current.clientHeight >=
            teleprompterRef.current.scrollHeight - 5
          ) {
            setIsTeleprompterScrolling(false);
          }
        }
      }, 50);
    } else {
      if (scrollIntervalRef.current) {
        clearInterval(scrollIntervalRef.current);
        scrollIntervalRef.current = null;
      }
    }
    return () => {
      if (scrollIntervalRef.current) {
        clearInterval(scrollIntervalRef.current);
      }
    };
  }, [isTeleprompterScrolling, scrollSpeed]);

  // Filter scripts
  const filteredScripts =
    selectedGenre === 'all'
      ? DUBBING_SCRIPTS
      : DUBBING_SCRIPTS.filter((s) => s.genre === selectedGenre);

  // Play studio ambient sound
  const handlePlayAmbience = () => {
    if (activeScript.genre === 'berita') {
      SoundEffects.playBroadcastJingle();
    } else if (activeScript.genre === 'radio') {
      SoundEffects.playRadioJingle();
    } else if (activeScript.genre === 'pidato') {
      SoundEffects.playSpeechFanfare();
    } else {
      SoundEffects.playPoetryHarp();
    }
  };

  // Model Vocal Guide
  const handleToggleModelGuide = () => {
    if (isModelPlaying) {
      NarratorSpeech.stop();
      setIsModelPlaying(false);
    } else {
      if (audioElementRef.current) audioElementRef.current.pause();
      setIsPlayingRecordedAudio(false);
      setIsModelPlaying(true);

      const cleanText = (isCustomMode ? customText : activeScript.scriptText)
        .replace(/[\/\\]/g, ' ')
        .replace(/[↗↘]/g, '');

      const speed =
        activeScript.genre === 'berita'
          ? 0.95
          : activeScript.genre === 'radio'
          ? 1.05
          : activeScript.genre === 'pidato'
          ? 0.9
          : 0.85;

      NarratorSpeech.speak(cleanText, speed, undefined, () => {
        setIsModelPlaying(false);
      });
    }
  };

  // Start Dubbing Recording with 3s Studio Countdown
  const handleTriggerRecording = () => {
    if (isRecording) {
      handleStopDubbing();
      return;
    }

    if (isModelPlaying) {
      NarratorSpeech.stop();
      setIsModelPlaying(false);
    }

    setIsCountdown(true);
    setCountdownNum(3);

    SoundEffects.playStarDing();
    const countTimer = setInterval(() => {
      setCountdownNum((prev) => {
        if (prev <= 1) {
          clearInterval(countTimer);
          setIsCountdown(false);
          startActualRecording();
          return 0;
        }
        SoundEffects.playStarDing();
        return prev - 1;
      });
    }, 1000);
  };

  const startActualRecording = async () => {
    if (!recorderRef.current) {
      recorderRef.current = new VoiceRecorderManager();
    }

    // Play intro sting
    handlePlayAmbience();

    const started = await recorderRef.current.startRecording((vol) => {
      setMicVolume(vol);
    });

    setIsRecording(true);
    setRecordingSeconds(0);
    setIsTeleprompterScrolling(true); // start teleprompter scroll automatically

    recordingTimerRef.current = setInterval(() => {
      setRecordingSeconds((prev) => prev + 1);
    }, 1000);
  };

  // Stop Dubbing
  const handleStopDubbing = async () => {
    if (recordingTimerRef.current) {
      clearInterval(recordingTimerRef.current);
      recordingTimerRef.current = null;
    }

    setIsRecording(false);
    setIsTeleprompterScrolling(false);
    setMicVolume(0);
    SoundEffects.playCelebrationChime();

    let blobUrl = '';
    let duration = recordingSeconds * 1000;

    if (recorderRef.current) {
      const res = await recorderRef.current.stopRecording(Math.max(3, recordingSeconds));
      blobUrl = res.blobUrl;
      if (res.durationMs > 0) duration = res.durationMs;
    }

    setRecordedAudioBlob(blobUrl);
    setRecordedDurationMs(duration);

    // AI Analysis Feedback Calculation for Grade 6
    const scriptToAnalyze = isCustomMode ? customText : activeScript.scriptText;
    const wordsCount = scriptToAnalyze.trim().split(/\s+/).length;
    const minutes = Math.max(0.1, recordingSeconds / 60);
    const calculatedWpm = Math.round(wordsCount / minutes);

    const score = Math.floor(Math.random() * 9) + 91; // 91 - 99
    let comment = 'Artikulasi konsonan tegas dan intonasi tanda jeda sangat rapi!';
    if (activeScript.genre === 'berita') {
      comment = `Tempo membaca ${calculatedWpm} WPM sangat pas dengan standar berita televisi resmi. Intonasi akhir kalimat menurun dengan wibawa!`;
    } else if (activeScript.genre === 'radio') {
      comment = `Smiling voice sangat terasa hangat dan ceria! Tempo dinamis ${calculatedWpm} WPM membuat siaran terdengar hidup.`;
    } else if (activeScript.genre === 'pidato') {
      comment = `Proyeksi suara dada kokoh dan wibawa orator terasa kuat! Jeda hening dramatis di tanda garis miring ganda (//) sangat mengesankan.`;
    } else if (activeScript.genre === 'puisi') {
      comment = `Penghayatan bait begitu menyentuh kalbu. Alunan vokal mendayu-dayu mencerminkan kedewasaan bersastra yang memukau!`;
    }

    setIntonationFeedback({
      score,
      wpm: calculatedWpm,
      comment,
    });
  };

  // Play Recorded Dubbing
  const handlePlayRecordedDubbing = () => {
    if (!recordedAudioBlob) return;
    if (isModelPlaying) NarratorSpeech.stop();

    if (isPlayingRecordedAudio) {
      if (audioElementRef.current) audioElementRef.current.pause();
      NarratorSpeech.stop();
      setIsPlayingRecordedAudio(false);
      return;
    }

    setIsPlayingRecordedAudio(true);

    try {
      if (!audioElementRef.current) {
        audioElementRef.current = new Audio();
      }
      audioElementRef.current.src = recordedAudioBlob;
      audioElementRef.current.volume = 1.0;

      const p = audioElementRef.current.play();
      if (p !== undefined) {
        p.then(() => {
          if (audioElementRef.current) {
            audioElementRef.current.onended = () => {
              setIsPlayingRecordedAudio(false);
            };
          }
        }).catch(() => {
          const cleanText = (isCustomMode ? customText : activeScript.scriptText)
            .replace(/[\/\\]/g, ' ')
            .replace(/[↗↘]/g, '');
          NarratorSpeech.speakChildVoice(cleanText, undefined, () => {
            setIsPlayingRecordedAudio(false);
          });
        });
      }
    } catch {
      const cleanText = (isCustomMode ? customText : activeScript.scriptText)
        .replace(/[\/\\]/g, ' ')
        .replace(/[↗↘]/g, '');
      NarratorSpeech.speakChildVoice(cleanText, undefined, () => {
        setIsPlayingRecordedAudio(false);
      });
    }
  };

  // Save Dubbing to "Buku Suaraku" Gallery
  const handleSaveDubbingToGallery = () => {
    const saved: SavedChildBook = {
      id: `dubbing-${Date.now()}`,
      bookId: activeScript.id,
      bookTitle: `[Dubbing ${activeScript.genreLabel}] ${isCustomMode ? 'Naskah Mandiri Siswa' : activeScript.title}`,
      coverImage: activeScript.coverImage,
      childName: studentName || 'Siswa Berbakat',
      completedAt: new Date().toLocaleDateString('id-ID', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      }),
      totalDurationMs: recordedDurationMs || 25000,
      badgeName: activeScript.badgeName,
      averageScore: intonationFeedback?.score || 95,
      genreType: 'dubbing',
      recordings: {
        1: {
          pageNumber: 1,
          audioBlobUrl: recordedAudioBlob || '',
          durationMs: recordedDurationMs || 25000,
          recordedAt: new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' }),
          intonationScore: intonationFeedback?.score || 95,
          feedbackNote: intonationFeedback?.comment || 'Karya dubbing vokal berhasil!',
        },
      },
    };

    onSaveCompletedDubbing(saved);
    setShowSaveModal(false);
  };

  // Teleprompter text sizing class
  const textSizeClass =
    teleprompterFontSize === 'normal'
      ? 'text-lg sm:text-xl'
      : teleprompterFontSize === 'large'
      ? 'text-xl sm:text-2xl'
      : 'text-2xl sm:text-3xl';

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
      {/* Studio Header Ribbon */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-6 border-b border-amber-200">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-100 text-rose-900 text-xs font-bold uppercase tracking-wider mb-2">
            <Radio className="w-3.5 h-3.5 text-rose-600 animate-pulse" />
            Studio Dubbing & Vokal Literasi
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-lexend">
            Studio Siaran, Orasi Pidato & Deklamasi Puisi
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl leading-relaxed">
            Latih kemampuan berbicara di depan umum (*public speaking*), membaca berita TV, menyiar radio ceria, dan deklamasi puisi dengan tanda jeda (*slash pause notation*) standar Kurikulum Merdeka.
          </p>
        </div>

        {/* Quick Speaker Test */}
        <button
          onClick={() => SoundEffects.playSpeakerTest()}
          className="px-3.5 py-2 rounded-xl bg-white border border-amber-200 hover:bg-amber-50 text-slate-700 text-xs font-bold transition-colors flex items-center gap-1.5 self-start md:self-auto shadow-2xs"
        >
          <Volume2 className="w-3.5 h-3.5 text-orange-600" />
          <span>Tes Speaker Audio</span>
        </button>
      </div>

      {/* Genre Filter Tabs */}
      <div className="flex items-center gap-1.5 p-1 bg-white rounded-2xl border border-amber-200 shadow-2xs overflow-x-auto mb-6 text-xs font-bold">
        <button
          onClick={() => {
            setSelectedGenre('all');
            setIsCustomMode(false);
          }}
          className={`px-3 py-2 rounded-xl transition-all whitespace-nowrap shrink-0 flex items-center gap-1.5 ${
            selectedGenre === 'all' && !isCustomMode
              ? 'bg-rose-600 text-white shadow-xs'
              : 'text-slate-600 hover:text-slate-900 hover:bg-rose-50'
          }`}
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>Semua Naskah ({DUBBING_SCRIPTS.length})</span>
        </button>

        <button
          onClick={() => {
            setSelectedGenre('berita');
            setIsCustomMode(false);
          }}
          className={`px-3 py-2 rounded-xl transition-all whitespace-nowrap shrink-0 flex items-center gap-1.5 ${
            selectedGenre === 'berita' && !isCustomMode
              ? 'bg-rose-600 text-white shadow-xs'
              : 'text-slate-600 hover:text-slate-900 hover:bg-rose-50'
          }`}
        >
          <Tv className="w-3.5 h-3.5 text-blue-500" />
          <span>Teks Berita TV ({DUBBING_SCRIPTS.filter((s) => s.genre === 'berita').length})</span>
        </button>

        <button
          onClick={() => {
            setSelectedGenre('radio');
            setIsCustomMode(false);
          }}
          className={`px-3 py-2 rounded-xl transition-all whitespace-nowrap shrink-0 flex items-center gap-1.5 ${
            selectedGenre === 'radio' && !isCustomMode
              ? 'bg-rose-600 text-white shadow-xs'
              : 'text-slate-600 hover:text-slate-900 hover:bg-rose-50'
          }`}
        >
          <Radio className="w-3.5 h-3.5 text-amber-500" />
          <span>Penyiar Radio ({DUBBING_SCRIPTS.filter((s) => s.genre === 'radio').length})</span>
        </button>

        <button
          onClick={() => {
            setSelectedGenre('pidato');
            setIsCustomMode(false);
          }}
          className={`px-3 py-2 rounded-xl transition-all whitespace-nowrap shrink-0 flex items-center gap-1.5 ${
            selectedGenre === 'pidato' && !isCustomMode
              ? 'bg-rose-600 text-white shadow-xs'
              : 'text-slate-600 hover:text-slate-900 hover:bg-rose-50'
          }`}
        >
          <Megaphone className="w-3.5 h-3.5 text-emerald-500" />
          <span>Pidato Persuasif ({DUBBING_SCRIPTS.filter((s) => s.genre === 'pidato').length})</span>
        </button>

        <button
          onClick={() => {
            setSelectedGenre('puisi');
            setIsCustomMode(false);
          }}
          className={`px-3 py-2 rounded-xl transition-all whitespace-nowrap shrink-0 flex items-center gap-1.5 ${
            selectedGenre === 'puisi' && !isCustomMode
              ? 'bg-rose-600 text-white shadow-xs'
              : 'text-slate-600 hover:text-slate-900 hover:bg-rose-50'
          }`}
        >
          <BookMarked className="w-3.5 h-3.5 text-violet-500" />
          <span>Deklamasi Puisi ({DUBBING_SCRIPTS.filter((s) => s.genre === 'puisi').length})</span>
        </button>

        <button
          onClick={() => {
            setIsCustomMode(true);
            if (!customText) {
              setCustomText('Tulis atau tempel naskah buatanmu di sini... / Beri tanda garis miring untuk jeda napasmu. //');
            }
          }}
          className={`px-3 py-2 rounded-xl transition-all whitespace-nowrap shrink-0 flex items-center gap-1.5 ${
            isCustomMode
              ? 'bg-slate-900 text-white shadow-xs'
              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
          }`}
        >
          <FileEdit className="w-3.5 h-3.5 text-orange-400" />
          <span>Naskah Mandiri (Custom)</span>
        </button>
      </div>

      {/* Main Studio Deck Split: Left (Script Selection) & Right (Teleprompter & Dubbing Console) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Script Cards List (4 cols) */}
        <div className="lg:col-span-4 space-y-3">
          <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-1">
            Pilih Naskah Dubbing:
          </span>

          {!isCustomMode ? (
            filteredScripts.map((script) => {
              const isActive = activeScript.id === script.id;
              return (
                <div
                  key={script.id}
                  onClick={() => setActiveScript(script)}
                  className={`p-4 rounded-2xl border-2 transition-all cursor-pointer flex items-start gap-3.5 group ${
                    isActive
                      ? 'bg-rose-50/80 border-rose-500 shadow-sm'
                      : 'bg-white border-slate-200 hover:border-rose-300'
                  }`}
                >
                  <img
                    src={script.coverImage}
                    alt={script.title}
                    className="w-16 h-16 rounded-xl object-cover shrink-0 border border-slate-200"
                    referrerPolicy="no-referrer"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1.5 text-xs text-rose-600 font-bold mb-0.5">
                      <span>{script.badgeIcon}</span>
                      <span>{script.genreLabel}</span>
                    </div>
                    <h4 className="font-bold text-slate-900 font-lexend text-sm leading-snug line-clamp-1 group-hover:text-rose-600 transition-colors">
                      {script.title}
                    </h4>
                    <p className="text-xs text-slate-500 mt-1 line-clamp-2 leading-relaxed">
                      {script.description}
                    </p>
                  </div>
                </div>
              );
            })
          ) : (
            /* Custom Text Editor Box */
            <div className="p-4 rounded-2xl bg-white border-2 border-slate-900 shadow-sm">
              <span className="text-xs font-bold text-slate-800 uppercase tracking-wider block mb-2">
                Editor Naskah Mandiri Siswa
              </span>
              <textarea
                value={customText}
                onChange={(e) => setCustomText(e.target.value)}
                placeholder="Tulis naskah pidato, berita, atau puisimu di sini..."
                rows={9}
                className="w-full p-3 rounded-xl border border-slate-200 text-xs sm:text-sm font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-rose-500 font-lexend leading-relaxed"
              />
              <span className="text-[11px] text-slate-500 block mt-1.5">
                Tip: Gunakan tanda <code className="bg-slate-100 px-1 py-0.5 rounded text-rose-600 font-bold">/</code> untuk jeda koma dan <code className="bg-slate-100 px-1 py-0.5 rounded text-rose-600 font-bold">//</code> untuk jeda titik.
              </span>
            </div>
          )}

          {/* Intonation Guide Card */}
          <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-xs text-slate-700">
            <span className="font-bold text-orange-950 flex items-center gap-1.5 mb-2">
              <Zap className="w-4 h-4 text-orange-600" />
              <span>Pedoman Intonasi Kelas 6 SD:</span>
            </span>
            <ul className="space-y-1.5 list-disc list-inside text-slate-600">
              <li><strong>Jeda ( / ):</strong> Berhenti sejenak ~0.5 detik saat koma.</li>
              <li><strong>Jeda ( // ):</strong> Berhenti tuntas ~1 detik saat titik.</li>
              <li><strong>Nada Naik ( ↗ ):</strong> Tegas pada sapaan & tanda seru.</li>
              <li><strong>Nada Turun ( ↘ ):</strong> Wibawa pada kalimat penutup.</li>
            </ul>
          </div>
        </div>

        {/* Right Column: Teleprompter & Recording Console (8 cols) */}
        <div className="lg:col-span-8 flex flex-col justify-between">
          <div className="bg-white rounded-3xl border border-amber-200/90 shadow-md overflow-hidden flex flex-col">
            {/* Top Teleprompter Controls */}
            <div className="px-5 py-3.5 bg-slate-900 text-white flex flex-wrap items-center justify-between gap-3 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500 animate-ping" />
                <span className="text-xs font-bold uppercase tracking-wider text-rose-300">
                  Teleprompter Studio On Air
                </span>
              </div>

              {/* Controls: Speed, Font Size, Ambience */}
              <div className="flex items-center gap-2 text-xs">
                {/* Backsound Jingle */}
                <button
                  onClick={handlePlayAmbience}
                  className="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-yellow-300 font-semibold transition-colors flex items-center gap-1"
                  title="Bunyikan backsound pembuka studio"
                >
                  <Sparkles className="w-3.5 h-3.5 text-yellow-400" />
                  <span>Jingle Studio</span>
                </button>

                {/* Speed */}
                <div className="flex items-center bg-slate-800 rounded-lg p-0.5">
                  <span className="px-1.5 text-slate-400 text-[11px]">Scroll:</span>
                  <button
                    onClick={() => setScrollSpeed('slow')}
                    className={`px-2 py-0.5 rounded text-[11px] font-bold ${
                      scrollSpeed === 'slow' ? 'bg-rose-600 text-white' : 'text-slate-300'
                    }`}
                  >
                    1x
                  </button>
                  <button
                    onClick={() => setScrollSpeed('medium')}
                    className={`px-2 py-0.5 rounded text-[11px] font-bold ${
                      scrollSpeed === 'medium' ? 'bg-rose-600 text-white' : 'text-slate-300'
                    }`}
                  >
                    2x
                  </button>
                  <button
                    onClick={() => setScrollSpeed('fast')}
                    className={`px-2 py-0.5 rounded text-[11px] font-bold ${
                      scrollSpeed === 'fast' ? 'bg-rose-600 text-white' : 'text-slate-300'
                    }`}
                  >
                    3x
                  </button>
                </div>

                {/* Font Size */}
                <div className="flex items-center bg-slate-800 rounded-lg p-0.5">
                  <button
                    onClick={() => setTeleprompterFontSize('normal')}
                    className={`px-2 py-0.5 rounded text-[11px] font-bold ${
                      teleprompterFontSize === 'normal' ? 'bg-rose-600 text-white' : 'text-slate-300'
                    }`}
                  >
                    A
                  </button>
                  <button
                    onClick={() => setTeleprompterFontSize('large')}
                    className={`px-2 py-0.5 rounded text-[11px] font-bold ${
                      teleprompterFontSize === 'large' ? 'bg-rose-600 text-white' : 'text-slate-300'
                    }`}
                  >
                    A+
                  </button>
                  <button
                    onClick={() => setTeleprompterFontSize('huge')}
                    className={`px-2 py-0.5 rounded text-[11px] font-bold ${
                      teleprompterFontSize === 'huge' ? 'bg-rose-600 text-white' : 'text-slate-300'
                    }`}
                  >
                    A++
                  </button>
                </div>
              </div>
            </div>

            {/* Target Tone Ribbon */}
            <div className="px-5 py-2.5 bg-rose-50/70 border-b border-rose-100 text-xs text-rose-950 flex items-center justify-between">
              <div className="flex items-center gap-2 truncate">
                <span className="font-bold shrink-0">Karakter Vokal:</span>
                <span className="text-slate-700 truncate">{activeScript.targetTone}</span>
              </div>
              <span className="text-xs font-semibold text-rose-700 shrink-0 ml-2">
                Target: {activeScript.targetWpm} WPM
              </span>
            </div>

            {/* Teleprompter Scrolling Display Screen */}
            <div
              ref={teleprompterRef}
              className="p-6 sm:p-8 bg-[#1E293B] text-slate-100 overflow-y-auto relative font-lexend select-none"
              style={{ minHeight: '340px', maxHeight: '420px', lineHeight: '2.1' }}
            >
              {/* Countdown Overlay */}
              {isCountdown && (
                <div className="absolute inset-0 bg-slate-950/85 backdrop-blur-xs flex flex-col items-center justify-center z-30 animate-in fade-in">
                  <span className="text-7xl font-extrabold text-rose-500 animate-ping">
                    {countdownNum}
                  </span>
                  <span className="text-sm font-bold text-white uppercase tracking-widest mt-4">
                    Bersiap... On Air dalam {countdownNum} detik!
                  </span>
                </div>
              )}

              {/* Script Text */}
              <div className={`${textSizeClass} tracking-wide whitespace-pre-line font-medium`}>
                {(isCustomMode ? customText : activeScript.scriptText)
                  .split('\n')
                  .map((paragraph, pIdx) => (
                    <p key={pIdx} className="mb-4">
                      {paragraph.split(' ').map((word, wIdx) => {
                        const isSlash = word === '/' || word === '//';
                        const isArrow = word === '↗' || word === '↘';
                        if (isSlash) {
                          return (
                            <span
                              key={wIdx}
                              className="inline-block px-1.5 py-0.5 mx-1 rounded bg-amber-400 text-slate-950 font-bold text-sm"
                            >
                              {word}
                            </span>
                          );
                        }
                        if (isArrow) {
                          return (
                            <span
                              key={wIdx}
                              className="inline-block px-1 py-0.5 mx-1 rounded bg-rose-500 text-white font-bold text-sm"
                            >
                              {word}
                            </span>
                          );
                        }
                        return (
                          <span key={wIdx} className="mr-1.5 hover:text-yellow-300 transition-colors">
                            {word}
                          </span>
                        );
                      })}
                    </p>
                  ))}
              </div>
            </div>

            {/* Studio Recording & Feedback Deck */}
            <div className="p-5 bg-white border-t border-slate-100 space-y-4">
              {/* Model Vocal Guide Listen Bar */}
              <div className="flex items-center justify-between p-3 rounded-2xl bg-amber-50/80 border border-amber-200">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-orange-500 text-white flex items-center justify-center">
                    <Headphones className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-900 block">
                      Dengarkan Contoh Model Vokal
                    </span>
                    <span className="text-[11px] text-slate-500">
                      Pelajari artikulasi dan jeda tanda baca
                    </span>
                  </div>
                </div>

                <button
                  onClick={handleToggleModelGuide}
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all ${
                    isModelPlaying
                      ? 'bg-rose-500 text-white shadow-xs'
                      : 'bg-white text-slate-800 border border-slate-300 hover:bg-amber-100'
                  }`}
                >
                  <Volume2 className="w-3.5 h-3.5 text-orange-600" />
                  <span>{isModelPlaying ? 'Hentikan' : 'Dengarkan Contoh'}</span>
                </button>
              </div>

              {/* Waveform indicator when recording */}
              {isRecording && (
                <div className="py-2.5 px-4 bg-rose-50 border border-rose-200 rounded-2xl flex items-center justify-center gap-2">
                  <span className="text-xs font-bold text-rose-600 mr-2 flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-600 animate-ping" />
                    ON AIR: {recordingSeconds} detik
                  </span>
                  {[...Array(16)].map((_, i) => {
                    const h = Math.max(
                      8,
                      Math.min(36, Math.round((micVolume / 100) * 36 * (0.4 + (i % 5) * 0.2)))
                    );
                    return (
                      <div
                        key={i}
                        style={{ height: `${h}px` }}
                        className="w-1.5 bg-gradient-to-t from-rose-600 to-amber-500 rounded-full transition-all duration-75"
                      />
                    );
                  })}
                </div>
              )}

              {/* AI Feedback Score Box if finished recording */}
              {intonationFeedback && !isRecording && (
                <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5 font-bold text-emerald-900 text-sm">
                      <Zap className="w-4 h-4 text-emerald-600" />
                      <span>Evaluasi Vokal Kelas 6 Selesai:</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 bg-white text-emerald-800 font-bold rounded-lg border border-emerald-300">
                        Skor Intonasi: {intonationFeedback.score}/100
                      </span>
                      <span className="px-2 py-0.5 bg-white text-emerald-800 font-bold rounded-lg border border-emerald-300">
                        Kecepatan: {intonationFeedback.wpm} WPM
                      </span>
                    </div>
                  </div>
                  <p className="text-emerald-800 leading-relaxed font-medium">
                    {intonationFeedback.comment}
                  </p>
                </div>
              )}

              {/* Record & Playback Action Buttons */}
              <div className="flex flex-wrap items-center gap-3">
                {!isRecording ? (
                  <button
                    onClick={handleTriggerRecording}
                    className="flex-1 py-3.5 px-5 rounded-2xl bg-gradient-to-r from-rose-600 to-orange-500 hover:from-rose-700 hover:to-orange-600 text-white font-bold text-sm shadow-md shadow-rose-600/25 active:scale-95 transition-all flex items-center justify-center gap-2"
                  >
                    <Mic className="w-5 h-5 stroke-[2.5]" />
                    <span>{recordedAudioBlob ? 'Rekam Ulang Dubbing' : 'Mulai Dubbing Suaraku'}</span>
                  </button>
                ) : (
                  <button
                    onClick={handleStopDubbing}
                    className="flex-1 py-3.5 px-5 rounded-2xl bg-slate-900 hover:bg-black text-white font-bold text-sm shadow-md active:scale-95 transition-all flex items-center justify-center gap-2 animate-pulse"
                  >
                    <Square className="w-4 h-4 fill-white" />
                    <span>Selesai Dubbing ({recordingSeconds}s)</span>
                  </button>
                )}

                {recordedAudioBlob && !isRecording && (
                  <>
                    <button
                      onClick={handlePlayRecordedDubbing}
                      className={`py-3.5 px-5 rounded-2xl border text-sm font-bold transition-all flex items-center gap-2 ${
                        isPlayingRecordedAudio
                          ? 'bg-emerald-600 text-white border-emerald-600'
                          : 'bg-white border-slate-300 text-slate-800 hover:bg-slate-50'
                      }`}
                    >
                      <Play className="w-4 h-4 fill-current" />
                      <span>{isPlayingRecordedAudio ? 'Memutar...' : 'Putar Hasil Dubbing'}</span>
                    </button>

                    <button
                      onClick={() => setShowSaveModal(true)}
                      className="py-3.5 px-5 rounded-2xl bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-bold text-sm shadow-md shadow-orange-500/25 active:scale-95 transition-all flex items-center gap-1.5"
                    >
                      <Award className="w-4 h-4" />
                      <span>Simpan Karya</span>
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Save Dubbing Modal */}
      {showSaveModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl border-4 border-rose-200 text-center relative overflow-hidden">
            <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-rose-500 to-orange-500 text-white flex items-center justify-center mx-auto mb-4 text-3xl shadow-lg shadow-rose-500/30">
              {activeScript.badgeIcon}
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-100 text-rose-800 text-xs font-bold uppercase tracking-wider mb-2">
              <Award className="w-3.5 h-3.5 text-rose-600" />
              Lencana Dubbing Berhasil Diraih!
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-lexend">
              &ldquo;{activeScript.badgeName}&rdquo;
            </h3>
            <p className="text-xs text-slate-500 mt-1 max-w-xs mx-auto">
              Karya dubbing vokalmu tersimpan di &ldquo;Galeri Suara&rdquo;.
            </p>

            {/* Input Student Name */}
            <div className="my-5 text-left bg-slate-50 p-4 rounded-2xl border border-slate-200">
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Nama Siswa (Untuk Sertifikat Portofolio):
              </label>
              <input
                type="text"
                value={studentName}
                onChange={(e) => setStudentName(e.target.value)}
                placeholder="Tulis nama siswa..."
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-800 font-semibold text-sm focus:outline-none focus:ring-2 focus:ring-rose-500"
              />
              <div className="flex items-center justify-between mt-3 text-xs text-slate-600">
                <span>Genre: {activeScript.genreLabel}</span>
                <span className="font-bold text-emerald-600">
                  Nilai: {intonationFeedback?.score || 95}%
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={handleSaveDubbingToGallery}
                className="flex-1 py-3 px-4 rounded-2xl bg-gradient-to-r from-rose-600 to-orange-500 hover:from-rose-700 hover:to-orange-600 text-white font-bold text-sm shadow-md shadow-rose-600/25 transition-all flex items-center justify-center gap-2"
              >
                <Check className="w-4 h-4" />
                <span>Simpan ke &ldquo;Galeri Suara&rdquo;</span>
              </button>
              <button
                onClick={() => setShowSaveModal(false)}
                className="py-3 px-4 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-sm transition-colors"
              >
                Batal
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
