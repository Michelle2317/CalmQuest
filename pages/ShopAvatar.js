import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Tabbar from "@/components/Tabbar";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import ButtonShop from "@/components/ButtonShop";
import ButtonShopStatic from "@/components/ButtonShopStatic";
import Link from "next/link";

export default function Shop() {

    return (
        <>
            <Head>
                <title>CalmQuest</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.main}>
                <div className={styles.mainContainer}>
                    <Navbar />
                    <div className={styles.seedShop}>
                        <Image
                        src="/images/seed.svg"
                        alt="Seed"
                        width={25}
                        height={25}
                        /> 
                        Seeds: 6
                    </div>
                    <div className={styles.shopSelection}>
                        <ButtonShopStatic title="Avatar" className={styles.optionsButton}></ButtonShopStatic>
                        <Link href="/ShopFrame"><ButtonShop title="Frames" className={styles.optionsButton}></ButtonShop></Link>
                    </div>
                    <div className={styles.shopList}>
                        <div className={styles.shopItem}>
                            <div className={styles.shopItemInfo}>
                            <Image
                                src='/images/avatars/crown.svg'
                                alt="Crown"
                                width={96}
                                height={97}
                            />
                            <div className={styles.seedCost}>
                                <Image
                                src="/images/seed.svg"
                                alt="Seed"
                                width={25}
                                height={25}
                                />
                                2
                            </div>
                        </div>
                        <button
                        className={`${styles.buyButton}`}
                            > Buy
                        </button>
                        </div>
                        <div className={styles.shopItem}>
                            <div className={styles.shopItemInfo}>
                            <Image
                                src='/images/avatars/clover.svg'
                                alt="Clover"
                                width={96}
                                height={97}
                            />
                            <div className={styles.seedCost}>
                                <Image
                                src="/images/seed.svg"
                                alt="Seed"
                                width={25}
                                height={25}
                                />
                                1
                            </div>
                        </div>
                        <button
                        className={`${styles.buyButton}`}
                            > Buy
                        </button>
                        </div>
                        <div className={styles.shopItem}>
                            <div className={styles.shopItemInfo}>
                            <Image
                                src='/images/avatars/glasses.svg'
                                alt="Glasses"
                                width={96}
                                height={97}
                            />
                            <div className={styles.seedCost}>
                                <Image
                                src="/images/seed.svg"
                                alt="Seed"
                                width={25}
                                height={25}
                                />
                                2
                            </div>
                        </div>
                        <button
                        className={`${styles.buyButton}`}
                            > Buy
                        </button>
                        </div>
                        <div className={styles.shopItem}>
                            <div className={styles.shopItemInfo}>
                            <Image
                                src='/images/avatars/asl-love.svg'
                                alt="ASL Love Sign"
                                width={96}
                                height={97}
                            />
                            <div className={styles.seedCost}>
                                <Image
                                src="/images/seed.svg"
                                alt="Seed"
                                width={25}
                                height={25}
                                />
                                2
                            </div>
                        </div>
                        <button
                        className={`${styles.buyButton}`}
                            > Buy
                        </button>
                        </div>
                        <div className={styles.shopItem}>
                            <div className={styles.shopItemInfo}>
                            <Image
                                src='/images/avatars/star.svg'
                                alt="Star"
                                width={96}
                                height={97}
                            />
                            <div className={styles.seedCost}>
                                <Image
                                src="/images/seed.svg"
                                alt="Seed"
                                width={25}
                                height={25}
                                />
                                2
                            </div>
                        </div>
                        <button
                        className={`${styles.buyButton}`}
                            > Buy
                        </button>
                        </div>
                        <div className={styles.shopItem}>
                            <div className={styles.shopItemInfo}>
                            <Image
                                src='/images/avatars/tulip.svg'
                                alt="Tulip"
                                width={96}
                                height={97}
                            />
                            <div className={styles.seedCost}>
                                <Image
                                src="/images/seed.svg"
                                alt="Seed"
                                width={25}
                                height={25}
                                />
                                1
                            </div>
                        </div>
                        <button
                        className={`${styles.buyButton}`}
                            > Buy
                        </button>
                        </div>
                    </div>
                    <Tabbar />
                </div>
            </main>
        </>
    );
}