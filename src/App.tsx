import React, { useState, useEffect } from "react";
import { fetchQuizQuestions } from "./API";
// Components
import QuestionCard from "./components/QuestionCard";
// Types
import { Difficulty } from "./API";

const App: React.FC = () => {
    const [loading, setLoading] = useState(false);
    const [questions, setQuestions] = useState([]);
    const [number, setNumber] = useState(0);
    const [userAnswers, setUserAnswers] = useState([]);
    const [score, setScore] = useState(0);
    const [gameOver, setGameOver] = useState(false);

    const TOTAL_QUESTIONS = 10;

    useEffect(() => {
        console.log(fetchQuizQuestions(TOTAL_QUESTIONS, Difficulty.EASY));
    });

    const startTrivia = async () => {};

    const checkAnswer = (event: React.MouseEvent<HTMLButtonElement>) => {};

    const nextQuestion = () => {};

    return (
        <div className="App">
            <h1>QUIZ GAME</h1>
            <button onClick={startTrivia}>Start</button>
            <p className="app__score">Score: </p>
            <p>Loading questions ...</p>
            {/* <QuestionCard
                questionNumber={number + 1}
                totalQuestions={TOTAL_QUESTIONS}
                question={questions[number].question}
                answers={questions[number].answers}
                userAnswer={userAnswers ? userAnswers[number] : undefined}
                callback={checkAnswer}
            /> */}
            <button className="app__next" onClick={nextQuestion}>
                Next Question
            </button>
        </div>
    );
};

export default App;
