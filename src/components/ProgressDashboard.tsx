import React, { useState } from "react";
import { StudentProgress, GenreType } from "../types";
import { loadProgress, resetProgress, exportProgressJSON, importProgressJSON } from "../utils/progressStorage";
import { LITERATURE_WORKS } from "../data/literatureData";
import { Award, Flame, CheckCircle2, Clock, Download, Upload, Trash2, BarChart3, TrendingUp, BookOpen } from "lucide-react";

interface ProgressDashboardProps {
  onUpdateProgress?: () => void;
}

const GENRES_LIST: GenreType[] = [
  "Thơ trữ tình",
  "Thơ Đường luật",
  "Thần thoại & Sử thi",
  "Truyện ngắn hiện đại",
  "Kí & Tùy bút",
  "Nghị luận văn học",
  "Nghị luận xã hội",
];

export const ProgressDashboard: React.FC<ProgressDashboardProps> = ({
  onUpdateProgress,
}) => {
  const [progress, setProgress] = useState<StudentProgress>(loadProgress());
  const [importText, setImportText] = useState<string>("");
  const [showBackupModal, setShowBackupModal] = useState<boolean>(false);
  const [message, setMessage] = useState<string | null>(null);

  const completedCount = progress.completedWorks.length;
  const totalCount = LITERATURE_WORKS.length;
  const completionRate = Math.round((completedCount / totalCount) * 100);

  // Average quiz score
  const quizScoresArray: number[] = Object.values(progress.quizScores || {}).map((val) => Number(val) || 0);
  const avgScore =
    quizScoresArray.length > 0
      ? Math.round(
          quizScoresArray.reduce((sum: number, s: number) => sum + s, 0) /
            quizScoresArray.length
        )
      : 0;

  // Grade breakdown
  const countGrade = (g: 10 | 11 | 12) => {
    const totalG = LITERATURE_WORKS.filter((w) => w.grade === g).length;
    const completedG = LITERATURE_WORKS.filter(
      (w) => w.grade === g && progress.completedWorks.includes(w.id)
    ).length;
    return { completedG, totalG };
  };

  const grade10Stats = countGrade(10);
  const grade11Stats = countGrade(11);
  const grade12Stats = countGrade(12);

  const handleReset = () => {
    if (window.confirm("Bạn có chắc muốn đặt lại toàn bộ tiến độ học tập và điểm thi thử?")) {
      const fresh = resetProgress();
      setProgress(fresh);
      if (onUpdateProgress) onUpdateProgress();
    }
  };

  const handleExport = () => {
    const json = exportProgressJSON();
    navigator.clipboard.writeText(json);
    setMessage("Đã sao chép chuỗi dữ liệu tiến độ vào Clipboard!");
    setTimeout(() => setMessage(null), 3000);
  };

  const handleImport = () => {
    if (!importText.trim()) return;
    const ok = importProgressJSON(importText);
    if (ok) {
      setProgress(loadProgress());
      setImportText("");
      setShowBackupModal(false);
      if (onUpdateProgress) onUpdateProgress();
      setMessage("Khôi phục tiến độ học tập thành công!");
      setTimeout(() => setMessage(null), 3000);
    } else {
      alert("Định dạng JSON không hợp lệ.");
    }
  };

  return (
    <div className="flex flex-col gap-8">
      {/* Top Banner */}
      <div className="rounded-3xl border border-amber-200 bg-gradient-to-r from-amber-700 via-amber-800 to-slate-900 p-6 text-white shadow-md sm:p-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/20 px-3 py-1 text-xs font-bold text-amber-100 uppercase tracking-wide backdrop-blur-sm">
              <TrendingUp className="h-4 w-4" />
              <span>Báo Cáo Tiến Độ & Năng Lực Học Tập</span>
            </span>
            <h2 className="mt-3 text-xl font-bold sm:text-2xl">
              Hành Trình Chinh Phục Ngữ Văn Kết Nối Tri Thức
            </h2>
            <p className="mt-1 text-xs sm:text-sm text-amber-100">
              Mục tiêu điểm thi của bạn: <span className="font-extrabold text-amber-300">{progress.targetScore}+</span> — Hãy duy trì nhịp học mỗi ngày!
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowBackupModal(true)}
              className="flex items-center gap-1.5 rounded-xl bg-white/10 px-4 py-2 text-xs font-bold text-white hover:bg-white/20 transition-colors"
            >
              <Download className="h-4 w-4" />
              <span>Sao lưu / Khôi phục</span>
            </button>
            <button
              onClick={handleReset}
              className="flex items-center gap-1.5 rounded-xl bg-rose-600 px-3 py-2 text-xs font-bold text-white hover:bg-rose-700 transition-colors"
              title="Đặt lại tiến độ"
            >
              <Trash2 className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {message && (
        <div className="rounded-2xl border border-emerald-300 bg-emerald-50 p-4 text-center text-xs font-bold text-emerald-800">
          {message}
        </div>
      )}

      {/* Hero Stats Grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {/* Completed Works */}
        <div className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-amber-100 text-amber-700">
            <BookOpen className="h-6 w-6" />
          </div>
          <div>
            <p className="text-xs font-bold uppercase text-slate-500">
              Tác phẩm đã nắm vững
            </p>
            <h4 className="text-xl font-extrabold text-slate-900 mt-0.5">
              {completedCount} / {totalCount}
            </h4>
            <p className="text-[11px] font-semibold text-emerald-600 mt-0.5">
              Đạt {completionRate}% chương trình
            </p>
          </div>
        </div>

        {/* Average Score */}
        <div className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
            <Award className="h-6 w-6" />
          </div>
          <div>
            <p className="text-xs font-bold uppercase text-slate-500">
              Điểm trắc nghiệm TB
            </p>
            <h4 className="text-xl font-extrabold text-slate-900 mt-0.5">
              {avgScore}%
            </h4>
            <p className="text-[11px] font-semibold text-slate-500 mt-0.5">
              {quizScoresArray.length} bài thi đã làm
            </p>
          </div>
        </div>

        {/* Study Streak */}
        <div className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-orange-100 text-orange-600">
            <Flame className="h-6 w-6" />
          </div>
          <div>
            <p className="text-xs font-bold uppercase text-slate-500">
              Chuỗi ngày học tập
            </p>
            <h4 className="text-xl font-extrabold text-slate-900 mt-0.5">
              {progress.studyStreak || 1} ngày
            </h4>
            <p className="text-[11px] font-semibold text-orange-600 mt-0.5">
              Duy trì lửa học tập!
            </p>
          </div>
        </div>

        {/* Target Exam Date */}
        <div className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-100 text-blue-700">
            <Clock className="h-6 w-6" />
          </div>
          <div>
            <p className="text-xs font-bold uppercase text-slate-500">
              Mục tiêu điểm số
            </p>
            <h4 className="text-xl font-extrabold text-slate-900 mt-0.5">
              {progress.targetScore || 8.5}+
            </h4>
            <p className="text-[11px] font-semibold text-slate-500 mt-0.5">
              Ngày thi: {progress.examDate || "Sắp tới"}
            </p>
          </div>
        </div>
      </div>

      {/* Grade Level Breakdown */}
      <div className="grid gap-6 lg:grid-cols-3">
        {[
          { label: "Lớp 10", stats: grade10Stats, color: "bg-amber-600" },
          { label: "Lớp 11", stats: grade11Stats, color: "bg-blue-600" },
          { label: "Lớp 12", stats: grade12Stats, color: "bg-emerald-600" },
        ].map((item, idx) => {
          const pct = Math.round(
            item.stats.totalG > 0
              ? (item.stats.completedG / item.stats.totalG) * 100
              : 0
          );
          return (
            <div
              key={idx}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="flex items-center justify-between">
                <h4 className="text-base font-bold text-slate-900">
                  {item.label} (Kết nối tri thức)
                </h4>
                <span className="text-sm font-bold text-slate-700">
                  {item.stats.completedG} / {item.stats.totalG} tác phẩm
                </span>
              </div>

              {/* Progress bar */}
              <div className="mt-3 h-3 w-full overflow-hidden rounded-full bg-slate-100">
                <div
                  className={`h-full transition-all duration-500 ${item.color}`}
                  style={{ width: `${pct}%` }}
                ></div>
              </div>
              <p className="mt-2 text-right text-xs font-semibold text-slate-500">
                Hoàn thành {pct}%
              </p>
            </div>
          );
        })}
      </div>

      {/* Competency by Genre Radar/Bar View */}
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
          <BarChart3 className="h-5 w-5 text-amber-600" />
          <span>Biểu Đồ Năng Lực Theo Từng Thể Loại Văn Học</span>
        </h3>
        <p className="text-xs text-slate-500 mt-1">
          Hệ thống tính toán tỉ lệ nắm vững tác phẩm và điểm thi trắc nghiệm trên từng thể loại để xác định điểm mạnh / điểm yếu.
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {GENRES_LIST.map((gn) => {
            const worksOfGenre = LITERATURE_WORKS.filter((w) => w.genre === gn);
            const totalGCount = worksOfGenre.length;
            if (totalGCount === 0) return null;

            const completedGCount = worksOfGenre.filter((w) =>
              progress.completedWorks.includes(w.id)
            ).length;
            const pct = Math.round((completedGCount / totalGCount) * 100);

            return (
              <div key={gn} className="rounded-xl border border-slate-100 bg-slate-50 p-4">
                <div className="flex items-center justify-between text-xs font-bold text-slate-800">
                  <span>{gn}</span>
                  <span>{completedGCount} / {totalGCount} bài</span>
                </div>
                <div className="mt-2 h-2.5 w-full overflow-hidden rounded-full bg-slate-200">
                  <div
                    className="h-full bg-amber-600 transition-all duration-500"
                    style={{ width: `${pct}%` }}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Recent Quiz History */}
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <h3 className="text-base font-bold text-slate-900">
          Lịch Sử Làm Bài Trắc Nghiệm & Đề Thi Thử
        </h3>
        {progress.quizHistory.length === 0 ? (
          <p className="mt-3 text-xs text-slate-500 italic">
            Bạn chưa làm bài trắc nghiệm hoặc đề thi thử nào. Hãy sang mục "Luyện Thi & Trắc Nghiệm" để bắt đầu nhé.
          </p>
        ) : (
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="border-b border-slate-200 text-slate-500 font-bold uppercase">
                <tr>
                  <th className="pb-3">Tên bài thi / Đề thi</th>
                  <th className="pb-3">Thời gian</th>
                  <th className="pb-3">Số câu đúng</th>
                  <th className="pb-3">Tỉ lệ điểm</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {progress.quizHistory.map((item) => {
                  const pct = Math.round((item.score / item.totalQuestions) * 100);
                  return (
                    <tr key={item.id} className="hover:bg-slate-50/70">
                      <td className="py-3 font-semibold text-slate-900">
                        {item.title}
                      </td>
                      <td className="py-3 text-slate-500">{item.date}</td>
                      <td className="py-3 font-medium text-slate-700">
                        {item.score} / {item.totalQuestions}
                      </td>
                      <td className="py-3">
                        <span
                          className={`inline-block rounded-md px-2 py-0.5 font-bold ${
                            pct >= 80
                              ? "bg-emerald-100 text-emerald-800"
                              : pct >= 50
                              ? "bg-amber-100 text-amber-800"
                              : "bg-rose-100 text-rose-800"
                          }`}
                        >
                          {pct}%
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Backup/Restore Modal */}
      {showBackupModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 p-4 backdrop-blur-sm">
          <div className="w-full max-w-md rounded-3xl bg-white p-6 shadow-2xl space-y-4">
            <h3 className="text-lg font-bold text-slate-900">
              Sao Lưu & Khôi Phục Tiến Độ
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Dữ liệu của bạn được lưu an toàn trong trình duyệt (localStorage). Bạn có thể sao chép chuỗi JSON dưới đây để lưu trữ hoặc chuyển sang thiết bị khác.
            </p>

            <button
              onClick={handleExport}
              className="w-full flex items-center justify-center gap-2 rounded-xl bg-amber-600 py-2.5 text-xs font-bold text-white hover:bg-amber-700"
            >
              <Download className="h-4 w-4" />
              <span>Sao chép chuỗi dữ liệu (Export JSON)</span>
            </button>

            <div className="border-t border-slate-200 pt-3">
              <label className="block text-xs font-bold uppercase text-slate-500 mb-1">
                Dán chuỗi JSON để khôi phục (Import JSON)
              </label>
              <textarea
                rows={3}
                value={importText}
                onChange={(e) => setImportText(e.target.value)}
                placeholder="Dán mã JSON tiến độ vào đây..."
                className="w-full rounded-xl border border-slate-300 bg-slate-50 p-2 text-xs text-slate-800 font-mono focus:border-amber-500 focus:bg-white focus:outline-none"
              />
              <button
                onClick={handleImport}
                disabled={!importText.trim()}
                className="mt-2 w-full flex items-center justify-center gap-2 rounded-xl bg-slate-900 py-2 text-xs font-bold text-white hover:bg-slate-800 disabled:opacity-40"
              >
                <Upload className="h-4 w-4" />
                <span>Khôi Phục Tiến Độ</span>
              </button>
            </div>

            <button
              onClick={() => setShowBackupModal(false)}
              className="w-full rounded-xl border border-slate-200 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-100"
            >
              Đóng
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
