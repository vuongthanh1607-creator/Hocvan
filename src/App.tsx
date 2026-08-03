/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { Header, NavTab } from "./components/Header";
import { LiteratureExplorer } from "./components/LiteratureExplorer";
import { ExamPracticeSection } from "./components/ExamPracticeSection";
import { RoadmapPlanner } from "./components/RoadmapPlanner";
import { ProgressDashboard } from "./components/ProgressDashboard";
import { WorkDetailModal } from "./components/WorkDetailModal";
import { AIAssistantModal } from "./components/AIAssistantModal";
import { LITERATURE_WORKS } from "./data/literatureData";
import { LiteraryWork } from "./types";
import { BookOpen, Sparkles, Heart } from "lucide-react";

export default function App() {
  const [activeTab, setActiveTab] = useState<NavTab>("explore");
  const [selectedWork, setSelectedWork] = useState<LiteraryWork | null>(null);
  const [showAIAssistant, setShowAIAssistant] = useState<boolean>(false);
  const [aiPrompt, setAiPrompt] = useState<string>("");
  const [refreshKey, setRefreshKey] = useState<number>(0);

  const handleAskAI = (prompt: string) => {
    setAiPrompt(prompt);
    setShowAIAssistant(true);
  };

  const handleUpdateProgress = () => {
    setRefreshKey((prev) => prev + 1);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F4F1EA] font-sans text-[#2C3333]">
      {/* Top Header */}
      <Header
        activeTab={activeTab}
        onTabChange={(tab) => {
          setActiveTab(tab);
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        onOpenAIAssistant={() => {
          setAiPrompt("");
          setShowAIAssistant(true);
        }}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:py-8">
          {activeTab === "explore" && (
            <LiteratureExplorer
              key={`exp-${refreshKey}`}
              works={LITERATURE_WORKS}
              onSelectWork={(work) => setSelectedWork(work)}
              onAskAI={handleAskAI}
              onUpdateProgress={handleUpdateProgress}
            />
          )}

          {activeTab === "practice" && (
            <ExamPracticeSection
              key={`prac-${refreshKey}`}
              onUpdateProgress={handleUpdateProgress}
              onAskAI={handleAskAI}
            />
          )}

          {activeTab === "roadmap" && (
            <RoadmapPlanner
              key={`road-${refreshKey}`}
              onUpdateProgress={handleUpdateProgress}
            />
          )}

          {activeTab === "progress" && (
            <ProgressDashboard
              key={`prog-${refreshKey}`}
              onUpdateProgress={handleUpdateProgress}
            />
          )}
        </div>
      </main>

      {/* Selected Work Modal */}
      {selectedWork && (
        <WorkDetailModal
          work={selectedWork}
          onClose={() => setSelectedWork(null)}
          onAskAI={handleAskAI}
          onUpdateProgress={handleUpdateProgress}
        />
      )}

      {/* AI Tutor Assistant Modal */}
      {showAIAssistant && (
        <AIAssistantModal
          initialPrompt={aiPrompt}
          onClose={() => setShowAIAssistant(false)}
        />
      )}

      {/* Footer */}
      <footer className="border-t border-black/5 bg-white py-8 text-center text-xs text-gray-500">
        <div className="mx-auto max-w-7xl px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#3E503C] text-white">
              <BookOpen className="h-4 w-4" />
            </div>
            <span className="font-bold text-[#2C3333] text-sm">
              Ngữ Văn KNTT 360° — Lớp 10, 11, 12
            </span>
          </div>

          <p className="text-gray-500">
            Ứng dụng học tập chuẩn sách <span className="font-semibold text-[#2C3333]">Kết nối tri thức với cuộc sống</span> — Hỗ trợ Ôn thi THPT Quốc Gia
          </p>

          <button
            onClick={() => handleAskAI("Cho tôi lời khuyên và chiến lược để đạt điểm 9+ môn Ngữ Văn kì thi THPT Quốc Gia.")}
            className="inline-flex items-center gap-1.5 rounded-full bg-[#E8E6DF] px-3.5 py-2 text-xs font-bold text-[#2C3333] hover:bg-[#DFDCD3] transition-colors"
          >
            <Sparkles className="h-3.5 w-3.5 text-[#3E503C]" />
            <span>Chiến lược đạt điểm 9+ Ngữ Văn</span>
          </button>
        </div>
      </footer>
    </div>
  );
}
