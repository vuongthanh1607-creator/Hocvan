import React, { useState } from "react";
import { GradeLevel } from "../types";
import { Sparkles, X, Send, Loader2, BookOpen, MessageSquare, Copy, Check, HelpCircle } from "lucide-react";

interface AIAssistantModalProps {
  initialPrompt?: string;
  onClose: () => void;
}

const QUICK_PROMPTS = [
  "Lập dàn ý chi tiết phân tích hình tượng sóng trong bài thơ Sóng (Xuân Quỳnh)",
  "Phân tích vẻ đẹp người lái đò Sông Đà trong cuộc chiến với ba trùng vi thạch trận",
  "Giải thích triết lý 'Hiền tài là nguyên khí của quốc gia' và ý nghĩa với thanh niên ngày nay",
  "Hướng dẫn cấu trúc và cách viết đoạn văn nghị luận xã hội 200 chữ đạt điểm tuyệt đối",
  "So sánh hình tượng người lính Tây Tiến (Quang Dũng) và nhân vật Tràng trong Vợ nhặt (Kim Lân)",
];

export const AIAssistantModal: React.FC<AIAssistantModalProps> = ({
  initialPrompt = "",
  onClose,
}) => {
  const [prompt, setPrompt] = useState<string>(initialPrompt);
  const [grade, setGrade] = useState<GradeLevel>(12);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [reply, setReply] = useState<string | null>(null);
  const [copied, setCopied] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleSend = async (queryText?: string) => {
    const textToSend = queryText || prompt;
    if (!textToSend.trim()) return;

    setIsLoading(true);
    setErrorMsg(null);
    try {
      const res = await fetch("/api/gemini/tutor", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          prompt: textToSend,
          grade,
          topicType: "Hỏi đáp Gia Sư Ngữ Văn",
        }),
      });

      const data = await res.json();
      if (data.error && !data.fallbackResponse) {
        setErrorMsg(data.error);
      } else {
        setReply(data.reply || data.fallbackResponse || "Không nhận được phản hồi từ AI.");
      }
    } catch (err: any) {
      setErrorMsg("Không thể kết nối với Gia sư AI. Vui lòng thử lại sau.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopy = () => {
    if (!reply) return;
    navigator.clipboard.writeText(reply);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 p-3 backdrop-blur-sm sm:p-6">
      <div className="flex h-full max-h-[88vh] w-full max-w-4xl flex-col overflow-hidden rounded-3xl bg-white shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-200 bg-gradient-to-r from-amber-600 to-amber-700 p-4 text-white sm:px-6">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/20">
              <Sparkles className="h-6 w-6 text-amber-200" />
            </div>
            <div>
              <h3 className="text-base font-bold sm:text-lg">
                Gia Sư Ngữ Văn AI - Chương Trình Kết Nối Tri Thức
              </h3>
              <p className="text-xs text-amber-100">
                Hỗ trợ lập dàn ý, phân tích trích dẫn và hướng dẫn ôn thi Lớp 10, 11, 12
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="rounded-xl bg-white/10 p-2 hover:bg-white/20 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6">
          {/* Quick chip suggestions */}
          <div>
            <p className="text-xs font-bold uppercase text-slate-500 mb-2">
              Câu hỏi đề xuất nhanh cho bạn:
            </p>
            <div className="flex flex-wrap gap-2">
              {QUICK_PROMPTS.map((qp, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setPrompt(qp);
                    handleSend(qp);
                  }}
                  className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-700 hover:border-amber-400 hover:bg-amber-50/50 transition-colors text-left"
                >
                  {qp}
                </button>
              ))}
            </div>
          </div>

          {/* AI Response Display */}
          {isLoading && (
            <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-amber-300 bg-amber-50/40 p-8 text-center">
              <Loader2 className="h-8 w-8 animate-spin text-amber-600" />
              <p className="mt-3 text-sm font-bold text-slate-800">
                Gia sư AI đang soạn câu trả lời chi tiết theo chuẩn sách Kết nối tri thức...
              </p>
              <p className="text-xs text-slate-500 mt-1">
                Vui lòng đợi giây lát.
              </p>
            </div>
          )}

          {errorMsg && (
            <div className="rounded-2xl border border-rose-300 bg-rose-50 p-4 text-xs font-bold text-rose-800 text-center">
              {errorMsg}
            </div>
          )}

          {reply && !isLoading && (
            <div className="rounded-2xl border-2 border-amber-300 bg-amber-50/40 p-5 space-y-3 animate-in fade-in duration-300">
              <div className="flex items-center justify-between border-b border-amber-200/80 pb-2">
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-900 uppercase">
                  <Sparkles className="h-4 w-4 text-amber-700" />
                  <span>Hướng Dẫn Từ Gia Sư Ngữ Văn AI</span>
                </span>
                <button
                  onClick={handleCopy}
                  className="flex items-center gap-1 rounded-lg bg-white border border-amber-200 px-2.5 py-1 text-xs font-medium text-slate-700 hover:bg-slate-50"
                >
                  {copied ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-emerald-600" />
                      <span>Đã sao chép</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5" />
                      <span>Sao chép bài</span>
                    </>
                  )}
                </button>
              </div>

              <div className="prose prose-sm max-w-none text-slate-800 whitespace-pre-line leading-relaxed">
                {reply}
              </div>
            </div>
          )}
        </div>

        {/* Input Bar */}
        <div className="border-t border-slate-200 bg-slate-50 p-4 sm:px-6">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-semibold text-slate-500">Lớp:</span>
            {([10, 11, 12] as GradeLevel[]).map((g) => (
              <button
                key={g}
                onClick={() => setGrade(g)}
                className={`rounded-lg px-2.5 py-0.5 text-xs font-bold transition-colors ${
                  grade === g
                    ? "bg-amber-600 text-white"
                    : "bg-white border border-slate-200 text-slate-600"
                }`}
              >
                Lớp {g}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <input
              type="text"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  handleSend();
                }
              }}
              placeholder="Nhập yêu cầu: VD: Lập dàn ý bài Đây thôn Vĩ Dạ, Phân tích nhân vật Đam Săn..."
              className="flex-1 rounded-2xl border border-slate-300 bg-white py-3 pl-4 pr-4 text-sm text-slate-900 placeholder:text-slate-400 focus:border-amber-500 focus:outline-none shadow-inner"
            />
            <button
              disabled={isLoading || !prompt.trim()}
              onClick={() => handleSend()}
              className="flex h-12 items-center justify-center gap-2 rounded-2xl bg-amber-600 px-5 text-xs font-bold text-white shadow-md hover:bg-amber-700 disabled:opacity-40 transition-colors"
            >
              <Send className="h-4 w-4" />
              <span className="hidden sm:inline">Gửi hỏi AI</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
