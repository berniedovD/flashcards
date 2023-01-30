import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

export default function GameOver(): JSX.Element {
    const location = useLocation();
    const navigate = useNavigate();
    function playAgain(): void {
        navigate("/play", { replace: true });
    }
    function playUnknown(): void {
       var play: number[] = [];
       let knownFlashcards = location.state.knownFlashcards;

       for (var i = 0; i < knownFlashcards.length; i++ ) {
          if (knownFlashcards[i] == 1) {
             play.push(i);
          }
       }
       navigate("/play", { replace: true, state: {play: play}} );
    }
    return <div>
       <button onClick={playAgain}>Play again</button>
       <button onClick={playUnknown}>Play the cards you don't know</button>
    </div>
}
