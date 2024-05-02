import Link from "next/link"
import styles from "@/styles/Home.module.css";
import Tabbar from "@/components/Tabbar";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Profile() {
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
                <div className={styles.profileMainSection}>
                <Image
                src={`/images/onboarding/option1.svg`}
                alt="profile avatar"
                width="100"
                height="100"
                className={styles.profileAvatar}
                />
                <label for="inputFiel"></label>
            </div>
            
            <Tabbar/>
            </div>
        </main>
        </>
    )
}