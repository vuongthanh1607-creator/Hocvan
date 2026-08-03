import { StudentProgress, ExamRoadmap, QuizHistoryItem, GenreType } from "../types";

const PROGRESS_STORAGE_KEY = "ngu_van_kntt_progress_v1";

const DEFAULT_PROGRESS: StudentProgress = {
  completedWorks: [],
  quizScores: {},
  quizHistory: [],
  studyStreak: 1,
  lastStudyDate: new Date().toISOString().split("T")[0],
  targetScore: 8.5,
  examDate: getDefaultExamDate(),
  weakGenres: ["Thơ trữ tình", "Nghị luận văn học"],
  savedRoadmap: null,
};

function getDefaultExamDate(): string {
  const d = new Date();
  d.setMonth(d.getMonth() + 2); // default 2 months from today
  return d.toISOString().split("T")[0];
}

export function loadProgress(): StudentProgress {
  try {
    const raw = localStorage.getItem(PROGRESS_STORAGE_KEY);
    if (!raw) {
      saveProgress(DEFAULT_PROGRESS);
      return DEFAULT_PROGRESS;
    }
    const parsed = JSON.parse(raw) as StudentProgress;
    // Check streak
    const today = new Date().toISOString().split("T")[0];
    if (parsed.lastStudyDate !== today) {
      const last = new Date(parsed.lastStudyDate);
      const curr = new Date(today);
      const diffDays = Math.floor((curr.getTime() - last.getTime()) / (1000 * 3600 * 24));
      if (diffDays === 1) {
        parsed.studyStreak = (parsed.studyStreak || 0) + 1;
      } else if (diffDays > 1) {
        parsed.studyStreak = 1;
      }
      parsed.lastStudyDate = today;
      saveProgress(parsed);
    }
    return parsed;
  } catch (err) {
    console.error("Error loading progress from localStorage", err);
    return DEFAULT_PROGRESS;
  }
}

export function saveProgress(progress: StudentProgress): void {
  try {
    localStorage.setItem(PROGRESS_STORAGE_KEY, JSON.stringify(progress));
  } catch (err) {
    console.error("Error saving progress to localStorage", err);
  }
}

export function markWorkCompleted(workId: string, completed: boolean): StudentProgress {
  const progress = loadProgress();
  const set = new Set(progress.completedWorks);
  if (completed) {
    set.add(workId);
  } else {
    set.delete(workId);
  }
  progress.completedWorks = Array.from(set);
  saveProgress(progress);
  return progress;
}

export function recordQuizScore(
  workIdOrExamId: string,
  title: string,
  score: number,
  totalQuestions: number
): StudentProgress {
  const progress = loadProgress();
  const percentage = Math.round((score / totalQuestions) * 100);
  
  const currentBest = progress.quizScores[workIdOrExamId] || 0;
  if (percentage > currentBest) {
    progress.quizScores[workIdOrExamId] = percentage;
  }

  const historyItem: QuizHistoryItem = {
    id: `hist_${Date.now()}`,
    workIdOrExamId,
    title,
    score,
    totalQuestions,
    date: new Date().toLocaleDateString("vi-VN", {
      hour: "2-digit",
      minute: "2-digit",
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    }),
  };

  progress.quizHistory = [historyItem, ...progress.quizHistory.slice(0, 29)]; // keep latest 30
  saveProgress(progress);
  return progress;
}

export function saveStudentRoadmap(roadmap: ExamRoadmap): StudentProgress {
  const progress = loadProgress();
  progress.savedRoadmap = roadmap;
  saveProgress(progress);
  return progress;
}

export function updateTargetSettings(
  targetScore: number,
  examDate: string,
  weakGenres: GenreType[]
): StudentProgress {
  const progress = loadProgress();
  progress.targetScore = targetScore;
  progress.examDate = examDate;
  progress.weakGenres = weakGenres;
  saveProgress(progress);
  return progress;
}

export function resetProgress(): StudentProgress {
  const fresh = { ...DEFAULT_PROGRESS, lastStudyDate: new Date().toISOString().split("T")[0] };
  saveProgress(fresh);
  return fresh;
}

export function exportProgressJSON(): string {
  const progress = loadProgress();
  return JSON.stringify(progress, null, 2);
}

export function importProgressJSON(jsonStr: string): boolean {
  try {
    const parsed = JSON.parse(jsonStr) as StudentProgress;
    if (!parsed || typeof parsed !== "object") return false;
    saveProgress(parsed);
    return true;
  } catch (err) {
    console.error("Invalid progress JSON format", err);
    return false;
  }
}
