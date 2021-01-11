import React from "react";

type QuestionCardProps = {
    question: string;
    answers: string[];
    callback: any;
    userAnswer: any;
    questionNumber: number;
    totalQuestions: number;
};

const QuestionCard: React.FC<QuestionCardProps> = ({
    question,
    answers,
    callback,
    userAnswer,
    questionNumber,
    totalQuestions,
}) => {
    return (
        <div className="quizCard">
            <p className="quizCard__number">
                Question: {questionNumber} / {totalQuestions}
            </p>
            <p dangerouslySetInnerHTML={{ __html: question }} />
            <div>
                {answers?.map((answer, index) => (
                    <div key={index}>
                        <button disabled={userAnswer} onClick={callback}>
                            <span
                                dangerouslySetInnerHTML={{ __html: answer }}
                            />
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default QuestionCard;
