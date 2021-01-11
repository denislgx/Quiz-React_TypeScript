import React from "react";
// Styles
import { Wrapper, ButtonWrapper } from "./QuestionCard.styles";
// Types
import { AnswerObject } from "../App";

type QuestionCardProps = {
    question: string;
    answers: string[];
    callback: (event: React.MouseEvent<HTMLButtonElement>) => void;
    userAnswer: AnswerObject | undefined;
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
        <Wrapper>
            <p className="quizCard__number">
                Question: {questionNumber} / {totalQuestions}
            </p>
            <p dangerouslySetInnerHTML={{ __html: question }} />
            <div>
                {answers?.map((answer, index) => (
                    <ButtonWrapper
                        correct={userAnswer?.correctAnswer === answer}
                        userClicked={userAnswer?.answer === answer}
                        key={index}
                    >
                        <button
                            disabled={!!userAnswer}
                            value={answer}
                            onClick={callback}
                        >
                            <span
                                dangerouslySetInnerHTML={{ __html: answer }}
                            />
                        </button>
                    </ButtonWrapper>
                ))}
            </div>
        </Wrapper>
    );
};

export default QuestionCard;
