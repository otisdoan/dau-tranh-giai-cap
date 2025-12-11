import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";

export default function SummaryPage() {
  return (
    <div className="container section fade-in">
      <Breadcrumb items={[{ label: "Tóm tắt" }]} />
      <div className="section-header">
        <div>
          <h1 className="section-title">Tổng kết</h1>
          <p className="section-subtitle">
            Tóm tắt 1 trang, sơ đồ tổng hợp, link luyện 20 câu sát đề.
          </p>
        </div>
        <Link href="/quiz" className="btn btn-primary btn-sm">
          Luyện 20 câu
        </Link>
      </div>

      <div className="summary-card">
        <h3>Tóm tắt nhanh</h3>
        <p className="muted" style={{ marginTop: 8 }}>
          Giai cấp: định nghĩa, đặc trưng, thực chất quan hệ bóc lột. Nguồn gốc
          từ phát triển lực lượng sản xuất và tư hữu. Đấu tranh giai cấp là tất
          yếu, động lực trực tiếp của lịch sử. Vô sản đấu tranh kinh tế, chính
          trị, tư tưởng; sau khi giành chính quyền phải bảo vệ, cải tạo, xây
          dựng xã hội mới. Việt Nam quá độ: CNH-HĐH, công bằng xã hội, chống
          diễn biến hòa bình, giữ định hướng XHCN.
        </p>
      </div>

      <div className="grid grid-2" style={{ marginTop: 20 }}>
        <div className="card">
          <h3>Sơ đồ tổng hợp</h3>
          <p className="muted">
            Xem sơ đồ tư duy đầy đủ tại trang Sơ đồ. Nhánh: Giai cấp → Nguồn gốc
            → Kết cấu → Đấu tranh → Vai trò → Vô sản → Quá độ → Việt Nam.
          </p>
          <Link
            href="/mindmap"
            className="btn btn-secondary btn-sm"
            style={{ marginTop: 12 }}
          >
            Xem sơ đồ
          </Link>
        </div>
        <div className="card">
          <h3>Xuất PDF</h3>
          <p className="muted">
            Placeholder: nút tải PDF bài học (có thể tích hợp generate PDF sau).
          </p>
          <button className="btn btn-secondary btn-sm" disabled>
            Tải PDF (sắp có)
          </button>
        </div>
      </div>
    </div>
  );
}
