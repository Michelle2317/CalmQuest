import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { useState } from "react";
import ChildQuestions from "./ChildQuestions";
import Navbar from "@/components/Navbar";
export default function ParentQuiz() {
  const [step, setStep] = useState(1);
  const [previousAnswer, setPreviousAnswer] = useState(null);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [quizComplete, setQuizComplete] = useState(false);
  const [score, setScore] = useState(0);
  const [outcome, setOutcome] = useState("");
  const [seedsClaimed, setSeedsClaimed] = useState(false);

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
      calculateOutcome();
    }
  };

  const calculateOutcome = () => {
    const headspace = selectedAnswers[selectedAnswers.length - 1].answer;
    const totalScore = score;
    if (totalScore >= 0 && totalScore <= 3) {
      setOutcome(`You're doing great about your ${headspace}! Keep it up!`);
    } else if (totalScore > 3 && totalScore <= 6) {
      setOutcome(`You're doing fantastic about your ${headspace}! Keep up the good work!`);
    } else if (totalScore > -7 && totalScore <= -5.5) {
      setOutcome(`It sounds like you're having a tough time with your ${headspace}. Consider seeking professional help.`);
    } else if (totalScore > -5 && totalScore <= -3) {
      setOutcome(`It sounds like you're struggling with your ${headspace}. Try some mental exercises to improve your mood.`);
    } else if (totalScore > -2.5 && totalScore <= -0.5) {
      setOutcome(`It seems like you're having a bit of difficulty with your ${headspace}. Mental exercises might help.`);
    }
  };

  const handleClaimSeeds = () => {
    setSeedsClaimed(true);
  };

  const handlePreviousStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleSubmitQuiz = () => {
    setQuizComplete(true);
    calculateOutcome();
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
          <Navbar />
          {!quizComplete && (
            <ChildQuestions
              question={
                step === 1
                  ? "How are you today?"
                  : step === 2
                  ? "How do you feel?"
                  : step === 3
                  ? "Describe your feelings?"
                  : "What's taking up most of your headspace right now?"
              }
              onSelect={handleAnswerSelect}
              previousAnswer={previousAnswer}
              handleNextStep={handleNextStep}
            />
          )}
          {quizComplete && (
            <div className={styles.outcomeContainer}>
              <h2>Outcome</h2>
              <p>{outcome}</p>
              {!seedsClaimed && (
                <button className={styles.claimButton} onClick={handleClaimSeeds}>
                  Claim 3 Seeds
                </button>
              )}
            </div>
          )}
          <div className={styles.buttonContainer}>
            {step > 1 && !quizComplete && (
              <button className={`${styles.secondaryButtonQuiz}`} onClick={handlePreviousStep}>
                Back
              </button>
            )}
            {!quizComplete ? (
              <button className={`${styles.primaryButtonQuiz}`} onClick={step === 4 ? handleSubmitQuiz : handleNextStep}>
                {step === 4 ? "Submit" : "Next"}
              </button>
            ) : (
              <></>
            )}
          </div>
        </div>
      </main>
      <Tabbar />
    </>
  );
}
