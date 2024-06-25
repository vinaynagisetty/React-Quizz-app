import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Question from "./Components/Question";
import qBank from "./Components/QuestionBank";
import Score from "./Components/Score";
import "./App.css";

const App = () => {
    const [questionBank, setQuestionBank] = useState(qBank);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedOption, setSelectedOption] = useState("");
    const [score, setScore] = useState(0);
    const [quizEnd, setQuizEnd] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const handleOptionChange = (e) => {
        setSelectedOption(e.target.value);
        setErrorMessage(""); // Clear error message when an option is selected
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (!selectedOption) {
            setErrorMessage("Please select an option before proceeding.");
            return;
        }
        checkAnswer();
        handleNextQuestion();
    };

    const checkAnswer = () => {
        if (selectedOption === questionBank[currentQuestion].answer) {
            setScore(score + 1);
        }
    };

    const handleNextQuestion = () => {
        if (currentQuestion + 1 < questionBank.length) {
            setCurrentQuestion(currentQuestion + 1);
            setSelectedOption("");
        } else {
            setQuizEnd(true);
        }
    };

    const handleReset = () => {
        setCurrentQuestion(0);
        setSelectedOption("");
        setScore(0);
        setQuizEnd(false);
        setErrorMessage("");
    };

    return (
        <div className="App d-flex flex-column align-items-center justify-content-center">
            <h1 className="app-title">QUIZ APP</h1>
            {!quizEnd ? (
                <Question
                    question={questionBank[currentQuestion]}
                    selectedOption={selectedOption}
                    onOptionChange={handleOptionChange}
                    onSubmit={handleFormSubmit}
                    errorMessage={errorMessage}
                />
            ) : (
                <Score score={score} onReset={handleReset} />
            )}
        </div>
    );
};

export default App;
