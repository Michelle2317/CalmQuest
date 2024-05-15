import Navbar from "@/components/Navbar";
import Tabbar from "@/components/Tabbar";
import Link from "next/link";
import styles from '@/styles/Home.module.css';
import Head from "next/head";
import ButtonPrimary from "@/components/ButtonPrimary";
import { useState } from 'react';
import Image from "next/image";


export default function Languages() {
    const [ languageSelected, setLanguageSelected ] = useState(null);
    const [ submitted, setSubmitted ] = useState(false);

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
                                <div className={styles.goBackLanguages}>
                                    <Link href="/Settings" className={styles.goBackLink}>
                                        <Image src="/images/leftArrow.svg" className={styles.leftArrow} width={15} height={15}/>
                                        Go Back
                                    </Link>
                                </div>
                                <div className={styles.langSetContainer}>
                                <h2 className={styles.languagesH2}>Languages</h2>
                                <div id="language" className={styles.languageContainer}>
                                    <label className={styles.whichLang}>
                                        <input 
                                            type="radio" 
                                            name="language" 
                                            value="en"
                                            className={styles.langType}
                                        />
                                            <p className={styles.langStyling}>English</p>
                                    </label>
                                    <br/>
                                    <label className={styles.whichLang}>
                                        <input 
                                            type="radio" 
                                            name="language" 
                                            value="fr"
                                            className={styles.langType}
                                        />
                                            <p className={styles.langStyling}>French</p>
                                    </label>
                                    <br/>
                                    <label className={styles.whichLang}>
                                        <input 
                                            type="radio" 
                                            name="language" 
                                            value="de"
                                            className={styles.langType}
                                        />
                                            <p className={styles.langStyling}>German</p>
                                    </label>
                                    <br/>
                                    <label className={styles.whichLang}>
                                        <input 
                                            type="radio" 
                                            name="language" 
                                            value="es"
                                            className={styles.langType}
                                        />
                                            <p className={styles.langStyling}>Spanish</p>
                                    </label>
                                    <br/>
                                    <label className={styles.whichLang}>
                                        <input 
                                            type="radio" 
                                            name="language" 
                                            value="ja"
                                            className={styles.langType}
                                        />
                                            <p className={styles.langStyling}>Japanese</p>
                                    </label>
                                    <br/>
                                    <label className={styles.whichLang}>
                                        <input 
                                            type="radio" 
                                            name="language" 
                                            value="zh"
                                            className={styles.langType}
                                        />
                                            <p className={styles.langStyling}>Chinese</p>
                                    </label>
                                    <br/>
                                </div>
                                <Link href="/LanguageFrench" className={styles.doneButton}>
                                    <ButtonPrimary 
                                        type="submit" 
                                        title="Change"
                                        className={styles.buttonText}
                                    />
                                </Link>
                        
                    </div> 
                                
                        
                    <Tabbar/>
                </div>
            </main>
        </>
    );
}