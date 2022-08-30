import React, { useState, useEffect } from "react";
import { fetchWords } from "../api/index";

function App() {
  const [words, setWords] = useState([]);
  const [currentWord, setCurrentWord] = useState(0);
  const [score, setScore] = useState(0);
  const [message, setMessage] = useState("");
  const [showResults, setShowResults] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    fetchWords().then((res) => {
      setWords(res)
    });
    setProgress((currentWord / words.length) * 100)
  }, [currentWord, words.length])

  const isCorrect = (event) =>{
    if (words[currentWord]?.pos === event.target.value) {
      setScore(score + 1);
      setMessage("Correct");
      return true;
    }
    setMessage("Wrong answer")
    return false;
  }
  const nextWord = () => {
    setMessage("");
    if (currentWord + 1 < words.length){
      setCurrentWord(currentWord + 1);
    }else {
      setShowResults(false);
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
        {message ?
        <p className={message === "Correct"? "right" : "wrong"}>{ message }</p>
        :
        <ul>
          <option onClick={(e) => isCorrect(e)} value="noun">noun</option>
          <option onClick={(e) => isCorrect(e)} value="adverb">adverb</option>
          <option onClick={(e) => isCorrect(e)} value="adjective">adjective</option>
          <option onClick={(e) => isCorrect(e)} value="verb">verb</option>
        </ul>}


        <button onClick={() => nextWord()}>Next</button>
      </div>
    </div>
  );
}

export default App;
