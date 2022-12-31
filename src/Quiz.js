import React, { useState } from 'react'
import './Quiz.css'
import { Link } from 'react-router-dom';

export default function Quiz() {
    const [completed, setCompleted] = useState(false);
    const [score, setScore] = useState(0);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [userAnswers, setUserAnswers] = useState([]);

    const questionsArray = [
        {
            question: "What is 2x2?",
            options: [
                { text: "4", isCorrect: true },
                { text: "5", isCorrect: false },
                { text: "6", isCorrect: false },
                { text: "7", isCorrect: false },
            ]
        },
        {
            question: "What is 3x2?",
            options: [
                { text: "6", isCorrect: true },
                { text: "7", isCorrect: false },
                { text: "8", isCorrect: false },
                { text: "9", isCorrect: false },
            ]
        },
        {
            question: "What is 4x2?",
            options: [
                { text: "8", isCorrect: true },
                { text: "9", isCorrect: false },
                { text: "10", isCorrect: false },
                { text: "11", isCorrect: false },
            ]
        },
        {
            question: "What is 5x2?",
            options: [
                { text: "10", isCorrect: true },
                { text: "11", isCorrect: false },
                { text: "12", isCorrect: false },
                { text: "13", isCorrect: false },
            ]
        },
        {
            question: "What is 6x2?",
            options: [
                { text: "12", isCorrect: true },
                { text: "13", isCorrect: false },
                { text: "14", isCorrect: false },
                { text: "15", isCorrect: false },
            ]
        },
    ]

    function isCompleted() {
        if (currentQuestion === 4) {
            setCompleted(true);
        }
    }

    function optionChecker({ text, isCorrect }) {
        if (isCorrect) {
            setScore(score + 1);
            setCurrentQuestion(currentQuestion + 1);
        }

        else {
            setScore(score - 0.5)
            setCurrentQuestion(currentQuestion + 1);
        }

        isCompleted()
        setUserAnswers([...userAnswers, text])
    }

    function skipQuestion() {
        setCurrentQuestion(currentQuestion + 1);
        isCompleted()
        setUserAnswers([...userAnswers, 'Skipped'])
    }

    function restart() {
        setCurrentQuestion(0);
        setScore(0);
        setCompleted(false);
        setUserAnswers([])
    }

    return (
        <div>
            <table className='quiz-table'>
                <tr>
                    <td>
                        <Link to='/quiz'>
                            <button type='button'> <u>Quiz App</u></button>
                        </Link>
                    </td>
                    <td>
                        <Link to='/'>
                            <button type='button'>Home</button>
                        </Link>
                    </td>
                </tr>
            </table>
            {completed ? (
                <div className="results">
                    <h1>Results</h1>
                    <h2>Score: {score}/5</h2>
                    <button onClick={() => restart()}>Restart</button>
                    <h2> <u> Review </u> </h2>
                    {questionsArray.map((question, index) => {
                        return (<>
                            <h3>Question-{index + 1}: {question.question}</h3>
                            <h3>Your Answer: {userAnswers[index]}</h3>
                            {
                                question.options
                                    .filter(option => option.isCorrect === true)
                                    .map(
                                        correctAnswer => <h3>Correct Answer: {correctAnswer.text}</h3>
                                    )
                            }
                            <br />
                        </>
                        )
                    })}
                </div>
            ) : (
                <div className='question-div'>

                    <h2> <u>Questions</u> </h2>
                    <h2>Score: {score}</h2>
                    <h3 className='question'>{questionsArray[currentQuestion].question}</h3>

                    <ul>
                        {questionsArray[currentQuestion].options.map((option) => {
                            return <li className='options' onClick={() => optionChecker(option)} key={option.text}>{option.text}</li>
                        })}
                    </ul>

                    <button onClick={() => skipQuestion()}>Skip</button>
                </div>)}
        </div>
    )
}
