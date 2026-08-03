import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Helper to get Gemini client lazily
function getGenAIClient() {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return null;
  }
  return new GoogleGenAI({ apiKey });
}

// API Routes
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", aiEnabled: !!process.env.GEMINI_API_KEY });
});

/**
 * AI Literature Tutor / Essay Outline & Analysis Assistant
 */
app.post("/api/gemini/tutor", async (req, res) => {
  try {
    const { prompt, grade, workTitle, topicType } = req.body;
    if (!prompt) {
      return res.status(400).json({ error: "Vui lòng nhập câu hỏi hoặc yêu cầu hỗ trợ." });
    }

    const ai = getGenAIClient();
    if (!ai) {
      return res.status(503).json({
        error: "Chưa cấu hình GEMINI_API_KEY trong hệ thống Secrets.",
        fallbackResponse: `Đây là hướng dẫn ôn tập cơ bản cho tác phẩm "${workTitle || 'Ngữ Văn Kết nối tri thức'}".\n\n- Gợi ý phân tích: Hãy tập trung vào hoàn cảnh sáng tác, cấu tứ, hình tượng nhân vật chính và nét đặc sắc trong nghệ thuật kể chuyện/thơ ca.\n- Để sử dụng AI lập dàn ý tự động chi tiết, vui lòng nhập GEMINI_API_KEY vào phần cài đặt.`
      });
    }

    const systemInstruction = `Bạn là Trợ lý Giáo viên Ngữ Văn xuất sắc chuyên môn sâu về chương trình sách "Kết nối tri thức với cuộc sống" lớp 10, 11 và 12 (Việt Nam).
Quy tắc:
1. Trả lời chính xác, mạch lạc, đúng chuẩn kiến thức trong sách Kết nối tri thức.
2. Nếu học sinh hỏi lập dàn ý bài văn, hãy chia rõ Mở bài - Thân bài (các luận điểm cụ thể kèm dẫn chứng) - Kết bài.
3. Sử dụng từ ngữ truyền cảm, văn phong chuẩn mực sư phạm, rõ ràng, trình bày có đầu dòng dễ đọc.
4. Tương tác thân thiện, khuyến khích tư duy sáng tạo của học sinh.`;

    const fullPrompt = `Học sinh lớp: ${grade || "THPT"}.
Tác phẩm/Chủ đề đang quan tâm: ${workTitle || "Chung"}.
Loại câu hỏi: ${topicType || "Hỏi đáp Ngữ Văn"}.
Yêu cầu của học sinh: "${prompt}"

Hãy giải đáp và hướng dẫn chi tiết cho học sinh.`;

    const response = await ai.models.generateContent({
      model: "gemini-3.6-flash",
      contents: fullPrompt,
      config: {
        systemInstruction,
        temperature: 0.7,
      },
    });

    return res.json({
      reply: response.text || "Xin lỗi, không có phản hồi từ hệ thống AI.",
    });
  } catch (error: any) {
    console.error("Gemini Tutor Error:", error);
    return res.status(500).json({
      error: "Đã xảy ra lỗi khi kết nối với AI. Vui lòng thử lại sau.",
      details: error?.message || String(error),
    });
  }
});

/**
 * AI Personalized Study Roadmap Generator
 */
