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
                <div className="pill " style={{ marginBottom: 6 }}>
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
      <div className="section-header" style={{ marginBottom: 24 }}>
        <div>
          <h1 className="section-title">{lesson.title}</h1>
        </div>
        <div className={statusMap[lesson.status]?.className}>
          {statusMap[lesson.status]?.label ?? "Trạng thái"}
        </div>
      </div>

      {lesson.sections.map((section, index) => {
        const isAlert =
          "variant" in section &&
          (section as { variant?: string }).variant === "alert-red";

        const isHighlight =
          "highlight" in section &&
          (section as { highlight?: boolean }).highlight === true;

        // Alert box - red background
        if (isAlert) {
          return (
            <div
              key={`${section.heading}-${index}`}
              className="alert-red"
              style={{ marginBottom: 20 }}
            >
              <h3 style={{ marginBottom: 10, fontSize: "1.1rem" }}>
                {section.heading}
              </h3>
              {"body" in section && section.body && (
                <p style={{ margin: 0 }}>{section.body}</p>
              )}
              {"bullets" in section && section.bullets && (
                <ul style={{ marginTop: 10, paddingLeft: 20, marginBottom: 0 }}>
                  {(section.bullets as string[]).map((bullet, i) => (
                    <li key={i} style={{ marginBottom: 6 }}>
                      {bullet}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          );
        }

        // Highlight box - yellow background for definitions
        if (isHighlight) {
          return (
            <div
              key={`${section.heading}-${index}`}
              style={{ marginBottom: 20 }}
            >
              <h3 style={{ marginBottom: 12, fontSize: "1.2rem" }}>
                {section.heading}
              </h3>
              {"body" in section && section.body && (
                <div
                  className="highlight-card"
                  style={{ padding: 16, marginTop: 12 }}
                >
                  <p style={{ margin: 0, lineHeight: 1.7 }}>{section.body}</p>
                </div>
              )}
              {"bullets" in section && section.bullets && (
                <ul style={{ marginTop: 12, paddingLeft: 20 }}>
                  {(section.bullets as string[]).map((bullet, i) => (
                    <li key={i} style={{ marginBottom: 8, lineHeight: 1.6 }}>
                      {bullet}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          );
        }

        // Regular content sections
        return (
          <div key={`${section.heading}-${index}`} style={{ marginBottom: 20 }}>
            <h3 style={{ marginBottom: 12, fontSize: "1.2rem" }}>
              {section.heading}
            </h3>
            {"body" in section && section.body && (
              <p style={{ marginBottom: 12, lineHeight: 1.7 }}>
                {section.body}
              </p>
            )}
            {"bullets" in section && section.bullets && (
              <ul style={{ marginTop: 10, paddingLeft: 20 }}>
                {(section.bullets as string[]).map((bullet, i) => (
                  <li key={i} style={{ marginBottom: 8, lineHeight: 1.6 }}>
                    {bullet}
                  </li>
                ))}
              </ul>
            )}
          </div>
        );
      })}

      <div className="card" style={{ marginTop: 32 }}>
        <div className="section-header" style={{ marginBottom: 12 }}>
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
