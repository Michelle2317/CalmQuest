import Navbar from "@/components/Navbar";
import Tabbar from "@/components/Tabbar";
import Link from "next/link";
import styles from '@/styles/Home.module.css';
import Head from "next/head";

export default function About () {
    return(
        <>
            <Head>
				<title>CalmQuest</title>
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
            <main className={`${styles.main}`}>
                <div className={styles.mainContainer}>
                <Navbar/>
                    <div className={styles.aboutUsContainer}>
                        <div className={styles.goBackContainer}>
                            <Link href="/" className={styles.goBackLink}>
                                <img src="/images/icons/left arrow.svg" className={styles.leftArrow}></img>
                                Go Back
                            </Link>
                        </div>
                            <h2 className={styles.h2AboutUs}>About Us</h2>
                            <div className={styles.aboutUsParagraph}>
                            <p>
                            CalmQuest is a web app to help people deal with mental health. 
                            It includes features such as a journal in which people can 
                            express themselves, a well-being tracker, and motivational 
                            activities. The web app also includes a currency reward for 
                            completing activities, in which the user can buy an avatar 
                            frame or icon from the shop. For more experiences, the user 
                            can engage in mindfulness and meditation exercises.
                            </p>
                        </div>
                    </div>
                <Tabbar/>
                </div>
            </main>
        </>
    );
}