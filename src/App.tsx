import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import FlashcardList from "./FlashCardList";

const App: React.FC = () => {
  const flashcards = [
    { question: "What is 2 + 2?", answer: "4" },
    { question: "What is the capital of France?", answer: "Paris" },
  ];

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/create">Create Flashcard</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/create" element={<h1>Create Flashcard</h1>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
