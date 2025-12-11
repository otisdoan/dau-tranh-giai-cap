"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import lessons from "@/data/lessons.json";

const roadmap = [
  "Khái niệm Giai cấp",
  "Nguồn gốc giai cấp",
  "Đấu tranh giai cấp",
  "Đấu tranh vô sản & thời kỳ quá độ",
];

const bannerImages = [
  "/1.jpg",
  "/2.jpg",
  "/3.jpeg",
  "/giai%20c%E1%BA%A5p%2C%20ngu%E1%BB%93n%20g%E1%BB%91c.jpg",
];

export default function Home() {
  const featuredLessons = lessons.slice(0, 4);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % bannerImages.length);
    }, 3000); // Chuyển ảnh mỗi 4 giây

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section className="hero-banner fade-in">
        <div className="hero-banner-carousel">
          {bannerImages.map((image, index) => (
            <div
              key={image}
              className={`hero-banner-slide ${
                index === currentImageIndex ? "active" : ""
              }`}
              style={{ backgroundImage: `url(${image})` }}
            />
          ))}
        </div>
        <div className="hero-inner">
          <h1>GIAI CẤP VÀ ĐẤU TRANH GIAI CẤP</h1>
          <p>
            Giai cấp và đấu tranh giai cấp là quá trình xã hội bị phân hoá thành
            các nhóm có lợi ích đối lập, từ đó nảy sinh xung đột nhằm giành
            quyền lợi và ảnh hưởng trong xã hội.
          </p>
          <div className="hero-actions">
            <Link href="/lesson/giai-cap" className="btn btn-hero">
              Bắt đầu học →
            </Link>
          </div>
        </div>
      </section>

      <section className="section fade-in fade-in-delay">
        <div className="container">
          <div className="section-header">
            <div>
              <h2 className="section-title">Lộ trình học tập</h2>
              <p className="section-subtitle">
                4 chặng chính giúp nắm chắc Giai cấp & Đấu tranh giai cấp.
              </p>
            </div>
            <Link href="/lesson/giai-cap" className="btn btn-secondary btn-sm">
              Vào bài học
            </Link>
          </div>
          <div className="grid grid-2 ">
            {featuredLessons.map((lesson, idx) => (
              <Link
                href={`/lesson/${lesson.slug}`}
                key={lesson.id}
                className="card roadmap-card space-y-4"
              >
                <div className="pill">Bước {idx + 1}</div>
                <h3>{roadmap[idx] ?? lesson.title}</h3>
                <p className="muted">
                  Trạng thái:{" "}
                  <span className="badge badge-muted">{lesson.status}</span>
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section fade-in">
        <div className="container">
          <div className="section-header">
            <div>
              <h2 className="section-title">Sơ đồ & Hình dung nhanh</h2>
              <p className="section-subtitle">
                Flowchart, mindmap và infographics giúp ghi nhớ hệ thống.
              </p>
            </div>
            <Link href="/mindmap" className="btn btn-secondary btn-sm">
              Xem sơ đồ
            </Link>
          </div>
          <div className="grid grid-2">
            <div className="flowchart-preview card">
              <h3>Sơ đồ tư duy</h3>
              <p className="muted">
                Hover node → xem tóm tắt, click → tới bài tương ứng.
              </p>
              <div className="pill" style={{ marginTop: 12 }}>
                Mindmap
              </div>
            </div>
            <div className="card quiz-card">
              <h3>Test nhanh</h3>
              <p className="muted">Làm mini quiz 5 câu để kiểm tra mức nắm.</p>
              <div className="progress">
                <div className="progress-fill" style={{ width: "50%" }} />
              </div>
              <Link href="/quiz" className="btn btn-primary">
                Làm quiz ngay
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
