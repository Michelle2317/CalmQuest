// ParentQuiz.js
import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { useState } from "react";
import Link from "next/link";
import ChildQuestions from "./ChildQuestions";

export default function ParentQuiz() {
  const [step, setStep] = useState(1);
  const [previousAnswer, setPreviousAnswer] = useState(null);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [quizComplete, setQuizComplete] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerSelect = (answer, points) => {
    setSelectedAnswers([...selectedAnswers, { answer, points }]);
    setScore(score + points);
    setPreviousAnswer(answer);
  };

  const handleNextStep = () => {
    if (step < 4) {
      setStep(step + 1);
    } else {
      setQuizComplete(true);
    }
  };

  const renderOutcomeMessage = () => {
    // Determine outcome based on score and previous answers
    // Implement your logic here
    // Return the outcome message
  };

  return (
    <>
      <Head>
        <title>CalmQuest</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main}`}>
        <div className={styles.mainContainer}>
          <ChildQuestions
            question={`Question ${step}`}
            onSelect={handleAnswerSelect}
            previousAnswer={previousAnswer}
            handleNextStep={handleNextStep}
          />
          {quizComplete ? (
            <div>
              <p>{renderOutcomeMessage()}</p>
              <button>Claim Reward</button>
            </div>
          ) : (
            <button onClick={handleNextStep}>Next</button>
          )}
        </div>
      </main>
    </>
  );
}
