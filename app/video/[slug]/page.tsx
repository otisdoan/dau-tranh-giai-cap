"use client";

import { notFound } from "next/navigation";
import Link from "next/link";
import videos from "@/data/videos.json";
import lessons from "@/data/lessons.json";
import Breadcrumb from "@/app/components/Breadcrumb";
import { useState, use } from "react";

type Video = (typeof videos)[number];

export default function VideoDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const video = videos.find((v) => v.slug === slug);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState<
    Array<{ author: string; text: string; date: string }>
  >([
    {
      author: "Lê Doãn Hiếu",
      text: "Video rất hay và dễ hiểu. Cảm ơn tác giả!",
      date: "2024-12-10",
    },
    {
      author: "Lê Doãn Hiếu",
      text: "Nội dung rất bổ ích, giúp tôi hiểu rõ hơn về đấu tranh giai cấp.",
      date: "2024-12-09",
    },
  ]);

  if (!video) return notFound();

  const relatedLessons = lessons.filter((lesson) =>
    video.relatedLessons.includes(lesson.slug)
  );

  const handleSubmitComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (comment.trim()) {
      setComments([
        {
          author: "Người dùng",
          text: comment,
          date: new Date().toISOString().split("T")[0],
        },
        ...comments,
      ]);
      setComment("");
    }
  };

  return (
    <div className="container section fade-in">
      <Breadcrumb
        items={[{ label: "Video", href: "/video" }, { label: video.title }]}
      />

      <div className="video-detail-layout">
        <div className="video-main">
          <div className="video-player">
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${video.youtubeId}`}
              title={video.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>

          <div className="video-header">
            <h1 className="video-detail-title">{video.title}</h1>
            <div className="video-stats">
              <span>{video.views.toLocaleString()} lượt xem</span>
              <span>•</span>
              <span>
                {new Date(video.uploadDate).toLocaleDateString("vi-VN")}
              </span>
            </div>
          </div>

          <div className="card video-description-card mb-4">
            <h3>Mô tả video</h3>
            <p style={{ lineHeight: 1.7, marginTop: 12 }}>
              {video.description}
            </p>
            <div className="video-tags" style={{ marginTop: 16 }}>
              {video.tags.map((tag, index) => (
                <span key={index} className="tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="card">
            <h3>{comments.length} Bình luận</h3>
            <form onSubmit={handleSubmitComment} style={{ marginTop: 16 }}>
              <textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Thêm bình luận..."
                className="comment-input"
                rows={3}
              />
              <button
                type="submit"
                className="btn btn-primary"
                style={{ marginTop: 12 }}
              >
                Gửi bình luận
              </button>
            </form>

            <div className="comments-list">
              {comments.map((c, index) => (
                <div key={index} className="comment-item">
                  <div className="comment-header">
                    <strong>{c.author}</strong>
                    <span className="comment-date">
                      {new Date(c.date).toLocaleDateString("vi-VN")}
                    </span>
                  </div>
                  <p className="comment-text">{c.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="video-sidebar">
          <div className="card">
            <h3>Bài học liên quan</h3>
            <div className="related-lessons">
              {relatedLessons.map((lesson) => (
                <Link
                  key={lesson.id}
                  href={`/lesson/${lesson.slug}`}
                  className="related-lesson-item"
                >
                  <div className="lesson-icon">📚</div>
                  <div>
                    <div className="related-lesson-title">{lesson.title}</div>
                    <div className="related-lesson-status">{lesson.status}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div className="card">
            <h3>Video khác</h3>
            <div className="related-videos">
              {videos
                .filter((v) => v.id !== video.id)
                .slice(0, 3)
                .map((v) => (
                  <Link
                    key={v.id}
                    href={`/video/${v.slug}`}
                    className="related-video-item"
                  >
                    <div className="related-video-thumbnail">
                      <img src={v.thumbnail} alt={v.title} />
                      <div className="related-video-duration">{v.duration}</div>
                    </div>
                    <div className="related-video-info">
                      <div className="related-video-title">{v.title}</div>
                      <div className="related-video-views">
                        {v.views.toLocaleString()} lượt xem
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
