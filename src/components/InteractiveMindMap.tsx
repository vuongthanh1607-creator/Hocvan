import React, { useState } from "react";
import { MindMapNode } from "../types";
import { ZoomIn, ZoomOut, RotateCcw, ChevronRight, ChevronDown, Sparkles, Copy, Check, Quote, BookOpen, Layers } from "lucide-react";

interface InteractiveMindMapProps {
  rootNode: MindMapNode;
  onAskAI?: (prompt: string) => void;
}

export const InteractiveMindMap: React.FC<InteractiveMindMapProps> = ({
  rootNode,
  onAskAI,
}) => {
  const [zoom, setZoom] = useState<number>(1);
  const [expandedIds, setExpandedIds] = useState<Set<string>>(new Set([rootNode.id, ...(rootNode.children?.map(c => c.id) || [])]));
  const [selectedNode, setSelectedNode] = useState<MindMapNode | null>(null);
  const [copiedQuote, setCopiedQuote] = useState<boolean>(false);
  const [viewMode, setViewMode] = useState<"visual" | "tree">("visual");

  const toggleExpand = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setExpandedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedQuote(true);
    setTimeout(() => setCopiedQuote(false), 2000);
  };

  const getNodeColor = (type: MindMapNode["type"]) => {
    switch (type) {
      case "root":
        return "bg-amber-600 text-white border-amber-700 shadow-lg shadow-amber-600/20";
      case "character":
        return "bg-rose-600 text-white border-rose-700 shadow-md shadow-rose-600/20";
      case "technique":
        return "bg-emerald-600 text-white border-emerald-700 shadow-md shadow-emerald-600/20";
      case "theme":
        return "bg-blue-600 text-white border-blue-700 shadow-md shadow-blue-600/20";
      case "quote":
        return "bg-purple-600 text-white border-purple-700 shadow-md shadow-purple-600/20";
      default:
        return "bg-white text-slate-800 border-slate-200 hover:border-amber-400 shadow-sm";
    }
  };

  const getNodeBadge = (type: MindMapNode["type"]) => {
    switch (type) {
      case "root":
        return "Tác phẩm";
      case "character":
        return "Nhân vật";
      case "technique":
        return "Nghệ thuật";
      case "theme":
        return "Chủ đề / Nội dung";
      case "quote":
        return "Trích dẫn";
      default:
        return "Chi tiết";
    }
  };

  // Render Visual Tree Node
  const renderVisualNode = (node: MindMapNode, level: number = 0): React.ReactElement => {
    const isExpanded = expandedIds.has(node.id);
    const hasChildren = node.children && node.children.length > 0;

    return (
      <div key={node.id} className="flex flex-col items-center">
        {/* Node Box */}
        <div
          onClick={() => setSelectedNode(node)}
          className={`group relative cursor-pointer rounded-xl border-2 px-4 py-3 transition-all duration-200 hover:scale-105 ${getNodeColor(
            node.type
          )} ${level === 0 ? "text-lg font-bold min-w-[220px]" : "text-sm font-semibold max-w-[240px]"}`}
        >
          <div className="flex items-center justify-between gap-2">
            <span>{node.label}</span>
            {hasChildren && (
              <button
                onClick={(e) => toggleExpand(node.id, e)}
                className="ml-1 rounded-full p-1 hover:bg-black/10 transition-colors"
                title={isExpanded ? "Thu gọn" : "Mở rộng"}
              >
                {isExpanded ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
              </button>
            )}
          </div>
          {node.summary && (
            <p className={`mt-1 text-xs line-clamp-2 ${level === 0 ? "text-amber-100" : "opacity-90"}`}>
              {node.summary}
            </p>
          )}
          {node.quote && (
            <div className="mt-1 flex items-center gap-1 text-[11px] font-normal italic opacity-90">
              <Quote className="h-3 w-3 shrink-0" />
              <span className="line-clamp-1">{node.quote}</span>
            </div>
          )}
        </div>

        {/* Children branches */}
        {hasChildren && isExpanded && (
          <div className="flex flex-col items-center">
            {/* Vertical connector line down */}
            <div className="h-6 w-0.5 bg-slate-300"></div>

            {/* Horizontal connector line across children */}
            <div className="relative flex justify-center gap-6 pt-2">
              {node.children!.length > 1 && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 h-0.5 bg-slate-300 w-[calc(100%-4rem)]"></div>
              )}
              {node.children!.map((child) => (
                <div key={child.id} className="flex flex-col items-center">
                  <div className="h-4 w-0.5 bg-slate-300"></div>
                  {renderVisualNode(child, level + 1)}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  };

  // Render Outline Tree View
  const renderOutlineNode = (node: MindMapNode, level: number = 0): React.ReactElement => {
    const isExpanded = expandedIds.has(node.id);
    const hasChildren = node.children && node.children.length > 0;

    return (
      <div key={node.id} className="my-1.5" style={{ paddingLeft: `${level * 1.5}rem` }}>
        <div
          onClick={() => setSelectedNode(node)}
          className={`flex items-center justify-between rounded-lg border p-2.5 transition-all cursor-pointer ${
            selectedNode?.id === node.id ? "border-amber-500 bg-amber-50/70" : "border-slate-200 bg-white hover:border-amber-300"
          }`}
        >
          <div className="flex items-center gap-2">
            {hasChildren && (
              <button
                onClick={(e) => toggleExpand(node.id, e)}
                className="rounded p-0.5 hover:bg-slate-100"
              >
                {isExpanded ? <ChevronDown className="h-4 w-4 text-slate-500" /> : <ChevronRight className="h-4 w-4 text-slate-500" />}
              </button>
            )}
            <span className={`rounded px-2 py-0.5 text-xs font-semibold uppercase ${
              node.type === "root"
                ? "bg-amber-100 text-amber-800"
                : node.type === "character"
                ? "bg-rose-100 text-rose-800"
                : node.type === "technique"
                ? "bg-emerald-100 text-emerald-800"
                : "bg-blue-100 text-blue-800"
            }`}>
              {getNodeBadge(node.type)}
            </span>
            <span className="font-medium text-slate-800">{node.label}</span>
          </div>
          {node.quote && (
            <span className="hidden sm:inline-block max-w-xs truncate text-xs italic text-slate-500">
              "{node.quote}"
            </span>
          )}
        </div>
        {hasChildren && isExpanded && (
          <div className="border-l-2 border-slate-200 ml-3">
            {node.children!.map((child) => renderOutlineNode(child, level + 1))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="flex flex-col gap-4">
      {/* Controls Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-slate-200 bg-slate-50/80 p-3">
        <div className="flex items-center gap-2">
          <Layers className="h-5 w-5 text-amber-600" />
          <span className="font-semibold text-slate-800">Sơ đồ tư duy trực quan</span>
          <span className="text-xs text-slate-500">(Bấm vào nút để xem phân tích chi tiết)</span>
        </div>

        <div className="flex items-center gap-2">
          {/* View mode toggle */}
          <div className="flex rounded-lg border border-slate-200 bg-white p-0.5">
            <button
              onClick={() => setViewMode("visual")}
              className={`rounded-md px-2.5 py-1 text-xs font-medium transition-colors ${
                viewMode === "visual" ? "bg-amber-600 text-white" : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Sơ đồ nhánh
            </button>
            <button
              onClick={() => setViewMode("tree")}
              className={`rounded-md px-2.5 py-1 text-xs font-medium transition-colors ${
                viewMode === "tree" ? "bg-amber-600 text-white" : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Dạng phân cấp
            </button>
          </div>

          {/* Zoom controls */}
          {viewMode === "visual" && (
            <div className="flex items-center gap-1">
              <button
                onClick={() => setZoom((z) => Math.max(0.6, z - 0.15))}
                className="rounded-lg border border-slate-200 bg-white p-1.5 text-slate-600 hover:bg-slate-100"
                title="Thu nhỏ"
              >
                <ZoomOut className="h-4 w-4" />
              </button>
              <span className="w-12 text-center text-xs font-semibold text-slate-700">
                {Math.round(zoom * 100)}%
              </span>
              <button
                onClick={() => setZoom((z) => Math.min(1.5, z + 0.15))}
                className="rounded-lg border border-slate-200 bg-white p-1.5 text-slate-600 hover:bg-slate-100"
                title="Phóng to"
              >
                <ZoomIn className="h-4 w-4" />
              </button>
              <button
                onClick={() => setZoom(1)}
                className="rounded-lg border border-slate-200 bg-white p-1.5 text-slate-600 hover:bg-slate-100"
                title="Đặt lại kích thước"
              >
                <RotateCcw className="h-4 w-4" />
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Main Canvas Area */}
      <div className="relative min-h-[480px] overflow-auto rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 via-white to-amber-50/30 p-6 shadow-inner">
        {viewMode === "visual" ? (
          <div
            className="flex min-w-max justify-center transition-transform duration-300"
            style={{ transform: `scale(${zoom})`, transformOrigin: "top center" }}
          >
            {renderVisualNode(rootNode)}
          </div>
        ) : (
          <div className="max-w-3xl mx-auto py-2">
            {renderOutlineNode(rootNode)}
          </div>
        )}
      </div>

      {/* Selected Node Details Card */}
      {selectedNode && (
        <div className="rounded-xl border-2 border-amber-300 bg-amber-50/70 p-4 shadow-sm animate-in fade-in duration-200">
          <div className="flex items-start justify-between gap-3">
            <div>
              <div className="flex items-center gap-2">
                <span className="rounded-md bg-amber-600 px-2.5 py-0.5 text-xs font-bold text-white uppercase">
                  {getNodeBadge(selectedNode.type)}
                </span>
                <h4 className="text-base font-bold text-slate-900">{selectedNode.label}</h4>
              </div>
              {selectedNode.summary && (
                <p className="mt-2 text-sm text-slate-700">{selectedNode.summary}</p>
              )}
            </div>
            <button
              onClick={() => setSelectedNode(null)}
              className="text-xs text-slate-500 hover:text-slate-700 underline shrink-0"
            >
              Đóng
            </button>
          </div>

          {selectedNode.quote && (
            <div className="mt-3 flex items-start justify-between gap-2 rounded-lg border border-amber-200 bg-white p-3">
              <div className="flex items-start gap-2">
                <Quote className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" />
                <p className="text-xs italic text-slate-800">"{selectedNode.quote}"</p>
              </div>
              <button
                onClick={() => handleCopy(selectedNode.quote!)}
                className="flex items-center gap-1 rounded bg-slate-100 px-2 py-1 text-xs font-medium text-slate-700 hover:bg-slate-200 shrink-0"
                title="Sao chép trích dẫn"
              >
                {copiedQuote ? (
                  <>
                    <Check className="h-3 w-3 text-emerald-600" />
                    <span>Đã chép</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-3 w-3" />
                    <span>Chép</span>
                  </>
                )}
              </button>
            </div>
          )}

          {onAskAI && (
            <div className="mt-3 flex justify-end">
              <button
                onClick={() =>
                  onAskAI(
                    `Hãy phân tích chi tiết về điểm nhấn "${selectedNode.label}" (${
                      selectedNode.summary || ""
                    }) trong tác phẩm và hướng dẫn cách triển khai thành luận điểm trong bài văn nghị luận.`
                  )
                }
                className="inline-flex items-center gap-1.5 rounded-lg bg-amber-600 px-3 py-1.5 text-xs font-semibold text-white shadow-sm hover:bg-amber-700 transition-colors"
              >
                <Sparkles className="h-3.5 w-3.5" />
                <span>AI Phân tích luận điểm này</span>
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
