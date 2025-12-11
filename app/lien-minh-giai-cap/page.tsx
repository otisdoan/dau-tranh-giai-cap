"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const evidences = [
  {
    id: 1,
    title: "Phát triển công nghiệp",
    icon: "🏭",
    description: "VinFast, Viettel, Thaco, FPT...",
    image: "/oto-Vin.jpg",
    details: [
      "Công nhân tay nghề cao",
      "Kỹ sư, nhà khoa học (trí thức)",
      "Nông dân chuyển đổi lao động",
    ],
    conclusion:
      "Minh chứng liên minh công – nông – trí trong sản xuất hiện đại",
  },
  {
    id: 2,
    title: "Xây dựng nông thôn mới",
    icon: "🌾",
    description: "Chương trình NTM toàn quốc",
    image: "/công-nhân.jpg",
    details: [
      "Nhà nước (đại diện giai cấp công nhân)",
      "Nông dân tham gia xây dựng",
      "Đội ngũ trí thức nông nghiệp",
    ],
    conclusion:
      "Hàng ngàn xã đạt chuẩn NTM → nâng cao đời sống, giảm nghèo bền vững",
  },
  {
    id: 3,
    title: "Ứng phó Covid-19",
    icon: "💉",
    description: "Chiến thắng đại dịch",
    image: "/covid-19.webp",
    details: [
      "Công nhân sản xuất hàng hóa thiết yếu",
      "Nông dân đảm bảo nguồn cung nông sản",
      "Trí thức nghiên cứu vaccine, điều trị",
    ],
    conclusion: "Sức mạnh tổng hợp của các giai tầng xã hội",
  },
  {
    id: 4,
    title: "Chuyển đổi số quốc gia",
    icon: "💻",
    description: "Nền kinh tế số Việt Nam",
    image: "/chuyen-doi-so.jpg",
    details: [
      "Công nhân vận hành hạ tầng số",
      "Trí thức công nghệ thiết kế nền tảng",
      "Nông dân tiếp cận thương mại điện tử",
    ],
    conclusion: "Ba lực lượng liên kết tạo nên nền kinh tế số",
  },
];

