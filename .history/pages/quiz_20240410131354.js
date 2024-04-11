import Head from "next/head";
import styles from "@/styles/Home.module.css";
import ButtonPrimary from "@/components/ButtonPrimary";
import ButtonSecondary from "@/components/ButtonSecondary";
import Navbar from "@/components/Navbar";
import Tabbar from "@/components/Tabbar";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

export default function Quiz() {
  return (
    <>
      <Head>
        <title>CalmQuest</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main}`}>
        <div className={styles.mainContainer}>
                <Navbar />
                {/* <div className={styles.questionOne}>How are you today?</div>
                <div className={styles.questionOneNext}><ButtonPrimary title="Next" /></div>
                <div className={styles.emojis}>
                        <Image src="/images/emojis/awful.svg" width={80} height={80} />
                        <Image src="/images/emojis/bad.svg" width={80} height={80} />
                        <Image src="/images/emojis/decent.svg" width={80} height={80} />
                        <Image src="/images/emojis/good.svg" width={80} height={80} />
                        <Image src="/images/emojis/amazing.svg" width={80} height={80} /> 
                </div> */}
                
                <div className={styles.questionTwo}>How do you feel?</div>
                <div className={styles.questionDescription}>Which emotion do you feel most intensely?</div>
                <div className={styles.quizBack}><ButtonSecondary title="Back" /></div>
                <div className={styles.quizNext}><ButtonPrimary title="Next" /></div>
                <div className={styles.emojis}>
                        <Image src="/images/emojis/joy.svg" width={80} height={80} /> 
                        <Image src="/images/emojis/sadness.svg" width={80} height={80} /> 
                        <Image src="/images/emojis/fear.svg" width={80} height={80} /> 
                        <Image src="/images/emojis/anger.svg" width={80} height={80} /> 
                </div>
                               
                <Tabbar />
        </div>
      </main>
    </>
  );
}