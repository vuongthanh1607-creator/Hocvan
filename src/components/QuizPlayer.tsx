import React, { useState, useEffect } from "react";
import { QuizQuestion, GradeLevel } from "../types";
import { recordQuizScore } from "../utils/progressStorage";
import confetti from "canvas-confetti";
import { CheckCircle2, XCircle, HelpCircle, RefreshCw, Award, Clock, ArrowRight, Sparkles, Loader2, BookOpen } from "lucide-react";

interface QuizPlayerProps {
  workIdOrExamId: string;
  title: string;
  grade: GradeLevel | "THPT Quốc Gia";
  initialQuestions: QuizQuestion[];
  isTimedExam?: boolean;
  durationMinutes?: number;
  workGenre?: string;
  onFinish?: (score: number, total: number) => void;
}

export const QuizPlayer: React.FC<QuizPlayerProps> = ({
  workIdOrExamId,
  title,
  grade,
  initialQuestions,
  isTimedExam = false,
  durationMinutes = 15,
  workGenre = "Thơ / Truyện",
  onFinish,
}) => {
  const [questions, setQuestions] = useState<QuizQuestion[]>(initialQuestions);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [showExplanation, setShowExplanation] = useState<Record<number, boolean>>({});
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [timeLeftSeconds, setTimeLeftSeconds] = useState<number>(durationMinutes * 60);
  const [isGeneratingAI, setIsGeneratingAI] = useState<boolean>(false);
  const [aiError, setAiError] = useState<string | null>(null);

  // Timer for mock exam
  useEffect(() => {
    if (!isTimedExam || isSubmitted) return;
    const interval = setInterval(() => {
      setTimeLeftSeconds((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          handleSubmitExam();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [isTimedExam, isSubmitted]);

  const handleSelectOption = (qIndex: number, optIndex: number) => {
    if (isSubmitted) return;
    setSelectedAnswers((prev) => ({ ...prev, [qIndex]: optIndex }));
    if (!isTimedExam) {
      setShowExplanation((prev) => ({ ...prev, [qIndex]: true }));
    }
  };

  const calculateScore = (): number => {
    let correctCount = 0;
    questions.forEach((q, idx) => {
      if (selectedAnswers[idx] === q.correctAnswer) {
        correctCount++;
      }
    });
    return correctCount;
  };

  const handleSubmitExam = () => {
    setIsSubmitted(true);
    const score = calculateScore();
    const total = questions.length;
    recordQuizScore(workIdOrExamId, title, score, total);

    // Launch confetti if score >= 80%
    if (score / total >= 0.8) {
      try {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
        });
      } catch (err) {
        // fallback ignore
      }
    }

    if (onFinish) {
      onFinish(score, total);
    }
  };

  const handleReset = () => {
    setSelectedAnswers({});
    setShowExplanation({});
    setIsSubmitted(false);
    setCurrentIndex(0);
    setTimeLeftSeconds(durationMinutes * 60);
  };

  const handleGenerateAIQuizzes = async () => {
    setIsGeneratingAI(true);
    setAiError(null);
    try {
      const res = await fetch("/api/gemini/quiz", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          grade,
          workTitle: title,
          genre: workGenre,
          count: 3,
        }),
      });
      const data = await res.json();
      if (data.error) {
        setAiError(data.error);
      } else if (data.questions && Array.isArray(data.questions)) {
        setQuestions((prev) => [...prev, ...data.questions]);
      }
    } catch (err: any) {
      setAiError("Không thể kết nối với hệ thống AI.");
    } finally {
      setIsGeneratingAI(false);
    }
  };

  const formatTime = (seconds: number): string => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

  const currentQ = questions[currentIndex];
  const score = calculateScore();
  const percentage = Math.round((score / questions.length) * 100);

  return (
    <div className="flex flex-col gap-6">
      {/* Top Header Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
        <div>
          <div className="flex items-center gap-2">
            <span className="rounded-md bg-amber-100 px-2.5 py-0.5 text-xs font-bold text-amber-800">
              {typeof grade === "number" ? `Lớp ${grade}` : grade}
            </span>
            <h3 className="text-base font-bold text-slate-900">{title}</h3>
          </div>
          <p className="text-xs text-slate-500 mt-0.5">
            {isTimedExam
              ? `Đề thi thử tính giờ (${questions.length} câu)`
              : `Luyện tập từng câu hỏi (${questions.length} câu)`}
          </p>
        </div>

        <div className="flex items-center gap-3">
          {isTimedExam && !isSubmitted && (
            <div className="flex items-center gap-1.5 rounded-xl bg-amber-50 px-3 py-1.5 font-mono text-sm font-bold text-amber-800 border border-amber-200">
              <Clock className="h-4 w-4" />
              <span>{formatTime(timeLeftSeconds)}</span>
            </div>
          )}

          {!isSubmitted && (
            <button
              onClick={handleSubmitExam}
              className="rounded-xl bg-amber-600 px-4 py-2 text-xs font-semibold text-white shadow-sm hover:bg-amber-700 transition-colors"
            >
              Nộp bài
            </button>
          )}

          {isSubmitted && (
            <button
              onClick={handleReset}
              className="flex items-center gap-1.5 rounded-xl border border-slate-300 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-50"
            >
              <RefreshCw className="h-3.5 w-3.5" />
              <span>Làm lại</span>
            </button>
          )}
        </div>
      </div>

      {/* Score Summary Card (When submitted) */}
      {isSubmitted && (
        <div className="rounded-2xl border-2 border-amber-300 bg-gradient-to-r from-amber-50 via-amber-50/50 to-white p-6 shadow-sm animate-in fade-in duration-300">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div
                className={`flex h-16 w-16 items-center justify-center rounded-2xl text-xl font-bold text-white shadow-md ${
                  percentage >= 80 ? "bg-emerald-600" : percentage >= 50 ? "bg-amber-600" : "bg-rose-600"
                }`}
              >
                {percentage}%
              </div>
              <div>
                <h4 className="text-lg font-bold text-slate-900">
                  {percentage >= 80
                    ? "Xuất sắc! Bạn đã nắm vững tác phẩm!"
                    : percentage >= 50
                    ? "Khá tốt! Hãy ôn lại các chi tiết nghệ thuật nhé."
                    : "Cần nỗ lực hơn! Hãy đọc kỹ tóm tắt và sơ đồ tư duy."}
                </h4>
                <p className="text-sm text-slate-600 mt-1">
                  Bạn trả lời đúng <span className="font-bold text-slate-900">{score}</span> /{" "}
                  {questions.length} câu hỏi. Điểm số đã được ghi nhận vào bảng tiến độ.
                </p>
              </div>
            </div>

            <button
              onClick={handleReset}
              className="rounded-xl bg-amber-600 px-5 py-2.5 text-xs font-bold text-white shadow hover:bg-amber-700 transition-colors shrink-0"
            >
              Thử lại ngay
            </button>
          </div>
        </div>
      )}

      {/* Question Pills Navigator */}
      <div className="flex flex-wrap items-center gap-1.5 rounded-xl border border-slate-200 bg-slate-50 p-3">
        <span className="text-xs font-semibold text-slate-600 mr-2">Danh sách câu:</span>
        {questions.map((q, idx) => {
          const isSelected = selectedAnswers[idx] !== undefined;
          const isCorrect = selectedAnswers[idx] === q.correctAnswer;
          const isCurrent = currentIndex === idx;

          let btnClass = "bg-white text-slate-700 border-slate-200";
          if (isSubmitted) {
            btnClass = isCorrect
              ? "bg-emerald-600 text-white border-emerald-700"
              : "bg-rose-600 text-white border-rose-700";
          } else if (isSelected) {
            btnClass = "bg-amber-100 text-amber-900 border-amber-300 font-bold";
          }
          if (isCurrent) {
            btnClass += " ring-2 ring-amber-600 ring-offset-1";
          }

          return (
            <button
              key={q.id}
              onClick={() => setCurrentIndex(idx)}
              className={`flex h-8 w-8 items-center justify-center rounded-lg border text-xs font-semibold transition-all ${btnClass}`}
            >
              {idx + 1}
            </button>
          );
        })}
      </div>

      {/* Current Question View */}
      {currentQ && (
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between gap-2 border-b border-slate-100 pb-4">
            <div className="flex items-center gap-2">
              <span className="rounded-lg bg-slate-100 px-2.5 py-1 text-xs font-bold text-slate-700">
                Câu {currentIndex + 1} / {questions.length}
              </span>
              <span className="rounded-lg bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-700 border border-blue-100">
                Mức độ: {currentQ.level}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                disabled={currentIndex === 0}
                onClick={() => setCurrentIndex((prev) => Math.max(0, prev - 1))}
                className="rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-50 disabled:opacity-40"
              >
                Câu trước
              </button>
              <button
                disabled={currentIndex === questions.length - 1}
                onClick={() => setCurrentIndex((prev) => Math.min(questions.length - 1, prev + 1))}
                className="rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-50 disabled:opacity-40"
              >
                Câu tiếp
              </button>
            </div>
          </div>

          <h3 className="mt-4 text-base font-bold text-slate-900 leading-relaxed">
            {currentQ.question}
          </h3>

          {/* Options */}
          <div className="mt-5 grid gap-3">
            {currentQ.options.map((opt, optIndex) => {
              const isSelected = selectedAnswers[currentIndex] === optIndex;
              const isCorrect = currentQ.correctAnswer === optIndex;
              const shouldShowStatus = isSubmitted || showExplanation[currentIndex];

              let borderBg = "border-slate-200 bg-white hover:border-amber-300";
              if (shouldShowStatus) {
                if (isCorrect) {
                  borderBg = "border-emerald-500 bg-emerald-50/70 text-emerald-950";
                } else if (isSelected && !isCorrect) {
                  borderBg = "border-rose-400 bg-rose-50/70 text-rose-950";
                }
              } else if (isSelected) {
                borderBg = "border-amber-500 bg-amber-50/50";
              }

              return (
                <button
                  key={optIndex}
                  onClick={() => handleSelectOption(currentIndex, optIndex)}
                  className={`flex items-center justify-between rounded-xl border-2 p-4 text-left text-sm font-medium transition-all ${borderBg}`}
                >
                  <span>{opt}</span>
                  {shouldShowStatus && (
                    <span className="ml-3 shrink-0">
                      {isCorrect ? (
                        <CheckCircle2 className="h-5 w-5 text-emerald-600" />
                      ) : isSelected ? (
                        <XCircle className="h-5 w-5 text-rose-500" />
                      ) : null}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Explanation Box */}
          {(isSubmitted || showExplanation[currentIndex]) && (
            <div className="mt-6 rounded-xl border border-amber-200 bg-amber-50/70 p-4 animate-in fade-in duration-200">
              <div className="flex items-center gap-1.5 text-xs font-bold text-amber-900">
                <HelpCircle className="h-4 w-4 text-amber-700" />
                <span>Giải thích chi tiết:</span>
              </div>
              <p className="mt-1.5 text-sm text-slate-800 leading-relaxed">
                {currentQ.explanation}
              </p>
            </div>
          )}
        </div>
      )}

      {/* AI Generate Extra Questions Button */}
      {!isTimedExam && (
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 rounded-2xl border border-dashed border-amber-300 bg-amber-50/40 p-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-100 text-amber-700">
              <Sparkles className="h-5 w-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900">
                Muốn thử thách thêm với câu hỏi mới?
              </h4>
              <p className="text-xs text-slate-600">
                AI sẽ tạo thêm 3 câu hỏi trắc nghiệm mới sát nội dung SGK Kết nối tri thức.
              </p>
            </div>
          </div>

          <button
            disabled={isGeneratingAI}
            onClick={handleGenerateAIQuizzes}
            className="inline-flex items-center gap-2 rounded-xl bg-amber-600 px-4 py-2 text-xs font-bold text-white shadow-sm hover:bg-amber-700 disabled:opacity-50 shrink-0 transition-colors"
          >
            {isGeneratingAI ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                <span>Đang tạo câu hỏi...</span>
              </>
            ) : (
              <>
                <Sparkles className="h-4 w-4" />
                <span>Tạo câu hỏi AI mới</span>
              </>
            )}
          </button>
        </div>
      )}

      {aiError && (
        <p className="text-xs text-rose-600 text-center font-medium">{aiError}</p>
      )}
    </div>
  );
};
