import React, {useState} from "react";
import { BrowserRouter as Router, Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import FlashcardList from "./FlashCardList";
import Flashcardplay from "./flashcardPlay";
import GameOver from "./flashcardPlay/gameover";

import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Grid from "@mui/material/Grid";
import Typography from '@mui/material/Typography';

const App: React.FC = () => {
  const flashcards = [
    { question: "What is 2 + 2?", answer: "4" },
    { question: "What is the capital of France?", answer: "Paris" },
  ];
  return (
    <Router>
      <div>
      <Routes>
          <Route path="/" element={<TabNav/>}>
             <Route index element={<h1>Home</h1>}/>
             <Route path="/create" element={<h1>Create Flashcard route</h1>} />
             <Route
               path="/show"
               element={<FlashcardList flashcards={flashcards}></FlashcardList>}
             />
             <Route path="/play" element={<Flashcardplay flashcards={flashcards}/>}/>
             <Route path="/gameover" element={<GameOver/>}/>
             <Route path="*" element={<h1>Error 404</h1>}/>
          </Route>
        </Routes>
      </div>
    </Router>
  );
};

function TabNav() { 
  const [value, setValue] = useState(0);
  const navigate = useNavigate();
  return (<Box>
    <Typography align="center" variant="h2">Torah Flashcards</Typography>
    <Tabs value={value} centered onChange={(event: React.SyntheticEvent, newValue: number) => setValue(newValue)}>
       <Tab onClick={() => navigate("/")} label="Home"/>
       <Tab onClick={() => navigate("/show")} label="Show Flashcards"/>
       <Tab onClick={() => navigate("/play")} label="Play Flashcards"/></Tabs>
          
          
          <Outlet/>
          
  </Box>)
}

export default App;
