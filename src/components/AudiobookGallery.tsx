import React, { useState } from 'react';
import { SavedChildBook } from '../types';
import {
  Award,
  Calendar,
  User,
  Trash2,
  BookOpen,
  Volume2,
  Sparkles,
  Folder,
  Radio,
  Tv,
  Megaphone,
  BookMarked,
  Layers,
  ArrowRight,
  Headphones,
  CheckCircle2,
} from 'lucide-react';
import { SoundEffects, NarratorSpeech } from '../utils/audioUtils';

interface AudiobookGalleryProps {
  savedBooks: SavedChildBook[];
  onOpenBookToRead: (bookId: string) => void;
  onOpenDubbing?: () => void;
  onOpenLibrary?: () => void;
  onDeleteSavedBook: (id: string) => void;
}

export const AudiobookGallery: React.FC<AudiobookGalleryProps> = ({
  savedBooks,
  onOpenBookToRead,
  onOpenDubbing,
  onOpenLibrary,
  onDeleteSavedBook,
}) => {
  const [activeFolder, setActiveFolder] = useState<'all' | 'books' | 'dubbing'>('all');
  const [playingBookId, setPlayingBookId] = useState<string | null>(null);
  const [playingPageIndex, setPlayingPageIndex] = useState<number>(1);
  const [activeCertificate, setActiveCertificate] = useState<SavedChildBook | null>(null);

  // Filter items by folder
  const bookRecordings = savedBooks.filter(
    (item) => item.genreType === 'book' || !item.genreType
  );
  const dubbingRecordings = savedBooks.filter((item) => item.genreType === 'dubbing');

  const displayedItems =
    activeFolder === 'books'
      ? bookRecordings
      : activeFolder === 'dubbing'
      ? dubbingRecordings
      : savedBooks;

  const handlePlayRecording = (saved: SavedChildBook, pageNum: number) => {
    const rec = saved.recordings[pageNum];
    setPlayingBookId(saved.id);
    setPlayingPageIndex(pageNum);

    if (rec?.audioBlobUrl) {
      try {
        const audio = new Audio(rec.audioBlobUrl);
        audio.volume = 1.0;
        const playPromise = audio.play();
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              audio.onended = () => {
                setPlayingBookId(null);
              };
            })
            .catch(() => {
              // Fallback to cheerful child voice synthesis reading the story
              NarratorSpeech.speakChildVoice(
                `Halaman ${pageNum}. Cerita ${saved.bookTitle}. Suara rekaman anak hebat!`,
                undefined,
                () => setPlayingBookId(null)
              );
            });
        }
      } catch {
        NarratorSpeech.speakChildVoice(
          `Halaman ${pageNum}. Cerita ${saved.bookTitle}. Suara rekaman anak hebat!`,
          undefined,
          () => setPlayingBookId(null)
        );
      }
    } else {
      SoundEffects.playStarDing();
      NarratorSpeech.speakChildVoice(
        `Halaman ${pageNum}. Cerita ${saved.bookTitle}. Suara rekaman anak hebat!`,
        undefined,
        () => setPlayingBookId(null)
      );
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-amber-200">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider mb-2">
            <Award className="w-4 h-4 text-orange-500" />
            Galeri Suara · Portofolio Rekaman Literasi
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-lexend">
            Galeri Suara
          </h2>
          <p className="text-sm text-slate-600 mt-1">
            Kumpulan seluruh rekaman suara anak yang tersimpan rapi dalam folder buku cerita dan studio dubbing.
          </p>
        </div>

        {/* Total Stats */}
        <div className="flex items-center gap-3">
          <div className="bg-white px-4 py-2.5 rounded-2xl border border-amber-200 shadow-2xs text-center">
            <span className="text-xs text-slate-500 block font-medium">Total Rekaman</span>
            <span className="text-xl font-extrabold text-orange-600 font-lexend">
              {savedBooks.length} Karya
            </span>
          </div>
        </div>
      </div>

      {/* 2 Interactive Folder Showcase Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
        {/* Folder 1: Rekaman Buku */}
        <button
          onClick={() => setActiveFolder('books')}
          className={`p-5 rounded-3xl border text-left transition-all relative overflow-hidden group ${
            activeFolder === 'books'
              ? 'bg-amber-500 text-white border-amber-600 shadow-md ring-2 ring-amber-400'
              : 'bg-white hover:bg-amber-50/60 border-amber-200 text-slate-800 shadow-xs'
          }`}
        >
          <div className="flex items-start justify-between">
            <div
              className={`w-12 h-12 rounded-2xl flex items-center justify-center text-xl shadow-xs ${
                activeFolder === 'books'
                  ? 'bg-white/20 text-white'
                  : 'bg-amber-100 text-amber-800'
              }`}
            >
              📖
            </div>
            <span
              className={`text-xs font-bold px-2.5 py-1 rounded-full ${
                activeFolder === 'books'
                  ? 'bg-white/25 text-white'
                  : 'bg-amber-100 text-amber-900'
              }`}
            >
              {bookRecordings.length} Rekaman
            </span>
          </div>

          <div className="mt-4">
            <span className="text-xs font-semibold uppercase tracking-wider block opacity-80">
              Folder 1
            </span>
            <h3
              className={`text-lg sm:text-xl font-bold font-lexend mt-0.5 ${
                activeFolder === 'books' ? 'text-white' : 'text-slate-900'
              }`}
            >
              Rekaman Buku
            </h3>
            <p
              className={`text-xs mt-1 leading-relaxed ${
                activeFolder === 'books' ? 'text-amber-100' : 'text-slate-500'
              }`}
            >
              Koleksi rekaman buku cerita interaktif bergambar dari Level 1 (Fonik), Level 2 (Kalimat), dan Level 3 (Cerita Panjang).
            </p>
          </div>

          <div
            className={`mt-4 pt-3 border-t text-xs font-bold flex items-center gap-1.5 ${
              activeFolder === 'books'
                ? 'border-white/20 text-white'
                : 'border-slate-100 text-amber-700'
            }`}
          >
            <span>{activeFolder === 'books' ? 'Sedang Dibuka' : 'Buka Folder Rekaman Buku'}</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </div>
        </button>

        {/* Folder 2: Rekaman Studio Dubbing */}
        <button
          onClick={() => setActiveFolder('dubbing')}
          className={`p-5 rounded-3xl border text-left transition-all relative overflow-hidden group ${
            activeFolder === 'dubbing'
              ? 'bg-rose-600 text-white border-rose-700 shadow-md ring-2 ring-rose-400'
              : 'bg-white hover:bg-rose-50/60 border-rose-200 text-slate-800 shadow-xs'
          }`}
        >
          <div className="flex items-start justify-between">
            <div
              className={`w-12 h-12 rounded-2xl flex items-center justify-center text-xl shadow-xs ${
                activeFolder === 'dubbing'
                  ? 'bg-white/20 text-white'
                  : 'bg-rose-100 text-rose-800'
              }`}
            >
              🎙️
            </div>
            <span
              className={`text-xs font-bold px-2.5 py-1 rounded-full ${
                activeFolder === 'dubbing'
                  ? 'bg-white/25 text-white'
                  : 'bg-rose-100 text-rose-900'
              }`}
            >
              {dubbingRecordings.length} Rekaman
            </span>
          </div>

          <div className="mt-4">
            <span className="text-xs font-semibold uppercase tracking-wider block opacity-80">
              Folder 2
            </span>
            <h3
              className={`text-lg sm:text-xl font-bold font-lexend mt-0.5 ${
                activeFolder === 'dubbing' ? 'text-white' : 'text-slate-900'
              }`}
            >
              Rekaman Studio Dubbing
            </h3>
            <p
              className={`text-xs mt-1 leading-relaxed ${
                activeFolder === 'dubbing' ? 'text-rose-100' : 'text-slate-500'
              }`}
            >
              Hasil latihan vokal, presenter berita TV, penyiar radio ceria, pidato persuasif di podium, dan deklamasi puisi nusantara.
            </p>
          </div>

          <div
            className={`mt-4 pt-3 border-t text-xs font-bold flex items-center gap-1.5 ${
              activeFolder === 'dubbing'
                ? 'border-white/20 text-white'
                : 'border-slate-100 text-rose-700'
            }`}
          >
            <span>
              {activeFolder === 'dubbing'
                ? 'Sedang Dibuka'
                : 'Buka Folder Rekaman Studio Dubbing'}
            </span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </div>
        </button>
      </div>

      {/* Segmented Filter Control */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
        <div className="flex items-center gap-1 p-1 bg-white rounded-2xl border border-amber-200 shadow-2xs text-xs font-bold w-fit">
          <button
            onClick={() => setActiveFolder('all')}
            className={`px-3.5 py-2 rounded-xl transition-all flex items-center gap-1.5 ${
              activeFolder === 'all'
                ? 'bg-slate-900 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Semua Folder ({savedBooks.length})</span>
          </button>

          <button
            onClick={() => setActiveFolder('books')}
            className={`px-3.5 py-2 rounded-xl transition-all flex items-center gap-1.5 ${
              activeFolder === 'books'
                ? 'bg-amber-500 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-amber-50'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5 text-amber-600" />
            <span>Folder: Rekaman Buku ({bookRecordings.length})</span>
          </button>

          <button
            onClick={() => setActiveFolder('dubbing')}
            className={`px-3.5 py-2 rounded-xl transition-all flex items-center gap-1.5 ${
              activeFolder === 'dubbing'
                ? 'bg-rose-600 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-rose-50'
            }`}
          >
            <Radio className="w-3.5 h-3.5 text-rose-600" />
            <span>Folder: Rekaman Studio Dubbing ({dubbingRecordings.length})</span>
          </button>
        </div>

        {/* Folder Breadcrumb */}
        <div className="text-xs text-slate-500 flex items-center gap-1.5">
          <span>Galeri Suara</span>
          <span>/</span>
          <strong className="text-slate-800">
            {activeFolder === 'all'
              ? 'Semua Folder'
              : activeFolder === 'books'
              ? '📖 Folder Rekaman Buku'
              : '🎙️ Folder Rekaman Studio Dubbing'}
          </strong>
        </div>
      </div>

      {/* Empty State per Folder */}
      {displayedItems.length === 0 ? (
        <div className="text-center py-16 px-4 bg-white rounded-3xl border-2 border-dashed border-amber-200 max-w-lg mx-auto">
          <div className="w-16 h-16 rounded-3xl bg-amber-100 text-amber-600 flex items-center justify-center mx-auto mb-4 text-3xl">
            {activeFolder === 'dubbing' ? '🎙️' : '📖'}
          </div>
          <h3 className="text-xl font-bold text-slate-900 font-lexend">
            {activeFolder === 'books'
              ? 'Folder Rekaman Buku Masih Kosong'
              : activeFolder === 'dubbing'
              ? 'Folder Rekaman Studio Dubbing Masih Kosong'
              : 'Belum Ada Rekaman Suara'}
          </h3>
          <p className="text-sm text-slate-500 mt-1 max-w-sm mx-auto">
            {activeFolder === 'books'
              ? 'Ayo pilih salah satu buku di Koleksi Buku, rekam suaramu di setiap halaman cerita, dan simpan karyamu di sini!'
              : activeFolder === 'dubbing'
              ? 'Ayo masuk ke Studio Dubbing untuk membaca berita TV, menyiar radio, pidato, atau deklamasi puisi!'
              : 'Mulai petualangan literasimu dengan membaca buku atau mencoba dubbing di studio!'}
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-3">
            {(activeFolder === 'books' || activeFolder === 'all') && (
              <button
                onClick={() => {
                  if (onOpenLibrary) onOpenLibrary();
                  else onOpenBookToRead('kucing-oren');
                }}
                className="px-5 py-2.5 rounded-2xl bg-amber-500 hover:bg-amber-600 text-white font-bold text-xs shadow-md transition-all flex items-center gap-2"
              >
                <BookOpen className="w-4 h-4" />
                <span>Buka Koleksi Buku</span>
              </button>
            )}

            {(activeFolder === 'dubbing' || activeFolder === 'all') && onOpenDubbing && (
              <button
                onClick={onOpenDubbing}
                className="px-5 py-2.5 rounded-2xl bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs shadow-md transition-all flex items-center gap-2"
              >
                <Radio className="w-4 h-4" />
                <span>Buka Studio Dubbing</span>
              </button>
            )}
          </div>
        </div>
      ) : (
        /* Grid of Recorded Items */
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {displayedItems.map((saved) => {
            const pagesRecorded = Object.keys(saved.recordings);
            const isDubbing = saved.genreType === 'dubbing';

            return (
              <div
                key={saved.id}
                className={`bg-white rounded-3xl border shadow-sm overflow-hidden flex flex-col justify-between hover:shadow-md transition-shadow ${
                  isDubbing ? 'border-rose-200' : 'border-amber-200'
                }`}
              >
                <div>
                  <div className="p-5 flex gap-4">
                    <img
                      src={saved.coverImage}
                      alt={saved.bookTitle}
                      className="w-24 h-32 rounded-2xl object-cover shrink-0 border border-slate-200 shadow-xs"
                      referrerPolicy="no-referrer"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 text-xs font-bold mb-1 flex-wrap">
                        {isDubbing ? (
                          <span className="px-2.5 py-0.5 rounded-full bg-rose-100 text-rose-800 text-[11px] font-bold flex items-center gap-1">
                            <Radio className="w-3 h-3 text-rose-600" />
                            <span>Folder: Studio Dubbing</span>
                          </span>
                        ) : (
                          <span className="px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-900 text-[11px] font-bold flex items-center gap-1">
                            <BookOpen className="w-3 h-3 text-amber-600" />
                            <span>Folder: Rekaman Buku</span>
                          </span>
                        )}

                        <span className="text-orange-600 flex items-center gap-1 text-[11px]">
                          <Sparkles className="w-3 h-3" />
                          <span>{saved.badgeName}</span>
                        </span>
                      </div>

                      <h4 className="text-base sm:text-lg font-bold text-slate-900 font-lexend line-clamp-2">
                        {saved.bookTitle}
                      </h4>

                      <div className="mt-2 space-y-1 text-xs text-slate-600">
                        <div className="flex items-center gap-1.5">
                          <User className="w-3.5 h-3.5 text-slate-400" />
                          <span>
                            Siswa: <strong className="text-slate-800">{saved.childName}</strong>
                          </span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5 text-slate-400" />
                          <span>Diselesaikan: {saved.completedAt}</span>
                        </div>
                      </div>

                      <div className="mt-3 flex items-center gap-2">
                        <span className="px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-800 font-bold text-xs border border-emerald-200">
                          Skor Kelancaran: {saved.averageScore}%
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Audio Controls */}
                  <div className="px-5 pb-4">
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-2">
                      {isDubbing ? 'Dengarkan Rekaman Vokal:' : 'Putar Rekaman Per Halaman:'}
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {pagesRecorded.map((pageNumStr) => {
                        const pNum = Number(pageNumStr);
                        const isThisPlaying =
                          playingBookId === saved.id && playingPageIndex === pNum;
                        return (
                          <button
                            key={pNum}
                            onClick={() => handlePlayRecording(saved, pNum)}
                            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                              isThisPlaying
                                ? 'bg-orange-500 text-white shadow-xs scale-105'
                                : isDubbing
                                ? 'bg-rose-50 text-rose-900 border border-rose-200 hover:bg-rose-100'
                                : 'bg-amber-50 text-amber-900 border border-amber-200 hover:bg-amber-100'
                            }`}
                          >
                            <Volume2 className="w-3.5 h-3.5" />
                            <span>
                              {isDubbing
                                ? isThisPlaying
                                  ? 'Memutar Suara...'
                                  : 'Putar Dubbing'
                                : `Halaman ${pNum}`}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Card Footer Actions */}
                <div className="p-4 bg-slate-50/70 border-t border-slate-100 flex items-center justify-between gap-2">
                  <button
                    onClick={() => setActiveCertificate(saved)}
                    className="px-3.5 py-2 rounded-xl bg-amber-100 hover:bg-amber-200 text-amber-900 text-xs font-bold transition-colors flex items-center gap-1.5"
                  >
                    <Award className="w-3.5 h-3.5 text-amber-700" />
                    <span>Lihat Sertifikat</span>
                  </button>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => {
                        if (isDubbing && onOpenDubbing) {
                          onOpenDubbing();
                        } else {
                          onOpenBookToRead(saved.bookId);
                        }
                      }}
                      className="px-3.5 py-2 rounded-xl bg-white border border-slate-200 hover:border-orange-300 text-slate-700 hover:text-orange-600 text-xs font-bold transition-colors flex items-center gap-1"
                    >
                      {isDubbing ? (
                        <>
                          <Radio className="w-3.5 h-3.5 text-rose-600" />
                          <span>Buka Studio</span>
                        </>
                      ) : (
                        <>
                          <BookOpen className="w-3.5 h-3.5 text-amber-600" />
                          <span>Baca Ulang</span>
                        </>
                      )}
                    </button>
                    <button
                      onClick={() => onDeleteSavedBook(saved.id)}
                      className="p-2 rounded-xl text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition-colors"
                      title="Hapus Rekaman"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Certificate Modal */}
      {activeCertificate && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border-8 border-amber-200 text-center relative overflow-hidden">
            <div className="text-4xl mb-2">🎖️</div>
            <span className="text-xs font-bold uppercase tracking-widest text-amber-700">
              Sertifikat Apresiasi Galeri Suara
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-lexend mt-1">
              {activeCertificate.genreType === 'dubbing'
                ? 'Bintang Olah Vokal & Dubbing'
                : 'Juara Membaca Cilik'}
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">Diberikan dengan bangga kepada:</p>

            <div className="my-5 py-3 border-y-2 border-amber-200 bg-amber-50/50">
              <span className="text-2xl sm:text-3xl font-extrabold text-orange-600 font-lexend">
                {activeCertificate.childName}
              </span>
            </div>

            <p className="text-sm text-slate-700 leading-relaxed max-w-sm mx-auto">
              Telah berhasil menyelesaikan rekaman{' '}
              <strong className="text-slate-900">
                &ldquo;{activeCertificate.bookTitle}&rdquo;
              </strong>{' '}
              dengan artikulasi jelas, intonasi mantap, dan rasa percaya diri yang tinggi!
            </p>

            <div className="flex items-center justify-between text-xs text-slate-500 mt-6 pt-4 border-t border-slate-200">
              <div>
                <span className="block font-semibold text-slate-700">Tanggal Selesai:</span>
                <span>{activeCertificate.completedAt}</span>
              </div>
              <div className="text-right">
                <span className="block font-semibold text-slate-700">Lencana Kehormatan:</span>
                <span className="text-orange-600 font-bold">{activeCertificate.badgeName}</span>
              </div>
            </div>

            <button
              onClick={() => setActiveCertificate(null)}
              className="mt-6 w-full py-3 rounded-2xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-sm shadow-md shadow-orange-600/25 transition-colors"
            >
              Tutup Sertifikat
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
