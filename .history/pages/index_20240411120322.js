import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Navbar from "@/components/Navbar";
import Tabbar from "@/components/Tabbar";
import Image from "next/image";
import Link from "next/link"
import ButtonPrimary from "@/components/ButtonPrimary";

export default function Home() {
  return (
    <>
      <Head>
        <title>CalmQuest</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/favicon.svg" />
      </Head>
      <main className={`${styles.main}`}>
        <div className={styles.mainContainer}>
          <Navbar />
          <div className={styles.mainContent}>
            <Image
              src={`/images/mascots/mascotNormal.svg`}
              alt="mascot image"
              width="431"
              height="280"
              className={styles.placeholder}
            />
          </div>
          <div className={styles.helloContainer}>
            <div className={styles.helloContainerLeft}>
              <h1 className={styles.mainHello}>Hello Lorem</h1>
              <p className={styles.mainQuote}>"A really inspiring quote" -random</p>
            </div>
            
            <Link href="/ParentQuiz" className={styles.quizLink}>
              <ButtonPrimary title="Check-In">
                <Image
                  src={`/images/checkinPrimary.svg`}
                  alt="check in image"
                  width="25"
                  height="25"
                  className={styles.checkIn}
                />
                <h2 className={styles.checkIn}>Check-in</h2>
              </ButtonPrimary>
            </Link>
            
          </div>
          <div className={styles.journalingContainer}>
            <p className={styles.prompt}>Journaling Prompt</p>
            <p className={styles.quote}>Lorem ipsum dolor sit amet<br/> consectetur. Et ultrices sed tellus erat.</p>
            <ButtonPrimary className={styles.write} title="Write&nbsp;&nbsp;&nbsp;&gt;"/>
          </div>
          <h4 className={styles.explore}>Let's Explore</h4>
          <div className={styles.exerciseCarousel}>
            <Image
              src={`/images/placeholder.svg`}
              alt="placeholder image"
              width="191"
              height="152"
              className={styles.placeholder}
            />
            <Image
              src={`/images/placeholder.svg`}
              alt="placeholder image"
              width="191"
              height="152"
              className={styles.placeholder}
            />
          </div>
          <Tabbar />
        </div>
        
      </main>
    </>
  );
}
