export type ReadingLevel = 1 | 2 | 3;

export interface PageContent {
  pageNumber: number;
  text: string;
  illustrationUrl: string;
  targetIntonationTip: string;
  focusWords: string[];
  audioGuideTiming?: { word: string; startMs: number; endMs: number }[];
}

export interface Book {
  id: string;
  title: string;
  level: ReadingLevel;
  levelTitle: string;
  ageRecommendation: string;
  synopsis: string;
  coverImage: string;
  theme: string;
  author: string;
  estimatedMinutes: number;
  wordCount: number;
  badgeAward: {
    name: string;
    icon: string;
    description: string;
  };
  pages: PageContent[];
}

export interface PageRecording {
  pageNumber: number;
  audioBlobUrl: string;
  durationMs: number;
  recordedAt: string;
  intonationScore?: number;
  feedbackNote?: string;
}

export interface SavedChildBook {
  id: string;
  bookId: string;
  bookTitle: string;
  coverImage: string;
  childName: string;
  completedAt: string;
  totalDurationMs: number;
  badgeName: string;
  averageScore: number;
  recordings: Record<number, PageRecording>;
  genreType?: 'book' | 'dubbing';
}

export interface DiagnosticQuestion {
  id: number;
  question: string;
  audioPromptText: string;
  options: {
    text: string;
    label: string;
    levelScore: ReadingLevel;
    icon?: string;
  }[];
}

export type ChildFont = 'lexend' | 'comic' | 'sans';
export type FontSize = 'normal' | 'large' | 'huge';

// Dubbing Studio Types for Grade 6
export type DubbingGenre = 'berita' | 'radio' | 'pidato' | 'puisi' | 'custom';

export interface DubbingScript {
  id: string;
  genre: DubbingGenre;
  genreLabel: string;
  title: string;
  description: string;
  coverImage: string;
  badgeName: string;
  badgeIcon: string;
  targetTone: string;
  targetWpm: number;
  intonationGuide: {
    rule: string;
    example: string;
  }[];
  scriptText: string;
  sampleAudioDurationSec: number;
}
