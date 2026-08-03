import { MockExam } from "../types";
import { LITERATURE_WORKS } from "./literatureData";

// Helper to gather all questions from literature works
const allWorkQuizzes = LITERATURE_WORKS.flatMap((w) =>
  w.quizzes.map((q) => ({ ...q, workTitle: w.title }))
);

export const MOCK_EXAMS: MockExam[] = [
  {
    id: "exam-thptqg-1",
    grade: "THPT Quốc Gia",
    title: "Đề Thi Thử THPT Quốc Gia - Số 1 (Kết nối tri thức)",
    description: "Đề thi thử tổng hợp lý thuyết và kỹ năng phân tích tác phẩm Ngữ Văn THPT với các câu hỏi từ cơ bản tới nâng cao.",
    durationMinutes: 15,
    questions: [
      {
        id: "q-thpt-1",
        question: "Trong tác phẩm Vợ nhặt (Kim Lân), hình ảnh 'lá cờ đỏ bay phấp phới' xuất hiện trong tâm trí Tràng ở cuối truyện có ý nghĩa gì?",
        options: [
          "A. Báo hiệu mùa lúa chín bội thu của vùng xóm ngụ cư",
          "B. Biểu tượng cho ánh sáng Cách mạng mở ra con đường sống cho những con người đang bên bờ vực cái chết",
          "C. Nhắc nhở về ngày hội buôn làng diễn ra vào mùa xuân",
          "D. Là hình tượng trang trí trong lễ cưới của Tràng và vợ nhặt"
        ],
        correctAnswer: 1,
        explanation: "Lá cờ đỏ sao vàng là biểu tượng của Việt Minh, mở ra tương lai đổi đời cho người lao động nghèo năm 1945.",
        level: "Vận dụng"
      },
      {
        id: "q-thpt-2",
        question: "Tư tưởng đổi mới sâu sắc nhất trong đoạn trích Đất Nước của Nguyễn Khoa Điềm là gì?",
        options: [
          "A. Đất Nước là kỳ quan thiên nhiên kỳ vĩ",
          "B. Đất Nước của Nhân Dân, do những con người vô danh kiến tạo trên 3 phương diện: Địa lý, Lịch sử, Văn hóa",
          "C. Đất Nước là gia sản vĩnh cửu của các triều đại phong kiến",
          "D. Đất Nước bắt đầu từ những trận chiến hải quân"
        ],
        correctAnswer: 1,
        explanation: "Tư tưởng Đất Nước của Nhân Dân là cống hiến lớn lao nhất của thơ ca kháng chiến chống Mỹ.",
        level: "Thông hiểu"
      },
      {
        id: "q-thpt-3",
        question: "Trong bài thơ Tây Tiến của Quang Dũng, vẻ đẹp người lính được xây dựng theo bút pháp nghệ thuật nào?",
        options: [
          "A. Tả thực thuần túy kết hợp châm biếm",
          "B. Lãng mạn hào hoa kết hợp bi tráng hào hùng",
          "C. Tượng trưng siêu thực mang màu sắc tôn giáo",
          "D. Nhập vai kể chuyện dân gian"
        ],
        correctAnswer: 1,
        explanation: "Sự kết hợp giữa chất lãng mạn hào hoa ('Đêm mơ Hà Nội dáng kiều thơm') và chất bi tráng ('Áo bào thay chiếu anh về đất') tạo nên tượng đài Tây Tiến.",
        level: "Thông hiểu"
      },
      {
        id: "q-thpt-4",
        question: "Trong truyện ngắn Vợ chồng A Phủ, yếu tố nào đã khơi dậy khát vọng sống và hành động cởi trói cho A Phủ của Mị?",
        options: [
          "A. Tiếng cồng chiêng báo hiệu mùa gặt mới",
          "B. Giọt nước mắt bò xuống hai lõm má đã xám đen lại của A Phủ trong đêm mùa đông",
          "C. Lời kêu cứu lớn tiếng của A Phủ",
          "D. Quyết định tha tội của thống lí Pá Tra"
        ],
        correctAnswer: 1,
        explanation: "Dòng nước mắt của A Phủ đã đánh thức tình thương đồng loại và khát vọng sống trong Mị.",
        level: "Nhận biết"
      },
      {
        id: "q-thpt-5",
        question: "Nguyễn Tuân miêu tả Sông Đà trong Người lái đò Sông Đà với hai nét tính cách nổi bật nào?",
        options: [
          "A. Yên ả phẳng lặng và tàn héo",
          "B. Hung bạo, dữ dội như một loài thủy quái và thơ mộng, trữ tình như một cố nhân",
          "C. Rộng lớn như biển cả và lạnh lẽo băng giá",
          "D. Huyền bí và xa lạ với con người"
        ],
        correctAnswer: 1,
        explanation: "Sông Đà vừa là kẻ thù nguy hiểm với ba trùng vi thạch trận, vừa là cố nhân êm đềm với áng tóc trữ tình hoa ban hoa gạo.",
        level: "Nhận biết"
      },
      {
        id: "q-thpt-6",
        question: "Lý lẽ cốt lõi trong đoạn mở đầu Tuyên ngôn Độc lập của Hồ Chí Minh là gì?",
        options: [
          "A. Nhấn mạnh ưu thế quân sự của Việt Minh",
          "B. Dùng chính lý tưởng tự do, bình đẳng trong Tuyên ngôn của Mỹ và Pháp để khẳng định quyền độc lập tất yếu của Việt Nam",
          "C. Nhắc lại lịch sử triều Lê Thánh Tông",
          "D. Kêu gọi các bang giao thương mại quốc tế"
        ],
        correctAnswer: 1,
        explanation: "Bác dùng nghệ thuật 'gậy ông đập lưng ông' sắc bén và thuyết phục.",
        level: "Vận dụng"
      }
    ]
  },
  {
    id: "exam-10-hk",
    grade: 10,
    title: "Đề Kiểm Tra Định Kỳ Ngữ Văn 10 - Kết nối tri thức",
    description: "Đánh giá kiến thức về thần thoại, sử thi (Chiến thắng Mtao Mxây), thơ Đường luật (Thu hứng) và văn nghị luận (Hiền tài là nguyên khí).",
    durationMinutes: 10,
    questions: [
      {
        id: "q-10-1",
        question: "Đặc trưng nghệ thuật nổi bật nhất của thể loại Sử thi Tây Nguyên thể hiện qua đoạn trích Chiến thắng Mtao Mxây là gì?",
        options: [
          "A. Nghệ thuật tả tâm lý thầm kín",
          "B. Nghệ thuật so sánh, phóng đại cường điệu hóa tôn vinh vẻ đẹp chuẩn mực của người anh hùng",
          "C. Cấu trúc thơ thất ngôn bát cú",
          "D. Sử dụng nhiều thành ngữ hiện đại"
        ],
        correctAnswer: 1,
        explanation: "So sánh và phóng đại là đặc trưng bất hủ của thi pháp sử thi.",
        level: "Nhận biết"
      },
      {
        id: "q-10-2",
        question: "Theo Thân Nhân Trung, vì sao triều đình lại cho dựng bia đá đề danh tiến sĩ?",
        options: [
          "A. Để trang trí khuôn viên Văn Miếu",
          "B. Để vinh danh hiền tài, nhắc nhở kẻ sĩ giữ gìn danh tiết và khuyến khích hậu thế noi theo",
          "C. Để thu thuế đỗ đạt của danh sĩ",
          "D. Để phân chia ranh giới các làng học"
        ],
        correctAnswer: 1,
        explanation: "Bia tiến sĩ vừa là vinh dự muôn đời, vừa là tấm gương soi răn đe kẻ sĩ phải cống hiến cho nước nhà.",
        level: "Thông hiểu"
      },
      {
        id: "q-10-3",
        question: "Cụm từ 'cô chu' trong câu thơ 'Cô chu nhất hệ cố viên tâm' (Thu hứng - Đỗ Phủ) mang ý nghĩa gì?",
        options: [
          "A. Chuyến thuyền du ngoạn trên sông Trường Giang",
          "B. Chiếc thuyền lẻ loi chở tình quê hương da diết của nhà thơ trong cảnh lưu lạc",
          "C. Chiếc bè chở gạo cứu tế mùa thu",
          "D. Hình ảnh chiến thuyền triều Đường"
        ],
        correctAnswer: 1,
        explanation: "Cô chu là hình ảnh ẩn dụ cho kiếp người tha hương, đơn độc.",
        level: "Thông hiểu"
      }
    ]
  },
  {
    id: "exam-11-hk",
    grade: 11,
    title: "Đề Kiểm Tra Định Kỳ Ngữ Văn 11 - Kết nối tri thức",
    description: "Kiểm tra kiến thức về truyện ngắn hiện đại (Vợ nhặt, Chữ người tử tù), thơ mới (Đây thôn Vĩ Dạ) và truyện thơ Nôm (Trao duyên).",
    durationMinutes: 12,
    questions: [
      {
        id: "q-11-1",
        question: "Trong tác phẩm Chữ người tử tù, vì sao Huấn Cao lại đồng ý cho chữ viên Quản ngục?",
        options: [
          "A. Vì Quản ngục dùng quyền lực đe dọa Huấn Cao",
          "B. Vì Huấn Cao cảm động trước 'một tấm lòng trong thiên hạ' biệt nhỡn liên tài của Quản ngục",
          "C. Vì Huấn Cao muốn được giảm án tử hình",
          "D. Vì Quản ngục trả nhiều vàng ngọc cho bài thơ"
        ],
        correctAnswer: 1,
        explanation: "Huấn Cao cho chữ vì thiên lương cao đẹp và kính trọng người hiếu nghĩa, hiếu tài.",
        level: "Thông hiểu"
      },
      {
        id: "q-11-2",
        question: "Trong đoạn trích Trao duyên (Truyện Kiều), hai từ nhãn tự nào thể hiện sự khéo léo và hoàn cảnh éo le của Thúy Kiều khi nhờ em gái?",
        options: [
          "A. Nhờ - Nhận",
          "B. Cậy - Chịu",
          "C. Xin - Vâng",
          "D. Mong - Nghe"
        ],
        correctAnswer: 1,
        explanation: "'Cậy' là tin tưởng gửi gắm; 'Chịu' là nhận lời với sự hi sinh.",
        level: "Nhận biết"
      },
      {
        id: "q-11-3",
        question: "Tình huống 'nhặt vợ' trong truyện ngắn Vợ nhặt của Kim Lân có tác dụng gì?",
        options: [
          "A. Làm nổi bật sự châm biếm về hôn nhân thời xưa",
          "B. Khắc họa bi kịch nạn đói 1945, đồng thời làm ngời sáng tình yêu thương đồng loại và niềm tin sống",
          "C. Giới thiệu phong tục cưới hỏi xóm ngụ cư",
          "D. Giải thích nguồn gốc tên gọi làng quê"
        ],
        correctAnswer: 1,
        explanation: "Tình huống éo le nhưng tràn đầy tính nhân đạo và khát vọng hạnh phúc.",
        level: "Vận dụng"
      }
    ]
  }
];
