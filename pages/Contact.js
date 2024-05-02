import Navbar from "@/components/Navbar";
import Tabbar from "@/components/Tabbar";
import Link from "next/link";
import styles from '@/styles/Home.module.css';
import Head from "next/head";
import Form from "@/components/Form";


export default function Contact() {
    return(
        <>
            <Head>
				<title>Contact</title>
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
            <main className={`${styles.main}`}>
                <div className={styles.mainContainer}>
                <Navbar/>
                    <div>
                        <div className={styles.goBackContainer}>
                            <Link href="/" className={styles.goBackLink}>
                                <img src="/images/leftArrow.svg" className={styles.leftArrow}></img>
                                Go Back
                            </Link>
                        </div>
                        
                            <h2>Contact Us</h2><div className={styles.contactUs}>
                            <p>
                            We’re here to help and answer any questions you might have.
                            </p>

                            <Form/>
                            
                        </div>
                    </div>
                <Tabbar/>
                </div>
            </main>
        </>
    );
}