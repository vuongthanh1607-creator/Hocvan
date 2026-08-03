import React, { useState } from "react";
import { LiteraryWork } from "../types";
import { InteractiveMindMap } from "./InteractiveMindMap";
import { QuizPlayer } from "./QuizPlayer";
import { markWorkCompleted, loadProgress } from "../utils/progressStorage";
import { X, BookOpen, Layers, CheckSquare, Quote, Check, Sparkles, User, FileText, CheckCircle2 } from "lucide-react";

interface WorkDetailModalProps {
  work: LiteraryWork;
  onClose: () => void;
  onAskAI?: (prompt: string) => void;
  onUpdateProgress?: () => void;
}

export const WorkDetailModal: React.FC<WorkDetailModalProps> = ({
  work,
  onClose,
  onAskAI,
  onUpdateProgress,
}) => {
  const [activeTab, setActiveTab] = useState<"theory" | "mindmap" | "quiz">("theory");
  const progress = loadProgress();
  const [isCompleted, setIsCompleted] = useState<boolean>(
    progress.completedWorks.includes(work.id)
  );

  const handleToggleComplete = () => {
    const nextVal = !isCompleted;
    setIsCompleted(nextVal);
    markWorkCompleted(work.id, nextVal);
    if (onUpdateProgress) onUpdateProgress();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 p-3 backdrop-blur-sm sm:p-6">
      <div className="flex h-full max-h-[92vh] w-full max-w-5xl flex-col overflow-hidden rounded-3xl bg-white shadow-2xl">
        {/* Modal Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 bg-slate-50/80 p-4 sm:px-6">
          <div className="flex items-center gap-3">
            <span className="rounded-lg bg-amber-600 px-3 py-1 text-xs font-bold text-white shadow-sm">
              Lớp {work.grade}
            </span>
            <div>
              <h2 className="text-lg font-bold text-slate-900 sm:text-xl">
                {work.title}
              </h2>
              <p className="text-xs text-slate-500">
                {work.author} — <span className="font-medium text-slate-700">{work.genre}</span>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleToggleComplete}
              className={`flex items-center gap-1.5 rounded-xl border px-3 py-1.5 text-xs font-bold transition-all ${
                isCompleted
                  ? "border-emerald-600 bg-emerald-50 text-emerald-800"
                  : "border-slate-300 bg-white text-slate-700 hover:border-amber-400"
              }`}
            >
              <CheckCircle2 className={`h-4 w-4 ${isCompleted ? "text-emerald-600" : "text-slate-400"}`} />
              <span>{isCompleted ? "Đã hoàn thành" : "Đánh dấu đã học"}</span>
            </button>

            <button
              onClick={onClose}
              className="rounded-xl border border-slate-200 bg-white p-2 text-slate-500 hover:bg-slate-100 transition-colors"
              title="Đóng"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center gap-1 border-b border-slate-200 bg-white px-4 sm:px-6 pt-2">
          <button
            onClick={() => setActiveTab("theory")}
            className={`flex items-center gap-2 border-b-2 px-4 py-3 text-xs font-bold transition-all sm:text-sm ${
              activeTab === "theory"
                ? "border-amber-600 text-amber-700"
                : "border-transparent text-slate-500 hover:text-slate-800"
            }`}
          >
            <BookOpen className="h-4 w-4" />
            <span>Lý Thuyết & Phân Tích</span>
          </button>

          <button
            onClick={() => setActiveTab("mindmap")}
            className={`flex items-center gap-2 border-b-2 px-4 py-3 text-xs font-bold transition-all sm:text-sm ${
              activeTab === "mindmap"
                ? "border-amber-600 text-amber-700"
                : "border-transparent text-slate-500 hover:text-slate-800"
            }`}
          >
            <Layers className="h-4 w-4" />
            <span>Sơ Đồ Tư Duy Trực Quan</span>
          </button>

          <button
            onClick={() => setActiveTab("quiz")}
            className={`flex items-center gap-2 border-b-2 px-4 py-3 text-xs font-bold transition-all sm:text-sm ${
              activeTab === "quiz"
                ? "border-amber-600 text-amber-700"
                : "border-transparent text-slate-500 hover:text-slate-800"
            }`}
          >
            <CheckSquare className="h-4 w-4" />
            <span>Luyện Trắc Nghiệm ({work.quizzes.length} câu)</span>
          </button>
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6">
          {activeTab === "theory" && (
            <div className="space-y-6 max-w-4xl mx-auto">
              {/* Author & Background Box */}
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-4">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase text-amber-800">
                    <User className="h-4 w-4 text-amber-600" />
                    <span>Tác Giả: {work.author}</span>
                  </div>
                  <p className="mt-2 text-sm text-slate-700 leading-relaxed">
                    {work.authorBio}
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-4">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase text-amber-800">
                    <FileText className="h-4 w-4 text-amber-600" />
                    <span>Hoàn Cảnh Sáng Tác & Xuất Xứ</span>
                  </div>
                  <p className="mt-2 text-sm text-slate-700 leading-relaxed">
                    {work.context}
                  </p>
                </div>
              </div>

              {/* Summary */}
              <div className="rounded-2xl border-2 border-amber-200 bg-amber-50/50 p-5">
                <h3 className="text-sm font-bold text-amber-900 uppercase">
                  Tóm Tắt & Nội Dung Khái Quát
                </h3>
                <p className="mt-2 text-sm text-slate-800 leading-relaxed">
                  {work.summary}
                </p>
              </div>

              {/* Structure Breakdown */}
              <div className="space-y-3">
                <h3 className="text-base font-bold text-slate-900">
                  Bố Cục Tác Phẩm ({work.structure.length} phần)
                </h3>
                <div className="grid gap-3 sm:grid-cols-2">
                  {work.structure.map((sec, idx) => (
                    <div key={idx} className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                      <h4 className="text-sm font-bold text-amber-700">{sec.title}</h4>
                      <p className="mt-1 text-xs text-slate-600 leading-relaxed">{sec.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Detailed Literary Analysis */}
              <div className="space-y-4">
                <h3 className="text-base font-bold text-slate-900">
                  Phân Tích Chi Tiết Nội Dung & Hình Tượng Trọng Tâm
                </h3>
                {work.contentAnalysis.map((item, idx) => (
                  <div key={idx} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                    <h4 className="text-sm font-bold text-slate-900 border-b border-slate-100 pb-2">
                      {item.heading}
                    </h4>
                    <ul className="mt-3 space-y-2">
                      {item.details.map((dt, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-sm text-slate-700">
                          <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-amber-600 shrink-0"></span>
                          <span>{dt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Artistic Features */}
              <div className="rounded-2xl border border-emerald-200 bg-emerald-50/50 p-5">
                <h3 className="text-sm font-bold text-emerald-900 uppercase">
                  Giá Trị Nghệ Thuật Đặc Sắc
                </h3>
                <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                  {work.artisticFeatures.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs font-medium text-emerald-950">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Iconic Quotes */}
              <div className="space-y-3">
                <h3 className="text-base font-bold text-slate-900">
                  Trích Dẫn Đắt Giá & Văn Mẫu Ôn Thi
                </h3>
                <div className="grid gap-4">
                  {work.keyQuotes.map((qItem, idx) => (
                    <div key={idx} className="rounded-2xl border border-purple-200 bg-purple-50/40 p-4">
                      <div className="flex items-start gap-2">
                        <Quote className="mt-1 h-5 w-5 shrink-0 text-purple-600" />
                        <div>
                          <p className="font-serif text-sm italic font-medium text-slate-900">
                            "{qItem.quote}"
                          </p>
                          <p className="mt-2 text-xs text-slate-600">
                            <span className="font-bold text-purple-900">Ý nghĩa:</span> {qItem.contextOrMeaning}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* AI Prompt Trigger Button */}
              {onAskAI && (
                <div className="flex justify-center pt-2">
                  <button
                    onClick={() =>
                      onAskAI(
                        `Hãy lập dàn ý bài văn nghị luận phân tích chi tiết tác phẩm "${work.title}" (${work.author}, lớp ${work.grade}) và gợi ý cách mở bài ấn tượng đạt điểm cao.`
                      )
                    }
                    className="inline-flex items-center gap-2 rounded-2xl bg-amber-600 px-5 py-3 text-sm font-bold text-white shadow-md hover:bg-amber-700 transition-colors"
                  >
                    <Sparkles className="h-5 w-5" />
                    <span>AI Gia Sư: Lập dàn ý & Mở bài điểm cao cho tác phẩm này</span>
                  </button>
                </div>
              )}
            </div>
          )}

          {activeTab === "mindmap" && (
            <InteractiveMindMap
              rootNode={work.mindMap}
              onAskAI={onAskAI}
            />
          )}

          {activeTab === "quiz" && (
            <QuizPlayer
              workIdOrExamId={work.id}
              title={work.title}
              grade={work.grade}
              initialQuestions={work.quizzes}
              workGenre={work.genre}
              onFinish={() => {
                if (onUpdateProgress) onUpdateProgress();
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
};
