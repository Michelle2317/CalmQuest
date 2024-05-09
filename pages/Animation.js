import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Lottie from "lottie-web";
import { useState, createRef, useEffect } from "react";

export default function Animation() {
        const [showButton, setShowButton] = useState(false);

        useEffect(() => {
        const timer = setTimeout(() => {
        setShowButton(true);
        }, 3000);

        return () => clearTimeout(timer);
        }, []);
        
        let animationContainer = createRef();

        useEffect(() => {
        const anim = Lottie.loadAnimation({
        container: animationContainer.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        path: "/animations/calmquest-logo.json"
        })
        
        return () => anim.destroy();
        }, [])

        return (
                <>
                <Head>
                        <title>CalmQuest</title>
                        <meta name="description" content="Generated by create next app" />
                        <meta name="viewport" content="width=device-width, initial-scale=1" />
                        <link rel="icon" href="/favicon.ico" />
                </Head>
                <main className={`${styles.main}`}>
                        <div className={styles.mainContainer}></div>
                                <div className={styles.animationContainer} ref={animationContainer}></div>
                                        {showButton && (
                                        <ButtonPrimary className={styles.getStartedButton} title="Get Started"></ButtonPrimary>
                                        )}
                </main>
                </>
        )
}