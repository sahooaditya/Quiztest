import React from "react";
import { useState } from "react";
import "./quiz.css";

const Quiz = () => {
  var Questionbank = [
    {
      Question: "What is the capital of india?",
      Answers: [
        { Answer: "Delhi", isCorrect: true },
        { Answer: "Pune", isCorrect: false },
        { Answer: "Ranchi", isCorrect: false },
        { Answer: "Patna", isCorrect: false },
      ],
    },
    {
      Question: "Who is the PM of india?",
      Answers: [
        { Answer: "Nabin", isCorrect: false },
        { Answer: "Modi", isCorrect: true },
        { Answer: "Rahul", isCorrect: false },
        { Answer: "Kejrl", isCorrect: false },
      ],
    },
    {
      Question: "2+3=?",
      Answers: [
        { Answer: "9", isCorrect: false },
        { Answer: "7", isCorrect: false },
        { Answer: "5", isCorrect: true },
        { Answer: "23", isCorrect: false },
      ],
    },
    {
      Question: "25/5=?",
      Answers: [
        { Answer: "5", isCorrect: true },
        { Answer: "2", isCorrect: false },
        { Answer: "10", isCorrect: false },
        { Answer: "20", isCorrect: false },
      ],
    },
    {
      Question: "First PM of india?",
      Answers: [
        { Answer: "Rajib gandi", isCorrect: false },
        { Answer: "Jawaharlal Nehru", isCorrect: true },
        { Answer: "Aditya Chopra", isCorrect: false },
        { Answer: "RAmesh", isCorrect: false },
      ],
    },
    {
      Question: "Indias Pm full name?",
      Answers: [
        { Answer: " Narendra damodar das Modi", isCorrect: true },
        { Answer: "Narendra modi", isCorrect: false },
        { Answer: "Damodar modi", isCorrect: false },
        { Answer: " Narendra damodar modi", isCorrect: false },
      ],
    },
    {
      Question: " what is the name of chief minister  of odisha?",
      Answers: [
        { Answer: "Naven Patnayak", isCorrect: true },
        { Answer: "Naven", isCorrect: false },
        { Answer: "Aditya", isCorrect: false },
        { Answer: "Harihara", isCorrect: false },
      ],
    },
    {
      Question: "First chief minister of odisha?",
      Answers: [
        { Answer: "Harekrushna mahatab", isCorrect: true },
        { Answer: "Harekrushana", isCorrect: false },
        { Answer: "Madhusudan das", isCorrect: false },
        { Answer: "NAbakrushna patanayak", isCorrect: false },
      ],
    },
  ];

  //useState Hooks

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerResponse = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < Questionbank.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
  };

  return (
    <div className="app">
      {showScore ? (
        <div className="score-section">
          you have score{score} out of {Questionbank.length}
          <>
            <button type="submit" onClick={resetQuiz}>
              {" "}
              Test Again
            </button>
          </>
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>
                {currentQuestion + 1}/{Questionbank.length}
              </span>
            </div>
            <div className="question-text">
              {Questionbank[currentQuestion].Question}
            </div>
          </div>
          <div className="answer-section">
            {Questionbank[currentQuestion].Answers.map((answer) => (
              <button onClick={() => handleAnswerResponse(answer.isCorrect)}>
                {answer.Answer}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Quiz;
