import React, { useState } from "react";

type FlashcardProps = {
  question: string;
  answer: string;
};

const Flashcard: React.FC<FlashcardProps> = ({ question, answer }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="flashcard">
      {isFlipped ? (
        <div className="flashcard-answer">{answer}</div>
      ) : (
        <div className="flashcard-question">{question}</div>
      )}
      <button onClick={() => setIsFlipped(!isFlipped)}>Flip</button>
    </div>
  );
};

export default Flashcard;
