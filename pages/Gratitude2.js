import Link from "next/link"
import styles from "@/styles/Home.module.css";
import Tabbar from "@/components/Tabbar";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import ButtonRegular from "@/components/ButtonRegular";
import { useState, useEffect } from "react";

export default function Gratitude2() {
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
                        <meta name="description" content="Meditation Exercises" />
                        <meta name="viewport" content="width=device-width, initial-scale=1" />
                        <link rel="icon" href="/favicon.ico" />
                </Head>
                <main className={`${styles.main}`}>
                <div className={styles.mainContainer}>
                        <Navbar/>
                        
                        <div className={styles.goBackExerciseContainer}>
                        <Link href="Gratitude" className={styles.goBackLink}>
                                <Image src="/images/leftArrow.svg" 
                                className={styles.leftArrow} 
                                width={"12"}
                                height={"22"}
                                />
                                Go Back
                        </Link>
                        </div>

                        <h2 className={`${styles.fiveSenseText}`}>Gratitude Meditation</h2>
                        <div className={`${styles.fiveSenseList}`}>

                                <div className={`${styles.exerciseBox}`}>
                                        <p><span className={styles.exerciseIntroBold}>Take your time to meditate and reflect.</span>
                                        </p>
                                </div>
                                <div className={`${styles.exerciseBox} ${styles.yellowBackground}`}>
                                        <Image 
                                        src={`/images/icons/1.svg`} 
                                        alt="Number 1 Icon" 
                                        width={32} 
                                        height={48} 
                                        />
                                        <div className={`${styles.textAndArrow}`}>
                                        <div className={`${styles.exerciseBoxText}`}>
                                                <h4>Step 1</h4>
                                                <p>Close your eyes and reflect on a small detail you notice. Like the view outside with trees or sun.</p>
                                        </div>
                                        </div>
                                </div>
                                <div className={`${styles.exerciseBox} ${styles.greenBackground}`}>
                                        <Image 
                                        src={`/images/icons/2.svg`} 
                                        alt="Number 2 Icon" 
                                        width={32} 
                                        height={48} 
                                        />
                                        <div className={`${styles.textAndArrow}`}>
                                        <div className={`${styles.exerciseBoxText}`}>
                                                <h4>Step 2</h4>
                                                <p>Next, reflect on someone who has impacted your life. You can know them personally or not.</p>
                                        </div>
                                        </div>
                                </div>
                                <div className={`${styles.exerciseBox} ${styles.purpleBackground}`}>
                                        <Image 
                                        src={`/images/icons/3.svg`} 
                                        alt="Number 3 Icon" 
                                        width={32} 
                                        height={48} 
                                        />
                                        <div className={`${styles.textAndArrow}`}>
                                        <div className={`${styles.exerciseBoxText}`}>
                                                <h4>Step 3</h4>
                                                <p>Express gratitude for everything you are grateful for, like a hot cup of coffee or a friends.</p>
                                        </div>
                                        </div>
                                </div>
                                <div className={`${styles.exerciseBox} ${styles.peachBackground}`}>
                                        <Image 
                                        src={`/images/icons/4.svg`} 
                                        alt="Number 4 Icon" 
                                        width={32} 
                                        height={48} 
                                        />
                                        <div className={`${styles.textAndArrow}`}>
                                        <div className={`${styles.exerciseBoxText}`}>
                                                <h4>Step 4</h4>
                                                <p>Express gratitude for your healthy body and for having the mind to be here in this moment.</p>
                                        </div>
                                        </div>
                                </div>
                                <div className={`${styles.exerciseBox} ${styles.blueBackground}`}>
                                        <p><span className={styles.exerciseIntroBold}>Great work completing the exercise!</span>
                                        </p>
                                </div>
                        </div>
                                <Link href="/MeditationExercises"> 
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