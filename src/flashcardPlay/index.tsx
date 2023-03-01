import React, {useState, useEffect} from "react";
import Flashcard from "./flashcard";
import {FlashcardListProps} from "../FlashCardList";
import { useNavigate, useLocation } from "react-router-dom"
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";

const Flashcardplay = ({flashcards}: FlashcardListProps):JSX.Element => {
   const navigate = useNavigate();
   const location = useLocation();
   
   // An array of the indexes of the cards that will be played.
   let playcards =  location.state ? location.state.play : Array.from(Array(flashcards.length).keys());
   
   const [card, setCard] = useState<number>(0);// Current card
   const [cardIndex, setCI] = useState<number>(playcards[card]);
   useEffect(() => setCI(playcards[card]), [card]); // eslint-disable-line react-hooks/exhaustive-deps
  
   const [lastCard, setLastCard] = useState<boolean>(false);
   const [firstCard, setFirstCard] = useState<boolean>(true); 
   useEffect(() => {
     setLastCard(card === playcards.length - 1);
     setFirstCard(card === 0);
   }, [card]); // eslint-disable-line react-hooks/exhaustive-deps
   
   // An array of which cards the user knows. 1 is not known; 2 is known; 0 is defalt. 
   const [known, setknown] = useState<number[]>(new Array(flashcards.length).fill(0));
   // updateknown will update one element of "known". 
   function updateknown(know: number) {
      setknown(known.map((e: number, i: number) => i === cardIndex ? know : e));
   }

  const [gameover, setGameover] = useState<boolean>(false);   
  useEffect(() => {
     if (gameover) {
        navigate("../gameover", {state: {knownFlashcards: known}});
     }
  }, [known]); // eslint-disable-line react-hooks/exhaustive-deps
 
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
          navigate("../gameover", {state: {knownFlashcards: known}}); 
      }
     
   }
   function previous() {
      setCard(card - 1);
   }
   const NavButtons = (
      <React.Fragment>
         <Stack direction="row" alignItems="center" justifyContent="space-evenly">
             <Button onClick={() => {updateknown(2); next()}} variant="contained">Know</Button>
             <Button onClick={() => {updateknown(1); next()}} variant="contained">Still learning</Button>
             <Button onClick={skip} variant="contained">Skip</Button>
             <Button disabled={firstCard} onClick={previous} variant="contained">Previous</Button>
         </Stack>        
      </React.Fragment>)

   return(
      <Box justifyContent="center" display="flex" alignItems="center">
         <Card variant="outlined" sx={{width: 650}}>
            <CardContent>
              <Flashcard
                 term={flashcards[cardIndex].question}
                 definition={flashcards[cardIndex].answer}
              />
              {NavButtons}
            </CardContent>
      </Card></Box>
   )
}

export default Flashcardplay;
