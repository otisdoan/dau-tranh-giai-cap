import Link from "next/link";
import lessons from "@/data/lessons.json";

const roadmap = [
  "Khái niệm Giai cấp",
  "Nguồn gốc giai cấp",
  "Đấu tranh giai cấp",
  "Đấu tranh vô sản & thời kỳ quá độ",
];

export default function Home() {
  const featuredLessons = lessons.slice(0, 4);

  return (
    <div className="container">
      <section className="section fade-in">
        <div className="hero">
          <h1>Triết học Mác – Lênin: Giai cấp và Đấu tranh Giai cấp</h1>
          <p>Học nhanh – Hiểu sâu – Ghi nhớ hiệu quả.</p>
          <div className="hero-actions">
            <Link href="/lesson/giai-cap" className="btn btn-primary">
              Bắt đầu học →
            </Link>
            <Link href="/quiz" className="btn btn-secondary">
              Làm mini quiz 5 câu
            </Link>
          </div>
        </div>
      </section>

      <section className="section fade-in fade-in-delay">
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
        <div className="grid grid-2">
          {featuredLessons.map((lesson, idx) => (
            <Link
              href={`/lesson/${lesson.slug}`}
              key={lesson.id}
              className="card roadmap-card"
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
      </section>

      <section className="section fade-in">
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
              Mindmap • react-flow / SVG
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
      </section>
    </div>
  );
}
