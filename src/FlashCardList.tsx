import React from "react";
import Flashcard from "./Flashcard";

type FlashcardListProps = {
  flashcards: Array<{ question: string; answer: string }>;
};

const FlashcardList: React.FC<FlashcardListProps> = ({ flashcards }) => {
  return (
    <div className="flashcard-list">
      {flashcards.map((flashcard, index) => (
        <Flashcard
          key={index}
          term={flashcard.question}
          definition={flashcard.answer}
        />
      ))}
    </div>
  );
};

export default FlashcardList;
