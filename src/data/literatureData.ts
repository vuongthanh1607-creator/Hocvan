import { LiteraryWork } from "../types";

export const LITERATURE_WORKS: LiteraryWork[] = [
  // ==========================================
  // LỚP 10 - KẾT NỐI TRI THỨC VỚI CUỘC SỐNG
  // ==========================================
  {
    id: "10-1",
    grade: 10,
    unit: "Bài 1: Sức hấp dẫn của truyện kể",
    title: "Chiến thắng Mtao Mxây",
    author: "Sử thi Đam Săn (Ê-đê)",
    genre: "Thần thoại & Sử thi",
    period: "Văn học dân gian Việt Nam",
    authorBio:
      "Sử thi Đam Săn là kiệt tác văn học dân gian của đồng bào Ê-đê ở Tây Nguyên, ra đời trong giai đoạn công xã thị tộc chuyển sang hình thái xã hội giai cấp ban đầu.",
    context:
      "Đoạn trích thuộc phần giữa của sử thi Đam Săn. Sau khi Mtao Mxây (Tù trưởng Sắt) cướp Hơ Nhị (vợ của Đam Săn), Đam Săn đã mang quân tới khiêu chiến, trừng phạt Mtao Mxây để cứu vợ và bảo vệ sự thịnh vượng của buôn làng.",
    summary:
      "Đam Săn đến buôn Mtao Mxây khiêu chiến. Sau lời thách thức quyết liệt, hai bên bước vào cuộc đọ khiên. Đam Săn múa khiên thần tốc như gió bão, trong khi Mtao Mxây hèn nhát, bước cao bước thấp. Nhờ sự trợ giúp của Ông Trời (ném miếng trầu), Đam Săn gia tăng sức mạnh, chém đứt đầu Mtao Mxây, thu phục tôi tớ và tài sản, đưa buôn làng Đam Săn trở nên hùng mạnh, giàu có nhất vùng.",
    structure: [
      {
        title: "Phần 1: Cuộc giao tranh giữa Đam Săn và Mtao Mxây",
        description: "Lời khiêu chiến, diễn biến hai hiệp đọ khiên và chiến thắng rực rỡ của Đam Săn nhờ sự trợ giúp của Ông Trời."
      },
      {
        title: "Phần 2: Đam Săn thuyết phục tôi tớ buôn làng Mtao Mxây đi theo mình",
        description: "Sự đồng lòng, tự nguyện của dân làng Mtao Mxây đi theo Đam Săn, thể hiện khát vọng đoàn kết, phát triển buôn làng."
      },
      {
        title: "Phần 3: Cảnh ăn mừng chiến thắng thịnh vượng",
        description: "Buôn làng tiệc tùng tưng bừng, Đam Săn hiện lên như một vị anh hùng sánh ngang thần linh."
      }
    ],
    contentAnalysis: [
      {
        heading: "Hình tượng người anh hùng sử thi Đam Săn",
        details: [
          "Ngoại hình kiêu dũng: ngực quấn chéo một tấm mền chiến, mình đeo gươm, bắp chân to bằng cây xà nu, sức khỏe phi thường.",
          "Tài năng vũ nghệ vượt trội: múa khiên như gió lốc, vượt qua mọi chướng ngại, chém đứt đầu kẻ thù hèn nhát.",
          "Lý tưởng cao đẹp: chiến đấu không chỉ để đòi lại hạnh phúc gia đình mà còn để bảo vệ danh dự, thu phục dân làng, làm cho buôn làng giàu mạnh."
        ]
      },
      {
        heading: "Ý nghĩa cuộc chiến và sự trợ giúp của thần linh",
        details: [
          "Cuộc chiến chính nghĩa của cộng đồng: phản ánh giai đoạn thị tộc mở rộng ảnh hưởng.",
          "Sự xuất hiện của Ông Trời phản ánh quan niệm nhân dân: thần linh luôn ủng hộ người anh hùng chính nghĩa."
        ]
      }
    ],
    artisticFeatures: [
      "Nghệ thuật so sánh và phóng đại cao độ đậm chất sử thi (bắp chân to bằng cây xà nu, múa khiên như bão táp).",
      "Ngôn ngữ trang trọng, giàu nhịp điệu, đối thoại kịch tính.",
      "Cấu trúc trùng điệp, miêu tả đối lập giữa vẻ hùng dũng của Đam Săn và sự hèn nhát của Mtao Mxây."
    ],
    keyQuotes: [
      {
        quote: "Một lần xốc tới, chàng vượt một đồi tranh. Một lần xốc tới nữa, chàng vượt một đồi lồ ô. Chàng chạy vun vút qua phía đông, vun vút qua phía tây.",
        contextOrMeaning: "Thể hiện sức mạnh phi thường và tầm vóc vũ trụ của người anh hùng sử thi Tây Nguyên."
      },
      {
        quote: "Bắp chân chàng to bằng cây xà nu, sức chàng ngang sức voi đực... Chàng là một dũng tướng chắc chết mười mươi cũng không lùi bước.",
        contextOrMeaning: "Nghệ thuật cường điệu hóa tôn vinh vẻ đẹp chuẩn mực của tù trưởng anh hùng."
      }
    ],
    mindMap: {
      id: "root-ds",
      label: "Chiến Thắng Mtao Mxây",
      type: "root",
      summary: "Đoạn trích sử thi Đam Săn - Anh hùng Tây Nguyên",
      children: [
        {
          id: "ds-char",
          label: "Hình Tượng Đam Săn",
          type: "character",
          summary: "Anh hùng sử thi, sức mạnh vượt trội, chính nghĩa",
          children: [
            { id: "ds-c1", label: "Múa khiên thần tốc như gió bão", type: "sub", quote: "Một lần xốc tới vượt một đồi tranh..." },
            { id: "ds-c2", label: "Khát vọng bảo vệ buôn làng", type: "sub" }
          ]
        },
        {
          id: "ds-art",
          label: "Nghệ Thuật Sử Thi",
          type: "technique",
          summary: "So sánh, phóng đại, ngôn ngữ giàu nhịp điệu",
          children: [
            { id: "ds-a1", label: "Phóng đại cường điệu hóa", type: "sub", quote: "Bắp chân to bằng cây xà nu..." },
            { id: "ds-a2", label: "Tương phản Đam Săn vs Mtao Mxây", type: "sub" }
          ]
        },
        {
          id: "ds-val",
          label: "Giá Trị Cộng Đồng",
          type: "theme",
          summary: "Ý thức thị tộc đoàn kết thịnh vượng",
          children: [
            { id: "ds-v1", label: "Dân làng tự nguyện theo Đam Săn", type: "sub" },
            { id: "ds-v2", label: "Tiệc ăn mừng chiến thắng tưng bừng", type: "sub" }
          ]
        }
      ]
    },
    quizzes: [
      {
        id: "q-ds-1",
        question: "Trong đoạn trích Chiến thắng Mtao Mxây, khi múa khiên, Đam Săn được so sánh với điều gì?",
        options: [
          "A. Một cơn bão lớn cuốn bay cây rừng",
          "B. Gió lốc, gió bão, bước qua đồi tranh và đồi lồ ô",
          "C. Dòng thác lũ đổ xuống từ đỉnh núi chúa",
          "D. Con hổ dữ gầm vang khắp núi rừng Tây Nguyên"
        ],
        correctAnswer: 1,
        explanation: "Sử thi miêu tả Đam Săn múa khiên thần tốc: bước một bước vượt đồi tranh, chạy vun vút như gió lốc, gió bão.",
        level: "Nhận biết"
      },
      {
        id: "q-ds-2",
        question: "Sự xuất hiện của 'Ông Trời' trong cuộc giao tranh giữa Đam Săn và Mtao Mxây mang ý nghĩa nghệ thuật gì?",
        options: [
          "A. Cho thấy Đam Săn yếu đuối không thể tự mình chiến thắng",
          "B. Thể hiện quan niệm thần linh luôn đồng hành cùng anh hùng chính nghĩa của cộng đồng",
          "C. Chứng minh Mtao Mxây có ma thuật hắc ám",
          "D. Là yếu tố truyền kì của truyện đường rừng"
        ],
        correctAnswer: 1,
        explanation: "Trong sử thi, thần linh (Ông Trời) là đại diện cho công lý và ước mơ của cộng đồng, luôn sát cánh ủng hộ người anh hùng bảo vệ buôn làng.",
        level: "Thông hiểu"
      },
      {
        id: "q-ds-3",
        question: "Biện pháp nghệ thuật nổi bật nhất được sử dụng để khắc họa hình tượng Đam Săn là gì?",
        options: [
          "A. Tả thực kết hợp ẩn dụ",
          "B. So sánh và phóng đại (cường điệu) đậm chất sử thi",
          "C. Liệt kê và ước lệ tượng trưng",
          "D. Nhân hóa kết hợp châm biếm sâu cay"
        ],
        correctAnswer: 1,
        explanation: "Nghệ thuật so sánh và phóng đại ('bắp chân to bằng cây xà nu', 'sức ngang voi đực') là đặc trưng cốt lõi của thi pháp sử thi.",
        level: "Thông hiểu"
      },
      {
        id: "q-ds-4",
        question: "Sau khi chiến thắng Mtao Mxây, Đam Săn đã có hành động gì đối với tôi tớ của kẻ thù?",
        options: [
          "A. Trừng phạt nặng nề và đuổi khỏi buôn làng",
          "B. Thuyết phục và kêu gọi họ tự nguyện đi theo mình về buôn làng mới",
          "C. Chia nhỏ tài sản và giải tán buôn làng Mtao Mxây",
          "D. Giao lại cho tù trưởng khác quản lý"
        ],
        correctAnswer: 1,
        explanation: "Đam Săn gõ cửa từng nhà thuyết phục: 'Hỡi bà con, ai đi theo ta thì đi...'. Dân làng Mtao Mxây đồng lòng tự nguyện theo về, làm cho buôn làng ngày càng giàu mạnh.",
        level: "Vận dụng"
      }
    ]
  },
  {
    id: "10-2",
    grade: 10,
    unit: "Bài 2: Vẻ đẹp của thơ ca",
    title: "Thu hứng (Cảm xúc mùa thu - Bài 1)",
    author: "Đỗ Phủ",
    genre: "Thơ Đường luật",
    period: "Văn học Trung Đại Trung Quốc",
    authorBio:
      "Đỗ Phủ (712–770), tự Tử Mỹ, hiệu Thiếu Lăng dã lão, là một trong hai nhà thơ vĩ đại nhất lịch sử Trung Quốc, được tôn vinh là 'Thi thánh'. Thơ ông thấm đẫm tinh thần nhân đạo, phản ánh hiện thực lịch sử bi tráng.",
    context:
      "Bài thơ được sáng tác năm 766 khi Đỗ Phủ đang sống lưu lạc tại Quỳ Châu (chân núi Vu Sơn, dòng Trường Giang), trong bối cảnh xã hội loạn lạc sau loạn An Sử, nhà thơ ốm đau, nghèo khổ và nhớ quê hương da diết.",
    summary:
      "Bốn câu đầu dựng lên bức tranh thiên thu Quỳ Châu hùng vĩ, ảm đạm, xơ xác và dữ dội (sương trắng, rừng phong, sóng vọt tận trời, mây sa sầm đất). Bốn câu sau chuyển từ cảnh sang tình: khóm cúc nở hoa gợi hai năm lưu lạc, con thuyền lẻ loi chở mối sầu nhớ cố hương, và tiếng chày đập áo vang động chiều thu giục giã lòng người xa xứ.",
    structure: [
      {
        title: "Hai câu đề: Cảnh thu núi rừng Quỳ Châu",
        description: "Sương móc trắng xóa làm tiêu điều rừng cây phong, núi Vu Sơn và kẽm Vu Giáp ảm đạm, hiu hắt."
      },
      {
        title: "Hai câu thực: Cảnh thu lòng sông Trường Giang",
        description: "Không gian mở rộng theo chiều dọc và chiều cao: sóng vọt tận trời, mây sa sầm xuống mặt đất, gợi sự chao đảo của thời cuộc."
      },
      {
        title: "Hai câu luận: Nỗi niềm tha hương qua hoa cúc và con thuyền",
        description: "Hoa cúc nở hai lần gợi hai năm tuôn lệ, con thuyền lẻ loi thắt chặt mối tình gia hương."
      },
      {
        title: "Hai câu kết: Tiếng chày đập áo bóng chiều thu",
        description: "Âm thanh sinh hoạt truyền thống (thước giao đao) giục giã chuẩn bị áo rét, xoáy sâu vào nỗi ngậm ngùi cô đơn."
      }
    ],
    contentAnalysis: [
      {
        heading: "Bức tranh mùa thu Tây Nam Trung Quốc kỳ vĩ và bi tráng",
        details: [
          "Sự kết hợp giữa vẻ tiêu điều, lạnh lẽo của sương phong với sự dữ dội, chao đảo của sóng Trường Giang.",
          "Cảnh vật không tĩnh lặng mà động, phản ánh tâm thế bất an, trôi dạt của một kiếp người giữa thời loạn."
        ]
      },
      {
        heading: "Nỗi sầu muộn tha hương và lòng yêu nước thương dân",
        details: [
          "Lệ nhỏ hoa cúc ('Tùng cúc lưỡng khai tha nhật lệ'): hoa nở nhìn hoa khóc, thời gian trôi qua vô tình mang theo tuổi già và bệnh tật.",
          "Con thuyền lẻ loi ('Cô chu nhất hệ cố viên tâm'): biểu tượng cho sự trôi dạt, khao khát được trở về cố hương Trường An."
        ]
      }
    ],
    artisticFeatures: [
      "Bố cục chặt chẽ của thể thơ Thất ngôn bát cú Đường luật (Đề - Thực - Luận - Kết).",
      "Nghệ thuật đối ngẫu chỉnh chu, uyên bác, tả cảnh ngụ tình xuất sắc.",
      "Sử dụng từ nhãn tự (từ khóa tinh tế): 'lưỡng khai', 'nhất hệ', 'tùng cúc', 'cô chu'."
    ],
    keyQuotes: [
      {
        quote: "Tùng cúc lưỡng khai tha nhật lệ,\nCô chu nhất hệ cố viên tâm.",
        contextOrMeaning: "Khóm cúc tuôn thêm dòng lệ cũ, Con thuyền buộc chặt mối tình nhà. Hai câu thơ cô đọng trọn vẹn bi kịch tha hương của Đỗ Phủ."
      },
      {
        quote: "Giang gian ba lãng kiêm thiên dũng,\nTái thượng phong vân tiếp địa âm.",
        contextOrMeaning: "Lưng trời sóng rợn lòng sông thẳm, Mặt đất mây sa góc ải xa. Tầm vóc vũ trụ và sự rung chuyển dữ dội của bức tranh thu."
      }
    ],
    mindMap: {
      id: "root-th",
      label: "Thu Hứng (Đỗ Phủ)",
      type: "root",
      summary: "Bức tranh thu Quỳ Châu và nỗi sầu cố hương",
      children: [
        {
          id: "th-canh",
          label: "4 Câu Đầu: Cảnh Thu",
          type: "theme",
          summary: "Hùng vĩ, tiêu điều, dữ dội",
          children: [
            { id: "th-c1", label: "Sương móc trắng rừng phong", type: "sub" },
            { id: "th-c2", label: "Sóng rợn tận trời, mây sa sầm đất", type: "sub", quote: "Giang gian ba lãng kiêm thiên dũng..." }
          ]
        },
        {
          id: "th-tinh",
          label: "4 Câu Sau: Tình Thu",
          type: "theme",
          summary: "Nỗi nhớ gia hương, bi kịch lưu lạc",
          children: [
            { id: "th-t1", label: "Hoa cúc nở 2 năm tuôn dòng lệ", type: "sub" },
            { id: "th-t2", label: "Con thuyền lẻ loi chở lòng quê", type: "sub", quote: "Cô chu nhất hệ cố viên tâm..." },
            { id: "th-t3", label: "Tiếng chày đập áo chiều thu lạnh", type: "sub" }
          ]
        },
        {
          id: "th-nghethuat",
          label: "Nghệ Thuật Đường Luật",
          type: "technique",
          summary: "Tả cảnh ngụ tình, đối ngẫu chuẩn mực",
          children: [
            { id: "th-n1", label: "Từ nhãn tự cô đọng, hàm súc", type: "sub" }
          ]
        }
      ]
    },
    quizzes: [
      {
        id: "q-th-1",
        question: "Cụm từ 'cô chu' trong câu thơ 'Cô chu nhất hệ cố viên tâm' mang hình ảnh biểu tượng cho điều gì?",
        options: [
          "A. Chiếc thuyền đánh cá của ngư dân Quỳ Châu",
          "B. Cuộc đời lẻ loi, trôi dạt và khao khát trở về quê cũ của nhà thơ",
          "C. Phương tiện quân sự của quân đội nhà Đường",
          "D. Sự sang trọng và thanh nhã của nghệ thuật trà đạo"
        ],
        correctAnswer: 1,
        explanation: "'Cô chu' (con thuyền lẻ loi) là hình ảnh ẩn dụ cho kiếp lưu lạc bấp bênh của Đỗ Phủ, là sợi dây duy nhất neo giữ mối tình cố hương.",
        level: "Thông hiểu"
      },
      {
        id: "q-th-2",
        question: "Bối cảnh lịch sử ảnh hưởng lớn nhất đến cảm hứng sáng tác bài thơ Thu hứng là gì?",
        options: [
          "A. Thời kỳ nhà Đường cực thịnh, bình yên",
          "B. Sau loạn An Sử, xã hội Đáng triều ly tán, nhà thơ lưu lạc",
          "C. Cuộc kháng chiến chống quân Nguyên Mông",
          "D. Sự thịnh hành của văn học lãng mạn phương Tây"
        ],
        correctAnswer: 1,
        explanation: "Bài thơ ra đời năm 766 sau loạn An Sử, đất nước tiêu điều, Đỗ Phủ phải lưu lạc về Nam ở Quỳ Châu trong bệnh tật và túng thiếu.",
        level: "Nhận biết"
      }
    ]
  },
  {
    id: "10-3",
    grade: 10,
    unit: "Bài 3: Nghệ thuật thuyết phục trong văn nghị luận",
    title: "Hiền tài là nguyên khí của quốc gia",
    author: "Thân Nhân Trung",
    genre: "Nghị luận văn học",
    period: "Văn học Trung Đại Việt Nam (Thế kỷ XV)",
    authorBio:
      "Thân Nhân Trung (1419–1499) là một Danh sĩ thời Lê Thánh Tông, đỗ Tiến sĩ, từng giữ chức Thượng thư Bộ Lại và là phó chủ súy Hội Tao Đàn.",
    context:
      "Trích từ bài ký bia tiến sĩ khoa Nhâm Tuất niên hiệu Đại Bảo thứ 3 (1442), soạn năm 1484 theo lệnh vua Lê Thánh Tông nhằm vinh danh các tri thức khoa bảng và khích lệ nhân tài.",
    summary:
      "Tác phẩm khẳng định chân lý bất hủ: 'Hiền tài là nguyên khí của quốc gia', nguyên khí thịnh thì thế nước mạnh, nguyên khí suy thì thế nước yếu. Tác giả phân tích những ân sủng vượt bậc của triều đình đối với kẻ sĩ và ý nghĩa lâu dài của việc khắc bia đá đề danh tiến sĩ.",
    structure: [
      {
        title: "Phần 1: Vai trò tối quan trọng của hiền tài đối với quốc gia",
        description: "Đoạn văn nghị luận sắc bén định nghĩa nguyên khí và mối quan hệ giữa nhân tài với sự thịnh suy của đất nước."
      },
      {
        title: "Phần 2: Ý nghĩa sâu sắc của việc lập bia tiến sĩ",
        description: "Khuyến khích hiền tài giúp nước, răn đe kẻ xấu, lưu danh muôn đời cho hậu thế."
      }
    ],
    contentAnalysis: [
      {
        heading: "Luận điểm kim chỉ nam về trọng dụng nhân tài",
        details: [
          "Hiền tài không chỉ là người học rộng mà phải là người có đức có tài, có trí tuệ và tâm huyết với non sông.",
          "Việc dựng bia là để noi gương hiền tài, nhắc nhở trách nhiệm lịch sử của trí thức với vận mệnh dân tộc."
        ]
      }
    ],
    artisticFeatures: [
      "Lập luận chặt chẽ, luận điểm rõ ràng, sắc bén.",
      "Ngôn ngữ trang trọng, chuẩn mực chính luận, giàu sức thuyết phục.",
      "Kết hợp giữa lý lẽ uyên bác và tình cảm tự hào dân tộc."
    ],
    keyQuotes: [
      {
        quote: "Hiền tài là nguyên khí của quốc gia, nguyên khí thịnh thì thế nước mạnh, rồi lên cao, nguyên khí suy thì thế nước yếu, rồi xuống thấp.",
        contextOrMeaning: "Câu danh ngôn trường tồn khẳng định vai trò quyết định của trí thức và nguồn nhân lực cao cấp đối với vận mệnh quốc gia."
      }
    ],
    mindMap: {
      id: "root-ht",
      label: "Hiền Tài Là Nguyên Khí Quốc Gia",
      type: "root",
      summary: "Thân Nhân Trung - Bia Tiến sĩ 1484",
      children: [
        {
          id: "ht-role",
          label: "Vai Trò Hiền Tài",
          type: "theme",
          summary: "Nguyên khí thịnh => Nước mạnh; Nguyên khí suy => Nước yếu",
          children: [
            { id: "ht-r1", label: "Là sinh khí, tinh hoa của đất nước", type: "sub" }
          ]
        },
        {
          id: "ht-bia",
          label: "Ý Nghĩa Dựng Bia",
          type: "theme",
          summary: "Vinh danh người tài, khuyến khích hậu thế, răn đe kẻ xấu",
          children: [
            { id: "ht-b1", label: "Để kẻ sĩ giữ gìn danh tiết và cống hiến", type: "sub" }
          ]
        }
      ]
    },
    quizzes: [
      {
        id: "q-ht-1",
        question: "Theo Thân Nhân Trung, 'nguyên khí' trong câu 'Hiền tài là nguyên khí của quốc gia' có nghĩa là gì?",
        options: [
          "A. Không khí tự nhiên trong sạch của đất nước",
          "B. Chất làm nên sự sống, sinh khí và sức mạnh tiềm tàng quyết định sự tồn vong, thịnh suy của đất nước",
          "C. Tiền bạc và kho tàng quốc gia",
          "D. Sức mạnh quân sự của triều đình"
        ],
        correctAnswer: 1,
        explanation: "'Nguyên khí' là chất khí ban đầu làm nên sự sống và sức mạnh cốt lõi. Ví hiền tài như nguyên khí là cách vinh danh cao nhất của tác giả.",
        level: "Thông hiểu"
      }
    ]
  },

  // ==========================================
  // LỚP 11 - KẾT NỐI TRI THỨC VỚI CUỘC SỐNG
  // ==========================================
  {
    id: "11-1",
    grade: 11,
    unit: "Bài 1: Câu chuyện và điểm nhìn trong truyện kể",
    title: "Vợ nhặt",
    author: "Kim Lân",
    genre: "Truyện ngắn hiện đại",
    period: "Văn học Việt Nam hiện đại (1945-1954)",
    authorBio:
      "Kim Lân (1920–2007) là nhà văn sở trường về truyện ngắn, chuyên viết về phong tục, sinh hoạt nông thôn và cảnh ngộ của những con người quê hương nghèo khổ nhưng giàu lòng nhân ái.",
    context:
      "Truyện viết dựa trên bối cảnh nạn đói khủng khiếp năm Ất Dậu 1945 làm hơn 2 triệu đồng bào ta chết đói. Tác phẩm ban đầu tên 'Xóm ngụ cư', sau hòa bình được tác giả viết lại trong tập 'Con chó xấu xí' (1962).",
    summary:
      "Giữa lúc nạn đói cướp đi sinh mạng hàng xóm ngụ cư từng ngày, Tràng - một gã trai nghèo, thô kệch, đẩy xe bò thuê - bỗng dưng 'nhặt' được vợ chỉ bằng mấy lời tầm phơ tầm phào và bốn bát bánh đúc. Sự xuất hiện của người 'vợ nhặt' không mang tới tuyệt vọng mà làm bừng sáng gian nhà rách nát, khơi dậy tình người ấm áp, lòng khoan dung của bà cụ Tứ và niềm tin vào tương lai sống qua hình ảnh lá cờ đỏ sao vàng.",
    structure: [
      {
        title: "Phần 1: Cảnh Tràng dẫn vợ về xóm ngụ cư giữa nạn đói",
        description: "Bức tranh xóm ngụ cư ảm đạm như nghĩa địa và sự ngạc nhiên, tò mò của dân làng trước sự kiện Tràng có vợ."
      },
      {
        title: "Phần 2: Diễn biến tâm trạng của Tràng và bà cụ Tứ tối hôm đó",
        description: "Niềm vui ngỡ ngàng của Tràng, tấm lòng bao dung, thương con đứt ruột nhưng đầy lạc quan của người mẹ nghèo."
      },
      {
        title: "Phần 3: Bữa cơm ngày đói đầu tiên và ánh sáng tự do",
        description: "Bữa cơm thảm hại với 'chè khoán' (cám) nhưng đầm ấm; tin đồn phá kho thóc Nhật và lá cờ đỏ sao vàng phía trước."
      }
    ],
    contentAnalysis: [
      {
        heading: "Giá trị hiện thực khốc liệt về nạn đói năm Ất Dậu 1945",
        details: [
          "Người chết đói như ngả rạ, người sống dật dờ như những bóng ma, không khí tanh tưởi mùi gây của xác người.",
          "Giá trị con người bị rẻ rúng đến mức chỉ cần 4 bát bánh đúc là có thể 'nhặt' được vợ theo về."
        ]
      },
      {
        heading: "Giá trị nhân đạo sâu sắc và khát vọng sống",
        details: [
          "Trong bờ vực cái chết, những con người nghèo khổ không buông xuôi mà cưu mang nhau, hướng về sự sống và hạnh phúc gia đình.",
          "Hình tượng bà cụ Tứ: ngọn lửa tình mẫu tử ấm áp, luôn nói chuyện vui, chuyện tương lai để truyền động lực cho con gái và con trai."
        ]
      }
    ],
    artisticFeatures: [
      "Xây dựng tình huống truyện độc đáo, éo le nhưng thắm đượm tình người ('nhặt vợ' trong ngày đói).",
      "Nghệ thuật miêu tả tâm lý nhân vật tinh tế, tự nhiên, chuyển biến sâu sắc.",
      "Ngôn ngữ mộc mạc, đậm chất nông thôn Bắc Bộ, giàu tính gợi hình."
    ],
    keyQuotes: [
      {
        quote: "Không ai muốn nhắc đến chuyện buồn. Bà cụ Tứ toàn nói chuyện vui, chuyện sung sướng sau này: 'Khi nào có tiền ta mua lấy đôi gà...'.",
        contextOrMeaning: "Khát vọng sống mãnh liệt và niềm lạc quan trong hoàn cảnh khốn cùng nhất của người nông dân."
      },
      {
        quote: "Trong óc Tràng vẫn thấy hiện ngoại cảnh đám người đói và lá cờ đỏ bay phấp phới.",
        contextOrMeaning: "Câu kết mở ra lối thoát tất yếu của Cách mạng, chuyển từ bóng tối của nạn đói sang ánh sáng tự do."
      }
    ],
    mindMap: {
      id: "root-vn",
      label: "Vợ Nhặt (Kim Lân)",
      type: "root",
      summary: "Tình người và khát vọng sống giữa nạn đói 1945",
      children: [
        {
          id: "vn-trang",
          label: "Nhân Vật Tràng",
          type: "character",
          summary: "Nghèo, thô kệch, hào hiệp, biết chăm lo gia đình",
          children: [
            { id: "vn-t1", label: "Nhặt vợ bằng lòng nhân ái thực tâm", type: "sub" },
            { id: "vn-t2", label: "Ý thức trách nhiệm làm chồng, làm chủ", type: "sub" }
          ]
        },
        {
          id: "vn-cutu",
          label: "Bà Cụ Tứ",
          type: "character",
          summary: "Tình mẫu tử bao dung, nguồn sáng lạc quan",
          children: [
            { id: "vn-c1", label: "Khóc thương con, mở lòng đón dâu mới", type: "sub" },
            { id: "vn-c2", label: "Nồi chè khoán (cám) đong đầy tình yêu thương", type: "sub" }
          ]
        },
        {
          id: "vn-sit",
          label: "Tình Huống Truyện",
          type: "theme",
          summary: "Éo le, độc đáo, cận kề cái chết vẫn hướng về sự sống",
          children: [
            { id: "vn-s1", label: "Lá cờ đỏ sao vàng mở ra lối thoát", type: "sub", quote: "Đám người đói và lá cờ đỏ bay phấp phới..." }
          ]
        }
      ]
    },
    quizzes: [
      {
        id: "q-vn-1",
        question: "Tình huống truyện độc đáo trong tác phẩm 'Vợ nhặt' của Kim Lân là gì?",
        options: [
          "A. Tràng là người giàu có nhất làng nghèo ngụ cư đi mua vợ",
          "B. Giữa nạn đói khủng khiếp năm 1945, anh nông dân nghèo Tràng bất ngờ 'nhặt' được vợ chỉ qua vài câu đùa và bốn bát bánh đúc",
          "C. Bà cụ Tứ tìm được người con gái thất lạc sau nhiều năm chiến tranh",
          "D. Dân xóm ngụ cư nổi dậy phá kho thóc Nhật"
        ],
        correctAnswer: 1,
        explanation: "Tình huống 'nhặt vợ' vừa éo le, trớ trêu, vừa là cơ hội để làm ngời sáng tấm lòng nhân đạo và niềm khát khao hạnh phúc của những người đói.",
        level: "Nhận biết"
      },
      {
        id: "q-vn-2",
        question: "Chi tiết 'nồi chè khoán' (cháo cám) trong bữa cơm đầu tiên có ý nghĩa nghệ thuật sâu sắc nào?",
        options: [
          "A. Chứng minh gia đình Tràng có điều kiện ăn uống tốt hơn hàng xóm",
          "B. Là minh chứng cho hiện thực cay đắng của nạn đói, đồng thời thể hiện tình mẫu tử, tấm lòng chia ngọt sẻ bùi của bà cụ Tứ",
          "C. Là món đặc sản vùng ngụ cư Kim Lân muốn giới thiệu",
          "D. Thể hiện sự vụng về trong nữ công gia chánh của người dâu mới"
        ],
        correctAnswer: 1,
        explanation: "Nồi cháo cám đắng chát nghẹn họng nhưng được bà cụ Tứ gọi đùa là 'chè khoán' ngon đáo để, qua đó làm nổi bật sự bao dung và tình thương con mãnh liệt.",
        level: "Vận dụng"
      },
      {
        id: "q-vn-3",
        question: "Hình ảnh nào xuất hiện trong tâm trí Tràng ở đoạn kết của tác phẩm?",
        options: [
          "A. Ngôi nhà mới xây khang trang với đàn gà đầy sân",
          "B. Đám người đói đi phá kho thóc và lá cờ đỏ bay phấp phới",
          "C. Con đường xóm ngụ cư tràn ngập ánh nắng ban mai",
          "D. Xe bò kéo gạo của Tràng chạy về làng"
        ],
        correctAnswer: 1,
        explanation: "Lá cờ đỏ sao vàng và đoàn người phá kho thóc phản ánh hướng đi theo Cách mạng, mở ra ánh sáng tươi sáng cho kiếp người.",
        level: "Thông hiểu"
      }
    ]
  },
  {
    id: "11-2",
    grade: 11,
    unit: "Bài 1: Câu chuyện và điểm nhìn trong truyện kể",
    title: "Chữ người tử tù",
    author: "Nguyễn Tuân",
    genre: "Truyện ngắn hiện đại",
    period: "Văn học Việt Nam trước cách mạng 1945 (Tập 'Vang bóng một thời')",
    authorBio:
      "Nguyễn Tuân (1910–1987) là nhà văn tài hoa, uyên bác, suốt đời đi tìm cái đẹp ('nghệ thuật vị nghệ thuật' sau đó là 'nghệ thuật vị nhân sinh').",
    context:
      "Truyện ngắn ban đầu mang tên 'Dòng chữ cuối cùng', đăng trên tạp chí Tao Đàn năm 1939, sau đưa vào tập truyện kiệt tác 'Vang bóng một thời' (1940).",
    summary:
      "Huấn Cao - một anh hùng phong trào nông dân nổi dậy, một nhà thư pháp thiên tài bị kết án tử hình và đưa vào ngục Tỉnh Sơn. Quản ngục - người cai quản ngục tù nhưng lại có tâm hồn cao quý, say mê cái đẹp của chữ Huấn Cao. Trải qua những thử thách thầm lặng, Huấn Cao nhận ra tấm lòng 'biệt nhỡn liên tài' của Quản ngục và đồng ý cho chữ ngay trong xà lim tối tăm trước đêm ra pháp trường.",
    structure: [
      {
        title: "Phần 1: Cuộc gặp gỡ éo le giữa Huấn Cao và viên Quản ngục",
        description: "Vị thế đối lập: một bên là tội nhân tử tù nhưng là chúa tể cái đẹp, một bên là quan coi ngục nhưng là kẻ ái mộ cái đẹp."
      },
      {
        title: "Phần 2: Cảnh cho chữ - Một cảnh tượng xưa nay chưa từng có",
        description: "Trong xà lim tăm tối, sự hoán đổi ngôi vị kỳ diệu: cái đẹp, thiên lương và khí phách đã chiến thắng sự tàn bạo, nhơ bẩn."
      }
    ],
    contentAnalysis: [
      {
        heading: "Hình tượng Huấn Cao - Khí phách hiên ngang và tâm hồn nghệ sĩ tài hoa",
        details: [
          "Tài viết chữ nhanh và đẹp, chữ ông là báu vật ở đời.",
          "Khí phách hiên ngang không sợ uy quyền, 'chưa bao giờ vì vàng ngọc hay quyền thế mà ép mình viết câu đối bao giờ'.",
          "Thiên lương cao đẹp: trân trọng tấm lòng 'một tấm lòng trong thiên hạ' của viên Quản ngục."
        ]
      },
      {
        heading: "Cảnh cho chữ - Cảnh tượng xưa nay chưa từng có",
        details: [
          "Diễn ra trong nhà ngục tối tăm, hôi hám của gián, rết; trên vuông lụa trắng tinh rực rỡ dưới ánh đuốc.",
          "Người cho chữ là tử tù bị xiềng xích nhưng oai phong, người xin chữ là quản ngục nhưng khúm núm bái lĩnh.",
          "Thông điệp: Cái đẹp có thể sinh ra từ chốn nhơ bẩn nhưng không thể sống cùng sự tàn ác; cái đẹp cứu rỗi con người."
        ]
      }
    ],
    artisticFeatures: [
      "Thủ pháp tương phản - đối lập cổ điển (cái đẹp vs cái xấu, tự do vs tù ngục).",
      "Ngôn ngữ cổ kính, trang trọng, giàu nhịp điệu tạo nên không khí 'vang bóng một thời'.",
      "Xây dựng tính cách nhân vật đạt tới độ lý tưởng hóa cao nhất."
    ],
    keyQuotes: [
      {
        quote: "Thầy Quản nên tìm về nhà quê mà ở, thầy hãy thoát khỏi cái nghề này đi đã, rồi hãy nghĩ đến chuyện chơi chữ. Ở đây, khó giữ thiên lương cho lành vững và rồi cũng đến nhem nhuốc mất đời lương thiện đi.",
        contextOrMeaning: "Lời khuyên chân tình của Huấn Cao khẳng định: Cái đẹp phải đi đôi với Cái thiện, muốn thưởng thức cái đẹp thì tâm hồn phải sạch sẽ, tự do."
      },
      {
        quote: "Kẻ mê muội này xin bái lĩnh.",
        contextOrMeaning: "Sự quy phục trọn vẹn của uy quyền ngục tù trước sức mạnh cảm hóa bất diệt của nghệ thuật và nhân cách."
      }
    ],
    mindMap: {
      id: "root-cntt",
      label: "Chữ Người Tử Tù (Nguyễn Tuân)",
      type: "root",
      summary: "Sự chiến thắng của Cái Đẹp và Thiên Lương trong ngục tối",
      children: [
        {
          id: "cntt-hc",
          label: "Huấn Cao",
          type: "character",
          summary: "Tài hoa - Khí phách - Thiên lương",
          children: [
            { id: "cntt-h1", label: "Chữ viết nhanh đẹp như rồng bay phượng múa", type: "sub" },
            { id: "cntt-h2", label: "Trân trọng người có tấm lòng biệt nhỡn liên tài", type: "sub" }
          ]
        },
        {
          id: "cntt-qn",
          label: "Viên Quản Ngục",
          type: "character",
          summary: "Thanh âm trong trẻo giữa bản đàn mà xô bồ",
          children: [
            { id: "cntt-q1", label: "Sẵn sàng chịu tội để bảo vệ và kính trọng Huấn Cao", type: "sub" }
          ]
        },
        {
          id: "cntt-cc",
          label: "Cảnh Cho Chữ",
          type: "theme",
          summary: "Cảnh tượng xưa nay chưa từng có",
          children: [
            { id: "cntt-cc1", label: "Hoán đổi ngôi vị ngoạn mục giữa ngục tù", type: "sub", quote: "Kẻ mê muội này xin bái lĩnh..." }
          ]
        }
      ]
    },
    quizzes: [
      {
        id: "q-cntt-1",
        question: "Vì sao Nguyễn Tuân gọi cảnh cho chữ trong ngục là 'một cảnh tượng xưa nay chưa từng có'?",
        options: [
          "A. Vì đây là lần đầu tiên Huấn Cao viết chữ trên lụa trắng",
          "B. Vì việc cho chữ diễn ra trong xà lim tăm tối, người cho chữ là tử tù đeo gông xiềng, người nhận chữ là viên quan coi ngục khúm núm vái lạy",
          "C. Vì chữ được viết bằng mực tàu trộn với máu",
          "D. Vì triều đình cho phép tử tù được tự do nghệ thuật trước khi thi hành án"
        ],
        correctAnswer: 1,
        explanation: "Sự đảo lộn trật tự xã hội: cái đẹp và thiên lương (tử tù) ngự trị ở ngôi cao nhất, còn uy quyền giam cầm (quản ngục) kính cẩn bái lĩnh.",
        level: "Thông hiểu"
      }
    ]
  },
  {
    id: "11-3",
    grade: 11,
    unit: "Bài 2: Cấu tứ và hình ảnh trong thơ trữ tình",
    title: "Đây thôn Vĩ Dạ",
    author: "Hàn Mặc Tử",
    genre: "Thơ trữ tình",
    period: "Phong trào Thơ mới (1932-1945)",
    authorBio:
      "Hàn Mặc Tử (1912–1940) là một trong những thi sĩ kỳ lạ và vĩ đại nhất của Thơ mới, mang một hồn thơ mãnh liệt, đau thương nhưng tràn ngập ánh sáng thiêng liêng.",
    context:
      "Bài thơ ra đời năm 1938 (ban đầu có tên 'Ở đây thôn Vĩ Dạ'), được gợi cảm hứng từ bức bưu thiếp phong cảnh xứ Huế do Hoàng Thị Kim Cúc gửi cho nhà thơ khi ông đang lâm bệnh nặng tại trại phong Quy Hòa.",
    summary:
      "Bức tranh xứ Huế đẹp như mơ nhưng thoáng đượm buồn chia lìa: từ vườn Vĩ Dạ xanh ngắt nắng hàng cau ban mai, đến dòng sông Hương đêm trăng huyền ảo, và cuối cùng là bóng dáng người xứ Huế trong sương khói mơ hồ cùng lời câu hỏi tuyệt vọng về tình đời.",
    structure: [
      {
        title: "Khổ 1: Bức tranh thiên nhiên và con người Vĩ Dạ buổi bình minh",
        description: "Cảnh nắng hàng cau, vườn xanh như ngọc và khuôn mặt chữ điền hiền hậu sau lá trúc."
      },
      {
        title: "Khổ 2: Cảnh sông nước xứ Huế đêm trăng chia lìa",
        description: "Gió mây chia ngả, dòng nước buồn thiu và thuyền ai chở trăng về bến Đợi."
      },
      {
        title: "Khổ 3: Hình bóng khách đường xa trong sương khói và nỗi niềm hoài nghi",
        description: "Khát vọng gắn bó với cuộc đời nhưng đầy mặc cảm, băn khoăn về lòng người."
      }
    ],
    contentAnalysis: [
      {
        heading: "Sự chuyển dịch không gian và cảm xúc thần kỳ",
        details: [
          "Khổ 1: Cảnh thực ngập tràn ánh sáng, tình cảm tươi vui háo hức ('Sao anh không về chơi thôn Vĩ?').",
          "Khổ 2: Cảnh chuyển sang cõi mộng, sầu chia ly ('Gió theo lối gió mây đường mây').",
          "Khổ 3: Cảnh chìm trong sương khói hư ảo, nỗi đau thốt lên thành câu hỏi hư vô ('Ai biết tình ai có đậm đà?')."
        ]
      }
    ],
    artisticFeatures: [
      "Bút pháp gợi tả kết hợp hiện thực, lãng mạn và tượng trưng siêu thực.",
      "Hình ảnh độc đáo, giàu sức ám ảnh (vườn xanh như ngọc, thuyền chở trăng, áo em trắng quá nhìn không ra).",
      "Câu hỏi tu từ lặp lại tạo nhịp điệu day dứt, khắc khoải."
    ],
    keyQuotes: [
      {
        quote: "Vườn ai mướt quá xanh như ngọc\nLá trúc che ngang mặt chữ điền.",
        contextOrMeaning: "Vẻ đẹp thanh khiết, sang trọng và hài hòa tuyệt mỹ giữa con người và thiên nhiên xứ Huế."
      },
      {
        quote: "Áo em trắng quá nhìn không ra\nỞ đây sương khói mờ nhân ảnh\nAi biết tình ai có đậm đà?",
        contextOrMeaning: "Vẻ đẹp tinh khôi nhưng xa vời vợi, nỗi băn khoăn, cô đơn tận cùng của thi sĩ khi đối diện với cái chết cận kề."
      }
    ],
    mindMap: {
      id: "root-dtvd",
      label: "Đây Thôn Vĩ Dạ (Hàn Mặc Tử)",
      type: "root",
      summary: "Bức tranh Huế thơ mộng và nỗi khát khao sống của thi sĩ",
      children: [
        {
          id: "dtvd-k1",
          label: "Khổ 1: Bình Minh Vĩ Dạ",
          type: "theme",
          summary: "Tươi sáng, thanh khiết, ngập tràn sức sống",
          children: [
            { id: "dtvd-k1-1", label: "Nắng hàng cau xanh như ngọc", type: "sub" }
          ]
        },
        {
          id: "dtvd-k2",
          label: "Khổ 2: Sông Nguyệt Đêm Huế",
          type: "theme",
          summary: "Gió mây chia ngả, thuyền chở trăng huyền ảo",
          children: [
            { id: "dtvd-k2-1", label: "Thuyền ai đậu bến sông trăng đó...", type: "sub" }
          ]
        },
        {
          id: "dtvd-k3",
          label: "Khổ 3: Khách Đường Xa & Câu Hỏi Tình Đời",
          type: "theme",
          summary: "Mặc cảm cô đơn, hoài nghi khắc khoải",
          children: [
            { id: "dtvd-k3-1", label: "Ai biết tình ai có đậm đà?", type: "sub", quote: "Áo em trắng quá nhìn không ra..." }
          ]
        }
      ]
    },
    quizzes: [
      {
        id: "q-dtvd-1",
        question: "Câu thơ 'Gió theo lối gió mây đường mây / Dòng nước buồn thiu hoa bắp lay' thể hiện tâm trạng gì của thi nhân?",
        options: [
          "A. Niềm vui sướng khi thấy gió mây bay lượn tự do",
          "B. Sự chia lìa, đứt gãy, cô đơn đến đau đớn trong tâm hồn người lâm bệnh nặng",
          "C. Sự bình yên tĩnh lặng tuyệt đối của sông Hương mùa nước lũ",
          "D. Niềm tự hào về cảnh quan kỳ vĩ của Huế"
        ],
        correctAnswer: 1,
        explanation: "Trong tự nhiên gió thổi mây bay cùng hướng, nhưng ở câu thơ Hàn Mặc Tử, gió và mây chia hai lối ngược nhau, tượng trưng cho sự chia lìa của số phận.",
        level: "Thông hiểu"
      }
    ]
  },
  {
    id: "11-4",
    grade: 11,
    unit: "Bài 4: Tự sự trong truyện thơ dân gian & thơ Nôm",
    title: "Trao duyên (Trích Truyện Kiều)",
    author: "Nguyễn Du",
    genre: "Truyện thơ Nôm",
    period: "Văn học Trung Đại Việt Nam (Thế kỷ XVIII - XIX)",
    authorBio:
      "Nguyễn Du (1765–1820), Đại thi hào dân tộc, Danh nhân văn hóa thế giới. Ông có trái tim 'nghìn năm sau còn đau nỗi đau của con người'.",
    context:
      "Đoạn trích từ câu 723 đến câu 756 của Truyện Kiều. Sau khi gia đình gặp tai biến, Thúy Kiều quyết định bán mình chuộc cha. Trước ngày theo Mã Giám Sinh, Kiều cậy nhờ em gái là Thúy Vân thay mình kết duyên cùng Kim Trọng.",
    summary:
      "Đoạn trích khắc họa sâu sắc bi kịch tình yêu tan vỡ và nhân cách hiếu nghĩa trọn vẹn của Thúy Kiều. Dù tự nguyện trao duyên cho em để trả nghĩa cho Kim Trọng, nhưng trong sâu thẳm tâm hồn Kiều là nỗi đau đớn tột cùng, sự tiếc nuối và cảm giác có lỗi với người yêu.",
    structure: [
      {
        title: "12 câu đầu: Thúy Kiều cậy nhờ, thuyết phục Thúy Vân nhận lời",
        description: "Lời nói nhún nhường, thấu tình đạt lý ('Cậy em em có chịu lời / Ngồi lên cho chị lạy rồi sẽ thưa')."
      },
      {
        title: "14 câu tiếp: Thúy Kiều trao kỷ vật và dặn dò em",
        description: "Chiếc thoa, bức tờ mây, phím đàn, mảnh hương nguyền - mâu thuẫn giữa hành động trao kỷ vật và tâm trạng giữ lại tình yêu ('Duyên này thì giữ vật này của chung')."
      },
      {
        title: "8 câu cuối: Thúy Kiều hướng về Kim Trọng với nỗi tuyệt vọng",
        description: "Lời tạ lỗi đau thương vỡ òa ('Trăm nghìn gửi lạy tình quân / Tơ duyên ngắn ngủi có ngần ấy thôi')."
      }
    ],
    contentAnalysis: [
      {
        heading: "Nghệ thuật sử dụng từ ngữ chuẩn xác đến diệu kỳ",
        details: [
          "Từ 'cậy': tin tưởng tuyệt đối, gửi gắm sức nặng; từ 'chịu': bắt buộc phải nhận lời vì tình mẫu tử/tình chị em trong hoàn cảnh ngặt nghèo.",
          "Hành động 'lạy', 'thưa' của người chị với người em tạo sự trang nghiêm, trọng đại phi thường."
        ]
      }
    ],
    artisticFeatures: [
      "Miêu tả nội tâm nhân vật đa tầng, sắc sảo thấu tận tâm can.",
      "Thể thơ lục bát truyền thống đạt đến độ hoàn thiện mẫu mực.",
      "Sự dung hòa giữa ngôn ngữ bác học và ngôn ngữ bình dân."
    ],
    keyQuotes: [
      {
        quote: "Cậy em em có chịu lời,\nNgồi lên cho chị lạy rồi sẽ thưa.",
        contextOrMeaning: "Hai từ nhãn tự 'cậy' và 'chịu' cho thấy trí tuệ thấu tình đạt lý và hoàn cảnh tuyệt vọng không thể từ chối của Thúy Kiều."
      },
      {
        quote: "Bây giờ trâm gãy gương tan,\nKể làm sao xiết muôn vàn ái ân!\nTrăm nghìn gửi lạy tình quân\nTơ duyên ngắn ngủi có ngần ấy thôi.",
        contextOrMeaning: "Tiếng khóc xé lòng cất lên giữa đêm khuya tạ lỗi cùng Kim Trọng, chứng minh tình yêu thủy chung bất tử."
      }
    ],
    mindMap: {
      id: "root-td",
      label: "Trao Duyên - Truyện Kiều",
      type: "root",
      summary: "Bi kịch tình yêu và tấm lòng hiếu nghĩa của Thúy Kiều",
      children: [
        {
          id: "td-l1",
          label: "Cậy Nhờ Thúy Vân",
          type: "theme",
          summary: "Cậy - Chịu - Lạy - Thưa",
          children: [
            { id: "td-l1-1", label: "Lý lẽ thấu tình đạt lý, hi sinh vì gia đình", type: "sub" }
          ]
        },
        {
          id: "td-l2",
          label: "Trao Kỷ Vật",
          type: "theme",
          summary: "Chiếc thoa, bức tờ mây => Duyên này thì giữ vật này của chung",
          children: [
            { id: "td-l2-1", label: "Mâu thuẫn trao vật nhưng không nỡ trao tình", type: "sub" }
          ]
        },
        {
          id: "td-l3",
          label: "Lời Tạ Lỗi Kim Trọng",
          type: "theme",
          summary: "Nỗi đau vỡ òa tột cùng",
          children: [
            { id: "td-l3-1", label: "Trăm nghìn gửi lạy tình quân...", type: "sub" }
          ]
        }
      ]
    },
    quizzes: [
      {
        id: "q-td-1",
        question: "Trong câu thơ 'Cậy em em có chịu lời', vì sao Nguyễn Du dùng từ 'cậy' và 'chịu' thay vì 'nhờ' và 'nhận'?",
        options: [
          "A. Vì tiếng địa phương xứ Nghệ dùng như vậy",
          "B. Từ 'cậy' bao hàm sự tin tưởng gửi gắm trọng trách; từ 'chịu' bao hàm sự nể nang, khó lòng từ chối trong hoàn cảnh éo le",
          "C. Để đảm bảo luật bằng trắc của câu thơ lục bát",
          "D. Vì Kiều muốn ra lệnh cho em gái"
        ],
        correctAnswer: 1,
        explanation: "Sự tinh tế của Nguyễn Du: 'cậy' là nhờ vả có niềm tin trọn vẹn, 'chịu' là nhận lời với sự hi sinh, chia sẻ gánh nặng.",
        level: "Vận dụng"
      }
    ]
  },

  // ==========================================
  // LỚP 12 - KẾT NỐI TRI THỨC VỚI CUỘC SỐNG
  // ==========================================
  {
    id: "12-1",
    grade: 12,
    unit: "Bài 1: Khái quát văn học hiện đại & Truyện ngắn",
    title: "Vợ chồng A Phủ",
    author: "Tô Hoài",
    genre: "Truyện ngắn hiện đại",
    period: "Văn học Việt Nam hiện đại (1945-1975) - Tập 'Truyện Tây Bắc' (1953)",
    authorBio:
      "Tô Hoài (1920–2014) có vốn hiểu biết phong phú, sâu sắc về phong tục tập quán các dân tộc miền núi Tây Bắc, văn phong hóm hỉnh, sống động.",
    context:
      "Kết quả của chuyến đi thực tế dài 8 tháng cùng bộ đội giải phóng Tây Bắc năm 1952. Truyện vinh danh sức sống mãnh liệt và con đường giác ngộ cách mạng của đồng bào Mèo (Mông).",
    summary:
      "Mị - cô gái Mông xinh đẹp, có tài thổi sáo bị thống lí Pá Tra bắt về làm con dâu gạt nợ, sống câm lặng như 'con rùa nuôi trong xó cửa'. Đêm tình mùa xuân Hồng Ngài, tiếng sáo đã đánh thức khát vọng sống trong Mị. Đến đêm mùa đông, nhìn thấy dòng nước mắt bò trên gò má A Phủ (chàng trai bị trói đứng chờ chết), Mị đã cắt dây cởi trói cứu A Phủ và cùng anh chạy trốn lên Phiềng Sa, tham gia cách mạng giải phóng quê hương.",
    structure: [
      {
        title: "Phần 1: Cuộc sống đọa đày của Mị ở nhà thống lí Pá Tra",
        description: "Nỗi đau thân phận con dâu gạt nợ, sự tê liệt ý thức sống và căn buồng chỉ có chiếc cửa sổ vuông bằng bàn tay."
      },
      {
        title: "Phần 2: Sự hồi sinh khát vọng sống trong Đêm tình mùa xuân Hồng Ngài",
        description: "Tiếng sáo gọi bạn tình, hơi rượu và hành động muốn đi chơi mùa xuân của Mị dù bị A Sử trói đứng."
      },
      {
        title: "Phần 3: Đêm mùa đông cắt dây cởi trói cứu A Phủ và tự cứu mình",
        description: "Từ sự thờ ơ vô cảm đến giọt nước mắt đồng cảm, hành động quyết liệt cắt dây trói chạy trốn tới tự do."
      }
    ],
    contentAnalysis: [
      {
        heading: "Sức sống tiềm tàng mãnh liệt không gì dập tắt được của Mị",
        details: [
          "Tiếng sáo mùa xuân là chất xúc tác gọi về quá khứ tự do, trẻ trung.",
          "Hành động cứu A Phủ là đỉnh cao của tình thương người và sự bùng nổ của bản năng tự vệ vĩ đại."
        ]
      },
      {
        heading: "Giá trị tố cáo và giá trị nhân đạo mới mẻ",
        details: [
          "Tố cáo sự tàn bạo của giai cấp thống trị miền núi kết hợp thần quyền độc đoán (cúng trình ma).",
          "Chỉ ra con đường giải phóng cho người lao động: tự đấu tranh và đi theo ánh sáng Cách mạng."
        ]
      }
    ],
    artisticFeatures: [
      "Miêu tả diễn biến tâm lý nhân vật Mị cực kỳ logic, tinh tế theo từng cung bậc.",
      "Ngôn ngữ truyện giàu tính tạo hình, mang đậm màu sắc phong tục Tây Bắc.",
      "Nhịp điệu câu văn linh hoạt theo cảm xúc nhân vật."
    ],
    keyQuotes: [
      {
        quote: "Ở buồng Mị nằm, kín mít, có một chiếc cửa sổ một lỗ vuông bằng bàn tay. Lúc nào trông ra cũng chỉ thấy trăng trắng, không biết là sương hay là nắng.",
        contextOrMeaning: "Hình ảnh ẩn dụ đặc sắc cho ngục tù giam hãm tuổi xuân và triệt tiêu ý niệm về thời gian, không gian của Mị."
      },
      {
        quote: "Mị đứng lặng trong bóng tối. Rồi Mị cũng vụt chạy ra. Trời tối lắm. Nhưng Mị vẫn bước vội... 'A Phủ cho tôi đi! Ở đây thì chết mất!'",
        contextOrMeaning: "Khoảnh khắc bùng nổ của khát vọng sống tự do, chuyển hóa từ nạn nhân bị áp bức thành con người làm chủ số phận."
      }
    ],
    mindMap: {
      id: "root-vcap",
      label: "Vợ Chồng A Phủ (Tô Hoài)",
      type: "root",
      summary: "Sức sống tiềm tàng và con đường tới tự do của Mị & A Phủ",
      children: [
        {
          id: "vcap-mi1",
          label: "Thân Phận Con Dâu Gạt Nợ",
          type: "theme",
          summary: "Cân nợ truyền kiếp, sống như con rùa trong xó cửa",
          children: [
            { id: "vcap-m1-1", label: "Căn buồng ô cửa sổ vuông bằng bàn tay", type: "sub" }
          ]
        },
        {
          id: "vcap-spring",
          label: "Đêm Tình Mùa Xuân",
          type: "theme",
          summary: "Tiếng sáo đánh thức khát vọng sống",
          children: [
            { id: "vcap-s1", label: "Mị muốn đi chơi dù bị trói đứng bằng dây đay", type: "sub" }
          ]
        },
        {
          id: "vcap-winter",
          label: "Đêm Mùa Đông Cởi Trói",
          type: "theme",
          summary: "Giọt nước mắt A Phủ => Đồng cảm => Cắt dây trói",
          children: [
            { id: "vcap-w1", label: "A Phủ cho tôi đi! Ở đây thì chết mất!", type: "sub", quote: "Mị đứng lặng trong bóng tối rồi vụt chạy ra..." }
          ]
        }
      ]
    },
    quizzes: [
      {
        id: "q-vcap-1",
        question: "Chi tiết nào là bước ngoặt quyết định khiến Mị từ trạng thái vô cảm chuyển sang quyết định cắt dây trói cứu A Phủ?",
        options: [
          "A. Tiếng sáo gọi bạn tình vọng lại từ đồi xa",
          "B. Nhìn thấy dòng nước mắt lấp lánh bò xuống hai lõm má đã xám đen lại của A Phủ",
          "C. Thống lí Pá Tra đánh đập Mị tàn nhẫn",
          "D. A Phủ lên tiếng van xin Mị giúp đỡ"
        ],
        correctAnswer: 1,
        explanation: "Dòng nước mắt của A Phủ đã chạm vào nỗi đau của chính Mị trong quá khứ từng bị trói khóc, khơi dậy tình thương đồng loại mãnh liệt.",
        level: "Thông hiểu"
      },
      {
        id: "q-vcap-2",
        question: "Hình ảnh 'con rùa nuôi trong xó cửa' dùng để ví với nhân vật nào và mang ý nghĩa gì?",
        options: [
          "A. Ví với A Phủ bị trói đứng ngoài cột cọc",
          "B. Ví với Mị, thể hiện sự chai sạn, câm lặng và mất hết ý thức phản kháng trong nhà thống lí Pá Tra",
          "C. Ví với A Sử - con trai nhà thống lí",
          "D. Ví với con vật nuôi thần thánh của người Mông"
        ],
        correctAnswer: 1,
        explanation: "Sự so sánh đắt giá cho thấy cường quyền và thần quyền nhà Pá Tra đã tha hóa con người, biến cô gái xinh đẹp thành người cam chịu như loài vật.",
        level: "Nhận biết"
      }
    ]
  },
  {
    id: "12-2",
    grade: 12,
    unit: "Bài 1: Khái quát văn học hiện đại & Truyện ngắn",
    title: "Chiếc thuyền ngoài xa",
    author: "Nguyễn Minh Châu",
    genre: "Truyện ngắn hiện đại",
    period: "Văn học Việt Nam thời kì đổi mới (1983)",
    authorBio:
      "Nguyễn Minh Châu (1930–1989) được tôn vinh là 'người mở đường tinh anh và tài năng nhất' của văn học Việt Nam thời kỳ đổi mới, chuyển từ cảm hứng sử thi sang cảm hứng thế sự - đời tư.",
    context:
      "Truyện viết năm 1983, đặt ra những vấn đề bức thiết về mối quan hệ giữa nghệ thuật và cuộc sống, giữa người nghệ sĩ và nhân dân lao động sau chiến tranh.",
    summary:
      "Nghệ sĩ nhiếp ảnh Phùng đến một vùng biển miền Trung để chụp ảnh lịch. Anh sung sướng phát hiện 'cảnh đắt trời cho' - chiếc thuyền lưới vó trong sương mù tuyệt mỹ. Nhưng ngay khi chiếc thuyền vào bờ, Phùng bàng hoàng chứng cảnh gã chồng vũ phu đánh đập vợ tàn bạo. Tại tòa án huyện, người đàn bà hàng chài nhất quyết từ chối ly hôn vì cần chồng chèo chống nuôi đàn con. Phùng và Đẩu (chánh án) ngộ ra triết lý sâu sắc về cái nhìn đa diện với cuộc đời.",
    structure: [
      {
        title: "Phần 1: Phát hiện thứ nhất - Bức tranh thiên nhiên tuyệt mỹ ngoài xa",
        description: "Cái đẹp toàn bích, lung linh như một bức tranh mực tàu của danh họa thời cổ."
      },
      {
        title: "Phần 2: Phát hiện thứ hai - Bi kịch bạo lực gia đình tàn nhẫn trên bãi biển",
        description: "Sự đối lập kinh hoàng giữa ngoại cảnh thơ mộng bên ngoài và hiện thực nhức nhối bên trong."
      },
      {
        title: "Phần 3: Câu chuyện ở tòa án huyện và sự tự nhận thức của Phùng, Đẩu",
        description: "Bài học về cách nhìn nhận con người: không thể nhìn đời bằng con mắt đơn giản, phiến diện."
      }
    ],
    contentAnalysis: [
      {
        heading: "Ý nghĩa hai phát hiện của nghệ sĩ Phùng",
        details: [
          "Nghệ thuật không được xa rời cuộc sống: chiếc thuyền ngoài xa thì đẹp thơ mộng, nhưng khi lại gần là muôn vàn góc khuất đau thương.",
          "Cái đẹp thực sự phải gắn liền với lòng nhân ái và sự thấu hiểu nỗi khổ của nhân dân."
        ]
      },
      {
        heading: "Hình tượng người đàn bà hàng chài",
        details: [
          "Bề ngoài thô kệch, xấu xí, nhẫn nhục chịu đòn không kêu một tiếng.",
          "Bên trong là đức hi sinh cao cả vì con, sự thấu hiểu lẽ đời sâu sắc hơn cả những trí thức sách vở như Đẩu và Phùng."
        ]
      }
    ],
    artisticFeatures: [
      "Xây dựng tình huống nhận thức độc đáo, mang ý nghĩa triết lý sâu xa.",
      "Ngôn ngữ đối thoại chân thực, đa thanh, mang đậm chiêm nghiệm thế sự.",
      "Biểu tượng 'chiếc thuyền ngoài xa' giàu tầng nghĩa."
    ],
    keyQuotes: [
      {
        quote: "Lòng các chú tốt, nhưng các chú đâu có phải là người làm ăn... cho nên các chú đâu có hiểu được cái việc của các người làm ăn lam lũ khó nhọc.",
        contextOrMeaning: "Lời giãi bày chân tình làm sụp đổ cái nhìn sách vở, lý thuyết suông của những người làm luật pháp và nghệ thuật."
      },
      {
        quote: "Bao giờ tôi cũng thấy người đàn bà ấy bước ra khỏi tấm ảnh.",
        contextOrMeaning: "Sự thức tỉnh trọn vẹn: Nghệ thuật đích thực phải luôn mang bóng dáng và hơi thở ấm nóng của cuộc đời thực."
      }
    ],
    mindMap: {
      id: "root-ctnx",
      label: "Chiếc Thuyền Ngoài Xa",
      type: "root",
      summary: "Nguyễn Minh Châu - Triết lý nghệ thuật & cuộc sống",
      children: [
        {
          id: "ctnx-ph1",
          label: "Phát Hiện 1: Cảnh Thuyền Ngoài Xa",
          type: "theme",
          summary: "Bức tranh tuyệt mỹ, toàn bích như mơ",
          children: [
            { id: "ctnx-p1-1", label: "Cảnh đắt trời cho của nhiếp ảnh gia", type: "sub" }
          ]
        },
        {
          id: "ctnx-ph2",
          label: "Phát Hiện 2: Bạo Lực Trên Bãi Biển",
          type: "theme",
          summary: "Chồng đánh vợ bằng thắt lưng quật tới tấp",
          children: [
            { id: "ctnx-p2-1", label: "Sự thật xót xa sau lớp sương mù thẩm mỹ", type: "sub" }
          ]
        },
        {
          id: "ctnx-woman",
          label: "Người Đàn Bà Hàng Chài",
          type: "character",
          summary: "Đức hi sinh vì con - Thấu hiểu lẽ đời",
          children: [
            { id: "ctnx-w-1", label: "Đàn bà hàng chài phải có người đàn ông chèo chống", type: "sub", quote: "Lòng các chú tốt nhưng các chú đâu hiểu..." }
          ]
        }
      ]
    },
    quizzes: [
      {
        id: "q-ctnx-1",
        question: "Biểu tượng 'chiếc thuyền ngoài xa' trong tác phẩm mang ý nghĩa triết lý gì?",
        options: [
          "A. Sự xa xôi không thể vươn tới của công nghệ đánh bắt cá hải sản",
          "B. Khoảng cách giữa nghệ thuật thuần túy và hiện thực cuộc sống nhiều góc khuất, đòi hỏi nghệ sĩ phải nhìn nhận sâu sắc, đa diện",
          "C. Cuộc sống bình yên, lãng mạn của ngư dân vùng biển miền Trung",
          "D. Sự lạc hậu của phương tiện giao thông trên biển"
        ],
        correctAnswer: 1,
        explanation: "Chiếc thuyền khi ở xa thì thơ mộng tuyệt mỹ, nhưng khi lại gần lại là bi kịch bạo lực. Nghệ thuật không được dừng lại ở vẻ đẹp viển vông ngoài xa.",
        level: "Vận dụng"
      },
      {
        id: "q-ctnx-2",
        question: "Tại tòa án huyện, lý do quan trọng nhất khiến người đàn bà hàng chài từ chối ly hôn là gì?",
        options: [
          "A. Vì bà sợ chồng trả thù",
          "B. Vì trên thuyền cần một người đàn ông khỏe mạnh để chèo chống mùa phong ba và vì bà yêu thương, muốn nuôi nấng đàn con",
          "C. Vì luật pháp huyện không cho phép ly hôn",
          "D. Vì bà muốn giữ sĩ diện cho gia đình"
        ],
        correctAnswer: 1,
        explanation: "'Đàn bà trên thuyền chúng tôi phải sống cho con chứ không thể sống cho mình' - tình mẫu tử và thực tế mưu sinh lam lũ quyết định lựa chọn của bà.",
        level: "Thông hiểu"
      }
    ]
  },
  {
    id: "12-3",
    grade: 12,
    unit: "Bài 2: Thơ Việt Nam hiện đại",
    title: "Tây Tiến",
    author: "Quang Dũng",
    genre: "Thơ trữ tình",
    period: "Văn học kháng chiến chống Pháp (1948)",
    authorBio:
      "Quang Dũng (1921–1988) là nhà thơ kiêm họa sĩ, nhạc sĩ có hồn thơ phóng khoáng, hào hoa, lãng mạn đậm chất xứ Đoài.",
    context:
      "Sáng tác năm 1948 tại Phù Lưu Chanh khi nhà thơ đã chuyển sang đơn vị khác, nhớ về đoàn quân Tây Tiến - đơn vị bộ đội chủ lực tham gia bảo vệ biên giới Tây Bắc và Thượng Lào.",
    summary:
      "Bài thơ là đài tưởng niệm bằng thơ tuyệt đẹp về người lính Tây Tiến với vẻ đẹp bi tráng, hào hoa: vừa oai hùng kiêu dũng vượt qua thiên nhiên Tây Bắc hùng vĩ hiểm trở, vừa lãng mạn say đắm trong đêm liên hoan lửa trại, và anh dũng hy sinh vì Tổ quốc mà không màng danh lợi.",
    structure: [
      {
        title: "Đoạn 1: Nhớ thiên nhiên Tây Bắc hùng vĩ, dữ dội và những chặng hành quân gian khổ",
        description: "Dốc lên khúc khuỷu dốc thăm thẳm, Heo hút cồn mây súng ngửi trời."
      },
      {
        title: "Đoạn 2: Những kỷ niệm lãng mạn ấm áp tình quân dân Tây Bắc",
        description: "Đêm hội đuốc hoa doanh trại bừng sáng và chiều sương Châu Mộc thơ mộng."
      },
      {
        title: "Đoạn 3: Chân dung tượng đài người lính Tây Tiến bi tráng",
        description: "Tây Tiến đoàn binh không mọc tóc / Quân xanh màu lá dữ oai hùm... Chiến trường đi chẳng tiếc đời xanh."
      },
      {
        title: "Đoạn 4: Lời thề gắn bó trường tồn cùng Tây Tiến",
        description: "Tây Tiến người đi không hẹn ước / Đường lên thăm thẳm một chia phôi."
      }
    ],
    contentAnalysis: [
      {
        heading: "Thiên nhiên Tây Bắc mang vẻ đẹp song hành: dữ dội và thơ mộng",
        details: [
          "Sự hiểm trở, hoang sơ: dốc cao thăm thẳm, cọp trêu người, thác gầm thét.",
          "Sự êm dịu, lãng mạn: Mường Lát hoa về trong đêm hơi, nhà ai Pha Luông mưa xa khơi."
        ]
      },
      {
        heading: "Vẻ đẹp lãng mạn và bi tráng của lính Tây Tiến",
        details: [
          "Hiện thực khốc liệt: sốt rét rụng tóc, da xanh màu lá, áo bào thay chiếu anh về đất.",
          "Tâm hồn hào hoa: 'Mắt trừng gửi mộng qua biên giới / Đêm mơ Hà Nội dáng kiều thơm'."
        ]
      }
    ],
    artisticFeatures: [
      "Bút pháp lãng mạn kết hợp chất bi tráng độc đáo.",
      "Ngôn ngữ giàu nhạc điệu, hội họa (thi trung hữu họa, thi trung hữu nhạc), tạo hình tương phản sắc nét.",
      "Sử dụng từ Hán Việt trang trọng ('biên cương', 'viễn xứ', 'chiến trường', 'độc hành') để vĩnh cửu hóa sự hy sinh."
    ],
    keyQuotes: [
      {
        quote: "Dốc lên khúc khuỷu dốc thăm thẳm\nHeo hút cồn mây súng ngửi trời\nNgàn thước lên cao, ngàn thước xuống\nNhà ai Pha Luông mưa xa khơi.",
        contextOrMeaning: "Bức tranh địa hình Tây Bắc hiểm trở tột cùng nhưng nét vẽ cuối nhẹ nhõm như bức tranh thủy mặc."
      },
      {
        quote: "Tây Tiến đoàn binh không mọc tóc\nQuân xanh màu lá dữ oai hùm\nMắt trừng gửi mộng qua biên giới\nĐêm mơ Hà Nội dáng kiều thơm.",
        contextOrMeaning: "Vẻ đẹp ngoại hình dữ dội do chiến điệu gian khổ đối lập với trái tim lãng mạn, hào hoa của những chàng trai Hà thành."
      }
    ],
    mindMap: {
      id: "root-tt",
      label: "Tây Tiến (Quang Dũng)",
      type: "root",
      summary: "Tượng đài bi tráng về người lính Tây Tiến và thiên nhiên Tây Bắc",
      children: [
        {
          id: "tt-nat",
          label: "Thiên Nhiên Tây Bắc",
          type: "theme",
          summary: "Hùng vĩ, hiểm trở vs Thơ mộng, lãng mạn",
          children: [
            { id: "tt-n1", label: "Dốc khúc khuỷu, heo hút cồn mây", type: "sub" },
            { id: "tt-n2", label: "Nhà ai Pha Luông mưa xa khơi", type: "sub" }
          ]
        },
        {
          id: "tt-soldier",
          label: "Hình Tượng Người Lính",
          type: "character",
          summary: "Bi tráng - Hào hoa - Kiêu dũng",
          children: [
            { id: "tt-s1", label: "Không mọc tóc, quân xanh màu lá dữ oai hùm", type: "sub" },
            { id: "tt-s2", label: "Đêm mơ Hà Nội dáng kiều thơm", type: "sub" },
            { id: "tt-s3", label: "Chiến trường đi chẳng tiếc đời xanh", type: "sub", quote: "Áo bào thay chiếu anh về đất..." }
          ]
        }
      ]
    },
    quizzes: [
      {
        id: "q-tt-1",
        question: "Cụm từ 'súng ngửi trời' trong câu thơ 'Heo hút cồn mây súng ngửi trời' thể hiện nét nghệ thuật nào?",
        options: [
          "A. Sự mệt mỏi, buông xuôi vũ khí của quân đội",
          "B. Nhân hóa hóm hỉnh, táo bạo làm nổi bật độ cao ngất trời của đỉnh núi và tư thế hiên ngang, tinh thần lạc quan của người lính",
          "C. Sự lạc hậu của vũ khí thời kỳ đầu kháng chiến",
          "D. Miêu tả cảnh bầu trời nhiều mây mù Tây Bắc"
        ],
        correctAnswer: 1,
        explanation: "'Súng ngửi trời' vừa tả thực đỉnh đèo cao vút tới mây, vừa thể hiện chất lính tếu táo, yêu đời của lính Tây Tiến.",
        level: "Thông hiểu"
      },
      {
        id: "q-tt-2",
        question: "Chất 'bi tráng' trong bài thơ Tây Tiến được thể hiện rõ nhất qua câu thơ nào dưới đây?",
        options: [
          "A. Mai Châu mùa em thơm nếp xôi",
          "B. Áo bào thay chiếu anh về đất / Sông Mã gầm lên khúc độc hành",
          "C. Nhớ ôi Tây Tiến cơm lên khói",
          "D. Trôi dòng nước lũ hoa đong đưa"
        ],
        correctAnswer: 1,
        explanation: "Vô cùng bi thương (hy sinh không có cả chiếc chiếu liệm) nhưng vô cùng hào hùng ('áo bào', 'Sông Mã gầm lên khúc độc hành' đưa tiễn anh hùng).",
        level: "Vận dụng"
      }
    ]
  },
  {
    id: "12-4",
    grade: 12,
    unit: "Bài 2: Thơ Việt Nam hiện đại",
    title: "Đất Nước (Trích Trường ca Mặt đường khát vọng)",
    author: "Nguyễn Khoa Điềm",
    genre: "Thơ trữ tình / Trường ca",
    period: "Văn học chống Mỹ cứu nước (1971)",
    authorBio:
      "Nguyễn Khoa Điềm (sinh 1943) thuộc thế hệ nhà thơ thời kì chống Mỹ, thơ ông kết hợp hài hòa giữa cảm xúc nồng nàn và suy tư sâu lắng của người trí thức.",
    context:
      "Sáng tác năm 1971 tại chiến khu Trị - Thiên, viết nhằm thức tỉnh thanh niên đô thị miền Nam xuống đường đấu tranh chống xâm lược.",
    summary:
      "Đoạn trích đưa ra một tư tưởng mới mẻ, mang tính cách mạng vĩ đại: 'Đất Nước của Nhân Dân'. Khác với quan niệm phong kiến (Đất nước của vua chúa, triều đại), Nguyễn Khoa Điềm chứng minh chính Nhân dân vô danh là người đã tạo dựng, bảo vệ và phát triển Đất Nước trên cả ba phương diện: Chiều dài lịch sử, Chiều rộng địa lý và Chiều sâu văn hóa - phong tục.",
    structure: [
      {
        title: "Phần 1: Khởi nguồn và sự hình thành của Đất Nước gần gũi trong đời sống",
        description: "Khi ta lớn lên Đất Nước đã có rồi... Đất Nước có trong những cái 'ngày xửa ngày xưa' mẹ thường hay kể."
      },
      {
        title: "Phần 2: Định nghĩa Đất Nước từ góc nhìn Không gian - Thời gian - Văn hóa",
        description: "Đất là nơi anh đến trường, Nước là nơi em tắm... Đất Nước là nơi ta hò hẹn."
      },
      {
        title: "Phần 3: Tư tưởng cốt lõi 'Đất Nước của Nhân Dân'",
        description: "Họ đã sống và chết / Giản dị và bình tâm / Không ai nhớ mặt đặt tên / Nhưng họ đã làm ra Đất Nước."
      }
    ],
    contentAnalysis: [
      {
        heading: "Đất Nước bình dị, gần gũi trong đời sống thường nhật",
        details: [
          "Gắn liền với cổ tích, miếng trầu bà ăn, cái kèo cái cột trong nhà, hạt gạo phải một nắng hai sương.",
          "Đất Nước tồn tại trong từng mối tình yêu lứa đôi và sự đoàn kết cộng đồng."
        ]
      },
      {
        heading: "Tư tưởng đỉnh cao: Đất Nước của Nhân Dân",
        details: [
          "Địa lý: không phải do thiên nhiên tạo sẵn mà do lối sống, chí hướng của nhân dân thổi hồn vào (Hòn Trống Mái, Núi Vọng Phu).",
          "Lịch sử: công lao lớn nhất thuộc về bốn nghìn lớp người vô danh 'giản dị và bình tâm'."
        ]
      }
    ],
    artisticFeatures: [
      "Sử dụng chất liệu văn hóa dân gian (ca dao, cổ tích, truyền thuyết, tục ngữ) một cách sáng tạo, tự nhiên.",
      "Giọng thơ trữ tình - chính luận ngọt ngào như lời tâm tình, thủ thỉ giữa anh và em.",
      "Viết hoa hai từ 'Đất Nước' thể hiện sự tôn kính thiêng liêng."
    ],
    keyQuotes: [
      {
        quote: "Khi ta lớn lên Đất Nước đã có rồi\nĐất Nước có trong những cái 'ngày xửa ngày xưa' mẹ thường hay kể\nĐất Nước bắt đầu với miếng trầu bây giờ bà ăn\nĐất Nước lớn lên khi dân mình biết trồng tre mà đánh giặc.",
        contextOrMeaning: "Những định nghĩa mộc mạc nhất khẳng định Đất Nước gắn liền với văn hóa gia đình và lịch sử chống ngoại xâm."
      },
      {
        quote: "Họ đã sống và chết\nGiản dị và bình tâm\nKhông ai nhớ mặt đặt tên\nNhưng họ đã làm ra Đất Nước.",
        contextOrMeaning: "Bản tuyên ngôn hùng hồn tôn vinh công lao vĩ đại của những con người bình dân vô danh trong trường kỳ lịch sử."
      }
    ],
    mindMap: {
      id: "root-dn",
      label: "Đất Nước (Nguyễn Khoa Điềm)",
      type: "root",
      summary: "Tư tưởng 'Đất Nước Của Nhân Dân'",
      children: [
        {
          id: "dn-origin",
          label: "Cội Nguồn Đất Nước",
          type: "theme",
          summary: "Gần gũi, quen thuộc trong đời sống",
          children: [
            { id: "dn-o1", label: "Cổ tích mẹ kể, miếng trầu bà ăn", type: "sub" },
            { id: "dn-o2", label: "Trồng tre đánh giặc, hạt gạo một nắng hai sương", type: "sub" }
          ]
        },
        {
          id: "dn-dim",
          label: "3 Phương Diện Đất Nước",
          type: "theme",
          summary: "Địa lý - Lịch sử - Văn hóa",
          children: [
            { id: "dn-d1", label: "Đất là nơi anh đến trường, Nước là nơi em tắm", type: "sub" }
          ]
        },
        {
          id: "dn-people",
          label: "Đất Nước Của Nhân Dân",
          type: "theme",
          summary: "Nhân dân vô danh kiến tạo núi sông",
          children: [
            { id: "dn-p1", label: "Không ai nhớ mặt đặt tên / Nhưng họ đã làm ra Đất Nước", type: "sub", quote: "Họ đã sống và chết, giản dị và bình tâm..." }
          ]
        }
      ]
    },
    quizzes: [
      {
        id: "q-dn-1",
        question: "Tư tưởng cốt lõi xuyên suốt đoạn trích Đất Nước của Nguyễn Khoa Điềm là gì?",
        options: [
          "A. Đất Nước là tài sản riêng của các triều đại vua chúa",
          "B. Đất Nước của Nhân Dân, do Nhân Dân tạo dựng và bảo vệ trường tồn",
          "C. Đất Nước là những kỳ quan thiên nhiên tự sinh ra",
          "D. Đất Nước chỉ tồn tại trong các truyền thuyết cổ tích"
        ],
        correctAnswer: 1,
        explanation: "Đây là điểm đổi mới lớn nhất trong thơ chống Mỹ: đưa nhân dân lên vị trí chủ thể tối cao sáng tạo ra Đất Nước.",
        level: "Nhận biết"
      },
      {
        id: "q-dn-2",
        question: "Việc Nguyễn Khoa Điềm sử dụng đậm đặc chất liệu văn hóa dân gian (ca dao, cổ tích, truyền thuyết) mang tác dụng nghệ thuật gì?",
        options: [
          "A. Làm cho bài thơ mang màu sắc bí ẩn của thế giới thần linh",
          "B. Tạo nên không gian nghệ thuật gần gũi, đằm thắm, giúp tư tưởng chính luận trở nên tự nhiên, thấm sâu vào lòng người",
          "C. Chứng minh tác giả là nhà khảo cổ học chuyên nghiệp",
          "D. Thay thế hoàn toàn cho văn học viết hiện đại"
        ],
        correctAnswer: 1,
        explanation: "Chất liệu dân gian vừa là dẫn chứng sinh động về văn hóa, vừa tạo giọng điệu ngọt ngào, tâm tình truyền cảm.",
        level: "Thông hiểu"
      }
    ]
  },
  {
    id: "12-5",
    grade: 12,
    unit: "Bài 2: Thơ Việt Nam hiện đại",
    title: "Sóng",
    author: "Xuân Quỳnh",
    genre: "Thơ trữ tình",
    period: "Văn học Việt Nam hiện đại (1967)",
    authorBio:
      "Xuân Quỳnh (1942–1988) là một trong những gương mặt thơ nữ xuất sắc nhất thơ Việt Nam hiện đại, thơ bà luôn trăn trở với những xúc cảm thiết tha, đằm thắm, giàu trực cảm nữ tính.",
    context:
      "Sáng tác năm 1967 trong chuyến đi thực tế tại vùng biển Diêm Điền (Thái Bình), in trong tập 'Hoa dọc chiến hào' (1968).",
    summary:
      "Mượn hình tượng sóng biển hòa quyện song hành cùng 'em', bài thơ thể hiện những cung bậc phong phú, phức tạp của tâm hồn người phụ nữ đang yêu: từ dịu dàng, mãnh liệt, nỗi nhớ cồn cào bất kể ngày đêm cho đến lòng thủy chung trọn vẹn và khát vọng được hóa thân thành nghìn con sóng nhỏ để tình yêu trở thành vĩnh cửu.",
    structure: [
      {
        title: "Khổ 1 - 2: Bản tính đối lập của sóng và khát vọng muôn đời của tình yêu",
        description: "Dữ dội và dịu êm / Ồn ào và lặng lẽ... Sóng ngày xưa và ngày sau vẫn thế."
      },
      {
        title: "Khổ 3 - 4: Những băn khoăn lý giải cội nguồn tình yêu",
        description: "Sóng bắt đầu từ gió / Gió bắt đầu từ đâu? / Em cũng không biết nữa / Khi nào ta yêu nhau."
      },
      {
        title: "Khổ 5 - 7: Nỗi nhớ da diết và lòng thủy chung hướng về anh",
        description: "Lòng em nhớ đến anh / Cả trong mơ còn thức... Dẫu xuôi về phương bắc / Dẫu ngược về phương nam."
      },
      {
        title: "Khổ 8 - 9: Khát vọng bất tử hóa tình yêu",
        description: "Làm sao được tan ra / Thành trăm con sóng nhỏ / Giữa biển lớn tình yêu / Để ngàn năm còn vỗ."
      }
    ],
    contentAnalysis: [
      {
        heading: "Cấu trúc song hành ẩn dụ giữa 'Sóng' và 'Em'",
        details: [
          "Sóng là sự hóa thân của em, em là tâm hồn của sóng; hai hình tượng lúc soi chiếu, lúc hòa nhập làm một.",
          "Phản ánh vẻ đẹp truyền thống (thủy chung, dịu dàng) kết hợp hiện đại (chủ động bày tỏ, khao khát tự do)."
        ]
      }
    ],
    artisticFeatures: [
      "Thể thơ ngũ ngôn với nhịp điệu dạt dào như nhịp sóng biển, lúc êm đềm, lúc cồn cào mãnh liệt.",
      "Nghệ thuật nhân hóa và ẩn dụ xuất sắc.",
      "Sử dụng cặp từ đối lập, điệp từ, điếp cấu trúc dồn dập."
    ],
    keyQuotes: [
      {
        quote: "Con sóng dưới lòng sâu\nCon sóng trên mặt nước\nÔi con sóng nhớ bờ\nNgày đêm không ngủ được\nLòng em nhớ đến anh\nCả trong mơ còn thức.",
        contextOrMeaning: "Nỗi nhớ vượt qua mọi giới hạn không gian, thời gian, xâm chiếm cả tiềm thức của người phụ nữ khi yêu."
      },
      {
        quote: "Làm sao được tan ra\nThành trăm con sóng nhỏ\nGiữa biển lớn tình yêu\nĐể ngàn năm còn vỗ.",
        contextOrMeaning: "Khát vọng cao đẹp muốn cống hiến và vĩnh cửu hóa tình yêu cá nhân trong biển lớn tình yêu cuộc đời."
      }
    ],
    mindMap: {
      id: "root-sq",
      label: "Sóng (Xuân Quỳnh)",
      type: "root",
      summary: "Trái tim phụ nữ đằm thắm, mãnh liệt và khát vọng tình yêu vĩnh cửu",
      children: [
        {
          id: "sq-nature",
          label: "Bản Tính Của Sóng & Em",
          type: "theme",
          summary: "Dữ dội <> Dịu êm; Ồn ào <> Lặng lẽ",
          children: [
            { id: "sq-n1", label: "Sông không hiểu nổi mình => Sóng tìm ra tận bể", type: "sub" }
          ]
        },
        {
          id: "sq-memory",
          label: "Nỗi Nhớ & Thủy Chung",
          type: "theme",
          summary: "Nhớ cả trong mơ còn thức; Phương Bắc hay Nam vẫn hướng về anh",
          children: [
            { id: "sq-m1", label: "Nỗi nhớ tràn ngập không gian - thời gian", type: "sub", quote: "Lòng em nhớ đến anh, cả trong mơ còn thức..." }
          ]
        },
        {
          id: "sq-eternal",
          label: "Khát Vọng Bất Tử",
          type: "theme",
          summary: "Hóa thân thành trăm con sóng nhỏ",
          children: [
            { id: "sq-e1", label: "Để ngàn năm còn vỗ giữa biển lớn tình yêu", type: "sub" }
          ]
        }
      ]
    },
    quizzes: [
      {
        id: "q-sq-1",
        question: "Trong khổ thơ thứ 5 của bài thơ Sóng, nỗi nhớ của người phụ nữ được diễn tả qua những tầng không gian và trạng thái nào?",
        options: [
          "A. Chỉ nhớ trong những ngày biển động mùa mưa",
          "B. Nhớ dưới lòng sâu, trên mặt nước, nhớ ngày đêm không ngủ, và nhớ mãnh liệt 'cả trong mơ còn thức'",
          "C. Chỉ nhớ khi đi dạo trên bãi cát Diêm Điền",
          "D. Nhớ về những ngày thơ ấu vùng quê"
        ],
        correctAnswer: 1,
        explanation: "Nỗi nhớ bao trùm chiều sâu, chiều rộng mặt biển, thời gian ngày đêm và xâm chiếm đến tận ý thức lẫn tiềm thức trong mơ.",
        level: "Thông hiểu"
      }
    ]
  },
  {
    id: "12-6",
    grade: 12,
    unit: "Bài 3: Kí Việt Nam hiện đại",
    title: "Người lái đò Sông Đà",
    author: "Nguyễn Tuân",
    genre: "Kí & Tùy bút",
    period: "Văn học Việt Nam hiện đại (1960 - Tập 'Sông Đà')",
    authorBio:
      "Nguyễn Tuân sau 1945 chuyển từ việc tìm cái đẹp trong quá khứ sang tìm vẻ đẹp của cuộc sống lao động xã hội chủ nghĩa và non sông đất nước.",
    context:
      "Kết quả chuyến đi thực tế gian khổ, hào hùng lên Tây Bắc năm 1958-1960 để ca ngợi 'thứ vàng mười đã qua thử lửa' của tâm hồn Tây Bắc.",
    summary:
      "Tác phẩm khắc họa hai hình tượng vĩ đại: Sông Đà vừa độc dữ, nham hiểm như một 'loài thủy quái' với ba trùng vi thạch trận, lại vừa thơ mộng, trữ tình như một 'cố nhân' có áng tóc tuôn dài suối tóc. Đối lập và hòa quyện với Sông Đà là hình tượng ông lái đò - người lao động trí dũng song toàn, một nghệ sĩ vượt thác leo ghềnh tài hoa đã chinh phục thiên nhiên để làm giàu cho Tổ quốc.",
    structure: [
      {
        title: "Phần 1: Hình tượng con Sông Đà hung bạo, dữ dội",
        description: "Vách đá dựng vách thành, quãng mặt ghềnh Hát Loóng, cái hút nước Tà Mường Vát và thác nước réo gầm với ba trùng vi thạch trận."
      },
      {
        title: "Phần 2: Hình tượng Sông Đà thơ mộng, trữ tình",
        description: "Tuôn dài tuôn dài như một áng tóc trữ tình... màu nước thay đổi theo mùa và bờ sông hoang dại như một bờ tiền sử."
      },
      {
        title: "Phần 3: Hình tượng ông đò Sông Đà - Người nghệ sĩ tài hoa trong nghệ thuật vượt thác",
        description: "Cuộc chiến trí dũng qua ba trùng vi thạch trận vượt qua cửa tử vào cửa sinh."
      }
    ],
    contentAnalysis: [
      {
        heading: "Sông Đà mang hai tính cách: Hung bạo và Trữ tình",
        details: [
          "Hung bạo: là kẻ thù số một, vô cùng nguy hiểm với dàn đá tướng đá quân bày binh bố trận.",
          "Trữ tình: dòng sông đẹp như tranh cổ tích, gợi nhớ, gợi thương ấm áp tình người."
        ]
      },
      {
        heading: "Ông lái đò - Thứ vàng mười của Tây Bắc",
        details: [
          "Anh hùng không cần ở chiến trường mà ngay trong lao động mưu sinh hằng ngày.",
          "Tài hoa nghệ sĩ: thuộc nằm lòng từng luồng lạch, lái đò uyển chuyển, dũng cảm và khiêm nhường."
        ]
      }
    ],
    artisticFeatures: [
      "Văn phong tài hoa, uyên bác, vận dụng kiến thức quân sự, điện ảnh, võ thuật, địa lý, thể thao để miêu tả.",
      "Ngôn ngữ phong phú, góc cạnh, giàu nhịp điệu và khả năng chạm khắc âm thanh, hình khối.",
      "Nghệ thuật nhân hóa Sông Đà thành một sinh thể có tâm lý phức tạp."
    ],
    keyQuotes: [
      {
        quote: "Con Sông Đà tuôn dài tuôn dài như một áng tóc trữ tình, đầu tóc chân tóc ẩn hiện trong mây trời Tây Bắc bung nở hoa ban hoa gạo tháng hai và cuộn khói núi Mèo đốt nương xuân.",
        contextOrMeaning: "Câu văn siêu mượt mà khắc họa nét nữ tính, kiêu sa tuyệt bích của Sông Đà nhìn từ trên cao."
      },
      {
        quote: "Cuộc sống của họ là ngày nào cũng chiến đấu với Sông Đà dữ dội... nhưng lúc sóng gió tắt thì họ chẳng thấy có gì là lạ nữa.",
        contextOrMeaning: "Sự tầm vóc bình dị của người lao động anh hùng: chiến tích phi thường biến thành thói quen khiêm nhường hằng ngày."
      }
    ],
    mindMap: {
      id: "root-nldsd",
      label: "Người Lái Đò Sông Đà",
      type: "root",
      summary: "Nguyễn Tuân - Ca ngợi Tây Bắc và người lao động nghệ sĩ",
      children: [
        {
          id: "sd-hungbao",
          label: "Sông Đà Hung Bạo",
          type: "theme",
          summary: "Loài thủy quái, 3 trùng vi thạch trận",
          children: [
            { id: "sd-h1", label: "Vách đá dựng vách thành, hút nước xoáy Tà Mường Vát", type: "sub" },
            { id: "sd-h2", label: "Thác nước réo gầm như ngàn con trâu mộng", type: "sub" }
          ]
        },
        {
          id: "sd-trutinh",
          label: "Sông Đà Trữ Tình",
          type: "theme",
          summary: "Cố nhân êm đềm, áng tóc trữ tình",
          children: [
            { id: "sd-t1", label: "Tuôn dài tuôn dài như áng tóc hoa ban hoa gạo", type: "sub", quote: "Đầu tóc chân tóc ẩn hiện trong mây trời..." },
            { id: "sd-t2", label: "Bờ sông hoang dại như bờ tiền sử", type: "sub" }
          ]
        },
        {
          id: "sd-driver",
          label: "Ông Lái Đò Nghệ Sĩ",
          type: "character",
          summary: "Trí dũng song toàn - Vàng mười Tây Bắc",
          children: [
            { id: "sd-d1", label: "Chinh phục 3 trùng vi thạch trận uyển chuyển", type: "sub" },
            { id: "sd-d2", label: "Khiêm nhường bình dị sau mỗi chuyến vượt thác", type: "sub" }
          ]
        }
      ]
    },
    quizzes: [
      {
        id: "q-sd-1",
        question: "Trong tác phẩm Người lái đò Sông Đà, Nguyễn Tuân quan niệm thế nào về 'người nghệ sĩ'?",
        options: [
          "A. Chỉ những người làm thơ, vẽ tranh mới gọi là nghệ sĩ",
          "B. Bất kỳ ai làm việc với sự tận tâm, đạt tới độ lành nghề, điêu luyện và kiên cường trong nghề nghiệp của mình đều là nghệ sĩ",
          "C. Chỉ quan chức triều đình mới có phẩm chất nghệ sĩ",
          "D. Người có nhiều tiền mua đồ cổ"
        ],
        correctAnswer: 1,
        explanation: "Với Nguyễn Tuân, người lái đò vượt thác Đà Giang ngoạn mục bằng tay chèo chính là một nghệ sĩ kiệt xuất trên sông nước.",
        level: "Vận dụng"
      }
    ]
  },
  {
    id: "12-7",
    grade: 12,
    unit: "Bài 4: Nghị luận văn học & Nghị luận xã hội",
    title: "Tuyên ngôn Độc lập",
    author: "Hồ Chí Minh",
    genre: "Nghị luận xã hội",
    period: "Văn học Cách mạng - Ngày 2/9/1945 tại Quảng trường Ba Đình",
    authorBio:
      "Hồ Chí Minh (1890–1969), Anh hùng giải phóng dân tộc, Danh nhân văn hóa kiệt xuất, tác gia văn chính luận bậc thầy của văn học Việt Nam.",
    context:
      "Sáng tác vào những ngày cuối tháng 8/1945 tại số nhà 48 Hàng Ngang (Hà Nội), đọc ngày 2/9/1945 trước nửa triệu đồng bào để khai sinh nước Việt Nam Dân chủ Cộng hòa.",
    summary:
      "Tuyên ngôn Độc lập là một văn kiện lịch sử vô giá và là áng văn chính luận mẫu mực. Mở đầu bằng trích dẫn hai bản Tuyên ngôn của Mỹ (1776) và Pháp (1791), Người nâng quyền con người thành quyền tự do bình đẳng của các dân tộc. Tiếp đó, tác giả đanh thép tố cáo tội ác hơn 80 năm của thực dân Pháp trên các mặt chính trị, kinh tế, văn hóa. Cuối cùng, Người trịnh trọng tuyên bố nền độc lập tự do của Việt Nam và ý chí quyết tâm bảo vệ nền độc lập ấy với toàn thể thế giới.",
    structure: [
      {
        title: "Phần 1: Nguyên lý chung - Quyền tự do, bình đẳng tất yếu của các dân tộc",
        description: "Lập luận 'gậy ông đập lưng ông' bằng chính Tuyên ngôn của Mỹ và Pháp."
      },
      {
        title: "Phần 2: Tố cáo tội ác thực dân Pháp và khẳng định tính chính nghĩa của Cách mạng",
        description: "Vạch trần bản chất 'khai hóa', 'bảo hộ' giả nhân giả nghĩa của Pháp; chứng minh Việt Nam giành độc lập từ tay Nhật chứ không phải Pháp."
      },
      {
        title: "Phần 3: Lời tuyên bố độc lập đanh thép trước thế giới",
        description: "Toàn thể dân tộc Việt Nam quyết đem tất cả tinh thần và lực lượng, tính mạng và của cải để giữ vững quyền tự do, độc lập."
      }
    ],
    contentAnalysis: [
      {
        heading: "Cơ sở pháp lý và đạo đức vững chắc",
        details: [
          "Nâng tầm quyền cá nhân trong tuyên ngôn cách mạng Pháp - Mỹ lên thành quyền bình đẳng, tự quyết của tất cả các dân tộc bị áp bức.",
          "Chứng minh Pháp đã tự tước bỏ quyền bảo hộ khi hai lần bán nước ta cho Nhật."
        ]
      }
    ],
    artisticFeatures: [
      "Lập luận chặt chẽ, luận điểm sắc bén, chứng cứ lịch sử xác thực, hùng hồn.",
      "Ngôn ngữ vừa trang nghiêm, đanh thép, vừa tha thiết, đẫm tình yêu nước.",
      "Kết hợp nhuần nhuyễn giữa tính luận chiến đanh thép và tính biểu cảm cao độ."
    ],
    keyQuotes: [
      {
        quote: "Tất cả các dân tộc trên thế giới đều sinh ra bình đẳng, dân tộc nào cũng có quyền sống, quyền sung sướng và quyền tự do.",
        contextOrMeaning: "Bước phát triển thiên tài của Hồ Chí Minh khi suy rộng từ quyền tự do con người sang quyền tự do của mọi dân tộc."
      },
      {
        quote: "Nước Việt Nam có quyền hưởng tự do và độc lập, và sự thật đã thành một nước tự do độc lập. Toàn thể dân tộc Việt Nam quyết đem tất cả tinh thần và lực lượng, tính mạng và của cải để giữ vững quyền tự do, độc lập ấy.",
        contextOrMeaning: "Lời tuyên thệ sắt đá kết thúc bản Tuyên ngôn, âm vang ý chí thiêng liêng của toàn dân tộc."
      }
    ],
    mindMap: {
      id: "root-tndl",
      label: "Tuyên Ngôn Độc Lập (Hồ Chí Minh)",
      type: "root",
      summary: "Áng văn chính luận mẫu mực khai sinh nước Việt Nam mới",
      children: [
        {
          id: "tndl-p1",
          label: "Cơ Sở Pháp Lý",
          type: "theme",
          summary: "Trích dẫn Tuyên ngôn Mỹ (1776) & Pháp (1791)",
          children: [
            { id: "tndl-p1-1", label: "Nâng quyền con người thành quyền dân tộc tự quyết", type: "sub" }
          ]
        },
        {
          id: "tndl-p2",
          label: "Cơ Sở Thực Tiễn",
          type: "theme",
          summary: "Tố cáo tội ác Pháp & Công cuộc giành chính quyền từ Nhật",
          children: [
            { id: "tndl-p2-1", label: "Pháp cướp nước ta hơn 80 năm, 2 lần bán cho Nhật", type: "sub" }
          ]
        },
        {
          id: "tndl-p3",
          label: "Lời Tuyên Bố Độc Lập",
          type: "theme",
          summary: "Quyết tâm bảo vệ độc lập bằng mọi giá",
          children: [
            { id: "tndl-p3-1", label: "Toàn thể dân tộc Việt Nam quyết đem tất cả tinh thần...", type: "sub", quote: "Nước Việt Nam có quyền hưởng tự do và độc lập..." }
          ]
        }
      ]
    },
    quizzes: [
      {
        id: "q-tndl-1",
        question: "Việc Hồ Chí Minh mở đầu bản Tuyên ngôn Độc lập bằng cách trích dẫn hai bản Tuyên ngôn của Mỹ và Pháp mang ý nghĩa chiến lược gì?",
        options: [
          "A. Vì Người không biết tự viết phần mở đầu",
          "B. Tạo thế 'gậy ông đập lưng ông', dùng chính lý tưởng mà Mỹ và Pháp tự hào để khóa miệng luận điệu xâm lược, đồng thời khẳng định vị thế bình đẳng của cách mạng Việt Nam với thế giới",
          "C. Để khen ngợi chính phủ Mỹ và Pháp đã giúp Việt Nam",
          "D. Là quy định bắt buộc của luật pháp quốc tế năm 1945"
        ],
        correctAnswer: 1,
        explanation: "Thủ pháp nghệ thuật cao cường: lấy chân lý của chính đối phương làm cơ sở pháp lý, từ đó nâng tầm quyền con người thành quyền tự quyết của dân tộc.",
        level: "Vận dụng"
      }
    ]
  }
];
