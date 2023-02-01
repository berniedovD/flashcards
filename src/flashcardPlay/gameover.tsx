import { useNavigate, useLocation } from "react-router-dom";

export default function GameOver(): JSX.Element {
    const location = useLocation();
    const navigate = useNavigate();

    let knownFlashcards = location.state.knownFlashcards;
    
    let FcCount = knownFlashcards.filter((FC: number) => FC !== 0).length;
    let NFcount = knownFlashcards.filter((FC: number) => FC === 2).length;
    let StLeCount = knownFlashcards.filter((FC: number) => FC === 1).length;
    
    function playAgain(): void {
        navigate("/play", { replace: true });
    }
    function playUnknown(): void {
       var play: number[] = [];
       
       for (var i = 0; i < knownFlashcards.length; i++ ) {
          if (knownFlashcards[i] === 1) {
             play.push(i);
          }
       }
       navigate("/play", { replace: true, state: {play: play}} );
    }
    return <div>
       <h3>You know {NFcount} cards out of {FcCount}{StLeCount !== 0 ? ", but you are still learning " + StLeCount +" cards" : ""}.</h3>
       <button onClick={playAgain}>Play again</button>
       <button disabled={!knownFlashcards.includes(1)} onClick={playUnknown}>Play the cards you don't know</button>
    </div>
}
