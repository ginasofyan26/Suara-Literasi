import React, { useState, useEffect } from 'react';
import { Book, ReadingLevel, SavedChildBook } from './types';
import { BOOKS_DATA } from './data/booksData';
import { NavigationHeader } from './components/NavigationHeader';
import { BookLibrary } from './components/BookLibrary';
import { BookFlipbook } from './components/BookFlipbook';
import { AudiobookGallery } from './components/AudiobookGallery';
import { PRDViewer } from './components/PRDViewer';
import { DiagnosticQuizModal } from './components/DiagnosticQuizModal';
import { DubbingStudio } from './components/DubbingStudio';

export default function App() {
  const [activeTab, setActiveTab] = useState<'library' | 'dubbing' | 'my-books' | 'prd'>('library');
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const [filterLevel, setFilterLevel] = useState<ReadingLevel | 'all'>('all');
  const [isDiagnosticOpen, setIsDiagnosticOpen] = useState(false);

  // Saved audiobooks list (with sample default so user can test gallery right away)
  const [savedBooks, setSavedBooks] = useState<SavedChildBook[]>(() => {
    const saved = localStorage.getItem('bukusuara_saved_books');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        // ignore
      }
    }
    // Default initial portfolio items
    return [
      {
        id: 'sample-kucing-oren-1',
        bookId: 'kucing-oren',
        bookTitle: 'Kucing Oren di Kebun Bunga',
        coverImage: '/src/assets/images/book_kucing_oren_1793758427611.jpg',
        childName: 'Aisyah Putri',
        completedAt: '3 November 2026',
        totalDurationMs: 14000,
        badgeName: 'Bintang Kucing Lincah',
        averageScore: 96,
        genreType: 'book',
        recordings: {
          1: {
            pageNumber: 1,
            audioBlobUrl: '',
            durationMs: 4200,
            recordedAt: '09:15',
            intonationScore: 95,
            feedbackNote: 'Artikulasi jelas dan ceria!',
          },
          2: {
            pageNumber: 2,
            audioBlobUrl: '',
            durationMs: 4800,
            recordedAt: '09:17',
            intonationScore: 98,
            feedbackNote: 'Penekanan kata bunga merah dan kuning sangat pas!',
          },
          3: {
            pageNumber: 3,
            audioBlobUrl: '',
            durationMs: 5000,
            recordedAt: '09:20',
            intonationScore: 96,
            feedbackNote: 'Suara Meong-nya imut sekali!',
          },
        },
      },
      {
        id: 'sample-dubbing-berita-1',
        bookId: 'berita-robotika-juara',
        bookTitle: '[Dubbing Berita TV] Prestasi Juara Dunia Robotika Cilik',
        coverImage: '/src/assets/images/dubbing_berita_tv_1793761456973.jpg',
        childName: 'Raditya Pratama',
        completedAt: '3 November 2026',
        totalDurationMs: 28000,
        badgeName: 'Presenter Berita Handal',
        averageScore: 97,
        genreType: 'dubbing',
        recordings: {
          1: {
            pageNumber: 1,
            audioBlobUrl: '',
            durationMs: 28000,
            recordedAt: '10:45',
            intonationScore: 97,
            feedbackNote: 'Tempo 122 WPM sangat pas dengan pembaca berita TV nasional!',
          },
        },
      },
    ];
  });

  // Persist saved books
  useEffect(() => {
    localStorage.setItem('bukusuara_saved_books', JSON.stringify(savedBooks));
  }, [savedBooks]);

  const handleSelectBook = (book: Book) => {
    setSelectedBook(book);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToLibrary = () => {
    setSelectedBook(null);
  };

  const handleSaveCompletedBook = (newSaved: SavedChildBook) => {
    setSavedBooks((prev) => [newSaved, ...prev]);
    setSelectedBook(null);
    setActiveTab('my-books');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDeleteSavedBook = (id: string) => {
    setSavedBooks((prev) => prev.filter((b) => b.id !== id));
  };

  const handleSelectRecommendedLevel = (level: ReadingLevel) => {
    setFilterLevel(level);
    setActiveTab('library');
    setSelectedBook(null);
  };

  const handleOpenBookFromGallery = (bookId: string) => {
    const book = BOOKS_DATA.find((b) => b.id === bookId);
    if (book) {
      setSelectedBook(book);
      setActiveTab('library');
    } else {
      setActiveTab('dubbing');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FFFDF9] text-slate-800">
      {/* Top Bar Header */}
      <NavigationHeader
        activeTab={activeTab}
        onSelectTab={(tab) => {
          setActiveTab(tab);
          if (tab !== 'library') setSelectedBook(null);
        }}
        onOpenDiagnostic={() => setIsDiagnosticOpen(true)}
        myBooksCount={savedBooks.length}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* If Flipbook is active */}
        {selectedBook ? (
          <BookFlipbook
            book={selectedBook}
            onBackToLibrary={handleBackToLibrary}
            onSaveCompletedBook={handleSaveCompletedBook}
          />
        ) : (
          <>
            {activeTab === 'library' && (
              <BookLibrary
                onSelectBook={handleSelectBook}
                onOpenDiagnostic={() => setIsDiagnosticOpen(true)}
                onOpenDubbing={() => setActiveTab('dubbing')}
                filterLevel={filterLevel}
                onFilterChange={setFilterLevel}
              />
            )}

            {activeTab === 'dubbing' && (
              <DubbingStudio onSaveCompletedDubbing={handleSaveCompletedBook} />
            )}

            {activeTab === 'my-books' && (
              <AudiobookGallery
                savedBooks={savedBooks}
                onOpenBookToRead={handleOpenBookFromGallery}
                onOpenDubbing={() => {
                  setSelectedBook(null);
                  setActiveTab('dubbing');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                onOpenLibrary={() => {
                  setSelectedBook(null);
                  setActiveTab('library');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                onDeleteSavedBook={handleDeleteSavedBook}
              />
            )}

            {activeTab === 'prd' && <PRDViewer />}
          </>
        )}
      </main>

      {/* Diagnostic Assessment Modal */}
      <DiagnosticQuizModal
        isOpen={isDiagnosticOpen}
        onClose={() => setIsDiagnosticOpen(false)}
        onSelectRecommendedLevel={handleSelectRecommendedLevel}
      />

      {/* Footer */}
      <footer className="mt-16 py-8 border-t border-amber-200/80 bg-white text-xs text-slate-500">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-bold text-slate-800 font-lexend">SuaraLiterasi</span>
            <span aria-hidden="true">·</span>
            <span>Platform Membaca Interaktif, Studio Dubbing & Galeri Suara</span>
          </div>
          <div className="flex items-center gap-4 text-slate-500">
            <span>Kurikulum Merdeka & Portofolio Literasi SD</span>
            <span aria-hidden="true">·</span>
            <button
              onClick={() => {
                setActiveTab('prd');
                setSelectedBook(null);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-orange-600 font-semibold hover:underline"
            >
              Lihat Spesifikasi PRD
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
