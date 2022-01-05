import { useState } from "react";
import { fetchQuizzes } from "./API";
// components
import QuestionCard from "./components/QuestionCard";
// types
import { Difficulty } from "./API";


const TOTAL_QUESTIONS = 10;

const  App = () => {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [userAnswers, setUserAnswers] = useState([]);
  const [number, setNumber] = useState(0);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  console.log(fetchQuizzes(TOTAL_QUESTIONS, Difficulty.EASY))

  const startTrivia = async () => {

  };

  const checkAnswer = (e : React.MouseEvent<HTMLButtonElement>) => {

  };

  const nextQuestion = () => {

  };


  return (
    <div className="App">
      <h1>React Quiz</h1>
      <button className="start" onClick={startTrivia}>Start</button>
      <p className="score">Score:</p>
      <p>Loading Quesitons...</p>
      {/* <QuestionCard
        questionNum={number + 1}
        totalQuestions={TOTAL_QUESTIONS}
        question={questions[number].question}
        answers={questions[number].answers}
        userAnswer={userAnswers ? userAnswers[number] : undefined}
        callback={checkAnswer}
      /> */}
      <button className="next" onClick={nextQuestion}>Next Question</button>
    </div>
  );
}

export default App;
