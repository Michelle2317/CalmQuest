import Link from "next/link"
import styles from "@/styles/Home.module.css";
import Tabbar from "@/components/Tabbar";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import ButtonRegular from "@/components/ButtonRegular";
import { useState, useEffect} from "react";

export default function FiveSenses2() {
    const [exerciseComplete, setExerciseComplete] = useState(false);

    useEffect(() => {
      if (exerciseComplete) {
        const audio = new Audio("/sounds/quizComplete.mp3");
        audio.play();
      }
    }, [exerciseComplete]);

    return(
        <>
            <Head>
                <title>CalmQuest</title>
                <meta name="description" content="Five Senses Exercises" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={`${styles.main}`}>
            <div className={styles.mainContainer}>
                <Navbar/>
                
                <div className={styles.goBackExerciseContainer}>
                    <Link href="FiveSenses" className={styles.goBackLink}>
                        <img src="/images/leftArrow.svg" className={styles.leftArrow}></img>
                        Go Back
                    </Link>
                </div>
                
                <h2 className={`${styles.fiveSenseText}`}>Five Senses Exercise</h2>
                <div className={`${styles.fiveSenseList}`}>

                    <div className={`${styles.exerciseBox} ${styles.peachBackground}`}>
                        <Image 
                        src={`/images/icons/nose.svg`} 
                        alt="brown nose icon" 
                        width={50} 
                        height={50} 
                        />
                        <div className={`${styles.textAndArrow}`}>
                            <div className={`${styles.exerciseBoxText}`}>
                                <h4>Notice two things you can smell.</h4>
                                <p>Bring your awareness to smells that you usually filter out, whether they&apos;re pleasant or not.</p>
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.exerciseBox} ${styles.redBackground}`}>
                        <Image 
                        src={`/images/icons/mouth.svg`} 
                        alt="red mouths icon" 
                        width={50} 
                        height={50} 
                        />
                        <div className={`${styles.textAndArrow}`}>
                            <div className={`${styles.exerciseBoxText}`}>
                                <h4>Notice one thing you can taste.</h4>
                                <p>Focus on one thing you can taste right now and notice the flavour. Like a sip of water, or gum.</p>
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.exerciseBox} ${styles.blueBackground}`}>
                        <p><span className={styles.exerciseBold}>Great work completing the exercise!</span>
                        </p>
                    </div>
                    <Image
                        src={`/images/mascots/mascotUWU.svg`}
                        alt="profile very happy mascot"
                        width="177"
                        height="262"
                        className={styles.mascotFiveSense}
                    />
                    <Image
                        src={`/images/icons/partyPopper.svg`}
                        alt="party popper"
                        width="134"
                        height="134"
                        className={styles.partyPopper}
                    />
                </div>
                <Link href="/MindfulExercises">
                    <ButtonRegular 
                        title="Finish" 
                        className={`${styles.fiveSenseButton}`}
                        onClick={() => setExerciseComplete(true)}
                        ></ButtonRegular>
                </Link>
                <Tabbar/>
            </div>
        </main>
        </>
    )
}