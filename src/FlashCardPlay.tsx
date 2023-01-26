import React, {useState, useEffect} from "react";
import Flashcard from "./Flashcard";
import {FlashcardListProps} from "./FlashCardList";
import { useNavigate } from "react-router-dom"

const Flashcardplay = ({flashcards}: FlashcardListProps):JSX.Element => {
   const navigate = useNavigate();
   
   const [card, setCard] = useState<number>(0);
   const [lastCard, setLastCard] = useState<boolean>(false);
   const [firstCard, setFirstCard] = useState<boolean>(true); 
   const [known, setknown] = useState<number[]>(new Array(flashcards.length).fill(0));
   const [playing, setPlaying] = useState<boolean>(true)
   function updateknown(know: number) {
      // 1 is not known and 2 is known.
      setknown(known.map((e: number, i: number) => i === card ? know : e));
   }
   function next() {
      if (!lastCard) {
          setCard(card + 1);
      } else {
          setPlaying(false);
      }
   }
   function previous() {
      setCard(card - 1);
   }

   useEffect(() => {
     setLastCard(card === flashcards.length - 1);
     setFirstCard(card === 0);
   }, [card])
   useEffect(() => {if (!playing) {navigate("/gameover", {replace: true})}}, [playing])
   return(
      <div>
        <Flashcard
           term={flashcards[card].question}
           definition={flashcards[card].answer}
        />
        <button onClick={() => {updateknown(2); next()}}>know</button>
        <button onClick={() => {updateknown(1); next()}}>don't know</button>
        <button onClick={next}>Skip</button>
        <button disabled={firstCard} onClick={previous}>Previous</button>
      </div>
   )
}

export default Flashcardplay;
