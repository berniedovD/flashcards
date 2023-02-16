import { useNavigate, useLocation } from "react-router-dom";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import green from "@mui/material/colors/green";
import red from "@mui/material/colors/red";

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
    return <Box sx={{ maxWidth: 700}}>
       <Typography align="center" variant="h4" color={green[600]}>You know {NFcount}/{FcCount} cards.</Typography>
       {StLeCount !== 0 ? <Typography align="center" variant="h4" color={red[600]}>You are still learning {StLeCount}/{FcCount} cards.</Typography> : null}
       <Stack  direction="row" justifyContent="space-evenly"><Button variant="contained" onClick={playAgain}>Play again</Button>
       <Button variant="contained" disabled={!knownFlashcards.includes(1)} onClick={playUnknown}>Play the cards you don't know</Button></Stack>
    </Box>
}
