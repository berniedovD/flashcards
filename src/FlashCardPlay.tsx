import React, {useState, useEffect} from "react";
import Flashcard from "./Flashcard";
import {FlashcardListProps} from "./FlashCardList";
import { useNavigate, useLocation } from "react-router-dom"

const Flashcardplay = ({flashcards}: FlashcardListProps):JSX.Element => {
   const navigate = useNavigate();
   const location = useLocation();
   
   // An array of the indexes of the cards that will be played.
   let playcards =  location.state ? location.state.play : Array.from(Array(flashcards.length).keys());
   
   const [card, setCard] = useState<number>(0);// Current card
   const [cardIndex, setCI] = useState<number>(playcards[card]);
   useEffect(() => setCI(playcards[card]), [card]);
  
   const [lastCard, setLastCard] = useState<boolean>(false);
   const [firstCard, setFirstCard] = useState<boolean>(true); 
   useEffect(() => {
     setLastCard(card === playcards.length - 1);
     setFirstCard(card === 0);
   }, [card]);
   
   // An array of which cards the user knows. 1 is not known; 2 is known; 0 is defalt. 
   const [known, setknown] = useState<number[]>(new Array(flashcards.length).fill(0));
   // updateknown will update one element of "known". 
   function updateknown(know: number) {
      setknown(known.map((e: number, i: number) => i === cardIndex ? know : e));
   }

  const [gameover, setGameover] = useState<boolean>(false);   
  useEffect(() => {
     if (gameover) {
        navigate("/gameover", {replace: true, state: {knownFlashcards: known}});
     }
  }, [known]);
 
  function next() {
      if (!lastCard) {
          setCard(card + 1);
          
      } else {
         setGameover(true);
      }
   }
   function skip() {
      if (!lastCard) {
          setCard(card+1);
      } else {
          navigate("/gameover", {replace: true, state: {knownFlashcards: known}}); 
      }
     
   }
   function previous() {
      setCard(card - 1);
   }

   return(
      <div>
        <Flashcard
           term={flashcards[cardIndex].question}
           definition={flashcards[cardIndex].answer}
        />
        <button onClick={() => {updateknown(2); next()}}>Know</button>
        <button onClick={() => {updateknown(1); next()}}>Still learning</button>
        <button onClick={skip}>Skip</button>
        <button disabled={firstCard} onClick={previous}>Previous</button>
      </div>
   )
}

export default Flashcardplay;
