import { useState } from "react";
import { englishWords } from "../data/englishList";

export default function Remind() {
  const [userAnswer, setUserAnswer] = useState("");
  const [showAnswer, setShowAnswer] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // 정답 확인
  const handleCheck = () => {
    setShowAnswer(true);
  };

  // 단어 뜻 입력
  const handleInputChange = (e) => {
    setUserAnswer(e.target.value);
  };

  // 다음 단어로 이동
  const handleNext = () => {
    if (currentIndex < englishWords.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setShowAnswer(false);
      setUserAnswer("");
    }
  };

  // 이전 단어로 이동
  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setShowAnswer(false);
      setUserAnswer("");
    }
  };

  return (
    <div
      style={{
        padding: "2rem",
        maxWidth: "800px",
        margin: "0 auto",
      }}
    >
      <h1 style={{ color: "#2D3748", marginBottom: "2rem" }}>🧠 리마인드</h1>
      <div style={{ textAlign: "center" }}>
        <h2>{englishWords[currentIndex].eng}</h2>
        <div style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
          <input
            type="text"
            value={userAnswer}
            onChange={handleInputChange}
            style={{
              padding: "0.5rem",
              border: "1px solid #E2E8F0",
              borderRadius: "4px",
              fontSize: "1rem",
            }}
          />
          <button style={{ flexShrink: 0 }} onClick={handleCheck}>
            확인
          </button>
        </div>
        {showAnswer && <p>정답: {englishWords[currentIndex].kr.join(", ")}</p>}
        <div style={{ marginTop: "20px" }}>
          <button onClick={handlePrevious} disabled={currentIndex === 0}>
            이전
          </button>
          <button
            onClick={handleNext}
            disabled={currentIndex === englishWords.length - 1}
            style={{ marginLeft: "10px" }}
          >
            다음
          </button>
        </div>
      </div>
    </div>
  );
}
