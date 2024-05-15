import Link from "next/link"
import styles from "@/styles/Home.module.css";
import Tabbar from "@/components/Tabbar";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import ButtonRegular from "@/components/ButtonRegular";


export default function Gratitude() {
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
                    <Link href="MeditationExercises" className={styles.goBackLink}>
                        <Image src="/images/leftArrow.svg" 
                            className={styles.leftArrow} 
                            width={"12"}
                            height={"22"}
                        />
                        Go Back
                    </Link>
                </div>

                <Image
                src={`/images/mascots/mascotHappy.svg`}
                alt="profile very happy mascot"
                width="177"
                height="262"
                className={styles.mascotExercise}
                />
                
                <h2 className={`${styles.exerciseText}`}>Gratitude Meditation</h2>
                <div className={`${styles.exerciseBoxList}`}>
                    <div className={`${styles.exerciseBox}`}>
                        <p><span className={styles.exerciseBold}>Gratitude Meditation</span> involves pausing to reflect on your life, acknowledging what you're grateful for, whether it's small joys like sunny weather or significant events like a memorable birthday celebration.
                        </p>
                     </div>
            </div>
            <Link href="/Gratitude2"><ButtonRegular title="Start" className={`${styles.fiveSenseButton}`}></ButtonRegular>
                </Link>
            <Tabbar/>
            </div>
        </main>
        </>
    )
}