import Head from "next/head";
import styles from "@/styles/Home.module.css";
import ButtonPrimary from "@/components/ButtonPrimary";
import ButtonSecondary from "@/components/ButtonSecondary";
import Navbar from "@/components/Navbar";
import Tabbar from "@/components/Tabbar";
import Image from "next/image";

export default function Onboarding() {
  const [currentScreen, setCurrentScreen] = useState(0);
  const screens = [
    
  ]
  }
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
        </div>        
      </main>
    </>
  );
}
