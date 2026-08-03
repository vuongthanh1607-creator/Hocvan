import React, { useState } from "react";
import { MOCK_EXAMS } from "../data/mockExamsData";
import { LITERATURE_WORKS } from "../data/literatureData";
import { MockExam, LiteraryWork } from "../types";
import { QuizPlayer } from "./QuizPlayer";
import { Clock, Award, CheckSquare, Sparkles, ChevronRight, BookOpen, Layers } from "lucide-react";

interface ExamPracticeSectionProps {
  onUpdateProgress?: () => void;
  onAskAI?: (prompt: string) => void;
}

export const ExamPracticeSection: React.FC<ExamPracticeSectionProps> = ({
  onUpdateProgress,
  onAskAI,
}) => {
  const [activeExam, setActiveExam] = useState<MockExam | null>(null);
  const [activeWorkQuiz, setActiveWorkQuiz] = useState<LiteraryWork | null>(null);
  const [tabMode, setTabMode] = useState<"mock_exams" | "lesson_quizzes">("mock_exams");

  if (activeExam) {
    return (
      <div className="space-y-4">
        <button
          onClick={() => setActiveExam(null)}
          className="inline-flex items-center gap-1.5 rounded-xl border border-slate-300 bg-white px-4 py-2 text-xs font-bold text-slate-700 hover:bg-slate-50 transition-colors"
        >
          &larr; Quay lại danh sách đề thi thử
        </button>
        <QuizPlayer
          workIdOrExamId={activeExam.id}
          title={activeExam.title}
          grade={activeExam.grade}
          initialQuestions={activeExam.questions}
          isTimedExam={true}
          durationMinutes={activeExam.durationMinutes}
          onFinish={() => {
            if (onUpdateProgress) onUpdateProgress();
          }}
        />
      </div>
    );
  }

  if (activeWorkQuiz) {
    return (
      <div className="space-y-4">
        <button
          onClick={() => setActiveWorkQuiz(null)}
          className="inline-flex items-center gap-1.5 rounded-xl border border-slate-300 bg-white px-4 py-2 text-xs font-bold text-slate-700 hover:bg-slate-50 transition-colors"
        >
          &larr; Quay lại danh sách bài học
        </button>
        <QuizPlayer
          workIdOrExamId={activeWorkQuiz.id}
          title={`Trắc Nghiệm: ${activeWorkQuiz.title} (${activeWorkQuiz.author})`}
          grade={activeWorkQuiz.grade}
          initialQuestions={activeWorkQuiz.quizzes}
          workGenre={activeWorkQuiz.genre}
          onFinish={() => {
            if (onUpdateProgress) onUpdateProgress();
          }}
        />
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6">
      {/* Banner */}
      <div className="rounded-3xl border border-amber-200 bg-gradient-to-r from-amber-600 via-amber-700 to-amber-800 p-6 text-white shadow-md sm:p-8">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white/20 px-3 py-1 text-xs font-bold text-amber-100 uppercase tracking-wider backdrop-blur-sm">
            <Award className="h-4 w-4" />
            <span>Hệ Thống Luyện Thi Trắc Nghiệm Ngữ Văn KNTT</span>
          </span>
          <h2 className="mt-3 text-xl font-bold sm:text-2xl">
            Luyện Đề Thi Thử THPT Quốc Gia & Kiểm Tra Học Kì
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-amber-100 leading-relaxed">
            Hệ thống câu hỏi trắc nghiệm từ mức độ Nhận biết, Thông hiểu đến Vận dụng cao, chấm điểm tức thì, giải thích chi tiết đáp án và ghi nhận vào bảng tiến độ.
          </p>
        </div>
      </div>

      {/* Mode Selector Tabs */}
      <div className="flex border-b border-slate-200 bg-white rounded-t-2xl px-4 pt-2">
        <button
          onClick={() => setTabMode("mock_exams")}
          className={`flex items-center gap-2 border-b-2 px-5 py-3 text-xs font-bold transition-all sm:text-sm ${
            tabMode === "mock_exams"
              ? "border-amber-600 text-amber-700"
              : "border-transparent text-slate-500 hover:text-slate-800"
          }`}
        >
          <Clock className="h-4 w-4" />
          <span>Đề Thi Thử Tổng Hợp Tính Giờ ({MOCK_EXAMS.length} đề)</span>
        </button>

        <button
          onClick={() => setTabMode("lesson_quizzes")}
          className={`flex items-center gap-2 border-b-2 px-5 py-3 text-xs font-bold transition-all sm:text-sm ${
            tabMode === "lesson_quizzes"
              ? "border-amber-600 text-amber-700"
              : "border-transparent text-slate-500 hover:text-slate-800"
          }`}
        >
          <CheckSquare className="h-4 w-4" />
          <span>Luyện Theo Tác Phẩm / Bài Học ({LITERATURE_WORKS.length} bài)</span>
        </button>
      </div>

      {/* Tab Content 1: Mock Exams */}
      {tabMode === "mock_exams" && (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {MOCK_EXAMS.map((exam) => (
            <div
              key={exam.id}
              onClick={() => setActiveExam(exam)}
              className="group relative flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-amber-400 hover:shadow-md cursor-pointer"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="rounded-md bg-amber-100 px-2.5 py-1 text-xs font-bold text-amber-800">
                    {typeof exam.grade === "number" ? `Lớp ${exam.grade}` : exam.grade}
                  </span>
                  <span className="flex items-center gap-1 font-mono text-xs font-bold text-slate-600">
                    <Clock className="h-3.5 w-3.5 text-amber-600" />
                    <span>{exam.durationMinutes} phút</span>
                  </span>
                </div>

                <h3 className="mt-3 text-base font-bold text-slate-900 group-hover:text-amber-700 transition-colors">
                  {exam.title}
                </h3>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                  {exam.description}
                </p>
              </div>

              <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-3">
                <span className="text-xs font-semibold text-slate-500">
                  {exam.questions.length} câu hỏi
                </span>

                <span className="inline-flex items-center gap-1 text-xs font-bold text-amber-600 group-hover:underline">
                  <span>Bắt đầu thi</span>
                  <ChevronRight className="h-4 w-4" />
                </span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Tab Content 2: Lesson Quizzes */}
      {tabMode === "lesson_quizzes" && (
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {LITERATURE_WORKS.map((work) => (
            <div
              key={work.id}
              onClick={() => setActiveWorkQuiz(work)}
              className="group flex items-center justify-between rounded-xl border border-slate-200 bg-white p-4 transition-all hover:border-amber-400 hover:shadow-sm cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-amber-700 font-bold text-xs">
                  {work.grade}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 group-hover:text-amber-700">
                    {work.title}
                  </h4>
                  <p className="text-xs text-slate-500">
                    {work.author} ({work.quizzes.length} câu)
                  </p>
                </div>
              </div>

              <ChevronRight className="h-4 w-4 text-slate-400 group-hover:text-amber-600" />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
