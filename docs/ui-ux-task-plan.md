# Kế hoạch UI/UX chi tiết – Website học Triết học Mác – Lênin (Giai cấp và Đấu tranh giai cấp)

Tài liệu này liệt kê đầy đủ các task UI/UX để xây dựng website theo yêu cầu “đẹp – hiện đại – dễ học – dễ nhớ”, tương tự trải nghiệm e-learning (Coursera, Udemy…). Mục tiêu: không bỏ sót tính năng, giúp AI/dự án thực thi tuần tự.

## 1) Mục tiêu & nguyên tắc chung

- Giữ trải nghiệm rõ ràng, tối giản, tông học thuật, ưu tiên khả năng đọc/nhớ.
- Responsive đầy đủ: desktop ưu tiên, mobile tối ưu menu, spacing, font-size.
- Nhất quán chuyển động 0.3s, hover scale nhẹ, shadow tinh tế.
- Nội dung nhiều chữ → tăng line-height, block highlight, ghi nhớ nhanh.

## 2) Design system (foundation)

- Màu: chủ đạo `#1A2B4C`; điểm nhấn `#C73727`; vàng nhạt `#FFC857`; nền trắng `#FFFFFF` hoặc ghi sáng `#F7F9FB`; text phụ `#55657F`; border `#E5EAF0`.
- Typography: tiêu đề Merriweather (serif, hàn lâm); nội dung Inter hoặc Roboto. H1 ~ 36–40, H2 ~ 28–32, body 16–18, line-height 1.6–1.75.
- Radius & shadow: bo 12px cho card chính; shadow nhẹ (0 10px 30px rgba(0,0,0,0.08)).
- Grid/spacing: container max 1200–1280px; spacing 8/12/16/24/32; section top/bottom 64–96px desktop, giảm 50% trên mobile.
- Icon: tối giản, outline hoặc duotone, ưu tiên gắn với chủ đề triết học/khái niệm.
- Motion: hover button shadow + scale 1.03; card lesson highlight cạnh trái màu đỏ; scroll animation fade-in.

## 3) Layout khung

- Header: logo “Triết Mác – Lênin”; menu: Trang chủ, Bài học, Sơ đồ, Quiz, Flashcard, Hồ sơ; nút Đăng nhập (đỏ).
- Footer: copyright, Điều khoản, Tài liệu tham khảo Mác – Lênin, Liên hệ.
- Breadcrumb nhẹ cho trang con (Lesson, Quiz, Flashcard) nếu cần định hướng.
- Container responsive: gutter 16px mobile, 24px tablet, 32px desktop.

## 4) Thành phần UI cần dựng

- Buttons: primary (đỏ), secondary (outline xanh), ghost; kích cỡ md/lg; trạng thái hover/disabled; icon bên phải cho CTA chính.
- Cards:
  - Roadmap card (Home) với icon, title, mô tả ngắn, hover scale + shadow.
  - Lesson card/list item với state (done tick xanh, chưa học chấm xám, học dở progress).
  - Alert/card đỏ nhấn mạnh nội dung quan trọng (bo 12px, shadow rộng, padding lớn).
- Navigation list (cột trái Lesson): thể hiện trạng thái, click load nội dung.
- Tag/Badge trạng thái: Done (xanh), In-progress (vàng nhạt), Not-started (xám).
- Progress bar (quiz 10 câu, hồ sơ tổng quan).
- Flashcard: mặt trước/sau, animation lật, nút Next/Prev/Shuffle.
- Quiz options: lựa chọn lớn, hiệu ứng đúng (xanh) / sai (đỏ), thanh tiến trình.
- Match-the-pair UI: drag & drop 2 cột, highlight khi đúng.
- Input form: đăng nhập/đăng ký đơn giản, social login button (Google).
- Mindmap: node + edge, hover tooltip, click mở bài.

## 5) Data & kiến trúc nội dung

- Lưu nội dung JSON (hoặc YAML) cho: danh sách bài học, nội dung bài, quiz (3 chế độ), flashcard (~25 thẻ), mindmap nodes/edges, thống kê mẫu.
- Tách file: `data/lessons.json`, `data/quiz.json`, `data/flashcards.json`, `data/mindmap.json`, `data/profile.json` (mock).
- Thiết lập provider/state cho tiến độ học, kết quả quiz, flashcard index; lưu localStorage mock cho POC.

## 6) Task theo trang

### Trang 1 — Trang chủ (Home)

- Hero: nền waves + gradient xanh đậm; tiêu đề lớn “Triết học Mác – Lênin: Giai cấp và Đấu tranh Giai cấp”; slogan “Học nhanh – Hiểu sâu – Ghi nhớ hiệu quả.”; CTA “Bắt đầu học” (đỏ + icon arrow).
- Roadmap học tập: 4 card (Khái niệm Giai cấp, Nguồn gốc giai cấp, Đấu tranh giai cấp, Đấu tranh vô sản & thời kỳ quá độ); icon tối giản; hover scale.
- Sơ đồ/flowchart preview: hình minh họa hoặc mini SVG; click dẫn tới trang Sơ đồ.
- Test nhanh: nút “Làm mini quiz 5 câu” dẫn tới chế độ quiz nhanh.

### Trang 2 — Trang kiến thức chi tiết (Lesson)

