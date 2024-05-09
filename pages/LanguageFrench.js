import Navbar from "@/components/Navbar";
import Tabbar from "@/components/Tabbar";
import Link from "next/link";
import styles from '@/styles/Home.module.css';
import Head from "next/head";
import ButtonPrimary from "@/components/ButtonPrimary";
import { useState } from 'react';
import ButtonSecondary from "@/components/ButtonSecondary";


export default function Languages() {
    const [ languageSelected, setLanguageSelected ] = useState(null);
    const [ submitted, setSubmitted ] = useState(false);

    const handleChangedLanguage = (e) => {
        const languageSelected = e.target.value;
        setLanguageSelected(languageSelected);
    };

    const handleChange = async (e) => {
        e.preventDefault();
        console.log('Your language has been changed:', languageSelected);
        setSubmitted(true);
    };
    return(
        <>
            <Head>
				<title>Languages</title>
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
            <main className={`${styles.main}`}>
                        <div className={styles.mainContainer}>
                            <Navbar/>
                            
                                <div className={styles.goBackFrench}>
                                    <Link href="/Languages" className={styles.goBackLink}>
                                        <img src="/images/leftArrow.svg" className={styles.leftArrow}></img>
                                        Retourner
                                    </Link>
                                </div>
                                <div className={styles.frenchSetContainer}>
                                <img src="/images/check.svg" className={styles.frenchCheckConfirm}></img>
                            <p className={styles.frenchParagraph}>
                            Vous avez maintenant réussi à passer au français 
                            </p>
                            
                            <Link href="/" className={styles.frenchGoBack}>
                                <ButtonSecondary 
                                    type="submit" 
                                    title="Retournez à la page d'accueil" 
                                    className={styles.frenchText} 
                                />
                            </Link>
                                
                            </div> 
                                
                        
                    <Tabbar/>
                </div>
            </main>
        </>
    );
}