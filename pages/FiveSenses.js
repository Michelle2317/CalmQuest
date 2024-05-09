import Link from "next/link"
import styles from "@/styles/Home.module.css";
import Tabbar from "@/components/Tabbar";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import ButtonRegular from "@/components/ButtonRegular";

export default function FiveSenses() {
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
                    <Link href="MindfulExercises" className={styles.goBackLink}>
                        <img src="/images/leftArrow.svg" className={styles.leftArrow}></img>
                        Go Back
                    </Link>
                </div>
                
                <h2 className={`${styles.fiveSenseText}`}>Five Senses Exercise</h2>
                <div className={`${styles.fiveSenseList}`}>
                    <div className={`${styles.exerciseBox}`}>
                        <p><span className={styles.exerciseIntroBold}>This exercise provides guidelines on practising mindfulness quickly in nearly any situation. All that is needed is to notice something you are experiencing with each of the five senses.</span>
                        </p>
                    </div>
                    <div className={`${styles.exerciseBox}`}>
                        <p><span className={styles.exerciseBold}>Follow these to practice the Five Senses:</span>
                        </p>
                    </div>

                    <div className={`${styles.exerciseBox}`}>
                        <Image 
                        src={`/images/icons/fiveSenseEye.svg`} 
                        alt="yellow eye icon" 
                        width={50} 
                        height={50} 
                        />
                        <div className={`${styles.textAndArrow}`}>
                            <div className={`${styles.exerciseBoxText}`}>
                                <h4>Notice five things that you can see.</h4>
                                <p>Look around and focus on five unusual details around you, like a shadow or a small crack.</p>
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.exerciseBox}`}>
                        <Image 
                        src={`/images/icons/hand.svg`} 
                        alt="green hand icon" 
                        width={50} 
                        height={50} 
                        />
                        <div className={`${styles.textAndArrow}`}>
                            <div className={`${styles.exerciseBoxText}`}>
                                <h4>Notice four things that you can feel.</h4>
                                <p>Focus on four things that you are currently feeling, like your shirt, or a breeze around you.</p>
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.exerciseBox}`}>
                        <Image 
                        src={`/images/icons/ear.svg`} 
                        alt="purple ear icon" 
                        width={50} 
                        height={50} 
                        />
                        <div className={`${styles.textAndArrow}`}>
                            <div className={`${styles.exerciseBoxText}`}>
                                <h4>Notice three things you can hear.</h4>
                                <p>Note three things that you hear in the background. Like a bird, or nearby traffic .</p>
                            </div>
                        </div>
                    </div>
                </div>
                <Link href="/FiveSenses2"><ButtonRegular title="Next" className={`${styles.fiveSenseButton}`}></ButtonRegular>
                </Link>
            <Tabbar/>
            </div>
        </main>
        </>
    )
}