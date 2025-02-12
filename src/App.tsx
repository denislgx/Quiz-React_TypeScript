import React, { useState, useEffect } from "react";
import { fetchQuizQuestions } from "./API";
// Components
import QuestionCard from "./components/QuestionCard";
// Styles
import { GlobalStyle, Wrapper } from "./App.styles";
// Types
import { QuestionState, Difficulty } from "./API";

export type AnswerObject = {
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

    const checkAnswer = (event: React.MouseEvent<HTMLButtonElement>) => {
        if (!gameOver) {
            const answer = event.currentTarget.value;

            const correct = questions[number].correct_answer === answer;

            if (correct) {
                setScore((prev) => prev + 1);
            }

            const answerObject = {
                question: questions[number].question,
                answer,
                correct,
                correctAnswer: questions[number].correct_answer,
            };

            setUserAnswers((prev) => [...prev, answerObject]);
        }
    };

    const nextQuestion = () => {
        const nextQuestion = number + 1;

        if (nextQuestion === TOTAL_QUESTIONS) {
            setGameOver(true);
        } else {
            setNumber(nextQuestion);
        }
    };

    return (
        <>
            <GlobalStyle />
            <Wrapper>
                <h1>QUIZ GAME</h1>
                {gameOver || userAnswers.length === TOTAL_QUESTIONS ? (
                    <button className="app__start" onClick={startTrivia}>
                        Start
                    </button>
                ) : null}

                {!gameOver && <p className="app__score">Score: {score} </p>}
                {loading && <p>Loading questions ...</p>}

                {!loading && !gameOver && (
                    <QuestionCard
                        questionNumber={number + 1}
                        totalQuestions={TOTAL_QUESTIONS}
                        question={questions[number].question}
                        answers={questions[number].answers}
                        userAnswer={
                            userAnswers ? userAnswers[number] : undefined
                        }
                        callback={checkAnswer}
                    />
                )}

                {!gameOver &&
                    !loading &&
                    userAnswers.length === number + 1 &&
                    number !== TOTAL_QUESTIONS - 1 && (
                        <button className="app__next" onClick={nextQuestion}>
                            Next Question
                        </button>
                    )}
            </Wrapper>
        </>
    );
};

export default App;
