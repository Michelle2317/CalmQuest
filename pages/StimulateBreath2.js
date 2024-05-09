import Link from "next/link"
import styles from "@/styles/Home.module.css";
import Tabbar from "@/components/Tabbar";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import ButtonRegular from "@/components/ButtonRegular";


export default function StimulateBreath2() {
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
                    <Link href="StimulateBreath" className={styles.goBackLink}>
                        <img src="/images/leftArrow.svg" className={styles.leftArrow}></img>
                        Go Back
                    </Link>
                </div>

                <h2 className={`${styles.fiveSenseText}`}>Stimulating Breath </h2>
                <div className={`${styles.fiveSenseList}`}>


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
                                <p>Sit up tall with your back straight and relax your shoulders.</p>
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
                                <p>Begin inhaling and exhaling rapidly through your nose. Keep your mouth closed but relaxed.</p>
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
                                <p>The breaths should be equal in duration, but as short/quick as possible. This is a noisy exercise.</p>
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
                                <p>Try to do three cycles a second. As you breathe, you&apos;ll notice movement at the diaphragm.</p>
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.exerciseBox} ${styles.blueBackground}`}>
                        <p><span className={styles.exerciseIntroBold}>Great work completing the exercise! You should be feeling invigorated now!</span>
                        </p>
                    </div>
                </div>
            <Link href="/MeditationExercises"><ButtonRegular title="Finish" className={`${styles.fiveSenseButton}`}></ButtonRegular>
                </Link>
            <Tabbar/>
            </div>
        </main>
        </>
    )
}