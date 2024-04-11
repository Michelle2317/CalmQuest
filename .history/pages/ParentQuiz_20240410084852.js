import Head from "next/head";
import styles from "@/styles/Home.module.css";
import ButtonPrimary from "@/components/ButtonPrimary";
import ButtonSecondary from "@/components/ButtonSecondary";
import Navbar from "@/components/Navbar";
import Tabbar from "@/components/Tabbar";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import ChildQuestions from "./ChildQuestions";

export default function ParentQuiz() {
  const [step, setStep] = useState(1);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const handleAnswerSelect = (answer) => {
    setSelectedAnswer(answer);
  };

  const handleNextStep = () => {
    setStep(step + 1);
    setSelectedAnswer(null);
  };

  // Define questions
  const questions = [
    "How are you today?",
    "How do you feel?",
    "Describe your feelings",
    "What's taking up most of your headspace right now?"
  ];
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
                <div>
                  <ChildQuestions question={questions[step - 1]} onSelect={handleAnswerSelect} />
                    {selectedAnswer && (
                      <Link href={`/question${step + 1}`}>
                        <Link onClick={handleNextStep}>Next</Link>>
                      </Link>
                    )}
                </div>
        </div>
      </main>
    </>
  );
}