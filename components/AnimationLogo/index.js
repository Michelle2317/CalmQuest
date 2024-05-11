import styles from "./AnimationLogo.module.css"
import Lottie from "lottie-web";
import { useState, createRef, useEffect } from "react";
import Link from "next/link";
import ButtonLong from "@/components/ButtonLong";

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
        loop: false,
        autoplay: true,
        path: "/animations/calmquest-logo.json"
        })
        
        return () => anim.destroy();
        }, [])

        return (
                <>
                        <div className={styles.animationContainer} ref={animationContainer}></div>
                                {showButton && (
                                <Link href="/Onboarding">
                                        <ButtonLong className={styles.animationGetStarted} title="Get Started"></ButtonLong>
                                </Link>
                                )}    
                </>
        )
}