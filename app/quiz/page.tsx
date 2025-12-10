"use client";

import { useMemo, useState } from "react";
import quizData from "@/data/quiz.json";

type Mode = "mcq" | "match" | "fill";

export default function QuizPage() {
  const [mode, setMode] = useState<Mode>("mcq");

  return (
    <div className="container section fade-in">
      <div className="section-header">
        <div>
          <h1 className="section-title">Quiz & Mini game ôn tập</h1>
          <p className="section-subtitle">
            Trắc nghiệm, ghép cặp, điền chỗ trống. Thanh tiến trình 10 câu.
          </p>
        </div>
        <div className="quiz-actions">
          <button
            className={`btn btn-secondary btn-sm ${
              mode === "mcq" ? "btn-primary" : ""
            }`}
            onClick={() => setMode("mcq")}
          >
            Trắc nghiệm
          </button>
          <button
            className={`btn btn-secondary btn-sm ${
              mode === "match" ? "btn-primary" : ""
            }`}
            onClick={() => setMode("match")}
          >
            Match the pair
          </button>
          <button
            className={`btn btn-secondary btn-sm ${
              mode === "fill" ? "btn-primary" : ""
            }`}
            onClick={() => setMode("fill")}
          >
            Điền chỗ trống
          </button>
        </div>
      </div>

      {mode === "mcq" && <McqQuiz />}
      {mode === "match" && <MatchQuiz />}
      {mode === "fill" && <FillQuiz />}
    </div>
  );
}

function McqQuiz() {
  const questions = quizData.multipleChoice;
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [result, setResult] = useState<"correct" | "incorrect" | null>(null);

  const current = questions[index];

  const progress = Math.round(((index + 1) / questions.length) * 100);

  const handleSelect = (i: number) => {
    setSelected(i);
    const isCorrect = i === current.answer;
    setResult(isCorrect ? "correct" : "incorrect");
  };

  const next = () => {
    setSelected(null);
    setResult(null);
    setIndex((prev) => (prev + 1) % questions.length);
  };

  return (
    <div className="card quiz-card">
      <div className="pill">Chế độ: Trắc nghiệm</div>
      <h3>{current.question}</h3>
      <div className="quiz-options">
        {current.options.map((opt, i) => (
          <button
            key={opt}
            className={`quiz-option ${
              selected === i && result
                ? result === "correct"
                  ? "correct"
                  : "incorrect"
                : ""
            }`}
            onClick={() => handleSelect(i)}
          >
            {opt}
          </button>
        ))}
      </div>
      {result && (
        <div className="muted">
          {result === "correct" ? "Chính xác!" : "Chưa đúng."}{" "}
          {current.explanation}
        </div>
      )}
      <div className="progress">
        <div className="progress-fill" style={{ width: `${progress}%` }} />
      </div>
      <div className="quiz-actions">
        <button className="btn btn-secondary btn-sm" onClick={next}>
          Câu tiếp
        </button>
      </div>
    </div>
  );
}

function MatchQuiz() {
  const item = quizData.matchPairs[0];
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [checked, setChecked] = useState(false);

  const correctPairs = useMemo(
    () => Object.fromEntries(item.answer.map(([l, r]) => [l, r])),
    [item.answer]
  );

  const handleSelect = (leftId: string, rightId: string) => {
    setAnswers((prev) => ({ ...prev, [leftId]: rightId }));
    setChecked(false);
  };

  const isCorrect = (leftId: string) =>
    answers[leftId] && correctPairs[leftId] === answers[leftId];

  return (
    <div className="card quiz-card">
      <div className="pill">Chế độ: Match the pair</div>
      <h3>{item.prompt}</h3>
      <div className="grid grid-2">
        {item.left.map((left) => (
          <div key={left.id} className="card" style={{ boxShadow: "none" }}>
            <p style={{ fontWeight: 700 }}>{left.text}</p>
            <select
              value={answers[left.id] ?? ""}
              onChange={(e) => handleSelect(left.id, e.target.value)}
              style={{
                marginTop: 8,
                width: "100%",
                padding: "10px 12px",
                borderRadius: 12,
                border: "1px solid var(--color-border)",
              }}
            >
              <option value="">Chọn mô tả</option>
              {item.right.map((right) => (
                <option key={right.id} value={right.id}>
                  {right.text}
                </option>
              ))}
            </select>
            {checked && answers[left.id] && (
              <div
                className={`pill ${
                  isCorrect(left.id) ? "badge-success" : "badge-muted"
                }`}
                style={{ marginTop: 8 }}
              >
                {isCorrect(left.id) ? "Đúng" : "Sai"}
              </div>
            )}
          </div>
        ))}
      </div>
      {checked && (
        <p className="muted">
          Đáp án: {item.right.map((r) => r.text).join(" • ")}
        </p>
      )}
      <div className="quiz-actions">
        <button
          className="btn btn-primary btn-sm"
          onClick={() => setChecked(true)}
        >
          Kiểm tra
        </button>
        <button
          className="btn btn-secondary btn-sm"
          onClick={() => {
            setAnswers({});
            setChecked(false);
          }}
        >
          Làm lại
        </button>
      </div>
    </div>
  );
}

function FillQuiz() {
  const items = quizData.fillBlank;
  const [inputs, setInputs] = useState<Record<string, string>>({});
  const [checked, setChecked] = useState(false);

  const handleChange = (id: string, value: string) => {
    setInputs((prev) => ({ ...prev, [id]: value }));
    setChecked(false);
  };

  const correctCount = items.filter(
    (i) => inputs[i.id]?.trim().toLowerCase() === i.answer.toLowerCase()
  ).length;
  const progress = Math.round((correctCount / items.length) * 100);

  return (
    <div className="card quiz-card">
      <div className="pill">Chế độ: Điền chỗ trống</div>
      <div className="grid">
        {items.map((q) => (
          <div key={q.id} className="card" style={{ boxShadow: "none" }}>
            <p>{q.question}</p>
            <input
              type="text"
              value={inputs[q.id] ?? ""}
              onChange={(e) => handleChange(q.id, e.target.value)}
              placeholder="Nhập đáp án"
              style={{
                marginTop: 8,
                width: "100%",
                padding: "12px 14px",
                borderRadius: 12,
                border: "1px solid var(--color-border)",
              }}
            />
            {checked && (
              <div className="muted" style={{ marginTop: 6 }}>
                Đáp án đúng: <strong>{q.answer}</strong>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="progress">
        <div className="progress-fill" style={{ width: `${progress}%` }} />
      </div>
      <div className="quiz-actions">
        <button
          className="btn btn-primary btn-sm"
          onClick={() => setChecked(true)}
        >
          Kiểm tra
        </button>
        <button
          className="btn btn-secondary btn-sm"
          onClick={() => {
            setInputs({});
            setChecked(false);
          }}
        >
          Làm lại
        </button>
      </div>
    </div>
  );
}
