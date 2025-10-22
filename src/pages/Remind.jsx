import { useState } from "react";
import { englishWords } from "../data/englishList";

export default function Remind() {
  const [userAnswer, setUserAnswer] = useState("");
  const [showAnswer, setShowAnswer] = useState(false);

  const handleCheck = () => {
    setShowAnswer(true);
  };

  const handleInputChange = (e) => {
    setUserAnswer(e.target.value);
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
        <h2>{englishWords[0].eng}</h2>
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
        {showAnswer && <p>정답: {englishWords[0].kr.join(", ")}</p>}
      </div>
    </div>
  );
}
