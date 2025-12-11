import Breadcrumb from "@/app/components/Breadcrumb";

export default function ContactPage() {
  return (
    <div className="container section fade-in">
      <Breadcrumb items={[{ label: "Liên hệ" }]} />
      <div className="section-header">
        <div>
          <h1 className="section-title">Liên hệ</h1>
          <p className="section-subtitle">
            Góp ý và hỗ trợ cho nền tảng học Triết Mác – Lênin.
          </p>
        </div>
      </div>
      <div className="card">
        <p className="muted">
          Vui lòng gửi email tới: contact@example.com hoặc để lại thông tin bên
          dưới (mock form).
        </p>
        <form style={{ marginTop: 14, display: "grid", gap: 10 }}>
          <input
            type="text"
            placeholder="Họ tên"
            style={{
              padding: "12px 14px",
              borderRadius: 12,
              border: "1px solid var(--color-border)",
            }}
          />
          <input
            type="email"
            placeholder="Email"
            style={{
              padding: "12px 14px",
              borderRadius: 12,
              border: "1px solid var(--color-border)",
            }}
          />
          <textarea
            placeholder="Nội dung góp ý"
            rows={4}
            style={{
              padding: "12px 14px",
              borderRadius: 12,
              border: "1px solid var(--color-border)",
            }}
          />
          <button className="btn btn-primary btn-sm" type="submit" disabled>
            Gửi (mock)
          </button>
        </form>
      </div>
    </div>
  );
}
