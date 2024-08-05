import { createContext, useState } from "react"
import MenuPage from "./Components/Menu/Menu.jsx";
import ChooseTopicPage from "./Components/Topics/ChooseTopic.jsx";
import MainQuizPage from "./Components/Quiz/MainQuiz.jsx";
import EndScreenPage from "./Components/EndScreen/EndScreen.jsx";
import TestScreen from "./Components/tester/testScreen.jsx";

export const QuizContext = createContext();

function App() {
  // Setting the default page as MENU PAGE 
  const [gameState, setGameState] = useState("Menu");
  const [topic, setTopic] = useState();
  const [score, setScore] = useState(0);

  return( 
          <div>
            < QuizContext.Provider value={{gameState, setGameState, topic, setTopic,score, setScore}} >
            {/* Render pages according to their state  */}
            { gameState === "Menu" && <MenuPage /> }
            { gameState === "Topics" && <ChooseTopicPage /> }
            { gameState === "Quiz" && <MainQuizPage /> }
            { gameState === "EndScreen" && <EndScreenPage /> }
            { gameState === "TestScreen" && <TestScreen /> }
            </QuizContext.Provider>
          </div>
  );
}

export default App