app.post("/api/gemini/roadmap", async (req, res) => {
  try {
    const { grade, targetScore, remainingDays, completedWorksCount, totalWorksCount, weakGenres, studentNotes } = req.body;

    const ai = getGenAIClient();
    if (!ai) {
      return res.status(503).json({
        error: "Chưa cấu hình GEMINI_API_KEY",
        fallbackRoadmap: {
          title: `Lộ Trình Ôn Thi Ngữ Văn Lớp ${grade || 12} - Mục Tiêu ${targetScore || 8}+`,
          overview: `Lộ trình khoa học dựa trên bộ sách Kết nối tri thức, tập trung rèn kĩ năng đọc hiểu và viết nghị luận văn học/xã hội.`,
          phases: [
            {
              phaseName: "Giai đoạn 1: Củng cố Nền tảng (40% thời gian)",
              duration: "Tuần 1 - 2",
              tasks: [
                "Hệ thống hóa toàn bộ tác phẩm trọng tâm (Truyện ngắn, Thơ ca, Kí)",
                "Ghi nhớ hoàn cảnh sáng tác, bố cục và trích dẫn đặc sắc",
                "Làm trắc nghiệm lý thuyết từng bài để kiểm tra khả năng nhớ chi tiết"
              ]
            },
            {
              phaseName: "Giai đoạn 2: Luyện Kỹ năng Lập luận & Viết (40% thời gian)",
              duration: "Tuần 3 - 4",
              tasks: [
                "Luyện viết đoạn văn 200 chữ Nghị luận xã hội theo mô hình Đặt vấn đề - Bàn luận - Bài học",
                "Lập dàn ý chi tiết 4 dạng đề chính: Phân tích nhân vật, Phân tích đoạn thơ, Nhận định văn học, So sánh tác phẩm",
                "Tập trung khắc phục thể loại yếu: " + (weakGenres?.join(", ") || "Thơ ca và Truyện ký")
              ]
            },
            {
              phaseName: "Giai đoạn 3: Luyện Đề & Tối ưu Thời gian (20% thời gian)",
              duration: "Tuần cuối",
              tasks: [
                "Làm đề thi thử tổng hợp 120 phút trong điều kiện thực tế",
                "Rà soát lỗi chính tả, diễn đạt và quản lý thời gian thi",
                "Ôn lại các sơ đồ tư duy tổng hợp trước ngày thi"
              ]
            }
          ],
          advice: "Hãy duy trì thói quen viết ít nhất 1 bài văn hoàn chỉnh mỗi tuần và ghi chú lại những dẫn chứng ưng ý nhất."
        }
      });
    }

    const systemInstruction = `Bạn là Chuyên gia luyện thi Ngữ Văn THPT Quốc Gia và Học kì chuyên sâu sách "Kết nối tri thức với cuộc sống".
Hãy tạo một Lộ trình ôn thi cụ thể, sát thực tế, dễ thực hiện dưới dạng JSON hợp lệ để ứng dụng hiển thị trực quan cho học sinh.`;

    const prompt = `Học sinh lớp: ${grade || 12}
Mục tiêu điểm số: ${targetScore || 8} điểm
Thời gian ôn thi còn lại: ${remainingDays || 30} ngày
Đã hoàn thành: ${completedWorksCount || 0}/${totalWorksCount || 15} tác phẩm
Thể loại đang gặp khó khăn/yếu: ${weakGenres?.join(", ") || "Thơ trữ tình, Nghị luận"}
Ghi chú thêm: "${studentNotes || 'Mong muốn đạt điểm cao THPT Quốc Gia'}"

Hãy trả về duy nhất chuỗi JSON hợp lệ theo format sau (không bao hàm tick code markdown khác):
{
  "title": "Tên lộ trình...",
  "overview": "Tóm tắt định hướng ôn thi...",
  "phases": [
    {
      "phaseName": "Tên giai đoạn",
      "duration": "Thời gian gợi ý",
      "tasks": [ "Nhiệm vụ 1", "Nhiệm vụ 2", "Nhiệm vụ 3" ]
    }
  ],
  "advice": "Lời khuyên đặc biệt cho học sinh"
}`;

    const response = await ai.models.generateContent({
      model: "gemini-3.6-flash",
      contents: prompt,
      config: {
        systemInstruction,
        temperature: 0.5,
        responseMimeType: "application/json",
      },
    });

    let jsonResult;
    try {
      jsonResult = JSON.parse(response.text || "{}");
    } catch (e) {
      jsonResult = {
        title: `Lộ Trình Ôn Thi Ngữ Văn Lớp ${grade} - Mục Tiêu ${targetScore}+`,
        overview: response.text || "Lộ trình ôn tập đề xuất",
        phases: [],
        advice: "Duy trì rèn luyện đều đặn mỗi ngày."
      };
    }

    return res.json({ roadmap: jsonResult });
  } catch (error: any) {
    console.error("Gemini Roadmap Error:", error);
    return res.status(500).json({
      error: "Không thể tạo lộ trình từ AI lúc này. Vui lòng thử lại sau.",
      details: error?.message || String(error),
    });
  }
});

/**
 * AI Quiz Generator (generate extra multiple choice questions for a lesson)
 */
app.post("/api/gemini/quiz", async (req, res) => {
  try {
    const { grade, workTitle, genre, count = 3 } = req.body;
    const ai = getGenAIClient();
    if (!ai) {
      return res.status(503).json({
        error: "Chưa cấu hình GEMINI_API_KEY",
      });
    }

    const systemInstruction = `Bạn là Chuyên gia ra đề trắc nghiệm Ngữ Văn theo chương trình Kết nối tri thức với cuộc sống.
Hãy ra đề sát nội dung trong SGK, có câu hỏi mức nhận biết, thông hiểu và vận dụng. Trả về đúng định dạng JSON.`;

    const prompt = `Hãy tạo ${count} câu hỏi trắc nghiệm về tác phẩm/bài học: "${workTitle}" (Lớp ${grade}, thể loại: ${genre}) theo định dạng JSON hợp lệ:
[
  {
    "id": "ai-q1",
    "question": "Nội dung câu hỏi...",
    "options": ["A. Lựa chọn 1", "B. Lựa chọn 2", "C. Lựa chọn 3", "D. Lựa chọn 4"],
    "correctAnswer": 0,
    "explanation": "Giải thích chi tiết vì sao đáp án đúng..."
  }
]
Chú ý: correctAnswer là chỉ số (0 đến 3) của lựa chọn đúng trong mảng options.`;

    const response = await ai.models.generateContent({
      model: "gemini-3.6-flash",
      contents: prompt,
      config: {
        systemInstruction,
        temperature: 0.6,
        responseMimeType: "application/json",
      },
    });

    const questions = JSON.parse(response.text || "[]");
    return res.json({ questions });
  } catch (error: any) {
    console.error("Gemini Quiz Error:", error);
    return res.status(500).json({
      error: "Không thể tạo câu hỏi trắc nghiệm mới từ AI lúc này.",
    });
  }
});

// Vite middleware for development & Static server for production
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
