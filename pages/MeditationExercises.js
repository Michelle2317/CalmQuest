import Link from "next/link"
import styles from "@/styles/Home.module.css";
import Tabbar from "@/components/Tabbar";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function MeditationExercises() {
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
                    <Link href="Exercise" className={styles.goBackLink}>
                        <img src="/images/leftArrow.svg" className={styles.leftArrow}></img>
                        Go Back
                    </Link>
                </div>

                <Image
                src={`/images/mascots/mascotOneArm.svg`}
                alt="profile One Arm mascot"
                width="177"
                height="262"
                className={styles.mascotExercise}
                />
                
                <h2 className={`${styles.exerciseText}`}>Meditation Exercises</h2>
                <div className={`${styles.exerciseBoxList}`}>
                    <div className={`${styles.exerciseBox}`}>
                        <p><span className={styles.exerciseBold}>Meditation</span> helps with our self-awareness to clearly reflect and focus on our thoughts. It organizes the mind to prevent mental clutter so we can focus on our inner selves.
                        </p>
                    </div>
                    <Link href="/StimulateBreath" className={styles.exerciseLink}>
                    <div className={`${styles.exerciseBox}`}>
                        <Image 
                        src={`/images/icons/sunSecondary.svg`} 
                        alt="sun icon" 
                        width={50} 
                        height={50} 
                        />
                        <div className={`${styles.textAndArrow}`}>
                                <div className={`${styles.exerciseBoxText}`}>
                                        <h4>The Stimulating Breath Exercise</h4>
                                        <p>Simple exercise to increase energy</p>
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

                    <Link href="/Gratitude" className={styles.exerciseLink}>
                        <div className={`${styles.exerciseBox}`}>
                        <Image 
                        src={`/images/icons/heartSecondary.svg`} 
                        alt="heart icon" 
                        width={50} 
                        height={50} 
                        />
                            <div className={`${styles.textAndArrow}`}>
                                <div className={`${styles.exerciseBoxText}`}>
                                        <h4>Gratitude Meditation</h4>
                                        <p>Practising gratitude</p>
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