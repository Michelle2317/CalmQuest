import styles from "./Tabbar.module.css";
import Image from "next/image";

export default function Tabbar() {
  return (
    <>
      <div className={styles.tabbar}>
        <div className={styles.homeContainer}>
          <Image
            src={/images/homeSecondary.svg}
            alt="home"
            width={30}
            height={30}
            className={styles.homeSecondary}
          />
          <p>Home</p>
        </div>
        <div className={styles.shopContainer}>
          <Image
            src={/images/shopPrimary.svg}
            alt="shop icon"
            width={30}
            height={30}
            className={styles.shopPrimary}
          />
          <p>Shop</p>
        </div>
        <div className={styles.journalContainer}>
          <Image
            src={/images/journalPrimary.svg}
            alt="journal icon"
            width={30}
            height={30}
            className={styles.journalPrimary}
          />
          <p>Journal</p>
        </div>
        <div className={styles.profileContainer}>
          <Image
            src={/images/profilePrimary.svg}
            alt="profile icon"
            width={30}
            height={30}
            className={styles.profilePrimary}
          />
          <p>Profile</p>
        </div>
      </div>
    </>
  );
}