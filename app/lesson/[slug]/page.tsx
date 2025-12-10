import Link from "next/link";
import { notFound } from "next/navigation";
import lessons from "@/data/lessons.json";

type Lesson = (typeof lessons)[number];

export function generateStaticParams() {
  return lessons.map((lesson) => ({ slug: lesson.slug }));
}

const statusMap: Record<string, { label: string; className: string }> = {
  done: { label: "Hoàn thành", className: "badge badge-success" },
  "in-progress": { label: "Đang học", className: "badge badge-warning" },
  "not-started": { label: "Chưa học", className: "badge badge-muted" },
};

function LessonMenu({ current }: { current: string }) {
  return (
    <aside className="card sticky">
      <h3 style={{ marginBottom: 12 }}>Danh mục bài học</h3>
      <div className="lesson-menu">
        {lessons.map((item) => {
          const status = statusMap[item.status] ?? statusMap["not-started"];
          return (
            <Link
              key={item.id}
              href={`/lesson/${item.slug}`}
              className="lesson-item"
              aria-current={item.slug === current ? "page" : undefined}
            >
              <div>
                <div className="pill" style={{ marginBottom: 6 }}>
                  {item.title}
                </div>
                <div className="muted">
                  <span
                    className={`status-dot ${
                      item.status === "done"
                        ? "status-done"
                        : item.status === "in-progress"
                        ? "status-progress"
                        : "status-idle"
                    }`}
                  />{" "}
                  {status.label}
                </div>
              </div>
              <span aria-hidden>→</span>
            </Link>
          );
        })}
      </div>
    </aside>
  );
}

function LessonContent({ lesson }: { lesson: Lesson }) {
  return (
    <div className="lesson-content">
      <div className="section-header" style={{ marginBottom: 0 }}>
        <div>
          <h1 className="section-title">{lesson.title}</h1>
          <p className="section-subtitle">
            Từ khóa chính, block nhấn mạnh và ví dụ ngắn gọn.
          </p>
        </div>
        <div className={statusMap[lesson.status]?.className}>
          {statusMap[lesson.status]?.label ?? "Trạng thái"}
        </div>
      </div>

      {lesson.sections.map((section) => {
        const isAlert =
          "variant" in section &&
          (section as { variant?: string }).variant === "alert-red";

        if (isAlert) {
          return (
            <div key={section.heading} className="alert-red">
              <h3>{section.heading}</h3>
              {"body" in section && section.body && <p>{section.body}</p>}
            </div>
          );
        }

        return (
          <div key={section.heading} className="card">
            <h3>{section.heading}</h3>
            {"body" in section && section.body && (
              <p className="muted">{section.body}</p>
            )}
            {"bullets" in section && section.bullets && (
              <ul style={{ marginTop: 10, paddingLeft: 18 }}>
                {section.bullets.map((b) => (
                  <li key={b} style={{ marginBottom: 6 }}>
                    {b}
                  </li>
                ))}
              </ul>
            )}
            {"highlight" in section && section.highlight && (
              <div className="highlight-card" style={{ marginTop: 12 }}>
                {"body" in section && section.body && <p>{section.body}</p>}
              </div>
            )}
          </div>
        );
      })}

      <div className="card">
        <div className="section-header" style={{ marginBottom: 6 }}>
          <div>
            <h3>Nhớ nhanh</h3>
            <p className="muted">
              Ghi nhớ định nghĩa, nguồn gốc, đặc trưng qua flashcard & quiz.
            </p>
          </div>
          <div className="pill">Ôn nhanh</div>
        </div>
        <div className="quiz-actions">
          <Link href="/flashcard" className="btn btn-secondary btn-sm">
            Lật flashcard
          </Link>
          <Link href="/quiz" className="btn btn-primary btn-sm">
            Làm quiz
          </Link>
        </div>
      </div>
    </div>
  );
}

export default async function LessonPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const lesson = lessons.find((l) => l.slug === slug);
  if (!lesson) return notFound();

  return (
    <div className="container section fade-in">
      <div className="layout-two-col">
        <LessonMenu current={lesson.slug} />
        <LessonContent lesson={lesson} />
      </div>
    </div>
  );
}
