import React from "react";
import QuestionCard from "./components/QuestionCard";

const App: React.FC = () => {
    const startTrivia = async () => {};

    const checkAnswer = (event: React.MouseEvent<HTMLButtonElement>) => {};

    const nextQuestion = () => {};

    return (
        <div className="App">
            <h1>QUIZ GAME</h1>
            <button onClick={startTrivia}>Start</button>
            <p className="app__score">Score: </p>
            <p>Loading questions ...</p>
            {/* <QuestionCard /> */}
            <button className="app__next" onClick={nextQuestion}>
                Next Question
            </button>
        </div>
    );
};

export default App;
