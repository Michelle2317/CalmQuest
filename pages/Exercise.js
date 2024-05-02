import Link from "next/link"
import styles from "@/styles/Home.module.css";
import Tabbar from "@/components/Tabbar";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Exercise() {
    return(
        <>
            <Head>
				<title>CalmQuest</title>
				<meta name="description" content="Exercise Page" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
            <main className={`${styles.main}`}>
            <div className={styles.mainContainer}>
                <Navbar/>
        
                <Image
                src={`/images/mascots/mascotHappy.svg`}
                alt="profile happy mascot"
                width="177"
                height="262"
                className={styles.mascotExercise}
                />
                
                <h2 className={`${styles.exerciseText}`}>Exercises</h2>
                <div className={`${styles.exerciseBoxList}`}>
                    <Link href="/MindfulExercises" className={styles.exerciseLink}>
                    <div className={`${styles.exerciseBox}`}>
                        <Image 
                        src={`/images/icons/mindfulPrimary.svg`} 
                        alt="mindful icon" 
                        width={50} 
                        height={50} 
                        />
                        <div className={`${styles.textAndArrow}`}>
                            <div className={`${styles.exerciseBoxText}`}>
                                <h4>Mindfulness Exercises</h4>
                                <p>Simple Exercises</p>
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

                    <Link href="/MeditationExercises" className={styles.exerciseLink}>
                    <div className={`${styles.exerciseBox}`}>
                        <Image 
                        src={`/images/icons/meditationPrimary.svg`} 
                        alt="meditation icon" 
                        width={50} 
                        height={50} 
                        />
                        <div className={`${styles.textAndArrow}`}>
                            <div className={`${styles.exerciseBoxText}`}>
                                <h4>Meditation Exercises</h4>
                                <p>Breath in / breath out, etc.</p>
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