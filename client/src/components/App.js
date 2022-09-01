import React, { useState, useEffect } from "react";
import { fetchWords, createRank } from "../api/index";

function App() {
  const [words, setWords] = useState([]);
  const [currentWord, setCurrentWord] = useState(0);
  const [score, setScore] = useState(0);
  const [rank, setRank] = useState(0);
  const [message, setMessage] = useState("");
  const [showResults, setShowResults] = useState(false);
  const [progress, setProgress] = useState(0);

  // new words after student end his quiz.
  useEffect(() => {
    fetchWords().then(res => {
      setWords(res)
    });
  }, [showResults])

  // use for catch every change in progress.
  useEffect(() => {
    setProgress((currentWord / words.length) * 100)
  }, [currentWord, words])

  const isCorrect = (event) =>{
    if (words[currentWord]?.pos === event.target.value) {
      setScore(score + 10);
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
      createRank({score: score}).then(res => {
        setRank(res)
      })
      setShowResults(true);
    }
  }

  const tryAgain = () => {
    setScore(0);
    setCurrentWord(0);
    setShowResults(false);
  }

  return (
    <div className="app">
      <h1>Quiz speech</h1>
      <div className="question">
        {showResults ?(
          <div className="results">
            <h1>Final Results</h1>
            <p>You'r rank is {rank}%.</p>
            <button onClick={() => tryAgain()}>Try Again</button>
          </div>
        ) : (
          <>
          <div className="header">
            <h3>
              What is the part of speech for {words[currentWord]?.word}?
            </h3>
            <p>
              Progress: {progress}%
            </p>
          </div>
            {message ?(
              <p className={message === "Correct"? "right" : "wrong"}>{ message }</p>
            ) : (
              <ul>
                <option onClick={(e) => isCorrect(e)} value="noun">noun</option>
                <option onClick={(e) => isCorrect(e)} value="adverb">adverb</option>
                <option onClick={(e) => isCorrect(e)} value="adjective">adjective</option>
                <option onClick={(e) => isCorrect(e)} value="verb">verb</option>
              </ul>
            )}
            <button onClick={() => nextWord()}>Next</button>
        </>
        )}
      </div>
    </div>
  );
}

export default App;
