import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export default function GameOver(): JSX.Element {
    const [playAgain, setPlayAgain] = useState(false);
    const navigate = useNavigate();
    useEffect(() => {if (playAgain) {navigate("/play", { replace: true })}}, [playAgain])
    return <div>
       <button onClick={() => setPlayAgain(true)}>Play again</button>
    </div>
}
