import React, { useState, useEffect } from "react";
import { fetchWords } from "../api/index";

function App() {
  const [words, setWords] = useState([]);
  const [currentWord, setCurrentWord] = useState(0);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    fetchWords().then((res) => {
      setWords(res)
    });
    setProgress((currentWord / words.length) * 100)
  }, [currentWord, words.length])

  const isCorrect = () =>{

  }
  const nextWord = () => {
    if (currentWord + 1 < words.length){
      setCurrentWord(currentWord + 1);
    }
  }

  return (
    <div className="app">
      <h1>Quiz speech</h1>
      <div className="question">
        <div className="header">
          <h3>
            What is the part of speech for {words[currentWord]?.word}?
          </h3>
          <p>
            Progress: {progress}%
          </p>
        </div>
        <ul>
          <li onClick={() => isCorrect()}>noun</li>
          <li onClick={() => isCorrect()}>adverb</li>
          <li onClick={() => isCorrect()}>adjective</li>
          <li onClick={() => isCorrect()}>verb</li>
        </ul>
        <button onClick={() => nextWord()}>Next</button>
      </div>
    </div>
  );
}

export default App;
