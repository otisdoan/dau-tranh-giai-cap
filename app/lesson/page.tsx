import Link from "next/link";
import lessons from "@/data/lessons.json";
import Breadcrumb from "@/app/components/Breadcrumb";

export default function LessonIndex() {
  return (
    <div className="container section fade-in">
      <Breadcrumb items={[{ label: "Bài học" }]} />
      <div className="section-header">
        <div>
          <h1 className="section-title">Bài học</h1>
          <p className="section-subtitle">
            Chọn bài để bắt đầu hoặc tiếp tục lộ trình học.
          </p>
        </div>
        <Link href={`/lesson/${lessons[0].slug}`} className="btn btn-primary">
          Học ngay
        </Link>
      </div>
      <div className="grid grid-2">
        {lessons.map((lesson) => (
          <Link
            key={lesson.id}
            href={`/lesson/${lesson.slug}`}
            className="card roadmap-card"
          >
            <h3>{lesson.title}</h3>
            <p className="muted">Trạng thái: {lesson.status}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
