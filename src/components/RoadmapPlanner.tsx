import React, { useState, useEffect } from "react";
import { GradeLevel, GenreType, ExamRoadmap } from "../types";
import { loadProgress, saveStudentRoadmap, updateTargetSettings } from "../utils/progressStorage";
import { LITERATURE_WORKS } from "../data/literatureData";
import { Compass, Sparkles, Loader2, CheckCircle2, Calendar, Target, AlertTriangle, ChevronRight, Check } from "lucide-react";

interface RoadmapPlannerProps {
  onUpdateProgress?: () => void;
  onSelectWorkTitle?: (title: string) => void;
}

const ALL_GENRES: GenreType[] = [
  "Thơ trữ tình",
  "Thơ Đường luật",
  "Thần thoại & Sử thi",
  "Truyện ngắn hiện đại",
  "Kí & Tùy bút",
  "Nghị luận văn học",
  "Nghị luận xã hội",
  "Kịch & Sân khấu",
];

export const RoadmapPlanner: React.FC<RoadmapPlannerProps> = ({
  onUpdateProgress,
  onSelectWorkTitle,
}) => {
  const progress = loadProgress();
  const [selectedGrade, setSelectedGrade] = useState<GradeLevel>(12);
  const [targetScore, setTargetScore] = useState<number>(progress.targetScore || 8.5);
  const [remainingDays, setRemainingDays] = useState<number>(30);
  const [weakGenres, setWeakGenres] = useState<GenreType[]>(
    progress.weakGenres?.length ? progress.weakGenres : ["Thơ trữ tình", "Nghị luận văn học"]
  );
  const [studentNotes, setStudentNotes] = useState<string>("Tập trung ôn đề thi THPT Quốc Gia và cách viết nghị luận xã hội 200 chữ.");
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [roadmap, setRoadmap] = useState<ExamRoadmap | null>(progress.savedRoadmap);
  const [completedTasks, setCompletedTasks] = useState<Set<string>>(new Set());
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const completedWorksCount = progress.completedWorks.length;
  const totalWorksCount = LITERATURE_WORKS.length;

  const toggleWeakGenre = (genre: GenreType) => {
    setWeakGenres((prev) => {
      if (prev.includes(genre)) {
        return prev.filter((g) => g !== genre);
      } else {
        return [...prev, genre];
      }
    });
  };

  const handleGenerateRoadmap = async () => {
    setIsGenerating(true);
    setErrorMessage(null);
    try {
      updateTargetSettings(targetScore, progress.examDate, weakGenres);

      const res = await fetch("/api/gemini/roadmap", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          grade: selectedGrade,
          targetScore,
          remainingDays,
          completedWorksCount,
          totalWorksCount,
          weakGenres,
          studentNotes,
        }),
      });

      const data = await res.json();
      if (data.error && !data.fallbackRoadmap) {
        setErrorMessage(data.error);
      } else {
        const generated: ExamRoadmap = data.roadmap || data.fallbackRoadmap;
        generated.createdAt = new Date().toLocaleDateString("vi-VN");
        setRoadmap(generated);
        saveStudentRoadmap(generated);
        if (onUpdateProgress) onUpdateProgress();
      }
    } catch (err: any) {
      setErrorMessage("Không thể kết nối để tạo lộ trình. Vui lòng kiểm tra kết nối mạng.");
    } finally {
      setIsGenerating(false);
    }
  };

  const toggleTask = (taskName: string) => {
    setCompletedTasks((prev) => {
      const next = new Set(prev);
      if (next.has(taskName)) {
        next.delete(taskName);
      } else {
        next.add(taskName);
      }
      return next;
    });
  };

  return (
    <div className="flex flex-col gap-8">
      {/* Top Banner */}
      <div className="rounded-3xl border border-amber-200 bg-gradient-to-r from-slate-900 via-slate-800 to-amber-950 p-6 text-white shadow-lg sm:p-8">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-500/20 px-3 py-1 text-xs font-bold text-amber-300 uppercase tracking-wide">
            <Compass className="h-4 w-4" />
            <span>Đề Xuất Lộ Trình Ôn Thi Ngữ Văn Cá Nhân Hóa</span>
          </span>
          <h2 className="mt-3 text-xl font-bold sm:text-2xl">
            Thiết Lập Mục Tiêu & Tạo Lộ Trình Ôn Thi Sát Năng Lực
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
            Hệ thống phân tích điểm yếu từ lịch sử luyện trắc nghiệm và tiến độ học tập của bạn để đề xuất lộ trình ôn thi phù hợp cho kì thi THPT Quốc Gia hoặc Kiểm tra Học kì.
          </p>
        </div>
      </div>

      {/* Target Setup Grid */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Left column: Setup parameters */}
        <div className="lg:col-span-1 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-6">
          <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
            <Target className="h-5 w-5 text-amber-600" />
            <span>Thông Số Mục Tiêu Ôn Thi</span>
          </h3>

          {/* Grade selection */}
          <div>
            <label className="block text-xs font-bold uppercase text-slate-500 mb-2">
              Lớp Học / Kì Thi Mục Tiêu
            </label>
            <div className="flex rounded-xl border border-slate-200 bg-slate-100 p-1">
              {([10, 11, 12] as GradeLevel[]).map((g) => (
                <button
                  key={g}
                  onClick={() => setSelectedGrade(g)}
                  className={`flex-1 rounded-lg py-2 text-xs font-bold transition-all ${
                    selectedGrade === g
                      ? "bg-amber-600 text-white shadow"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  Lớp {g}
                </button>
              ))}
            </div>
          </div>

          {/* Target Score */}
          <div>
            <label className="block text-xs font-bold uppercase text-slate-500 mb-2">
              Mục Tiêu Điểm Số: <span className="text-amber-600 font-extrabold text-sm">{targetScore}+</span>
            </label>
            <div className="grid grid-cols-4 gap-2">
              {[7.5, 8.0, 8.5, 9.0].map((sc) => (
                <button
                  key={sc}
                  onClick={() => setTargetScore(sc)}
                  className={`rounded-xl border py-2 text-xs font-bold transition-all ${
                    targetScore === sc
                      ? "border-amber-600 bg-amber-50 text-amber-900"
                      : "border-slate-200 bg-white text-slate-700 hover:border-amber-300"
                  }`}
                >
                  {sc}+
                </button>
              ))}
            </div>
          </div>

          {/* Remaining Days */}
          <div>
            <label className="block text-xs font-bold uppercase text-slate-500 mb-2">
              Thời Gian Còn Lại: <span className="text-amber-600 font-extrabold text-sm">{remainingDays} ngày</span>
            </label>
            <input
              type="range"
              min={7}
              max={90}
              step={7}
              value={remainingDays}
              onChange={(e) => setRemainingDays(Number(e.target.value))}
              className="w-full accent-amber-600"
            />
            <div className="flex justify-between text-[11px] text-slate-400 mt-1">
              <span>Cấp tốc (7 ngày)</span>
              <span>1 tháng</span>
              <span>3 tháng</span>
            </div>
          </div>

          {/* Weak Genres */}
          <div>
            <label className="block text-xs font-bold uppercase text-slate-500 mb-2">
              Thể Loại Cần Ôn Kỹ (Điểm yếu):
            </label>
            <div className="flex flex-wrap gap-1.5">
              {ALL_GENRES.map((gn) => {
                const isSel = weakGenres.includes(gn);
                return (
                  <button
                    key={gn}
                    onClick={() => toggleWeakGenre(gn)}
                    className={`rounded-lg px-2.5 py-1 text-xs font-semibold transition-all ${
                      isSel
                        ? "bg-amber-600 text-white shadow-sm"
                        : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                    }`}
                  >
                    {gn}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Notes */}
          <div>
            <label className="block text-xs font-bold uppercase text-slate-500 mb-1">
              Ghi Chú Đặc Biệt cho AI
            </label>
            <textarea
              rows={2}
              value={studentNotes}
              onChange={(e) => setStudentNotes(e.target.value)}
              placeholder="Ví dụ: Chưa tự tin phần mở bài nghị luận văn học..."
              className="w-full rounded-xl border border-slate-300 bg-slate-50 p-2.5 text-xs text-slate-800 focus:border-amber-500 focus:bg-white focus:outline-none"
            />
          </div>

          {/* Generate Button */}
          <button
            disabled={isGenerating}
            onClick={handleGenerateRoadmap}
            className="w-full inline-flex items-center justify-center gap-2 rounded-2xl bg-amber-600 py-3.5 text-xs font-bold text-white shadow-md hover:bg-amber-700 disabled:opacity-50 transition-colors"
          >
            {isGenerating ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                <span>AI Đang tạo lộ trình...</span>
              </>
            ) : (
              <>
                <Sparkles className="h-4 w-4" />
                <span>Tạo Lộ Trình Ôn Thi AI</span>
              </>
            )}
          </button>

          {errorMessage && (
            <p className="text-xs text-rose-600 font-medium text-center">{errorMessage}</p>
          )}
        </div>

        {/* Right column: Display Roadmap */}
        <div className="lg:col-span-2 space-y-6">
          {roadmap ? (
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8 space-y-6 animate-in fade-in duration-300">
              {/* Roadmap Header */}
              <div className="flex flex-wrap items-start justify-between gap-4 border-b border-slate-100 pb-5">
                <div>
                  <span className="rounded-md bg-amber-100 px-2.5 py-0.5 text-xs font-bold text-amber-900">
                    Lộ Trình Đề Xuất cho Lớp {selectedGrade}
                  </span>
                  <h3 className="mt-2 text-lg sm:text-xl font-bold text-slate-900">
                    {roadmap.title}
                  </h3>
                  <p className="mt-1 text-xs text-slate-500">
                    Ngày tạo: {roadmap.createdAt || "Hôm nay"} — Mục tiêu: {targetScore}+
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <span className="rounded-xl border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-xs font-bold text-emerald-800">
                    Khuyến nghị từ hệ thống AI
                  </span>
                </div>
              </div>

              {/* Overview */}
              <div className="rounded-2xl border-2 border-amber-200 bg-amber-50/60 p-4">
                <h4 className="text-xs font-bold uppercase text-amber-900">
                  Định Hướng Chiến Lược Tổng Quan
                </h4>
                <p className="mt-1.5 text-sm text-slate-800 leading-relaxed">
                  {roadmap.overview}
                </p>
              </div>

              {/* Phases */}
              <div className="space-y-5">
                <h4 className="text-base font-bold text-slate-900">
                  Các Giai Đoạn Ôn Tập Chi Tiết ({roadmap.phases.length} giai đoạn)
                </h4>

                {roadmap.phases.map((phase, idx) => (
                  <div key={idx} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                    <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
                      <h5 className="text-sm font-bold text-slate-900">
                        {phase.phaseName}
                      </h5>
                      <span className="rounded-lg bg-slate-100 px-2.5 py-1 text-xs font-bold text-slate-700">
                        {phase.duration}
                      </span>
                    </div>

                    <div className="mt-4 space-y-2.5">
                      {phase.tasks.map((t, i) => {
                        const isChecked = completedTasks.has(t);
                        return (
                          <div
                            key={i}
                            onClick={() => toggleTask(t)}
                            className={`flex items-start gap-3 rounded-xl border p-3 transition-colors cursor-pointer ${
                              isChecked
                                ? "border-emerald-200 bg-emerald-50/50 text-emerald-950"
                                : "border-slate-100 bg-slate-50 hover:bg-slate-100/80 text-slate-800"
                            }`}
                          >
                            <div className="mt-0.5 shrink-0">
                              <CheckCircle2
                                className={`h-4 w-4 ${
                                  isChecked ? "text-emerald-600" : "text-slate-300"
                                }`}
                              />
                            </div>
                            <span className={`text-xs sm:text-sm font-medium leading-relaxed ${
                              isChecked ? "line-through text-slate-500" : ""
                            }`}>
                              {t}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>

              {/* Advice */}
              {roadmap.advice && (
                <div className="rounded-2xl border border-purple-200 bg-purple-50/50 p-4">
                  <h4 className="text-xs font-bold uppercase text-purple-900">
                    Lời Khuyên Sư Phạm Của Gia Sư AI
                  </h4>
                  <p className="mt-1 text-xs sm:text-sm text-slate-800 italic leading-relaxed">
                    "{roadmap.advice}"
                  </p>
                </div>
              )}
            </div>
          ) : (
            <div className="flex h-full flex-col items-center justify-center rounded-3xl border-2 border-dashed border-slate-300 bg-white p-12 text-center">
              <Compass className="h-12 w-12 text-slate-300" />
              <h4 className="mt-4 text-base font-bold text-slate-800">
                Chưa Có Lộ Trình Ôn Thi
              </h4>
              <p className="mt-1 text-xs text-slate-500 max-w-sm">
                Hãy điều chỉnh mục tiêu bên trái và bấm nút <span className="font-bold">"Tạo Lộ Trình Ôn Thi AI"</span> để nhận kế hoạch chi tiết ngay.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
