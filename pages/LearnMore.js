import Navbar from "@/components/Navbar";
import Tabbar from "@/components/Tabbar";
import Link from "next/link";
import styles from '@/styles/Home.module.css';
import Head from "next/head";
import StressChart from "@/components/StressChart"

export default function LearnMore () {
    return(
        <>
            <Head>
				<title>Learn More</title>
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
            <main className={`${styles.main}`}>
                <div className={styles.mainContainer}>
                <Navbar/>
                    <div className={styles.aboutUsContainer}>
                    <div className={styles.goBackContactUs}>
                            <Link href="/About" className={styles.goBackLink}>
                                <img src="/images/leftArrow.svg" className={styles.leftArrow}></img>
                                Go Back
                            </Link>
                        </div>
                            <h2 className={styles.h2AboutUs}>About Stress</h2>
                            <div className={styles.aboutUsParagraph}>
                            <p>
                            Everyone experiences stress as part of their everyday life. How we handle stress varies for each person. The graph below depicts the number of people with perceived life stress by age groups and how it changes throughout the years.
                            </p>
                            <StressChart/>
                        </div>
                    </div>
                <Tabbar/>
                </div>
            </main>
        </>
    );
}