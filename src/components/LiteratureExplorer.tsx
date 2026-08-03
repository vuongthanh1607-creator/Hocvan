import React, { useState, useMemo } from "react";
import { LiteraryWork, GradeLevel, GenreType } from "../types";
import { loadProgress, markWorkCompleted } from "../utils/progressStorage";
import { Search, Filter, BookOpen, Layers, CheckCircle2, Award, Sparkles, ChevronRight, Check } from "lucide-react";

interface LiteratureExplorerProps {
  works: LiteraryWork[];
  onSelectWork: (work: LiteraryWork) => void;
  onAskAI?: (prompt: string) => void;
  onUpdateProgress?: () => void;
  initialGradeFilter?: GradeLevel | "ALL";
}

const GENRES: ("Tất cả" | GenreType)[] = [
  "Tất cả",
  "Thơ trữ tình",
  "Thơ Đường luật",
  "Thần thoại & Sử thi",
  "Truyện ngắn hiện đại",
  "Kí & Tùy bút",
  "Nghị luận văn học",
  "Nghị luận xã hội",
  "Kịch & Sân khấu",
];

export const LiteratureExplorer: React.FC<LiteratureExplorerProps> = ({
  works,
  onSelectWork,
  onAskAI,
  onUpdateProgress,
  initialGradeFilter = "ALL",
}) => {
  const [selectedGrade, setSelectedGrade] = useState<GradeLevel | "ALL">(initialGradeFilter);
  const [selectedGenre, setSelectedGenre] = useState<"Tất cả" | GenreType>("Tất cả");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [onlyCompleted, setOnlyCompleted] = useState<boolean>(false);

  const progress = loadProgress();

  const filteredWorks = useMemo(() => {
    return works.filter((w) => {
      if (selectedGrade !== "ALL" && w.grade !== selectedGrade) return false;
      if (selectedGenre !== "Tất cả" && w.genre !== selectedGenre) return false;
      if (onlyCompleted && !progress.completedWorks.includes(w.id)) return false;
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const titleMatch = w.title.toLowerCase().includes(q);
        const authorMatch = w.author.toLowerCase().includes(q);
        const genreMatch = w.genre.toLowerCase().includes(q);
        const unitMatch = w.unit.toLowerCase().includes(q);
        if (!titleMatch && !authorMatch && !genreMatch && !unitMatch) return false;
      }
      return true;
    });
  }, [works, selectedGrade, selectedGenre, onlyCompleted, searchQuery, progress]);

  const handleToggleCompleted = (workId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const isDone = progress.completedWorks.includes(workId);
    markWorkCompleted(workId, !isDone);
    if (onUpdateProgress) onUpdateProgress();
  };

  const getGenreColor = (genre: GenreType) => {
    switch (genre) {
      case "Thơ trữ tình":
      case "Thơ Đường luật":
        return "bg-purple-100 text-purple-800 border-purple-200";
      case "Truyện ngắn hiện đại":
      case "Tiểu thuyết & Truyện truyền kì":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "Thần thoại & Sử thi":
        return "bg-amber-100 text-amber-800 border-amber-200";
      case "Kí & Tùy bút":
        return "bg-emerald-100 text-emerald-800 border-emerald-200";
      default:
        return "bg-slate-100 text-slate-800 border-slate-200";
    }
  };

  return (
    <div className="flex flex-col gap-6">
      {/* Search & Filter Top Bar */}
      <div className="flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-6">
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
          {/* Grade Selector Tabs */}
          <div className="flex rounded-xl border border-slate-200 bg-slate-100 p-1">
            {(["ALL", 10, 11, 12] as (GradeLevel | "ALL")[]).map((g) => (
              <button
                key={g}
                onClick={() => setSelectedGrade(g)}
                className={`flex-1 sm:flex-none rounded-lg px-4 py-2 text-xs font-bold transition-all sm:text-sm ${
                  selectedGrade === g
                    ? "bg-amber-600 text-white shadow-sm"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {g === "ALL" ? "Tất cả (10-11-12)" : `Lớp ${g}`}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative flex-1 sm:max-w-xs">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input
              type="text"
              placeholder="Tìm tên tác phẩm, tác giả..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-xl border border-slate-300 bg-slate-50 py-2 pl-10 pr-4 text-sm text-slate-900 placeholder:text-slate-400 focus:border-amber-500 focus:bg-white focus:outline-none"
            />
          </div>
        </div>

        {/* Genre Filters & Completion toggle */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-slate-100 pt-4">
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="text-xs font-semibold text-slate-500 mr-1">Thể loại:</span>
            {GENRES.map((gn) => (
              <button
                key={gn}
                onClick={() => setSelectedGenre(gn)}
                className={`rounded-lg px-3 py-1 text-xs font-semibold transition-colors ${
                  selectedGenre === gn
                    ? "bg-slate-900 text-white"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {gn}
              </button>
            ))}
          </div>

          <button
            onClick={() => setOnlyCompleted((prev) => !prev)}
            className={`flex items-center gap-1.5 rounded-lg border px-3 py-1 text-xs font-semibold transition-colors ${
              onlyCompleted
                ? "border-emerald-600 bg-emerald-50 text-emerald-800"
                : "border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
            }`}
          >
            <CheckCircle2 className={`h-3.5 w-3.5 ${onlyCompleted ? "text-emerald-600" : "text-slate-400"}`} />
            <span>Chỉ hiện bài đã học</span>
          </button>
        </div>
      </div>

      {/* Works Grid */}
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-bold uppercase text-slate-500 tracking-wide">
          Hiển thị {filteredWorks.length} tác phẩm theo chương trình sách Kết nối tri thức
        </h3>
        {onAskAI && (
          <button
            onClick={() =>
              onAskAI(
                `Hãy tóm tắt nhanh và so sánh điểm đặc sắc giữa các tác phẩm trọng tâm lớp ${
                  selectedGrade === "ALL" ? "10, 11 và 12" : selectedGrade
                } sách Kết nối tri thức.`
              )
            }
            className="flex items-center gap-1 text-xs font-semibold text-amber-700 hover:text-amber-800 underline"
          >
            <Sparkles className="h-3.5 w-3.5" />
            <span>AI So sánh tổng hợp Lớp {selectedGrade === "ALL" ? "10-11-12" : selectedGrade}</span>
          </button>
        )}
      </div>

      {filteredWorks.length === 0 ? (
        <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-white p-12 text-center">
          <BookOpen className="h-10 w-10 text-slate-300" />
          <h4 className="mt-3 text-base font-bold text-slate-800">
            Không tìm thấy tác phẩm nào
          </h4>
          <p className="mt-1 text-xs text-slate-500">
            Hãy thử đổi từ khóa tìm kiếm hoặc bỏ chọn bộ lọc thể loại.
          </p>
          <button
            onClick={() => {
              setSelectedGrade("ALL");
              setSelectedGenre("Tất cả");
              setSearchQuery("");
              setOnlyCompleted(false);
            }}
            className="mt-4 rounded-xl bg-amber-600 px-4 py-2 text-xs font-bold text-white hover:bg-amber-700"
          >
            Xem toàn bộ danh sách
          </button>
        </div>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filteredWorks.map((work) => {
            const isDone = progress.completedWorks.includes(work.id);
            const bestScore = progress.quizScores[work.id];

            return (
              <div
                key={work.id}
                onClick={() => onSelectWork(work)}
                className="group relative flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-1 hover:border-amber-400 hover:shadow-md cursor-pointer"
              >
                <div>
                  {/* Top Badges */}
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-1.5">
                      <span className="rounded-md bg-amber-600 px-2 py-0.5 text-[11px] font-bold text-white">
                        Lớp {work.grade}
                      </span>
                      <span className={`rounded-md border px-2 py-0.5 text-[11px] font-semibold ${getGenreColor(work.genre)}`}>
                        {work.genre}
                      </span>
                    </div>

                    <button
                      onClick={(e) => handleToggleCompleted(work.id, e)}
                      className={`rounded-lg p-1 transition-colors ${
                        isDone
                          ? "text-emerald-600 hover:bg-emerald-50"
                          : "text-slate-300 hover:bg-slate-100 hover:text-slate-500"
                      }`}
                      title={isDone ? "Đã học" : "Đánh dấu đã học"}
                    >
                      <CheckCircle2 className="h-5 w-5" />
                    </button>
                  </div>

                  {/* Title & Author */}
                  <h4 className="mt-3 text-base font-bold text-slate-900 group-hover:text-amber-700 transition-colors">
                    {work.title}
                  </h4>
                  <p className="text-xs font-medium text-slate-600 mt-0.5">
                    {work.author} — <span className="text-slate-400">{work.period}</span>
                  </p>
                  <p className="text-xs text-slate-500 mt-2 line-clamp-2 leading-relaxed">
                    {work.summary}
                  </p>
                </div>

                {/* Bottom Stats & Action */}
                <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1 text-xs font-medium text-slate-600">
                      <Layers className="h-3.5 w-3.5 text-amber-600" />
                      <span>Sơ đồ tư duy</span>
                    </span>

                    {bestScore !== undefined && (
                      <span className={`flex items-center gap-1 rounded-md px-2 py-0.5 text-[11px] font-bold ${
                        bestScore >= 80 ? "bg-emerald-100 text-emerald-800" : "bg-amber-100 text-amber-800"
                      }`}>
                        <Award className="h-3 w-3" />
                        <span>{bestScore}%</span>
                      </span>
                    )}
                  </div>

                  <span className="inline-flex items-center gap-1 text-xs font-bold text-amber-600 group-hover:underline">
                    <span>Học ngay</span>
                    <ChevronRight className="h-4 w-4" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
