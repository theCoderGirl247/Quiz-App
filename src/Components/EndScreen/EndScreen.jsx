import styles from './EndScreen.module.css'
import React, {useContext} from 'react';
import { QuizContext } from '../../App.jsx';

function EndScreenPage() {
    const { score, setScore, setGameState } = useContext(QuizContext);

    function RestartQuiz(){
        setGameState("Menu");
        setScore(0);

    }
    return ( 
        <div>
            <div id = {styles.endScreen} >
                <h1 id = {styles.resHead}>RESULTS</h1>
                <div id = {styles.resultBox} >
                    <h2 id = {styles.scrHead} >Your total score is: {score}/10 </h2>
                    <h2> { score > 6 ? "Good job!" : "Better luck next time!"} </h2>
                    <button className= {styles.restartButton} onClick={() => RestartQuiz()} > RESTART </button>
                </div>

            </div>
        </div>
     );
}

export default EndScreenPage;