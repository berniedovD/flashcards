import React, { useState } from "react";

interface FlashcardProps {
  term: string;
  definition: string;
}

const Flashcard: React.FC<FlashcardProps> = ({ term, definition }) => {
  const [showFront, setShowFront] = useState(true);

  return (
    <div
      className="flashcard"
      style={{ width: "80%", height: "80%", margin: "auto" }}
      onClick={() => setShowFront(!showFront)}
    >
      {showFront ? (
        <div>
          <h3>{term}</h3>
          <p>Click to flip</p>
        </div>
      ) : (
        <div>
          <h3>{definition}</h3>
          <p>Click to flip</p>
        </div>
      )}
    </div>
  );
};

export default Flashcard;
