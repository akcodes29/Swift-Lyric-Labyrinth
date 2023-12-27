import React, { useState } from 'react'
import './App.css'

function App() {

  // Properties

  const [showFinalResults, setFinalResults] = useState(false);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const questions = [
    {
      text: "State the obvious, I didn't get my perfect _____",
      options: [
        { id: 0, text: "love story", isCorrect: false },
        { id: 1, text: "fantasy", isCorrect: true },
        { id: 2, text: "dream", isCorrect: false },
        { id: 3, text: "wish come true", isCorrect: false }, 
      ],
    },
    {
      text: "Our song is the way you _______. The first date 'Man, I didn't kiss her, and I should have'",
      options: [
        { id: 0, text: "walk", isCorrect: false },
        { id: 1, text: "smile", isCorrect: false },
        { id: 2, text: "talk", isCorrect: false },
        { id: 3, text: "laugh", isCorrect: true }, 
      ],
    },
    {
      text: "Well, you drive me crazy half the time The other half I'm only tryna let you know that what I feel is true And I'm _______________",
      options: [
        { id: 0, text: "only scared without you", isCorrect: false },
        { id: 1, text: "truly happy with you", isCorrect: false },
        { id: 2, text: "only me when I'm with you", isCorrect: true },
        { id: 3, text: "hopeful it will all work out", isCorrect: false }, 
      ],
      
    }
  ];

  return (

    <div className="App">
      <h1>Swift Lyric Labyrinth</h1>

      <h2>Current Score: {score} </h2>
      {showFinalResults ? (
        <div className="final-results" >
          <h1>Final Results</h1>
          <h2>1 out of 5 correct - (20%)</h2>
          <button>Restart Game</button>
        </div>
      ) : (
        <div className="question-card">
          <h2> Question {currentQuestion + 1} out of {questions.length}</h2>
          <h3 className="question-text">State the obvious, I didn't get my perfect _____</h3>
          <ul>
            <li>love story</li>
            <li>fantasy</li>
            <li>dream</li>
            <li>wish come true</li>
          </ul>
        </div>
      )}

    </div>

  )
}

export default App
