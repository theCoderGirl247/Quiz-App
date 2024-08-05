import styles from './Maths.module.css';
import { mathQuiz } from './MathsQB.jsx';
import { useState, useContext, useEffect, useRef } from "react";
import { QuizContext } from "../../../App.jsx";
import { mathQuizHints } from './MathsQB.jsx';

function MathsQuiz() {
    const { setGameState, score, setScore } = useContext(QuizContext);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [count, setCount] = useState(0);
    const [askedQuestions, setAskedQuestions] = useState([]);
    const [isHintUsed, setIsHintUsed] = useState(false);
    const [timeLeft, setTimeLeft] = useState(30);

    useEffect(() => {
        // Reset hint usage and timer when moving to the next question
        setIsHintUsed(false);
        setTimeLeft(30);
    }, [currentQuestion]);

    // Timer effect
    useEffect(() => {
        if (timeLeft === 0) {
            skipQuestion();
            return;
        }

        const timerId = setInterval(() => {
            setTimeLeft(prevTime => prevTime - 1);
        }, 1000);

        return () => clearInterval(timerId);
    }, [timeLeft]);

    const hintRef = useRef(null);

    function checkAnswer(ourOption) {
        if (ourOption === mathQuiz[currentQuestion].Answer) {
            setScore(s => s + 1);
        }

        if (count === 9) {
            setGameState("EndScreen");
        } else {
            moveToNextQuestion();
        }
    }

    function moveToNextQuestion() {
        let randomIndex;
        do {
            randomIndex = Math.floor(Math.random() * mathQuiz.length);
        } while (askedQuestions.includes(randomIndex));

        setCurrentQuestion(randomIndex);
        setCount(c => c + 1);
        setAskedQuestions(aq => [...aq, randomIndex]);
        hintRef.current.textContent = `Using Hint will cause a deduction of 0.5 points`;
    }

    function showHint() {
        if (hintRef.current) {
            hintRef.current.textContent = `${mathQuizHints[currentQuestion].hint}`;
            setScore(s => s - 0.5);
            setIsHintUsed(true);
        }
    }

    function skipQuestion() {
        if (count === 9) {
            setGameState("EndScreen");
        } else {
            moveToNextQuestion();
        }
    }

    return (
        <div id={styles.MainQuiz}>
            <div className={styles.waveText}>
                {Array.from('Maths Quiz').map((char, index) => (
                    <span key={index} style={{ '--i': index }}>{char}</span>
                ))}
            </div>
            <div id={styles.quizBox}>
                <h3>Q {count + 1}. {mathQuiz[currentQuestion].prompt}</h3>
                <button className={styles.optionButton} onClick={() => checkAnswer("optionA")}>A. {mathQuiz[currentQuestion].optionA}</button>
                <button className={styles.optionButton} onClick={() => checkAnswer("optionB")}>B. {mathQuiz[currentQuestion].optionB}</button>
                <button className={styles.optionButton} onClick={() => checkAnswer("optionC")}>C. {mathQuiz[currentQuestion].optionC}</button>
                <button className={styles.optionButton} onClick={() => checkAnswer("optionD")}>D. {mathQuiz[currentQuestion].optionD}</button>
                <h3>Total score: {score}/10</h3>
                <div>
                    <button className={styles.hintButton} onClick={showHint} disabled={isHintUsed}>Hint</button>
                    <button className={styles.skipButton} onClick={skipQuestion}>Skip</button>
                    <p ref={hintRef} className={styles.hintElement}>Using Hint will cause a penalty of 0.5 points</p>
                </div>
                <h3>Time left: {timeLeft} seconds</h3>
            </div>
        </div>
    );
}

export default MathsQuiz;
