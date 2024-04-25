import styles from "./Tabbar.module.css";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from 'next/router'


export default function Tabbar() {
    const router = useRouter();
    
    const selectedPage = (href) => {
      return router.pathname === href;
    }
  return (
    <>
      <div className={styles.tabbar}>
        <div className={styles.homeContainer}>
          <Link href="/" className={styles.linkStyling} passHref>
            <Image
              src={ selectedPage('/') ? `/images/homeSecondary.svg` : `/images/homePrimary.svg`}
              alt="home"
              width={30}
              height={30}
              className={styles.homeSecondary}
            />
            <p>Home</p>
          </Link>
        </div>
        <div className={styles.shopContainer}>
          <Link href="/Shop" className={styles.linkStyling} passHref>
            <Image
              src={ selectedPage('/Shop') ? `/images/shopSecondary.svg` : `/images/shopPrimary.svg`}
              alt="shop icon"
              width={30}
              height={30}
              className={styles.shopPrimary}
            />
            <p>Shop</p>
          </Link>
        </div>
        <div className={styles.exerciseContainer}>
          <Link href="/Exercise" className={styles.linkStyling} passHref>
            <Image
              src={ selectedPage('/Exercise') ? `/images/icons/mindfulSecondary.svg` : `/images/icons/mindfulPrimary.svg`}
              alt="mindful icon"
              width={30}
              height={30}
              className={styles.journalPrimary}
            />
            <p>Exercise</p>
          </Link>
        </div>
        <div className={styles.profileContainer}>
          <Link href="/Profile" className={styles.linkStyling} passHref>
            <Image
              src={ selectedPage('/Profile') ? `/images/profileSecondary.svg` : `/images/profilePrimary.svg`}
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