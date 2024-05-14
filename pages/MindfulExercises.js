import Link from "next/link"
import styles from "@/styles/Home.module.css";
import Tabbar from "@/components/Tabbar";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function MindfulExercises() {
    return(
        <>
            <Head>
                <title>CalmQuest</title>
                <meta name="description" content="Mindful Exercises" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
	        </Head>
            <main className={`${styles.main}`}>
            <div className={styles.mainContainer}>
                <Navbar/>

                <div className={styles.goBackExerciseContainer}>
                    <Link href="Exercise" className={styles.goBackLink}>
                        <img src="/images/leftArrow.svg" className={styles.leftArrow}></img>
                        Go Back
                    </Link>
                </div>

                <Image
                src={`/images/mascots/mascotNormal.svg`}
                alt="profile normal mascot"
                width="177"
                height="262"
                className={styles.mascotExercise}
                />
                
                <h2 className={`${styles.exerciseText}`}>Mindfulness Exercises</h2>
                <div className={`${styles.exerciseBoxList}`}>
                    <div className={`${styles.exerciseBox}`}>
                        <p><span className={styles.exerciseBold}>Mindfulness</span> is about activating our senses to tune into what&apos;s happening with and around us. We can learn to be more aware about our surroundings and about how our bodies feels.
                        </p>
                    </div>
                    <Link href="/FiveSenses" className={styles.exerciseLink}>
                    <div className={`${styles.exerciseBox}`}>
                        <Image 
                        src={`/images/icons/eyeSecondary.svg`} 
                        alt="eye icon" 
                        width={50} 
                        height={50} 
                        />
                        <div className={`${styles.textAndArrow}`}>
                                <div className={`${styles.exerciseBoxText}`}>
                                        <h4>Five Senses Exercise</h4>
                                        <p>Practice your five senses</p>
                                </div>
                                <Image 
                                src={`/images/icons/arrow.svg`} 
                                alt="exercise icon" 
                                width={20} 
                                height={20} 
                                className={styles.exerciseArrow}
                                />
                                </div>
                        </div>
                    </Link>

                    <Link href="/MindfulBell" className={styles.exerciseLink}>
                    <div className={`${styles.exerciseBox}`}>
                        <Image 
                        src={`/images/icons/bellSecondary.svg`} 
                        alt="bell icon" 
                        width={50} 
                        height={50} 
                        />
                        <div className={`${styles.textAndArrow}`}>
                                <div className={`${styles.exerciseBoxText}`}>
                                        <h4>Mindfulness Bell Exercise</h4>
                                        <p>Listening and focusing on a cue</p>
                                </div>
                                <Image 
                                src={`/images/icons/arrow.svg`} 
                                alt="arrow icon" 
                                width={20} 
                                height={20} 
                                className={styles.exerciseArrow}
                                />
                        </div>
                    </div>
                </Link>
            </div>
            <Tabbar/>
            </div>
        </main>
        </>
    )
}