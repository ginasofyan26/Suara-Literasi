import React from 'react';
import { BookOpen, Award, FileText, Sparkles, Radio } from 'lucide-react';

interface NavigationHeaderProps {
  activeTab: 'library' | 'dubbing' | 'my-books' | 'prd';
  onSelectTab: (tab: 'library' | 'dubbing' | 'my-books' | 'prd') => void;
  onOpenDiagnostic: () => void;
  myBooksCount: number;
}

export const NavigationHeader: React.FC<NavigationHeaderProps> = ({
  activeTab,
  onSelectTab,
  onOpenDiagnostic,
  myBooksCount,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-amber-200/70 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-18 flex items-center justify-between gap-6">
        {/* Zone 1: Brand Wordmark */}
        <button
          onClick={() => onSelectTab('library')}
          className="flex items-center gap-3 text-left group shrink-0"
        >
          <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-amber-500 to-orange-400 flex items-center justify-center text-white shadow-md shadow-orange-500/20 group-hover:scale-105 transition-transform">
            <BookOpen className="w-6 h-6 stroke-[2.5]" />
          </div>
          <div>
            <span className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 font-lexend block leading-tight">
              Suara<span className="text-orange-500">Literasi</span>
            </span>
            <span className="text-xs font-semibold text-amber-700/80 tracking-wide uppercase">
              Buku Interaktif & Olah Vokal
            </span>
          </div>
        </button>

        {/* Zone 2: Navigation Links (single line, unboxed, clear active state) */}
        <nav className="hidden md:flex items-center gap-1.5">
          <button
            onClick={() => onSelectTab('library')}
            className={`px-3.5 py-2 rounded-xl text-sm font-semibold transition-all whitespace-nowrap shrink-0 flex items-center gap-2 ${
              activeTab === 'library'
                ? 'bg-amber-100/80 text-amber-900 shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/70'
            }`}
          >
            <BookOpen className="w-4 h-4 text-amber-600" />
            <span>Koleksi Buku</span>
          </button>

          <button
            onClick={() => onSelectTab('dubbing')}
            className={`px-3.5 py-2 rounded-xl text-sm font-semibold transition-all whitespace-nowrap shrink-0 flex items-center gap-2 ${
              activeTab === 'dubbing'
                ? 'bg-rose-100 text-rose-900 border border-rose-300 shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/70'
            }`}
          >
            <Radio className="w-4 h-4 text-rose-600" />
            <span>Studio Dubbing</span>
          </button>

          <button
            onClick={() => onSelectTab('my-books')}
            className={`px-3.5 py-2 rounded-xl text-sm font-semibold transition-all whitespace-nowrap shrink-0 flex items-center gap-2 ${
              activeTab === 'my-books'
                ? 'bg-amber-100/80 text-amber-900 shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/70'
            }`}
          >
            <Award className="w-4 h-4 text-orange-500" />
            <span>Galeri Suara</span>
            {myBooksCount > 0 && (
              <span className="bg-orange-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {myBooksCount}
              </span>
            )}
          </button>

          <button
            onClick={() => onSelectTab('prd')}
            className={`px-3.5 py-2 rounded-xl text-sm font-semibold transition-all whitespace-nowrap shrink-0 flex items-center gap-2 ${
              activeTab === 'prd'
                ? 'bg-indigo-50 text-indigo-900 border border-indigo-200/80 shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/70'
            }`}
          >
            <FileText className="w-4 h-4 text-indigo-600" />
            <span>Dokumen PRD & Arsitektur</span>
          </button>
        </nav>

        {/* Zone 3: Primary Diagnostic CTA */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenDiagnostic}
            className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white text-sm font-bold shadow-md shadow-orange-500/20 active:scale-95 transition-all flex items-center gap-2 whitespace-nowrap shrink-0"
          >
            <Sparkles className="w-4 h-4 text-yellow-200 fill-yellow-200" />
            <span className="hidden sm:inline">Tes Penyesuaian Level</span>
            <span className="sm:hidden">Tes Level</span>
          </button>
        </div>
      </div>
    </header>
  );
};
