import styles from './Menu.module.css'
import React, {useContext, useState} from 'react';
import { QuizContext } from '../../App.jsx';

function MenuPage() {

    const { setGameState} = useContext(QuizContext);

    return ( 
        <div id= {styles.Menu}>
            <h2 className= {styles.textMe}>Test your knowledge!!</h2>
            <button id= {styles.startQuizButton} onClick={() => setGameState("Topics")}> START QUIZ </button>
            <h2 className= {styles.heading}>How much do you know?</h2>
        </div>
     );
}

export default MenuPage;