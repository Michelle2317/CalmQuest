import Link from "next/link"
import styles from "@/styles/Home.module.css";
import Tabbar from "@/components/Tabbar";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import ButtonRegular from "@/components/ButtonRegular";


export default function StimulateBreath() {
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
                        <img src="/images/leftArrow.svg" className={styles.leftArrow}></img>
                        Go Back
                    </Link>
                </div>

                <Image
                src={`/images/mascots/mascotNormal.svg`}
                alt="profile Normal mascot"
                width="177"
                height="262"
                className={styles.mascotExercise}
                />
                
                <h2 className={`${styles.exerciseText}`}>Stimulating Breath</h2>
                <div className={`${styles.exerciseBoxList}`}>
                    <div className={`${styles.exerciseBox}`}>
                        <p><span className={styles.exerciseBold}>The stimulating breath</span> is a great way to boost your energy. It&apos;s often done in yoga to help increase Prana(praa·nuh), or life force energy. It&apos;s a safe practice, but it could make you dizzy initially.<br/><br/>Strive for no more than 15 seconds or so on your first try, working up to a minute. Each time you practice this, you can increase your time little by little.
                        </p>
                     </div>
            </div>
            <Link href="/StimulateBreath2"><ButtonRegular title="Start" className={`${styles.fiveSenseButton}`}></ButtonRegular>
                </Link>
            <Tabbar/>
            </div>
        </main>
        </>
    )
}