import Link from "next/link";
import Image from "next/image";
import videos from "@/data/videos.json";
import Breadcrumb from "@/app/components/Breadcrumb";

export default function VideosPage() {
  return (
    <div className="container section fade-in">
      <Breadcrumb items={[{ label: "Video" }]} />
      <div className="section-header">
        <div>
          <h1 className="section-title">Thư viện Video</h1>
          <p className="section-subtitle">
            Tổng hợp các video về đấu tranh giai cấp và lý thuyết Mác - Lênin
          </p>
        </div>
        <div className="pill">{videos.length} video</div>
      </div>

      <div className="video-grid">
        {videos.map((video) => (
          <Link
            key={video.id}
            href={`/video/${video.slug}`}
            className="video-card"
          >
            <div className="video-thumbnail">
              <Image
                src={video.thumbnail}
                alt={video.title}
                fill
                style={{ objectFit: "cover" }}
              />
              <div className="video-duration">{video.duration}</div>
              <div className="play-overlay">
                <div className="play-button">▶</div>
              </div>
            </div>
            <div className="video-info">
              <h3 className="video-title">{video.title}</h3>
              <p className="video-description">{video.description}</p>
              <div className="video-meta">
                <span className="video-views">
                  {video.views.toLocaleString()} lượt xem
                </span>
                <span className="video-date">
                  {new Date(video.uploadDate).toLocaleDateString("vi-VN")}
                </span>
              </div>
              <div className="video-tags">
                {video.tags.map((tag, index) => (
                  <span key={index} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
