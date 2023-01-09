import React, {useState, useEffect} from "react";
import Flashcard from "./Flashcard";
import {FlashcardListProps} from "./FlashCardList";

const Flashcardplay: React.FC<FlashcardListProps> = ({flashcards}) => {
   const [card, setCard] = useState<number>(0);
   const [lastCard, setLastCard] = useState<boolean>(false);
   const [firstCard, setFirstCard] = useState<boolean>(true); 
   const [known, setknown] = useState<number[]>(new Array(flashcards.length).fill(0));
   function updateknown(know: number) {
      // 1 is not known and 2 is known.
      setknown(known.map((e: number, i: number) => i === card ? know : e));
   }
   function next() {
      setCard(card + 1);
   }
   function previous() {
      setCard(card - 1);
   }
   useEffect(() => {
     setLastCard(card === flashcards.length - 1);
     setFirstCard(card === 0);
   }, [card])
   return(
      <div>
        <Flashcard
           term={flashcards[card].question}
           definition={flashcards[card].answer}
        />
        <button onClick={() => {updateknown(2); if (!lastCard) {next()}}}>know</button>
        <button onClick={() => {updateknown(1); if (!lastCard) {next()}}}>don't know</button>
        <button disabled={lastCard} onClick={next}>Skip</button>
        <button disabled={firstCard} onClick={previous}>Previous</button>
      </div>
   )
}

export default Flashcardplay;