export default function LienMinhGiaiCap() {
  const [activeEvidence, setActiveEvidence] = useState<number | null>(null);

  return (
    <div className="lien-minh-page">
      {/* Hero Section */}
      <section className="lien-minh-hero">
        <div className="hero-background-image">
          <Image
            src="/Đoàn kết.jpg"
            alt="Liên minh giai cấp"
            fill
            style={{ objectFit: "cover", opacity: 0.3 }}
            priority
          />
        </div>
        <div className="container">
          <div className="lien-minh-hero-content fade-in">
            <div className="lien-minh-badge">THUYẾT TRÌNH</div>
            <h1 className="lien-minh-title">
              Liên minh giai cấp trong thời bình
              <br />
              <span className="highlight-text">còn ý nghĩa hay không?</span>
            </h1>
            <div className="lien-minh-subtitle">
              Khám phá vai trò then chốt của liên minh công – nông – trí thức
              trong xây dựng và bảo vệ Tổ quốc
            </div>
            <div className="hero-stats">
              <div
                className="stat-item fade-in"
                style={{ animationDelay: "0.2s" }}
              >
                <div className="stat-icon">👷</div>
                <div className="stat-label">Công nhân</div>
              </div>
              <div
                className="stat-item fade-in"
                style={{ animationDelay: "0.3s" }}
              >
                <div className="stat-icon">🌾</div>
                <div className="stat-label">Nông dân</div>
              </div>
              <div
                className="stat-item fade-in"
                style={{ animationDelay: "0.4s" }}
              >
                <div className="stat-icon">🎓</div>
                <div className="stat-label">Trí thức</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section">
        <div className="container">
          {/* Ý nghĩa */}
          <div className="content-block fade-in-scroll">
            <div className="content-with-image" style={{ marginBottom: 40 }}>
              <div className="text-container" style={{ flex: 1 }}>
                <h2 className="section-title-large">
                  1. Vẫn có ý nghĩa rất lớn trong thời kỳ hòa bình
                </h2>
                <p
                  className="lead-text"
                  style={{
                    fontSize: "1.1rem",
                    lineHeight: 1.8,
                    marginBottom: 20,
                  }}
                >
                  Liên minh giai cấp công nhân - nông dân - trí thức là nền tảng
                  xã hội vững chắc của Nhà nước, là động lực phát triển kinh tế
                  và đảm bảo ổn định chính trị - xã hội.
                </p>
              </div>
              <div
                className="image-container"
                style={{ flex: 1, position: "relative" }}
              >
                <Image
                  src="/hòa-bình.jpg"
                  alt="Tọa đàm chuyển đổi số quốc gia"
                  width={500}
                  height={350}
                  style={{ borderRadius: 16, width: "100%", height: "auto" }}
                />
              </div>
            </div>

            <div className="significance-grid">
              <div className="significance-card card-animated">
                <div className="card-icon">🏗️</div>
                <h3>Phát triển kinh tế – Xây dựng CNXH</h3>
                <p className="muted">
                  Để công nghiệp hóa – hiện đại hóa thành công cần:
                </p>
                <ul className="custom-list">
                  <li>
                    <strong>Công nhân:</strong> lực lượng sản xuất trực tiếp,
                    làm chủ công nghệ
                  </li>
                  <li>
                    <strong>Nông dân:</strong> đảm bảo an ninh lương thực,
                    chuyển đổi sang nông nghiệp công nghệ cao
                  </li>
                  <li>
                    <strong>Trí thức:</strong> tạo ra khoa học – công nghệ, đổi
                    mới sáng tạo
                  </li>
                </ul>
                <div className="card-conclusion">
                  ➡️ Kết hợp sức mạnh vật chất – trí tuệ – công nghệ
                </div>
              </div>

              <div
                className="significance-card card-animated"
                style={{ animationDelay: "0.15s" }}
              >
                <div className="card-icon">🛡️</div>
                <h3>Đảm bảo ổn định chính trị – xã hội</h3>
                <ul className="custom-list">
                  <li>
                    Khối liên minh là <strong>"nền tảng xã hội"</strong> vững
                    chắc của Nhà nước
                  </li>
                  <li>
                    Hạn chế mâu thuẫn xã hội, giữ vững ổn định chính trị trong
                    bối cảnh hội nhập, cạnh tranh toàn cầu
                  </li>
                </ul>
              </div>

              <div
                className="significance-card card-animated"
                style={{ animationDelay: "0.3s" }}
              >
                <div className="card-icon">🇻🇳</div>
                <h3>Tăng cường đoàn kết dân tộc</h3>
                <ul className="custom-list">
                  <li>
                    Liên minh giai cấp tạo ra <strong>khối đại đoàn kết</strong>{" "}
                    toàn dân
                  </li>
                  <li>
                    Điều kiện để chống lại "diễn biến hòa bình", bảo vệ độc lập
                    dân tộc trong thời bình
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Dẫn chứng */}
          <div className="content-block fade-in-scroll">
            <h2 className="section-title-large">
              2. Dẫn chứng cụ thể trong thực tiễn Việt Nam
            </h2>

            <div className="evidence-grid">
              {evidences.map((evidence, index) => (
                <div
                  key={evidence.id}
                  className={`evidence-card ${
                    activeEvidence === evidence.id ? "active" : ""
                  }`}
                  onClick={() =>
                    setActiveEvidence(
                      activeEvidence === evidence.id ? null : evidence.id
                    )
                  }
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {evidence.image && (
                    <div
                      className="evidence-image"
                      style={{
                        position: "relative",
                        width: "100%",
                        height: 200,
                        marginBottom: 16,
                        overflow: "hidden",
                        borderRadius: 12,
                      }}
                    >
                      <Image
                        src={evidence.image}
                        alt={evidence.title}
                        fill
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  )}
                  <div className="evidence-header">
                    <div className="evidence-icon">{evidence.icon}</div>
                    <div>
                      <h3>{evidence.title}</h3>
                      <p className="evidence-desc">{evidence.description}</p>
                    </div>
                  </div>

                  <div
                    className={`evidence-details ${
                      activeEvidence === evidence.id ? "show" : ""
                    }`}
                  >
                    <ul className="custom-list">
                      {evidence.details.map((detail, idx) => (
                        <li key={idx}>{detail}</li>
                      ))}
                    </ul>
                    <div className="evidence-conclusion">
                      ➡️ {evidence.conclusion}
                    </div>
                  </div>

                  <div className="evidence-expand">
                    {activeEvidence === evidence.id
                      ? "Thu gọn ▲"
                      : "Xem thêm ▼"}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Đánh giá */}
          <div className="content-block fade-in-scroll">
            <div className="evaluation-box">
              <h2 className="section-title-large">
                3. Đánh giá – Ý nghĩa lâu dài
              </h2>
              <div className="evaluation-content">
                <div className="eval-item">
                  <div className="eval-number">01</div>
                  <p>
                    Liên minh giai cấp <strong>không phải chỉ</strong> có ý
                    nghĩa trong chiến tranh mà còn là{" "}
                    <strong>điều kiện tất yếu</strong> của xây dựng và bảo vệ Tổ
                    quốc trong hòa bình
                  </p>
                </div>
                <div className="eval-item">
                  <div className="eval-number">02</div>
                  <p>
                    Đây là nền tảng để thực hiện mục tiêu{" "}
                    <strong>
                      dân giàu – nước mạnh – dân chủ – công bằng – văn minh
                    </strong>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Kết luận */}
          <div className="content-block fade-in-scroll">
            <div className="conclusion-box">
              <div className="conclusion-icon">⭐</div>
              <h2>Kết luận</h2>
              <p className="conclusion-text">
                Liên minh <strong>công – nông – trí</strong> vẫn còn nguyên giá
                trị trong thời bình, thậm chí có{" "}
                <strong>ý nghĩa chiến lược hơn</strong> khi đất nước chuyển sang
                giai đoạn phát triển mới.
              </p>
              <div className="conclusion-highlight">
                Đây là yêu cầu khách quan của con đường đi lên chủ nghĩa xã hội
                ở Việt Nam
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="cta-section">
            <Link href="/lesson" className="btn btn-primary btn-lg">
              ← Quay lại bài học
            </Link>
            <Link href="/quiz" className="btn btn-secondary btn-lg">
              Làm bài quiz →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
