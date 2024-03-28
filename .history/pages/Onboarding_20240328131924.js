import Head from "next/head";
import styles from "@/styles/Home.module.css";
import ButtonPrimary from "@/components/ButtonPrimary";
import ButtonSecondary from "@/components/ButtonSecondary";
import Navbar from "@/components/Navbar";
import Tabbar from "@/components/Tabbar";
import Image from "next/image";
import { useState } from "react";

export default function Onboarding() {
  const [currentScreen, setCurrentScreen] = useState(0);

  const screen1 = () => (
    <div>
      <h2>Personalize your experience</h2>
      <p>TSelect and unlock special icons, and frames</p>
    </div>
  );

  const screen2 = () => (
    <div>
      <h2>Journaling, brainstorming, and prompts</h2>
      <p>Express your thoughts and feelings, or choose a prompt from our collection to write about </p>
    </div>
  );

  const screen3 = () => (
    <div>
      <h2>Mental Health and Rewards</h2>
      <p>Check in on your mental health and unlock rewards </p>
    </div>
  );

  const screen4 = () => (
    <div>
      <h2>Are you ready to start your journey?</h2>
    </div>
  );

  const getStartedClick = () => {
    setCurrentScreen(1);
  };

  const nextClick = () => {
    console.log("Next button clicked"); // Debugging
    if (currentScreen < 4) {
      setCurrentScreen(currentScreen + 1);
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
          <Image
            src={`/images/placeholder.svg`}
            alt="placeholder"
            width={190}
            height={190}
            className={styles.placeholder}
          />
          {currentScreen === 0 && (
            <button className={styles.getStartedButton} onClick={getStartedClick}>Get Started</button>
          )}
          {currentScreen === 1 && screen1()}
          {currentScreen === 2 && screen2()}
          {currentScreen === 3 && screen3()}
          {currentScreen === 4 && screen4()}
          {currentScreen > 0 && currentScreen < 4 && (
            <button className={styles.getStartedButton} onClick={nextClick}>Next</button>
          )}
          {currentScreen === 4 && (
            <button className={styles.getStartedButton} onClick={() => console.log("Finished")}>Finish</button>
          )}
        </div>        
      </main>
    </>
  );
}