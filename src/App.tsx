import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import FlashcardList from "./FlashCardList";
import Select from 'react-select';

type flashcardSet = {name: string, elements: {question: string, answer: string}[]}
type RSOptionForm = {value: string, label: string, id: number}; 
const App: React.FC = () => {
  const flashcardSets: flashcardSet[] = [{name: "Flashcard1", elements: [
    { question: "What is 2 + 2?", answer: "4" },
    { question: "What is the capital of France?", answer: "Paris" }]},
  {name: "Flashcard2", elements: [
     {question: "שלום", answer: "peace!"}, 
     {question:"בראשית", answer: "In the beginning"}]}];
  
  const [flashcards, setFlashcard] = useState<flashcardSet["elements"]>(flashcardSets[0].elements);   
  function getListOfFS() {
    return flashcardSets.map(({name}: flashcardSet): string => name);
  }
  function onChange(option: RSOptionForm | null) {
    if (option) {
      setFlashcard(flashcardSets[(option as RSOptionForm).id].elements)
    }
  }

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
          </ul>
        </nav>
        <Select options={getListOfFS().map((e: string, i: number): {value: string, label: string, id: number} => {return {value: e, label: e, id: i}})} onChange={onChange}/>
        
        <Routes>
          <Route path="/create" element={<h1>Create Flashcard route</h1>} />
          <Route path="/" />
          <Route
            path="/show"
            element={<FlashcardList flashcards={flashcards}></FlashcardList>}
          ></Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
