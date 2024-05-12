import styles from "./AnimationLogo.module.css"
import Lottie from "lottie-web";
import { createRef, useEffect } from "react";

export default function AnimationLogo() {
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
                        <div className={styles.animationBackground}>
                                <div className={styles.animationContainer} ref={animationContainer}></div>
                        </div>
                </>
        )
}