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
                        <div className={styles.goBackContainer}>
                            <Link href="/About" className={styles.goBackLink}>
                                <img src="/images/icons/left arrow.svg" className={styles.leftArrow}></img>
                                Go Back
                            </Link>
                        </div>
                            <h2 className={styles.h2AboutUs}>About Stress</h2>
                            <div className={styles.aboutUsParagraph}>
                            <p>
                            Everyone experiences stress, and it&apos;s just a part of our everyday life. How we handle stress varies from person to person. Exploring different strategies to deal with stress can be immensely beneficial. Below is the most common ways some people deal with stress. It would be a great idea to try these out to de-stress if you haven&apos;t tried them yet.
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