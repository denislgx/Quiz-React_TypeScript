import React, { useState, useEffect } from "react";
import { fetchQuizQuestions } from "./API";
// Components
import QuestionCard from "./components/QuestionCard";
// Types
import { QuestionState, Difficulty } from "./API";

type AnswerObject = {
    question: string;
    answer: string;
    correct: boolean;
    correctAnswer: string;
};

const App: React.FC = () => {
    const [loading, setLoading] = useState(false);
    const [questions, setQuestions] = useState<QuestionState[]>([]);
    const [number, setNumber] = useState(0);
    const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
    const [score, setScore] = useState(0);
    const [gameOver, setGameOver] = useState(true);

    const TOTAL_QUESTIONS = 10;

    // useEffect(() => {
    //     startTrivia();
    // }, []);

    const startTrivia = async () => {
        setLoading(true);
        setGameOver(false);

        const newQuestions = await fetchQuizQuestions(
            TOTAL_QUESTIONS,
            Difficulty.EASY
        );

        setQuestions(newQuestions);
        setScore(0);
        setUserAnswers([]);
        setNumber(0);
        setLoading(false);
    };

    const checkAnswer = (event: React.MouseEvent<HTMLButtonElement>) => {};

    const nextQuestion = () => {};

    console.log("questions", questions);
    return (
        <div className="App">
            <h1>QUIZ GAME</h1>
            {gameOver || userAnswers.length === TOTAL_QUESTIONS ? (
                <button onClick={startTrivia}>Start</button>
            ) : null}

            {!gameOver && <p className="app__score">Score: </p>}
            {loading && <p>Loading questions ...</p>}

            {!loading && !gameOver && (
                <QuestionCard
                    questionNumber={number + 1}
                    totalQuestions={TOTAL_QUESTIONS}
                    question={questions[number].question}
                    answers={questions[number].answers}
                    userAnswer={userAnswers ? userAnswers[number] : undefined}
                    callback={checkAnswer}
                />
            )}
            <button className="app__next" onClick={nextQuestion}>
                Next Question
            </button>
        </div>
    );
};

export default App;
