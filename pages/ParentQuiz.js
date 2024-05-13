import Head from 'next/head';
import styles from '@/styles/Home.module.css';
import ChildQuestions from './ChildQuestions';
import Navbar from '@/components/Navbar';
import Tabbar from '@/components/Tabbar';
import Image from 'next/image';
import { useState } from 'react';
import DottedProgressBarQuiz from '@/components/DottedProgressBarQuiz';
import ButtonPrimary from '@/components/ButtonPrimary';
import ButtonSecondary from '@/components/ButtonSecondary';

export default function ParentQuiz() {
  const [step, setStep] = useState(1);
  const [previousAnswer, setPreviousAnswer] = useState(null);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [quizComplete, setQuizComplete] = useState(false);
  const [score, setScore] = useState(0);
  const [outcome, setOutcome] = useState('');
  const [seedsClaimed, setSeedsClaimed] = useState(false);
  const [answerSelected, setAnswerSelected] = useState(false);

  const handleAnswerSelect = (answer) => {
    let points = 0;

    switch (step) {
      case 1:
        switch (answer) {
          case 'Awful':
            points = -2;
            break;
          case 'Bad':
            points = -1;
            break;
          case 'Decent':
            points = 0;
            break;
          case 'Good':
            points = 1;
            break;
          case 'Amazing':
            points = 2;
            break;
          default:
            break;
        }
        break;
      case 2:
        switch (answer) {
          case 'Joy':
            points = 1;
            break;
          case 'Sadness':
          case 'Fear':
            points = -1;
            break;
          case 'Anger':
            points = -2;
            break;
          default:
            break;
        }
        break;
      default:
        break;
    }
    setSelectedAnswers([...selectedAnswers, { answer, points }]);
    setScore(score + points);
    setAnswerSelected(true);

    if (step === 4) {
      calculateOutcome();
    }
    setPreviousAnswer(answer);
  };

  const handleNextStep = () => {
    if (step < 4) {
      setStep(step + 1);
      setAnswerSelected(false);
    } else {
      setQuizComplete(true);
      calculateOutcome();
    }
  };

  const calculateOutcome = () => {
    const headspace = selectedAnswers[selectedAnswers.length - 1].answer.toString();
    const totalScore = score;
    let message = '';

    if (totalScore >= 0 && totalScore <= 3) {
      message = `You're doing a great job about your ${headspace.toLowerCase()}! Keep it up and you'll do wonders!`;
    } else if (totalScore > 3 && totalScore <= 6) {
      message = `You're doing great about your ${headspace.toLowerCase()}!`;
    } else if (totalScore >= -7 && totalScore <= -5.5) {
      message = `It sounds like you're having a tough time with your ${headspace.toLowerCase()}. Try some meditation exercises to clear your mind.`;
    } else if (totalScore > -5 && totalScore <= -3) {
      message = `It sounds like you're struggling with your ${headspace.toLowerCase()}. Try some mental exercises to improve your mood.`;
    } else if (totalScore > -2.5 && totalScore < 0) {
      message = `It seems like you're having a bit of difficulty with your ${headspace.toLowerCase()}. Mental exercises might help.`;
    }
    setOutcome(message);
  };

  const handleClaimSeeds = () => {
    setSeedsClaimed(true);
  };

  const toShop = () => {
    window.location.href = '/Shop';
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
                  ? 'How are you today?'
                  : step === 2
                  ? 'How do you feel?'
                  : step === 3
                  ? 'Describe your feelings?'
                  : "What's taking up most of your headspace right now?"
              }
              onSelect={handleAnswerSelect}
              onAnswerSelect={() => setAnswerSelected(true)}
              previousAnswer={previousAnswer}
              handleNextStep={handleNextStep}
              outcome={outcome}
              hasNextStep={selectedAnswers.length > 0 || step > 1}
            />
          )}
          {!quizComplete && <DottedProgressBarQuiz currentStep={step} />}
          {quizComplete && (
            <div className={styles.outcomeContainer}>
              <Image
                src="/images/check.svg"
                alt="Check"
                width={100}
                height={100}
                className={styles.checkIcon}
              />
              <h2 className={styles.checkDone}>Check-In Done!</h2>
              <p className={`${styles.outcomeMessage}`}>{outcome}</p>
              {!seedsClaimed ? (
                <div className={styles.seedContainer}>
                  <Image
                    src="/images/seed.svg"
                    alt="Seed"
                    width={36}
                    height={36}
                  />
                  <div className={styles.seedAmount}>3x</div>
		  <button className={styles.seedButton} onClick={handleClaimSeeds}>Claim</button>
                </div>
              ) : (
                <div className={styles.seedContainer}>
                  <Image
                    src="/images/seed.svg"
                    alt="Seed"
                    width={36}
                    height={36}
                  />
                  <div className={styles.seedAmount}>3x</div>
		  <button className={styles.claimedSeeds}>Claimed</button>
                </div>
              )}
              <ButtonPrimary
                className={styles.toShopButton}
                onClick={toShop}
                title="Go to Shop"
              />
            </div>
          )}
          <div className={styles.buttonContainer}>
            {step > 1 && !quizComplete && (
              <ButtonSecondary
                className={`${styles.secondaryButtonQuiz}`}
                onClick={handlePreviousStep}
                tabIndex="0"
                title="Back"
              />
            )}
            {!quizComplete && answerSelected && (
              <ButtonPrimary
                className={`${styles.primaryButtonQuiz}`}
                onClick={step === 4 ? handleSubmitQuiz : handleNextStep}
                tabIndex="0"
                title={step === 4 ? 'Submit' : 'Next'}
              />
            )}
          </div>
          <Tabbar />
        </div>
      </main>
    </>
  );
}
