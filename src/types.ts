export type GradeLevel = 10 | 11 | 12;

export type GenreType =
  | "Thơ trữ tình"
  | "Thơ trữ tình / Trường ca"
  | "Thơ Đường luật"
  | "Thần thoại & Sử thi"
  | "Truyện ngắn hiện đại"
  | "Truyện thơ Nôm"
  | "Tiểu thuyết & Truyện truyền kì"
  | "Kí & Tùy bút"
  | "Nghị luận văn học"
  | "Nghị luận xã hội"
  | "Kịch & Sân khấu";

export interface MindMapNode {
  id: string;
  label: string;
  type: "root" | "theme" | "technique" | "character" | "quote" | "sub";
  summary?: string;
  quote?: string;
  children?: MindMapNode[];
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number; // 0-based index
  explanation: string;
  level: "Nhận biết" | "Thông hiểu" | "Vận dụng";
}

export interface LiteraryWork {
  id: string;
  grade: GradeLevel;
  unit: string; // e.g. "Bài 1: Sức hấp dẫn của truyện kể"
  title: string;
  author: string;
  genre: GenreType;
  period: string; // e.g. "Văn học dân gian", "Văn học hiện đại 1945-1975"
  authorBio: string;
  context: string; // Hoàn cảnh sáng tác / Xuất xứ
  summary: string; // Tóm tắt tác phẩm
  structure: {
    title: string;
    description: string;
  }[];
  contentAnalysis: {
    heading: string;
    details: string[];
  }[];
  artisticFeatures: string[];
  keyQuotes: {
    quote: string;
    contextOrMeaning: string;
  }[];
  mindMap: MindMapNode;
  quizzes: QuizQuestion[];
}

export interface MockExam {
  id: string;
  grade: GradeLevel | "THPT Quốc Gia";
  title: string;
  description: string;
  durationMinutes: number;
  questions: QuizQuestion[];
}

export interface RoadmapPhase {
  phaseName: string;
  duration: string;
  tasks: string[];
}

export interface ExamRoadmap {
  title: string;
  overview: string;
  phases: RoadmapPhase[];
  advice: string;
  createdAt: string;
}

export interface QuizHistoryItem {
  id: string;
  workIdOrExamId: string;
  title: string;
  score: number;
  totalQuestions: number;
  date: string;
}

export interface StudentProgress {
  completedWorks: string[]; // List of work IDs marked as learned/mastered
  quizScores: Record<string, number>; // workId -> highest percentage score (0-100)
  quizHistory: QuizHistoryItem[];
  studyStreak: number;
  lastStudyDate: string;
  targetScore: number;
  examDate: string;
  weakGenres: GenreType[];
  savedRoadmap: ExamRoadmap | null;
}