- Bố cục 2 cột: trái menu phụ (sticky trên desktop); phải nội dung.
- Menu trái: danh mục bài (Giai cấp; Nguồn gốc giai cấp; Kết cấu xã hội – giai cấp; Đấu tranh giai cấp; Đấu tranh của giai cấp vô sản; Việt Nam thời kỳ quá độ). Trạng thái: Done (tick xanh), Chưa học (chấm xám), Học dở (progress).
- Cột nội dung: trình bày + highlight từ khóa; block màu cho phần quan trọng; infographics nhỏ (icon + bullet); box “Nhớ nhanh”; card đỏ nhấn mạnh “Thực chất quan hệ giai cấp” (bo 12px, shadow, spacing rộng).
- Interaction: click mục menu cuộn đến section; lưu tiến độ học; responsive chuyển menu thành accordion trên mobile.

### Trang 3 — Sơ đồ tư duy (Mindmap)

- Render dạng cây SVG hoặc react-flow; nhánh: Giai cấp, Nguồn gốc, Kết cấu xã hội – giai cấp, Đấu tranh giai cấp, Vai trò, Đấu tranh vô sản, Thời kỳ quá độ.
- Hover node: tooltip text ngắn + link tới bài tương ứng; click mở trang bài.
- Zoom/pan cơ bản; fit view; theme màu đồng bộ.

### Trang 4 — Quiz / Mini game ôn tập

- 3 chế độ: Trắc nghiệm; Match the pair (kéo–thả khái niệm ↔ định nghĩa); Điền vào chỗ trống (định nghĩa của Lênin).
- Card câu hỏi trung tâm; nút đáp án lớn; hiệu ứng xanh đúng, đỏ sai; thanh tiến trình 10 câu; hiển thị kết quả cuối + nút “Làm lại”.
- Match UI: drag & drop với feedback đúng/sai; shuffle.
- Fill-in: input + nút kiểm tra, hiển thị gợi ý nếu sai.

### Trang 5 — Flashcard (Ôn nhanh)

- Bộ ~25 flashcards; mặt trước/sau; animation lật; nút Next/Prev/Shuffle; counter hiện “x/25”.
- Nội dung mẫu: mặt trước “Giai cấp là gì?”; mặt sau: định nghĩa Lênin (rút gọn, dễ nhớ).
- Shortcut phím mũi tên (desktop) nếu có thể; tap để lật (mobile).

### Trang 6 — Trang Tổng kết

- Tóm tắt 1 trang (summary); sơ đồ tổng hợp; link “Luyện 20 câu sát đề”; nút tải PDF bài học.
- Hiển thị tiến độ học tổng, gợi ý bước tiếp theo.

### Trang phụ 7 — Giới thiệu

- Mục tiêu trang web, nguồn tài liệu, phương pháp học.

### Trang phụ 8 — Đăng nhập / Đăng ký

- Form tối giản tone xanh đậm; social login (Google); validation cơ bản.

### Trang phụ 9 — Hồ sơ người học

- Thống kê: % tiến độ, thời gian học, số quiz đã làm, điểm trung bình; biểu đồ mini progress; danh sách bài đã hoàn thành.

## 7) Kỹ thuật & triển khai

- Tech gợi ý: Next.js, không dùng AntD; style bằng CSS Modules/Tailwind tùy chọn nhưng giữ design system trên.
- Mindmap: react-flow hoặc custom SVG.
- State: client-side cho POC; tách hook quản lý tiến độ, quiz state, flashcard state.
- Routes: `/` Home; `/lesson/[slug]` hoặc `/lessons`; `/mindmap`; `/quiz`; `/flashcard`; `/summary`; `/about`; `/auth`; `/profile`.
- Assets: thêm background waves/gradient, icon pack tối giản, đảm bảo nhẹ.
- SEO: meta title/description theo trang; open graph hero.
- Accessibility: contrast đủ với màu đỏ và xanh; focus state cho button/link; aria cho form/quiz/flashcard.

## 8) Hiệu ứng & tương tác

- Hover button shadow + scale 1.03; card lesson highlight cạnh trái màu đỏ; scroll fade-in (Intersection Observer hoặc CSS).
- Transition đồng nhất 0.3s; giữ motion giảm trên prefers-reduced-motion.
- Sticky header/breadcrumb khi cần; smooth scroll.

## 9) Kiểm thử & kiểm tra hoàn tất

- Kiểm tra responsive (>=1280, 1024, 768, 480).
- Kiểm tra contrast màu chủ đạo/điểm nhấn với nền.
- Kiểm tra flow học: chọn bài → đọc → quiz → flashcard → summary.
- Kiểm tra lưu tiến độ mock (localStorage) và reset.
- Kiểm tra quiz 3 chế độ, flashcard lật, mindmap zoom/pan, CTA dẫn đúng trang.

## 10) Ưu tiên thực hiện (roadmap sprint)

1. Thiết lập design system (màu, font, spacing, button, card, layout container).
2. Header/Footer + routing chính.
3. Trang Home (hero, roadmap, flowchart preview, mini quiz CTA).
4. Trang Lesson (2 cột, trạng thái học, highlight, card đỏ).
5. Mindmap (react-flow/SVG).
6. Quiz 3 chế độ + tiến trình.
7. Flashcard + keyboard/touch.
8. Summary page + PDF link placeholder.
9. Trang phụ (Giới thiệu, Auth, Profile) + mock data.
10. Hoàn thiện animation, responsive, accessibility, QA.
