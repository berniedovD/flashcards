import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FlashcardList from "./FlashCardList";
import Flashcardplay from "./flashcardPlay";
import GameOver from "./flashcardPlay/gameover";
import TabNav from "./Tabs";
import Home from "./Home";

const App: React.FC = () => {
  const flashcards = [
    { question: "What is 2 + 2?", answer: "4" },
    { question: "What is the capital of France?", answer: "Paris" },
  ];
  return (
    <Router>
      <div>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="flashcard/:flashcard" element={<TabNav/>}>
             <Route index element={<h1>Home</h1>}/>
             <Route path="create" element={<h1>Create Flashcard route</h1>} />
             <Route
               path="show"
               element={<FlashcardList flashcards={flashcards}></FlashcardList>}
             />
             <Route path="play" element={<Flashcardplay/>}/>
             <Route path="gameover" element={<GameOver/>}/>
             <Route path="*" element={<h1>Error 404</h1>}/>
          </Route>
          <Route path="*" element={<h1>Error 404</h1>}/>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
