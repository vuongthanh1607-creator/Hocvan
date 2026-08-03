import React from "react";
import { BookOpen, Layers, CheckSquare, Compass, TrendingUp, Sparkles, Flame, Award } from "lucide-react";
import { loadProgress } from "../utils/progressStorage";

export type NavTab = "explore" | "practice" | "roadmap" | "progress";

interface HeaderProps {
  activeTab: NavTab;
  onTabChange: (tab: NavTab) => void;
  onOpenAIAssistant: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  onTabChange,
  onOpenAIAssistant,
}) => {
  const progress = loadProgress();

  return (
    <header className="sticky top-0 z-40 border-b border-black/5 bg-white/95 backdrop-blur-md shadow-xs">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-4 py-4 sm:px-6">
        {/* Logo & Title */}
        <div
          onClick={() => onTabChange("explore")}
          className="flex items-center gap-3 cursor-pointer group"
        >
          <div className="w-10 h-10 bg-[#3E503C] rounded-lg flex items-center justify-center text-white shadow-sm group-hover:scale-105 transition-transform">
            <BookOpen className="h-5 w-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-xl font-bold tracking-tight text-[#2C3333]">
                Học Văn <span className="text-[#3E503C]">360°</span>
              </h1>
              <span className="hidden sm:inline-block rounded-full bg-[#E8E6DF] px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#2C3333]">
                Kết nối tri thức
              </span>
            </div>
            <p className="text-xs text-gray-500 font-medium uppercase tracking-widest">
              Lý thuyết — Sơ đồ tư duy — Trắc nghiệm — Lộ trình ôn thi
            </p>
          </div>
        </div>

        {/* Center/Right controls */}
        <div className="flex items-center gap-2.5">
          {/* Study streak badge */}
          <div
            onClick={() => onTabChange("progress")}
            className="flex items-center gap-1.5 rounded-full bg-[#E8E6DF] px-3.5 py-2 text-xs font-bold text-[#2C3333] cursor-pointer hover:bg-[#DFDCD3] transition-colors border border-transparent"
            title="Chuỗi ngày học tập"
          >
            <Flame className="h-4 w-4 text-orange-600" />
            <span>{progress.studyStreak || 1} ngày liên tục</span>
          </div>

          {/* AI Tutor trigger button */}
          <button
            onClick={onOpenAIAssistant}
            className="flex items-center gap-1.5 rounded-full bg-[#3E503C] px-4 py-2 text-xs font-semibold text-white shadow-sm hover:bg-[#2F3E2D] transition-all"
          >
            <Sparkles className="h-4 w-4" />
            <span>Gia Sư AI</span>
          </button>
        </div>
      </div>

      {/* Bento Pill Navigation Row */}
      <div className="border-t border-black/5 bg-[#F8F7F2]">
        <div className="mx-auto flex max-w-7xl items-center gap-2 overflow-x-auto px-4 py-3 sm:px-6">
          <button
            onClick={() => onTabChange("explore")}
            className={`flex items-center gap-2 rounded-full px-4 py-2 text-xs sm:text-sm font-semibold whitespace-nowrap transition-all ${
              activeTab === "explore"
                ? "bg-[#3E503C] text-white shadow-xs"
                : "bg-[#E8E6DF] text-[#2C3333] hover:bg-[#DFDCD3] border border-transparent"
            }`}
          >
            <BookOpen className="h-4 w-4" />
            <span>Lý Thuyết & Sơ Đồ Tư Duy</span>
          </button>

          <button
            onClick={() => onTabChange("practice")}
            className={`flex items-center gap-2 rounded-full px-4 py-2 text-xs sm:text-sm font-semibold whitespace-nowrap transition-all ${
              activeTab === "practice"
                ? "bg-[#3E503C] text-white shadow-xs"
                : "bg-[#E8E6DF] text-[#2C3333] hover:bg-[#DFDCD3] border border-transparent"
            }`}
          >
            <CheckSquare className="h-4 w-4" />
            <span>Luyện Trắc Nghiệm & Đề Thi</span>
          </button>

          <button
            onClick={() => onTabChange("roadmap")}
            className={`flex items-center gap-2 rounded-full px-4 py-2 text-xs sm:text-sm font-semibold whitespace-nowrap transition-all ${
              activeTab === "roadmap"
                ? "bg-[#3E503C] text-white shadow-xs"
                : "bg-[#E8E6DF] text-[#2C3333] hover:bg-[#DFDCD3] border border-transparent"
            }`}
          >
            <Compass className="h-4 w-4" />
            <span>Lộ Trình Ôn Thi THPT</span>
          </button>

          <button
            onClick={() => onTabChange("progress")}
            className={`flex items-center gap-2 rounded-full px-4 py-2 text-xs sm:text-sm font-semibold whitespace-nowrap transition-all ${
              activeTab === "progress"
                ? "bg-[#3E503C] text-white shadow-xs"
                : "bg-[#E8E6DF] text-[#2C3333] hover:bg-[#DFDCD3] border border-transparent"
            }`}
          >
            <TrendingUp className="h-4 w-4" />
            <span>Theo Dõi Tiến Độ</span>
          </button>
        </div>
      </div>
    </header>
  );
};
