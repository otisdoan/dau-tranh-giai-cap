import profile from "@/data/profile.json";
import Breadcrumb from "@/app/components/Breadcrumb";

export default function ProfilePage() {
  return (
    <div className="container section fade-in">
      <Breadcrumb items={[{ label: "Hồ sơ" }]} />
      <div className="section-header">
        <div>
          <h1 className="section-title">Hồ sơ người học</h1>
          <p className="section-subtitle">
            % tiến độ, thời gian học, số quiz đã làm, điểm trung bình.
          </p>
        </div>
      </div>

      <div className="card">
        <h3>{profile.user.name}</h3>
        <p className="muted">
          Tiến độ tổng: {(profile.progress.overall * 100).toFixed(0)}%
        </p>
        <div className="profile-stats" style={{ marginTop: 12 }}>
          <div className="card" style={{ boxShadow: "none" }}>
            <p className="muted">Bài hoàn thành</p>
            <h3>{profile.progress.lessonsCompleted}</h3>
          </div>
          <div className="card" style={{ boxShadow: "none" }}>
            <p className="muted">Quiz đã làm</p>
            <h3>{profile.progress.quizzesTaken}</h3>
          </div>
          <div className="card" style={{ boxShadow: "none" }}>
            <p className="muted">Điểm trung bình</p>
            <h3>{(profile.progress.avgScore * 100).toFixed(0)}%</h3>
          </div>
          <div className="card" style={{ boxShadow: "none" }}>
            <p className="muted">Thời gian học</p>
            <h3>{profile.progress.studyTimeMinutes} phút</h3>
          </div>
        </div>
      </div>

      <div className="grid grid-2" style={{ marginTop: 16 }}>
        <div className="card">
          <h3>Bài học</h3>
          <ul style={{ marginTop: 8, paddingLeft: 18 }}>
            {profile.breakdown.map((b) => (
              <li key={b.lessonId}>
                {b.lessonId} — {b.status}{" "}
                {b.score ? `(${(b.score * 100).toFixed(0)}%)` : ""}
              </li>
            ))}
          </ul>
        </div>
        <div className="card">
          <h3>Gợi ý tiếp theo</h3>
          <ul style={{ marginTop: 8, paddingLeft: 18 }}>
            {profile.recommendations.map((r) => (
              <li key={r.target}>
                {r.type}: {r.target} — {r.reason}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
