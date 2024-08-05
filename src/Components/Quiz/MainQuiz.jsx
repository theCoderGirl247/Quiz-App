import styles from './Quiz.module.css';
import { QuizContext } from '../../App.jsx';
import { useContext } from 'react';
import GeoQuiz from '../Quiz/MGeography/GeoSection.jsx';
import EntertainmentQuiz from '../Quiz/MEntertainment/EntertainSection.jsx';
import MathsQuiz from '../Quiz/Mathematics/MathsSection.jsx';
import  ProgrammingQuiz from '../Quiz/MProgramming/ProgrammingSection.jsx';
import BioQuiz from '../Quiz/MBiology/BioSection.jsx';
import SportsQuiz from '../Quiz/MSports/SportsSection.jsx';
import GKQuiz from '../Quiz/MGeneral/GeneralSection.jsx';

function MainQuizPage() {

    const {topic} = useContext(QuizContext);

    return ( 
            // Basically render the following pages if the topic is selected 
            
            <div className= {styles.quiz} >
                {topic === "Geography" && <GeoQuiz />}
                {topic === "Entertainment" && <EntertainmentQuiz />}
                {topic === "Mathematics" && <MathsQuiz />}
                {topic === "Programming" && <ProgrammingQuiz /> }
                {topic === "Biology" && <BioQuiz />}
                {topic === "Sports" && <SportsQuiz />}
                {topic === "General" && <GKQuiz />}

            </div>
     );
}

export default MainQuizPage;