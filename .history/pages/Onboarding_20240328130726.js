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
      <h2>Screen 1</h2>
      <p>This is the content of screen 1.</p>
    </div>
  );

  const screen2 = () => (
    <div>
      <h2>Screen 2</h2>
      <p>This is the content of screen 2.</p>
    </div>
  );

  const screen3 = () => (
    <div>
      <h2>Screen 3</h2>
      <p>This is the content of screen 3.</p>
    </div>
  );

  const screen4 = () => (
    <div>
      <h2>Screen 4</h2>
      <p>This is the content of screen 4.</p>
    </div>
  );

  const handleGetStartedClick = () => {
    if (currentScreen < 3) {
      setCurrentScreen(currentScreen + 1);
    }
  };

  const getStartedClick = () => {
    if (currentScreen < 3) {
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
          <h1 className={styles.calmQuest}>CalmQuest</h1>
          <ButtonPrimary className={styles.getStartedButton} title="Get Started" />
          {screens[currentScreen]}
          {currentScreen < screens.length - 1 && (
            <ButtonPrimary className={styles.getStartedButton} title="Next" onClick={getStartedClick} />
          )}
          {currentScreen === screens.length - 1 && (
            <ButtonPrimary className={styles.getStartedButton} title="Finish" onClick={() => console.log("Finished")} />
          )}
        </div>        
      </main>
    </>
  );
}
