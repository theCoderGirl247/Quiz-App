import styles from './Topics.module.css'
import React, {useContext} from 'react';
import { QuizContext } from '../../App.jsx';


function ChooseTopicPage() {
    const {setGameState, setTopic} = useContext(QuizContext);

    function ChooseTopic(ourTopic){
        setTopic(ourTopic);
        setGameState("Quiz");
    }

    return (  
            <div id= {styles.Topics} >
                    <h2 className= {styles.heading} >TOPICS</h2>
                    <button className= {styles.topicButton} onClick={() => ChooseTopic("Geography")}> Geography </button>
                    <button className= {styles.topicButton} onClick={() => ChooseTopic("Entertainment")}> Entertainment </button>
                    <button className= {styles.topicButton} onClick={() => ChooseTopic("Mathematics")}> Mathematics </button>
                    <button className= {styles.topicButton} onClick={() => ChooseTopic("Programming")}> Programming </button>
                    <button className= {styles.topicButton} onClick={() => ChooseTopic("Biology")}> Biology </button>
                    <button className= {styles.topicButton} onClick={() => ChooseTopic("Sports")}> Sports </button>
                    <button className= {styles.topicButton} onClick={() => ChooseTopic("General")}> General </button>
            </div>
    );
}

export default ChooseTopicPage;