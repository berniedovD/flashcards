import React from "react";
import Flashcard from "./Flashcard";

import Stack from "@mui/material/Stack";

export interface FlashcardListProps {
  flashcards: Array<{ question: string; answer: string }>;
};

const FlashcardList: React.FC<FlashcardListProps> = ({ flashcards }) => {
  return (
    <Stack justifyContent="center" alignItems="center" className="flashcard-list">
      {flashcards.map((flashcard, index) => (
        <Flashcard
          key={index}
          term={flashcard.question}
          definition={flashcard.answer}
        />
      ))}
    </Stack>
  );
};

export default FlashcardList;

