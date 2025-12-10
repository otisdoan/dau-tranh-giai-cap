"use client";

import { useMemo, useState } from "react";
import flashcards from "@/data/flashcards.json";

export default function FlashcardPage() {
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);

  const card = flashcards[index];

  const next = () => {
    setIndex((prev) => (prev + 1) % flashcards.length);
    setFlipped(false);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + flashcards.length) % flashcards.length);
    setFlipped(false);
  };

  const shuffle = () => {
    const random = Math.floor(Math.random() * flashcards.length);
    setIndex(random);
    setFlipped(false);
  };

  const progress = useMemo(
    () => Math.round(((index + 1) / flashcards.length) * 100),
    [index]
  );

  return (
    <div className="container section fade-in">
      <div className="section-header">
        <div>
          <h1 className="section-title">Flashcard ôn nhanh</h1>
          <p className="section-subtitle">
            Tap để lật thẻ. Dùng Next/Prev/Shuffle để luyện 25 flashcards.
          </p>
        </div>
        <div className="pill">
          {index + 1}/{flashcards.length}
        </div>
      </div>

      <div className="flashcard" onClick={() => setFlipped((f) => !f)}>
        <div className={`flashcard-inner ${flipped ? "flipped" : ""}`}>
          <div className="flashcard-face">
            <h3>{card.front}</h3>
          </div>
          <div className="flashcard-face back">
            <p>{card.back}</p>
          </div>
        </div>
      </div>

      <div className="progress" style={{ marginTop: 20 }}>
        <div className="progress-fill" style={{ width: `${progress}%` }} />
      </div>

      <div className="flashcard-actions" style={{ marginTop: 16 }}>
        <button className="btn btn-secondary btn-sm" onClick={prev}>
          ← Prev
        </button>
        <button className="btn btn-primary btn-sm" onClick={next}>
          Next →
        </button>
        <button className="btn btn-secondary btn-sm" onClick={shuffle}>
          Shuffle
        </button>
      </div>
    </div>
  );
}
