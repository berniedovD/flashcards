import React, {useState, useEffect} from "react";
import Typography from "@mui/material/Typography";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import {useLocation, useNavigate, useParams, Outlet, useOutletContext } from "react-router-dom";

type tabLink = { path: string, tabN: number };
type flashcards = { question: string, answer: string }[];
function getFlashcards(id: number): flashcards | undefined {
  const flashcardSets = [
    { id: 0, cards: [
      { question: "What is 2 + 2?", answer: "4" },
      { question: "What is the capital of France?", answer: "Paris" }]
    },
    { id: 1, cards: [
      { question: "בראשית", answer: "In the begining" },
      { question: "ברא", answer: "He created" },
      { question: "הארץ", answer: "The land"}]
    }
  ];
  return flashcardSets.find((e) => e.id === id)?.cards;
}

function useFlashcards(): flashcards | undefined {
  const params = useParams();
  const [flashcards, setFlashcards] = useState(getFlashcards((Number(params.flashcard))));
  useEffect(() => setFlashcards(getFlashcards((Number(params.flashcard)))), [params])
  return flashcards;
}

export function useFCContext() {
  return useOutletContext<flashcards>();
}

export default function TabNav() {
  const location = useLocation();
  
  const flashcards = useFlashcards();

  const LOCS: tabLink[] = [
    { path: "/", tabN: 0 },
    { path: "/show", tabN: 1 },
    { path: "/play", tabN: 2 },
    { path: "/gameover", tabN: 2 }
  ];
 
  function currentTab(): number | undefined {
    return LOCS.find((element: tabLink) => location.pathname.endsWith(element.path))?.tabN;
  }
 
  const [value, setValue] = useState<number | undefined>(currentTab());
  useEffect(() => {
   setValue(currentTab());
  }, [location.pathname]); // eslint-disable-line react-hooks/exhaustive-deps

  const navigate = useNavigate();

  return (<Box>
    <Typography align="center" variant="h2">Torah Flashcards</Typography>
    <Tabs value={value} centered onChange={(event: React.SyntheticEvent, newValue: number) => setValue(newValue)} sx={{mb: 5}}>
       <Tab onClick={() => navigate("./")} label="Home"/>
       <Tab onClick={() => navigate("show")} label="Show Flashcards"/>
       <Tab onClick={() => navigate("play")} label="Play Flashcards"/>
    </Tabs>
    {flashcards && <Outlet context={flashcards}/>}
  </Box>)
}
