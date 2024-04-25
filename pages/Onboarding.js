import Head from "next/head";
import styles from "@/styles/Home.module.css";
import ButtonPrimary from "@/components/ButtonPrimary";
import ButtonSecondary from "@/components/ButtonSecondary";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

export default function Onboarding() {
  const [currentScreen, setCurrentScreen] = useState(0);

  const screen1 = () => (
    <div>
      <Image 
        src={`/images/onboarding/personalize.svg`} 
        alt="personalize icon" 
        width={150} 
        height={150} 
        className={styles.onboardingIcon}
      />
      <h2 className={styles.features}>Personalize your experience</h2>
      <p className={styles.featuresText}>Select and unlock special icons, and frames</p>
    </div>
  );

  const screen2 = () => (
    <div>
      <Image 
        src={`/images/onboarding/brain.svg`} 
        alt="brain icon" 
        width={150} 
        height={150} 
        className={styles.onboardingIcon}
      />
      <h2 className={styles.features}>Mindfulness and Meditation Exercises</h2>
      <p className={styles.featuresText}>Explore quick and calming mindfulness and meditation exercises</p>
    </div>
  );

  const screen3 = () => (
    <div>
      <Image 
        src={`/images/onboarding/calendar.svg`} 
        alt="calendar icon" 
        width={150} 
        height={150} 
        className={styles.onboardingIcon}
      />
      <h2 className={styles.features}>Check-In and Rewards</h2>
      <p className={styles.features}>Check in on your mental health and unlock rewards</p>
    </div>
  );

  const screen4 = () => (
    <div>
      <div className={styles.createProfile}>Create Profile</div>
      <div className={styles.selectIcon}>Select an Icon</div>
      <div>
        <div className={styles.iconBox}></div>
        <Image 
            src={`/images/onboarding/option1.svg`} 
            alt="logo" 
            width={150} 
            height={150} 
            className={styles.onboardingIcon}
          />
        <Image 
            src={`/images/onboarding/option2.svg`} 
            alt="logo" 
            width={150} 
            height={150} 
            className={styles.onboardingIcon}
          />
        <Image 
            src={`/images/onboarding/option3.svg`} 
            alt="logo" 
            width={150} 
            height={150} 
            className={styles.onboardingIcon}
          />
        <div className={styles.nameBox}>Enter your name</div>
      </div>
    </div>
  );

  const screen5 = () => (
    <div>
      <div className={styles.createProfile}>Create Profile</div>
      <div className={styles.selectIcon}>Select an Icon</div>
      <div>
        <div className={styles.iconBox}></div>
        <Image 
            src={`/images/onboarding/option1.svg`} 
            alt="logo" 
            width={150} 
            height={150} 
            className={styles.onboardingIcon}
          />
        <Image 
            src={`/images/onboarding/option2.svg`} 
            alt="logo" 
            width={150} 
            height={150} 
            className={styles.onboardingIcon}
          />
        <Image 
            src={`/images/onboarding/option3.svg`} 
            alt="logo" 
            width={150} 
            height={150} 
            className={styles.onboardingIcon}
          />
        <div className={styles.nameBox}>Enter your name</div>
      </div>
    </div>
  );


  const getStartedClick = () => {
    setCurrentScreen(1);
  };

  const nextClick = () => {
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
      <div className={`${styles.mainContainer} ${styles.onboardingContainer}`}>
          {currentScreen === 0 && (
            <Image
              src={`/images/onboarding/verticalLogo.svg`}
              alt="vertical logo"
              width={258}
              height={220}
              className={styles.verticalLogo}
            />
          )}
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
            <Link href="/">
              <button className={styles.getStartedButton}>Let's Go!</button>
            </Link>
          )}
        </div>        
      </main>
    </>
  )
}
