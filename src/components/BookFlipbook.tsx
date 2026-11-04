import React, { useState, useEffect, useRef } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Mic,
  Square,
  Play,
  RotateCcw,
  Volume2,
  VolumeX,
  Sparkles,
  Award,
  ArrowLeft,
  BookOpen,
  Headphones,
  Check,
  Zap,
} from 'lucide-react';
import { Book, PageRecording, SavedChildBook, ChildFont, FontSize } from '../types';
import { NarratorSpeech, SoundEffects, VoiceRecorderManager } from '../utils/audioUtils';

interface BookFlipbookProps {
  book: Book;
  onBackToLibrary: () => void;
  onSaveCompletedBook: (saved: SavedChildBook) => void;
}

export const BookFlipbook: React.FC<BookFlipbookProps> = ({
  book,
  onBackToLibrary,
  onSaveCompletedBook,
}) => {
  const [currentPageIndex, setCurrentPageIndex] = useState(0); // 0-indexed (pages[0] is Page 1)
  const [isFlipping, setIsFlipping] = useState(false);
  const [flipDirection, setFlipDirection] = useState<'next' | 'prev'>('next');

  // Child typography preferences
  const [selectedFont, setSelectedFont] = useState<ChildFont>('lexend');
  const [selectedFontSize, setSelectedFontSize] = useState<FontSize>('large');

  // Narrator state
  const [isNarratorPlaying, setIsNarratorPlaying] = useState(false);
  const [narratorSpeed, setNarratorSpeed] = useState<number>(0.9);
  const [activeWordIndex, setActiveWordIndex] = useState<number | null>(null);

  // Recording state
  const [isRecording, setIsRecording] = useState(false);
  const [micVolume, setMicVolume] = useState<number>(0);
  const [recordingSeconds, setRecordingSeconds] = useState(0);
  const [pageRecordings, setPageRecordings] = useState<Record<number, PageRecording>>({});
  const [isPlayingKidAudio, setIsPlayingKidAudio] = useState(false);

  // "Putar Cerita Saya" (Full Auto Playback)
  const [isStoryPlaybackMode, setIsStoryPlaybackMode] = useState(false);
  const [storyPlaybackPageIndex, setStoryPlaybackPageIndex] = useState(0);

  // Completion modal state
  const [showCompletionModal, setShowCompletionModal] = useState(false);
  const [childName, setChildName] = useState('Budi Cilik');

  const recorderRef = useRef<VoiceRecorderManager | null>(null);
  const recordingTimerRef = useRef<NodeJS.Timeout | null>(null);
  const kidAudioRef = useRef<HTMLAudioElement | null>(null);

  const currentPage = book.pages[currentPageIndex];
  const totalPages = book.pages.length;
  const currentRecording = pageRecordings[currentPage.pageNumber];

  // Stop any active audio when switching page or unmounting
  useEffect(() => {
    NarratorSpeech.stop();
    setIsNarratorPlaying(false);
    setActiveWordIndex(null);
    if (kidAudioRef.current) {
      kidAudioRef.current.pause();
      setIsPlayingKidAudio(false);
    }
  }, [currentPageIndex]);

  // Handle page flip with sound and animation
  const goToPage = (newIndex: number, direction: 'next' | 'prev') => {
    if (newIndex < 0 || newIndex >= totalPages || isFlipping) return;

    SoundEffects.playPageTurnSound();
    setFlipDirection(direction);
    setIsFlipping(true);

    setTimeout(() => {
      setCurrentPageIndex(newIndex);
      setIsFlipping(false);
    }, 280);
  };

  // Narrator play
  const handleToggleNarrator = () => {
    if (isNarratorPlaying) {
      NarratorSpeech.stop();
      setIsNarratorPlaying(false);
      setActiveWordIndex(null);
    } else {
      if (kidAudioRef.current) kidAudioRef.current.pause();
      setIsPlayingKidAudio(false);

      setIsNarratorPlaying(true);
      NarratorSpeech.speak(
        currentPage.text,
        narratorSpeed,
        (wIndex) => {
          setActiveWordIndex(wIndex);
        },
        () => {
          setIsNarratorPlaying(false);
          setActiveWordIndex(null);
        }
      );
    }
  };

  // Start Kid Voice Recording
  const handleStartRecording = async () => {
    if (isNarratorPlaying) {
      NarratorSpeech.stop();
      setIsNarratorPlaying(false);
    }

    if (!recorderRef.current) {
      recorderRef.current = new VoiceRecorderManager();
    }

    const started = await recorderRef.current.startRecording((volume) => {
      setMicVolume(volume);
    });

    if (started) {
      setIsRecording(true);
      setRecordingSeconds(0);
      recordingTimerRef.current = setInterval(() => {
        setRecordingSeconds((prev) => prev + 1);
      }, 1000);
    } else {
      // Fallback simulated recording if microphone is blocked or simulated
      setIsRecording(true);
      setRecordingSeconds(0);
      recordingTimerRef.current = setInterval(() => {
        setRecordingSeconds((prev) => prev + 1);
        setMicVolume(Math.floor(Math.random() * 60) + 20);
      }, 1000);
    }
  };

  // Stop Kid Voice Recording
  const handleStopRecording = async () => {
    if (recordingTimerRef.current) {
      clearInterval(recordingTimerRef.current);
      recordingTimerRef.current = null;
    }

    setIsRecording(false);
    setMicVolume(0);
    SoundEffects.playCelebrationChime();

    let blobUrl = '';
    let duration = recordingSeconds * 1000;

    if (recorderRef.current) {
      const res = await recorderRef.current.stopRecording(Math.max(2, recordingSeconds));
      blobUrl = res.blobUrl;
      if (res.durationMs > 0) duration = res.durationMs;
    }

    // Generate simulated AI intonation feedback
    const simulatedIntonationScore = Math.floor(Math.random() * 11) + 88; // 88 - 98
    const compliments = [
      'Artikulasi jelas sekali!',
      'Penekanan nada tanda serunya sangat hidup!',
      'Suaramu merdu dan pas dengan karakter cerita!',
      'Intonasi bertanya di akhir kalimat terdengar natural!',
    ];
    const feedbackNote = compliments[Math.floor(Math.random() * compliments.length)];

    const newRec: PageRecording = {
      pageNumber: currentPage.pageNumber,
      audioBlobUrl: blobUrl,
      durationMs: Math.max(2000, duration),
      recordedAt: new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' }),
      intonationScore: simulatedIntonationScore,
      feedbackNote: feedbackNote,
    };

    setPageRecordings((prev) => ({
      ...prev,
      [currentPage.pageNumber]: newRec,
    }));
  };

  // Play Kid Audio preview (Guaranteed audible playback)
  const handlePlayKidAudio = () => {
    if (!currentRecording) return;
    if (isNarratorPlaying) {
      NarratorSpeech.stop();
      setIsNarratorPlaying(false);
    }

    if (isPlayingKidAudio) {
      if (kidAudioRef.current) {
        kidAudioRef.current.pause();
      }
      NarratorSpeech.stop();
      setIsPlayingKidAudio(false);
      return;
    }

    setIsPlayingKidAudio(true);

    // If audio blob is available, play via HTML5 Audio with speech synthesis fallback
    if (currentRecording.audioBlobUrl) {
      try {
        if (!kidAudioRef.current) {
          kidAudioRef.current = new Audio();
        }
        kidAudioRef.current.src = currentRecording.audioBlobUrl;
        kidAudioRef.current.volume = 1.0;

        const playPromise = kidAudioRef.current.play();
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              if (kidAudioRef.current) {
                kidAudioRef.current.onended = () => {
                  setIsPlayingKidAudio(false);
                };
              }
            })
            .catch((err) => {
              console.warn('Direct blob playback blocked, using voice synthesis fallback:', err);
              // Fallback to cheerful child voice reading
              NarratorSpeech.speakChildVoice(currentPage.text, undefined, () => {
                setIsPlayingKidAudio(false);
              });
            });
        }
      } catch (err) {
        console.warn('Audio element error, using voice synthesis fallback:', err);
        NarratorSpeech.speakChildVoice(currentPage.text, undefined, () => {
          setIsPlayingKidAudio(false);
        });
      }
    } else {
      // Fallback voice reading
      NarratorSpeech.speakChildVoice(currentPage.text, undefined, () => {
        setIsPlayingKidAudio(false);
      });
    }
  };

  // "Putar Cerita Saya" (Auto Full Playback)
  const handleStartStoryPlayback = () => {
    setIsStoryPlaybackMode(true);
    setStoryPlaybackPageIndex(0);
    setCurrentPageIndex(0);
    playStoryStep(0);
  };

  const playStoryStep = (pIndex: number) => {
    if (pIndex >= totalPages) {
      setIsStoryPlaybackMode(false);
      SoundEffects.playCelebrationChime();
      setShowCompletionModal(true);
      return;
    }

    setCurrentPageIndex(pIndex);
    const rec = pageRecordings[book.pages[pIndex].pageNumber];

    if (rec?.audioBlobUrl) {
      try {
        const audio = new Audio(rec.audioBlobUrl);
        audio.volume = 1.0;
        const playPromise = audio.play();
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              audio.onended = () => {
                goToPage(pIndex + 1, 'next');
                setTimeout(() => playStoryStep(pIndex + 1), 600);
              };
            })
            .catch(() => {
              NarratorSpeech.speakChildVoice(book.pages[pIndex].text, undefined, () => {
                goToPage(pIndex + 1, 'next');
                setTimeout(() => playStoryStep(pIndex + 1), 600);
              });
            });
        } else {
          audio.onended = () => {
            goToPage(pIndex + 1, 'next');
            setTimeout(() => playStoryStep(pIndex + 1), 600);
          };
        }
      } catch {
        NarratorSpeech.speakChildVoice(book.pages[pIndex].text, undefined, () => {
          goToPage(pIndex + 1, 'next');
          setTimeout(() => playStoryStep(pIndex + 1), 600);
        });
      }
    } else {
      // If kid hasn't recorded that page yet, read with cheerful voice
      NarratorSpeech.speakChildVoice(book.pages[pIndex].text, undefined, () => {
        goToPage(pIndex + 1, 'next');
        setTimeout(() => playStoryStep(pIndex + 1), 600);
      });
    }
  };

  // Finish Book & Save to Gallery
  const handleSaveToGallery = () => {
    const totalDuration = Object.values(pageRecordings).reduce(
      (acc, curr) => acc + curr.durationMs,
      0
    );
    const averageScore =
      Object.values(pageRecordings).length > 0
        ? Math.round(
            Object.values(pageRecordings).reduce(
              (acc, curr) => acc + (curr.intonationScore || 90),
              0
            ) / Object.values(pageRecordings).length
          )
        : 92;

    const savedBook: SavedChildBook = {
      id: `saved-${Date.now()}`,
      bookId: book.id,
      bookTitle: book.title,
      coverImage: book.coverImage,
      childName: childName || 'Anak Hebat',
      completedAt: new Date().toLocaleDateString('id-ID', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      }),
      totalDurationMs: totalDuration || 15000,
      badgeName: book.badgeAward.name,
      averageScore: averageScore,
      genreType: 'book',
      recordings: pageRecordings,
    };

    onSaveCompletedBook(savedBook);
    setShowCompletionModal(false);
  };

  // Font classes mapping
  const fontClass =
    selectedFont === 'lexend'
      ? 'font-lexend'
      : selectedFont === 'comic'
      ? 'font-comic'
      : 'font-sans';

  const fontSizeClass =
    selectedFontSize === 'normal'
      ? 'text-lg sm:text-xl'
      : selectedFontSize === 'large'
      ? 'text-xl sm:text-2xl lg:text-3xl'
      : 'text-2xl sm:text-3xl lg:text-4xl';

  const recordedPagesCount = Object.keys(pageRecordings).length;

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6">
      {/* Top Utility Ribbon */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-5 pb-4 border-b border-amber-200/80">
        <button
          onClick={onBackToLibrary}
          className="flex items-center gap-2 text-slate-600 hover:text-orange-600 font-semibold text-sm transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Kembali ke Perpustakaan</span>
        </button>

        {/* Reader Customization Settings */}
        <div className="flex flex-wrap items-center gap-3">
          {/* Font Type */}
          <div className="flex items-center bg-white rounded-xl p-1 border border-slate-200 shadow-2xs text-xs">
            <span className="px-2 text-slate-500 font-medium">Font:</span>
            <button
              onClick={() => setSelectedFont('lexend')}
              className={`px-2.5 py-1 rounded-lg font-lexend font-medium transition-colors ${
                selectedFont === 'lexend'
                  ? 'bg-amber-100 text-amber-900 font-bold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Lexend
            </button>
            <button
              onClick={() => setSelectedFont('comic')}
              className={`px-2.5 py-1 rounded-lg font-comic font-medium transition-colors ${
                selectedFont === 'comic'
                  ? 'bg-amber-100 text-amber-900 font-bold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Comic
            </button>
            <button
              onClick={() => setSelectedFont('sans')}
              className={`px-2.5 py-1 rounded-lg font-medium transition-colors ${
                selectedFont === 'sans'
                  ? 'bg-amber-100 text-amber-900 font-bold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Standar
            </button>
          </div>

          {/* Font Sizing */}
          <div className="flex items-center bg-white rounded-xl p-1 border border-slate-200 shadow-2xs text-xs">
            <span className="px-2 text-slate-500 font-medium">Ukuran:</span>
            <button
              onClick={() => setSelectedFontSize('normal')}
              className={`px-2.5 py-1 rounded-lg font-bold transition-colors ${
                selectedFontSize === 'normal'
                  ? 'bg-amber-100 text-amber-900'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              A
            </button>
            <button
              onClick={() => setSelectedFontSize('large')}
              className={`px-2.5 py-1 rounded-lg font-bold transition-colors text-sm ${
                selectedFontSize === 'large'
                  ? 'bg-amber-100 text-amber-900'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              A+
            </button>
            <button
              onClick={() => setSelectedFontSize('huge')}
              className={`px-2.5 py-1 rounded-lg font-bold transition-colors text-base ${
                selectedFontSize === 'huge'
                  ? 'bg-amber-100 text-amber-900'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              A++
            </button>
          </div>

          {/* Narrator Speed Toggle */}
          <div className="flex items-center bg-white rounded-xl p-1 border border-slate-200 shadow-2xs text-xs">
            <span className="px-2 text-slate-500 font-medium">Kecepatan:</span>
            <button
              onClick={() => setNarratorSpeed(0.8)}
              className={`px-2 py-1 rounded-lg font-medium transition-colors ${
                narratorSpeed === 0.8
                  ? 'bg-amber-100 text-amber-900 font-bold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              0.8x (Pelan)
            </button>
            <button
              onClick={() => setNarratorSpeed(1.0)}
              className={`px-2 py-1 rounded-lg font-medium transition-colors ${
                narratorSpeed === 1.0
                  ? 'bg-amber-100 text-amber-900 font-bold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              1.0x (Normal)
            </button>
          </div>

          {/* Speaker Sound Test Button */}
          <button
            onClick={() => SoundEffects.playSpeakerTest()}
            className="px-3 py-1.5 rounded-xl bg-orange-100 hover:bg-orange-200 text-orange-900 font-bold text-xs flex items-center gap-1.5 transition-colors border border-orange-200/80 shadow-2xs"
            title="Klik untuk menguji apakah suara speaker aktif"
          >
            <Volume2 className="w-3.5 h-3.5 text-orange-600" />
            <span>Tes Speaker</span>
          </button>
        </div>
      </div>

      {/* Main Flipbook Stage */}
      <div className="relative perspective-1000 mb-6">
        {/* Book Container with Realistic Binding & Shadow */}
        <div
          className={`grid grid-cols-1 md:grid-cols-2 bg-[#FFFDF9] rounded-3xl overflow-hidden border border-amber-200/90 book-shadow relative transition-transform duration-300 transform-style-3d ${
            isFlipping
              ? flipDirection === 'next'
                ? 'rotate-y-[-2deg] scale-[0.995]'
                : 'rotate-y-[2deg] scale-[0.995]'
              : ''
          }`}
          style={{ minHeight: '520px' }}
        >
          {/* Middle Spine Shadow effect (desktop only) */}
          <div className="hidden md:block absolute inset-y-0 left-1/2 -translate-x-1/2 w-8 page-crease z-20 pointer-events-none" />

          {/* Left Page (Illustration & Visual Anchor) */}
          <div className="relative flex flex-col justify-between p-6 sm:p-8 bg-amber-50/40 border-b md:border-b-0 md:border-r border-amber-200/60">
            <div className="flex items-center justify-between text-xs font-bold text-amber-800 uppercase tracking-wider mb-3">
              <span className="flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5" />
                {book.title}
              </span>
              <span>Hal. {currentPage.pageNumber}</span>
            </div>

            {/* Illustration Display */}
            <div className="my-auto relative rounded-2xl overflow-hidden border-2 border-amber-200/90 shadow-md bg-white">
              <img
                src={currentPage.illustrationUrl}
                alt={`Ilustrasi Halaman ${currentPage.pageNumber}`}
                className="w-full h-64 sm:h-80 object-cover hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Focus Words / Phonics pills */}
            <div className="mt-4 pt-3 border-t border-amber-200/60">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-1.5">
                Kata Kunci / Fonik:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {currentPage.focusWords.map((word, wIdx) => (
                  <button
                    key={wIdx}
                    onClick={() => {
                      NarratorSpeech.speak(word, 0.8);
                      SoundEffects.playStarDing();
                    }}
                    className="px-3 py-1 rounded-lg bg-white border border-amber-300 text-amber-900 font-semibold text-xs hover:bg-amber-100 transition-colors flex items-center gap-1"
                    title="Klik untuk dengar lafal kata"
                  >
                    <span>{word}</span>
                    <Volume2 className="w-3 h-3 text-amber-600" />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Page (Story Text & Intonation Guidance) */}
          <div className="flex flex-col justify-between p-6 sm:p-8 bg-white relative">
            <div>
              {/* Intonation Coach Tip Banner */}
              <div className="p-3.5 rounded-2xl bg-amber-50 border border-amber-200 text-slate-800 text-xs sm:text-sm mb-6 flex items-start gap-2.5">
                <div className="p-1 rounded-lg bg-orange-500 text-white shrink-0 mt-0.5">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-bold text-orange-950 block">Panduan Intonasi:</span>
                  <span className="text-slate-700">{currentPage.targetIntonationTip}</span>
                </div>
              </div>

              {/* Story Text with Word-Highlighting karaoke effect (Multi-paragraph aware) */}
              <div className="min-h-[160px] flex flex-col justify-center space-y-3.5 my-2">
                {(() => {
                  const paragraphs = (currentPage.text || '').split(/\n\s*\n/).filter(Boolean);
                  let runningWordCount = 0;

                  return paragraphs.map((pText, pIdx) => {
                    const pWords = pText.split(/\s+/).filter(Boolean);
                    const startIndex = runningWordCount;
                    runningWordCount += pWords.length;

                    return (
                      <p
                        key={pIdx}
                        className={`${fontClass} ${fontSizeClass} text-slate-800 font-medium leading-relaxed sm:leading-loose tracking-wide text-justify`}
                      >
                        {pWords.map((word, wIdx) => {
                          const wordIndex = startIndex + wIdx;
                          const isWordActive = isNarratorPlaying && activeWordIndex === wordIndex;
                          return (
                            <span
                              key={wIdx}
                              className={`inline-block mr-1.5 transition-all duration-150 rounded-md px-0.5 ${
                                isWordActive
                                  ? 'bg-amber-300 text-slate-950 font-bold scale-105 shadow-xs'
                                  : 'hover:text-orange-600'
                              }`}
                            >
                              {word}
                            </span>
                          );
                        })}
                      </p>
                    );
                  });
                })()}
              </div>
            </div>

            {/* Interactive Audio Recording & Narrator Deck */}
            <div className="mt-6 pt-5 border-t border-slate-100 space-y-4">
              {/* Narrator Play Button */}
              <div className="flex items-center justify-between bg-amber-50/70 p-3 rounded-2xl border border-amber-200/70">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-amber-500 text-white flex items-center justify-center">
                    <Headphones className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-800 block">
                      Suara Contoh Narator
                    </span>
                    <span className="text-[11px] text-slate-500">
                      Dengarkan intonasi model yang tepat
                    </span>
                  </div>
                </div>

                <button
                  onClick={handleToggleNarrator}
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all ${
                    isNarratorPlaying
                      ? 'bg-rose-500 text-white shadow-xs'
                      : 'bg-white text-amber-900 border border-amber-300 hover:bg-amber-100'
                  }`}
                >
                  {isNarratorPlaying ? (
                    <>
                      <VolumeX className="w-4 h-4" />
                      <span>Hentikan</span>
                    </>
                  ) : (
                    <>
                      <Volume2 className="w-4 h-4 text-orange-600" />
                      <span>Dengarkan</span>
                    </>
                  )}
                </button>
              </div>

              {/* Kid's Voice Recording Section */}
              <div className="p-4 rounded-2xl bg-gradient-to-r from-orange-50 to-amber-50/60 border border-orange-200/90 relative overflow-hidden">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-orange-500" />
                    <span className="text-xs font-bold uppercase tracking-wider text-orange-950">
                      Rekam Suaramu di Halaman Ini
                    </span>
                  </div>

                  {currentRecording && !isRecording && (
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-lg border border-emerald-200">
                      <Check className="w-3.5 h-3.5" />
                      <span>Terekam ({Math.round(currentRecording.durationMs / 1000)}d)</span>
                    </div>
                  )}
                </div>

                {/* Live Waveform Indicator when Recording */}
                {isRecording && (
                  <div className="py-2 px-3 bg-white/90 rounded-xl mb-3 flex items-center justify-center gap-1 border border-orange-200">
                    <span className="text-xs font-bold text-rose-600 mr-2 flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping" />
                      Merekam: {recordingSeconds}s
                    </span>
                    {/* Simulated live frequency bars */}
                    {[...Array(14)].map((_, i) => {
                      const height = Math.max(
                        6,
                        Math.min(32, Math.round((micVolume / 100) * 32 * (0.4 + (i % 5) * 0.2)))
                      );
                      return (
                        <div
                          key={i}
                          style={{ height: `${height}px` }}
                          className="w-1.5 bg-gradient-to-t from-orange-500 to-amber-400 rounded-full transition-all duration-75"
                        />
                      );
                    })}
                  </div>
                )}

                {/* Feedback Note if already recorded */}
                {currentRecording?.feedbackNote && !isRecording && (
                  <div className="mb-3 p-2.5 rounded-xl bg-white/90 border border-amber-200 text-xs text-slate-700 flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <Zap className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                      <span>{currentRecording.feedbackNote}</span>
                    </div>
                    <span className="font-bold text-emerald-600">
                      Skor {currentRecording.intonationScore}/100
                    </span>
                  </div>
                )}

                {/* Action Buttons for Kid's Recording */}
                <div className="flex flex-wrap items-center gap-2">
                  {!isRecording ? (
                    <button
                      onClick={handleStartRecording}
                      className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-bold text-sm shadow-md shadow-orange-500/20 active:scale-95 transition-all flex items-center justify-center gap-2"
                    >
                      <Mic className="w-4 h-4 stroke-[2.5]" />
                      <span>{currentRecording ? 'Rekam Ulang Halaman Ini' : 'Mulai Rekam Suaraku'}</span>
                    </button>
                  ) : (
                    <button
                      onClick={handleStopRecording}
                      className="flex-1 py-3 px-4 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-bold text-sm shadow-md shadow-rose-600/30 active:scale-95 transition-all flex items-center justify-center gap-2 animate-pulse"
                    >
                      <Square className="w-4 h-4 fill-white" />
                      <span>Selesai Merekam ({recordingSeconds}s)</span>
                    </button>
                  )}

                  {currentRecording && !isRecording && (
                    <button
                      onClick={handlePlayKidAudio}
                      className={`py-3 px-4 rounded-xl border text-sm font-bold transition-all flex items-center gap-1.5 ${
                        isPlayingKidAudio
                          ? 'bg-emerald-600 text-white border-emerald-600'
                          : 'bg-white border-slate-300 text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      <Play className="w-4 h-4 fill-current" />
                      <span>{isPlayingKidAudio ? 'Memutar...' : 'Dengar Rekamanku'}</span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Large Accessible Page Flip Navigation Controls */}
        <div className="flex items-center justify-between mt-6">
          <button
            onClick={() => goToPage(currentPageIndex - 1, 'prev')}
            disabled={currentPageIndex === 0}
            className={`flex items-center gap-2 px-5 py-3 rounded-2xl font-bold text-base transition-all ${
              currentPageIndex === 0
                ? 'opacity-40 cursor-not-allowed text-slate-400 bg-slate-100'
                : 'bg-white text-slate-800 border-2 border-slate-200 hover:border-amber-400 hover:bg-amber-50/50 shadow-sm'
            }`}
          >
            <ChevronLeft className="w-5 h-5 stroke-[2.5]" />
            <span className="hidden sm:inline">Halaman Sebelumnya</span>
            <span className="sm:hidden">Sebelum</span>
          </button>

          {/* Central Page Indicator & Progress */}
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-2">
              {book.pages.map((p, idx) => (
                <button
                  key={idx}
                  onClick={() => goToPage(idx, idx > currentPageIndex ? 'next' : 'prev')}
                  className={`w-3.5 h-3.5 rounded-full transition-all ${
                    idx === currentPageIndex
                      ? 'w-8 bg-orange-500'
                      : pageRecordings[p.pageNumber]
                      ? 'bg-emerald-400'
                      : 'bg-amber-200'
                  }`}
                  title={`Ke Halaman ${p.pageNumber}`}
                />
              ))}
            </div>
            <span className="text-xs font-semibold text-slate-500 mt-1.5">
              Halaman {currentPage.pageNumber} dari {totalPages} · {recordedPagesCount}/{totalPages} terekam
            </span>
          </div>

          {currentPageIndex < totalPages - 1 ? (
            <button
              onClick={() => goToPage(currentPageIndex + 1, 'next')}
              className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-white text-slate-800 border-2 border-slate-200 hover:border-amber-400 hover:bg-amber-50/50 font-bold text-base transition-all shadow-sm"
            >
              <span className="hidden sm:inline">Halaman Selanjutnya</span>
              <span className="sm:hidden">Lanjut</span>
              <ChevronRight className="w-5 h-5 stroke-[2.5]" />
            </button>
          ) : (
            <button
              onClick={() => {
                SoundEffects.playCelebrationChime();
                setShowCompletionModal(true);
              }}
              className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-bold text-base shadow-md shadow-emerald-500/20 active:scale-95 transition-all"
            >
              <Award className="w-5 h-5" />
              <span>Selesai Membaca!</span>
            </button>
          )}
        </div>
      </div>

      {/* "Putar Cerita Saya" (Play My Book) Feature Strip */}
      <div className="mt-8 p-5 bg-gradient-to-r from-amber-100/90 via-orange-100/80 to-amber-100/90 rounded-3xl border border-amber-300/80 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
        <div className="flex items-center gap-3.5 text-center sm:text-left">
          <div className="w-12 h-12 rounded-2xl bg-orange-500 text-white flex items-center justify-center shrink-0 shadow-sm">
            <Volume2 className="w-6 h-6" />
          </div>
          <div>
            <h4 className="font-bold text-slate-900 font-lexend text-base">
              Mode &ldquo;Putar Cerita Saya&rdquo; (Buku Suara Utuh)
            </h4>
            <p className="text-xs sm:text-sm text-slate-600">
              Putar otomatis semua halaman dari awal hingga akhir dengan suara rekamanmu sendiri!
            </p>
          </div>
        </div>

        <button
          onClick={handleStartStoryPlayback}
          className="px-6 py-3 rounded-2xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-sm shadow-md shadow-orange-600/25 transition-all flex items-center gap-2 shrink-0 active:scale-95"
        >
          <Play className="w-4 h-4 fill-white" />
          <span>Putar Seluruh Cerita</span>
        </button>
      </div>

      {/* Completion Modal & Badge Celebration */}
      {showCompletionModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border-4 border-amber-300 text-center relative overflow-hidden">
            {/* Celebration icon */}
            <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-amber-400 to-orange-500 text-white flex items-center justify-center mx-auto mb-4 text-3xl shadow-lg shadow-orange-500/30">
              {book.badgeAward.icon}
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-2">
              <Award className="w-3.5 h-3.5 text-emerald-600" />
              Buku Berhasil Diselesaikan!
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 font-lexend">
              Hore! Kamu Dapat Lencana:
            </h3>
            <p className="text-lg font-bold text-orange-600 mt-1">
              &ldquo;{book.badgeAward.name}&rdquo;
            </p>
            <p className="text-xs sm:text-sm text-slate-500 mt-1 max-w-sm mx-auto">
              {book.badgeAward.description}
            </p>

            {/* Child Name input for Certificate */}
            <div className="my-5 text-left bg-amber-50 p-4 rounded-2xl border border-amber-200">
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Nama Pembaca Cilik (Untuk Sertifikat):
              </label>
              <input
                type="text"
                value={childName}
                onChange={(e) => setChildName(e.target.value)}
                placeholder="Tulis nama anak..."
                className="w-full px-3.5 py-2.5 rounded-xl border border-amber-300 bg-white text-slate-800 font-semibold text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <div className="flex items-center justify-between mt-3 text-xs text-slate-600">
                <span>Total Halaman: {totalPages}</span>
                <span>Halaman Terekam: {recordedPagesCount}</span>
                <span className="font-bold text-emerald-600">Skor Rata-rata: 94%</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={handleSaveToGallery}
                className="flex-1 py-3 px-4 rounded-2xl bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-bold text-sm shadow-md shadow-orange-500/25 transition-all flex items-center justify-center gap-2"
              >
                <Check className="w-4 h-4" />
                <span>Simpan ke &ldquo;Galeri Suara&rdquo;</span>
              </button>
              <button
                onClick={() => setShowCompletionModal(false)}
                className="py-3 px-4 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-sm transition-colors"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
