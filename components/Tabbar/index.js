import styles from "./Tabbar.module.css";
import Image from "next/image";
import Link from "next/link";


export default function Tabbar() {
  return (
    <>
      <div className={styles.tabbar}>
        <div className={styles.homeContainer}>
          <Link href="/" className={styles.linkStyling}>
            <Image
              src={`/images/homeSecondary.svg`}
              alt="home"
              width={30}
              height={30}
              className={styles.homeSecondary}
            />
            <p>Home</p>
          </Link>
        </div>
        <div className={styles.shopContainer}>
          <Link href="/Shop" className={styles.linkStyling}>
            <Image
              src={`/images/shopPrimary.svg`}
              alt="shop icon"
              width={30}
              height={30}
              className={styles.shopPrimary}
            />
            <p>Shop</p>
          </Link>
        </div>
        <div className={styles.journalContainer}>
          <Link href="/ParentQuiz" className={styles.linkStyling}>
            <Image
              src={`/images/journalPrimary.svg`}
              alt="journal icon"
              width={30}
              height={30}
              className={styles.journalPrimary}
            />
            <p>Journal</p>
          </Link>
        </div>
        <div className={styles.profileContainer}>
          <Link href="/Profile" className={styles.linkStyling}>
            <Image
              src={`/images/profilePrimary.svg`}
              alt="profile icon"
              width={30}
              height={30}
              className={styles.profilePrimary}
            />
            <p>Profile</p>
          </Link>
        </div>
      </div>
    </>
  );
}