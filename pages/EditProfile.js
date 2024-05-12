import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Tabbar from "@/components/Tabbar";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import ButtonLong from "@/components/ButtonLong";
import Link from "next/link";
import ButtonPrimary from "@/components/ButtonPrimary";

export default function EditProfile() {
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
                    <Navbar/>
                        <div className={styles.profileInformation}>Profile Information</div>
                            <Image 
                                src="/images/avatars/sunflower.svg"
                                alt="Profile Icon" 
                                width="100" 
                                height="100"
                                className={styles.editIcon} 
                            />
                            <div className={styles.selectOptions}>
                                <Link href="/ChangeAvatar">
                                    <ButtonPrimary title="Select Avatar" className={styles.optionsButton}></ButtonPrimary>
                                </Link>
                                <Link href="/ChangeFrame">
                                    <ButtonPrimary title="Select Frame" className={styles.optionsButton}></ButtonPrimary>
                                </Link>
                            </div>
                            <div className={styles.nameHeading}>Name</div>
                                <input 
                                    id="inputName" 
                                    className={`${styles.nameInput} ${styles.editProfileNameInput}`}
                                    type="text" 
                                    placeholder="Enter new name" 
                                />
                            <Link href="/Profile">
                                <ButtonLong title="Save" className={styles.editProfileSaveButton}></ButtonLong>
                            </Link>
                        <Tabbar/>
                </div>
            </main>
        </>
    )
}