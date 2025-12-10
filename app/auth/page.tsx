import Link from "next/link";

export default function AuthPage() {
  return (
    <div className="container section fade-in">
      <div className="auth-card">
        <h1 className="section-title" style={{ fontSize: 24 }}>
          Đăng nhập / Đăng ký
        </h1>
        <p className="muted" style={{ marginTop: 8 }}>
          Giao diện tối giản, tone xanh đậm. Bạn có thể dùng Google SSO.
        </p>
        <form style={{ marginTop: 16, display: "grid", gap: 12 }}>
          <label>
            <span>Email</span>
            <input
              type="email"
              placeholder="you@example.com"
              required
              style={{
                width: "100%",
                padding: "12px 14px",
                borderRadius: 12,
                border: "1px solid var(--color-border)",
                marginTop: 6,
              }}
            />
          </label>
          <label>
            <span>Mật khẩu</span>
            <input
              type="password"
              placeholder="••••••••"
              required
              style={{
                width: "100%",
                padding: "12px 14px",
                borderRadius: 12,
                border: "1px solid var(--color-border)",
                marginTop: 6,
              }}
            />
          </label>
          <button className="btn btn-primary" type="submit" disabled>
            Đăng nhập (mock)
          </button>
        </form>
        <div className="muted" style={{ marginTop: 12, textAlign: "center" }}>
          — hoặc —
        </div>
        <button
          className="btn btn-secondary"
          style={{ width: "100%", marginTop: 10 }}
        >
          Đăng nhập với Google (mock)
        </button>
        <p className="muted" style={{ marginTop: 12, textAlign: "center" }}>
          Chưa có tài khoản? <Link href="#">Đăng ký</Link>
        </p>
      </div>
    </div>
  );
}
