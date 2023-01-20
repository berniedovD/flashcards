import {Navigate} from "react-router-dom";
import { useState } from "react";

export default function GameOver(): JSX.Element {
    const [playAgain, setPlayAgain] = useState(false);
    return <div>
       {playAgain && <Navigate to="/play" replace/>}
       <button onClick={() => setPlayAgain(true)}>Play again</button>
    </div>
}
