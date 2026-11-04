import React, { useState } from 'react';
import { Book, ReadingLevel } from '../types';
import { BOOKS_DATA } from '../data/booksData';
import { Sparkles, Clock, BookOpen, ArrowRight, Award, Compass, Star } from 'lucide-react';

interface BookLibraryProps {
  onSelectBook: (book: Book) => void;
  onOpenDiagnostic: () => void;
  onOpenDubbing?: () => void;
  filterLevel: ReadingLevel | 'all';
  onFilterChange: (level: ReadingLevel | 'all') => void;
}

export const BookLibrary: React.FC<BookLibraryProps> = ({
  onSelectBook,
  onOpenDiagnostic,
  onOpenDubbing,
  filterLevel,
  onFilterChange,
}) => {
  const filteredBooks =
    filterLevel === 'all'
      ? BOOKS_DATA
      : BOOKS_DATA.filter((b) => b.level === filterLevel);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
      {/* Hero Welcome Banner */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-amber-500 via-orange-400 to-amber-600 text-white p-6 sm:p-10 shadow-lg shadow-orange-500/15 mb-10">
        <div className="relative z-10 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-xs text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-yellow-200 fill-yellow-200" />
            Petualangan Literasi & Studio Olah Vokal
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight font-lexend leading-tight text-white">
            Baca Cerita, Olah Vokalmu, dan Rekam Suara Emasmu!
          </h1>
          <p className="text-amber-100 text-sm sm:text-base mt-2 leading-relaxed">
            Pilih buku cerita interaktif bergambar, latih intonasi bersama model narator, atau masuki Studio Dubbing untuk membawakan berita TV, siaran radio, pidato, dan deklamasi puisi. Rekam suaramu dengan percaya diri dan kumpulkan karyamu di Galeri Suara!
          </p>

          <div className="flex flex-wrap items-center gap-3 mt-6">
            <button
              onClick={onOpenDiagnostic}
              className="px-5 py-3 rounded-2xl bg-white text-orange-600 hover:bg-amber-50 font-bold text-sm shadow-md transition-all active:scale-95 flex items-center gap-2"
            >
              <Compass className="w-4 h-4 text-orange-500" />
              <span>Tes Penyesuaian Level Cilik</span>
            </button>

            {onOpenDubbing && (
              <button
                onClick={onOpenDubbing}
                className="px-5 py-3 rounded-2xl bg-rose-600 hover:bg-rose-700 text-white font-bold text-sm shadow-md transition-all active:scale-95 flex items-center gap-2"
              >
                <span>🎙️</span>
                <span>Studio Dubbing</span>
              </button>
            )}

            <span className="text-xs text-amber-100 font-medium hidden sm:inline">
              Buku Cerita · Berita TV · Radio Cilik · Pidato Orator · Deklamasi Puisi
            </span>
          </div>
        </div>
      </div>

      {/* Reading Level Filter Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-lexend">
            Katalog Buku Cerita Interaktif
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
            Disusun bertahap mengikuti tingkat kesiapan membaca anak
          </p>
        </div>

        {/* Level Filter Tabs (Functional segmented controls) */}
        <div className="flex items-center gap-1.5 p-1 bg-white rounded-2xl border border-amber-200 shadow-2xs overflow-x-auto text-xs">
          <button
            onClick={() => onFilterChange('all')}
            className={`px-3 py-1.5 rounded-xl font-bold transition-all whitespace-nowrap shrink-0 ${
              filterLevel === 'all'
                ? 'bg-orange-500 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-amber-50'
            }`}
          >
            Semua Buku ({BOOKS_DATA.length})
          </button>
          <button
            onClick={() => onFilterChange(1)}
            className={`px-3 py-1.5 rounded-xl font-bold transition-all whitespace-nowrap shrink-0 ${
              filterLevel === 1
                ? 'bg-orange-500 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-amber-50'
            }`}
          >
            Level 1: Fonik ({BOOKS_DATA.filter((b) => b.level === 1).length})
          </button>
          <button
            onClick={() => onFilterChange(2)}
            className={`px-3 py-1.5 rounded-xl font-bold transition-all whitespace-nowrap shrink-0 ${
              filterLevel === 2
                ? 'bg-orange-500 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-amber-50'
            }`}
          >
            Level 2: Kalimat & Dialog ({BOOKS_DATA.filter((b) => b.level === 2).length})
          </button>
          <button
            onClick={() => onFilterChange(3)}
            className={`px-3 py-1.5 rounded-xl font-bold transition-all whitespace-nowrap shrink-0 ${
              filterLevel === 3
                ? 'bg-orange-500 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-amber-50'
            }`}
          >
            Level 3: Cerita & Paragraf ({BOOKS_DATA.filter((b) => b.level === 3).length})
          </button>
        </div>
      </div>

      {/* Book Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredBooks.map((book) => {
          return (
            <div
              key={book.id}
              className="bg-white rounded-3xl border border-amber-200/90 shadow-sm hover:shadow-md transition-all overflow-hidden flex flex-col justify-between group cursor-pointer"
              onClick={() => onSelectBook(book)}
            >
              <div>
                {/* Book Cover Image with Level Badge */}
                <div className="relative aspect-[4/3] overflow-hidden bg-amber-50">
                  <img
                    src={book.coverImage}
                    alt={book.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs px-2.5 py-1 rounded-xl text-xs font-bold text-slate-800 shadow-sm border border-amber-200 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-orange-500" />
                    <span>{book.levelTitle.split(':')[0]}</span>
                  </div>

                  <div className="absolute top-3 right-3 bg-slate-900/80 backdrop-blur-xs text-white px-2 py-0.5 rounded-lg text-xs font-semibold">
                    {book.ageRecommendation}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5">
                  <span className="text-xs text-orange-600 font-bold uppercase tracking-wider block mb-1">
                    Tema: {book.theme}
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 font-lexend group-hover:text-orange-600 transition-colors leading-snug">
                    {book.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-2 line-clamp-2 leading-relaxed">
                    {book.synopsis}
                  </p>

                  {/* Metadata strip (clean unboxed text with separators, zero pill rule) */}
                  <div className="flex items-center gap-2 text-xs text-slate-500 mt-4 pt-3 border-t border-slate-100">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {book.estimatedMinutes} Menit
                    </span>
                    <span aria-hidden="true">·</span>
                    <span>{book.pages.length} Halaman</span>
                    <span aria-hidden="true">·</span>
                    <span>{book.wordCount} Kata</span>
                  </div>

                  {/* Badge reward preview */}
                  <div className="mt-3 p-2.5 rounded-xl bg-amber-50/70 border border-amber-200 text-xs text-slate-700 flex items-center gap-2">
                    <span className="text-base">{book.badgeAward.icon}</span>
                    <span className="truncate">
                      Hadiah: <strong>{book.badgeAward.name}</strong>
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-4 bg-slate-50/60 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs text-slate-500 font-medium">Karya {book.author}</span>
                <button className="px-4 py-2 rounded-xl bg-orange-500 hover:bg-orange-600 text-white text-xs font-bold transition-colors flex items-center gap-1.5 shadow-xs">
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Buka Buku</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-0.5" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
