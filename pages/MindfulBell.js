import Link from "next/link"
import styles from "@/styles/Home.module.css";
import Tabbar from "@/components/Tabbar";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function MindfulBell() {
    return(
        <>
            <Head>
            <title>CalmQuest</title>
            <meta name="description" content="Mindfulness Bell Exercise" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={`${styles.main}`}>
            <div className={styles.mainContainer}>
                <Navbar/>
                
                <Image
                    src={`/images/mascots/mascotHappy.svg`}
                    alt="profile very happy mascot"
                    width="177"
                    height="262"
                    className={styles.mascotBell}
                />
                <h2 className={`${styles.exerciseText}`}>Mindfulness Bell</h2>
                <div className={`${styles.exerciseBoxList}`}>
                    <div className={`${styles.exerciseBox}`}>
                        <div className={`${styles.textAndArrow}`}>
                            <div className={`${styles.exerciseBoxText}`}>
                                <p>In this exercise, you begin by closing your eyes and listening for the cue for five minutes. When you hear it, your aim is to focus your attention on the sound and continue your concentration until it fades completely. 
                                <br/>This exercise helps you to keep yourself firmly grounded in the present. You can use the video below for the exercise:
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <iframe width="250" height="150"
                src="https://www.youtube.com/embed/wGFog-OuFDM?si=pKZQnIvjYP8OCmNM" className={`${styles.bellVideo}`}>
                </iframe>
            <Tabbar/>
            </div>
        </main>
        </>
    )
}