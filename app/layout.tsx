import type { Metadata } from "next";
import Link from "next/link";
import { Inter, Merriweather } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const merriweather = Merriweather({
  variable: "--font-heading",
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Triết Mác – Lênin | Giai cấp & Đấu tranh giai cấp",
  description:
    "Nền tảng học Triết học Mác – Lênin: Giai cấp và Đấu tranh giai cấp. Học nhanh, hiểu sâu, ghi nhớ hiệu quả.",
};

const navLinks = [
  { href: "/", label: "Trang chủ" },
  { href: "/lesson", label: "Bài học" },
  { href: "/mindmap", label: "Sơ đồ" },
  { href: "/quiz", label: "Quiz" },
  { href: "/flashcard", label: "Flashcard" },
  { href: "/profile", label: "Hồ sơ" },
];

function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="logo">
          Triết Mác – Lênin
        </Link>
        <nav className="nav">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="nav-link">
              {link.label}
            </Link>
          ))}
        </nav>
        {/* Đã bỏ nút đăng nhập theo yêu cầu */}
      </div>
    </header>
  );
}

function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <div className="logo">Triết Mác – Lênin</div>
          <p className="muted">Học nhanh – Hiểu sâu – Ghi nhớ hiệu quả.</p>
        </div>
        <div className="footer-links">
          <span className="footer-heading">Tài nguyên</span>
          <Link href="/about">Giới thiệu</Link>
          <Link href="/summary">Tổng kết</Link>
          <Link href="/quiz">Luyện 20 câu sát đề</Link>
        </div>
        <div className="footer-links">
          <span className="footer-heading">Pháp lý</span>
          <Link href="#">Điều khoản</Link>
          <Link href="#">Tài liệu tham khảo</Link>
          <Link href="/contact">Liên hệ</Link>
        </div>
      </div>
      <div className="footer-bottom">
        © {new Date().getFullYear()} Triết Mác – Lênin. All rights reserved.
      </div>
    </footer>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body
        className={`${inter.variable} ${merriweather.variable} antialiased`}
      >
        <div className="page-bg" />
        <SiteHeader />
        <main className="page-content">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
