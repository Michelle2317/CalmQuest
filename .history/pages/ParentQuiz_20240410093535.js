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
            question={step === 1 ? "How are you today?" : step === 2 ? "How do you feel?" : step === 3 ? "Describe your feelings?" : "What’s taking up most of your headspace right now?"}
            onSelect={handleAnswerSelect}
            previousAnswer={previousAnswer}
            handleNextStep={handleNextStep} // Pass handleNextStep as a prop
          />
          {quizComplete ? (
            <button>Claim Reward</button>
          ) : (
            <button onClick={handleNextStep}>More </button>
          )}
        </div>
      </main>
    </>
  );
}