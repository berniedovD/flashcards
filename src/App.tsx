import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import FlashcardList from "./FlashCardList";
import Flashcardplay from "./FlashCardPlay";
import GameOver from "./gameover";

const App: React.FC = () => {
  const flashcards = [
    { question: "What is 2 + 2?", answer: "4" },
    { question: "What is the capital of France?", answer: "Paris" },
  ];

  return (
    <Router>
      <div>
        <h1>A trivial Flashcard App</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/create">Create Flashcard</Link>
            </li>
            <li>
              <Link to="/show">Show Flash Cards</Link>
            </li>
            <li>
              <Link to="/play">Play Flashcards Individually</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/create" element={<h1>Create Flashcard route</h1>} />
          <Route path="/" />
          <Route
            path="/show"
            element={<FlashcardList flashcards={flashcards}></FlashcardList>}
          ></Route>
          <Route path="/play" element={<Flashcardplay flashcards={flashcards}/>}/>
          <Route path="/gameover" element={<GameOver/>}/>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
