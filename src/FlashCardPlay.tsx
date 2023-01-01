import React, {useState} from "react";
import Flashcard from "./Flashcard";
import {FlashcardListProps} from "./FlashCardList";

const Flashcardplay: React.FC<FlashcardListProps> = ({flashcards}) => {
   const [card, setCard] = useState<number>(0);
   return(
      <div>
        <Flashcard
           term={flashcards[card].question}
           definition={flashcards[card].answer}
        />
        <button disabled={card==(flashcards.length-1)} onClick={() => setCard(card+1)}>Next</button>
        <button disabled={card==0} onClick={() => setCard(card-1)}>Previous</button>
      </div>
   )
}

export default Flashcardplay;
