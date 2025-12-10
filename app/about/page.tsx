export default function AboutPage() {
  return (
    <div className="container section fade-in">
      <div className="section-header">
        <div>
          <h1 className="section-title">Giới thiệu</h1>
          <p className="section-subtitle">
            Mục tiêu trang web, nguồn tài liệu và phương pháp học.
          </p>
        </div>
      </div>
      <div className="card">
        <h3>Mục tiêu</h3>
        <p className="muted">
          Xây dựng nền tảng học Triết học Mác – Lênin (Giai cấp & Đấu tranh giai
          cấp) hiện đại, dễ học, dễ nhớ, phù hợp desktop và mobile.
        </p>
      </div>
      <div className="card" style={{ marginTop: 16 }}>
        <h3>Nguồn tài liệu</h3>
        <p className="muted">
          Dựa trên giáo trình Triết học Mác – Lênin, định nghĩa của V.I.Lênin,
          tổng hợp các nội dung: định nghĩa, đặc trưng, nguồn gốc, kết cấu, đấu
          tranh giai cấp, quá độ và bối cảnh Việt Nam.
        </p>
      </div>
      <div className="card" style={{ marginTop: 16 }}>
        <h3>Phương pháp học</h3>
        <ul style={{ marginTop: 8, paddingLeft: 18 }}>
          <li>Đọc bài → xem sơ đồ → làm quiz → ôn flashcard → tổng kết.</li>
          <li>
            Highlight nội dung quan trọng, block nhớ nhanh, card đỏ nhấn mạnh.
          </li>
          <li>Gamification: quiz, match, fill blank, flashcard lật.</li>
        </ul>
      </div>
    </div>
  );
}
