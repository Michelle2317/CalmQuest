import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Tabbar from "@/components/Tabbar";
import Navbar from "@/components/Navbar";
import ButtonLong from "@/components/ButtonLong";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

export default function ChangeAvatar() {
    const [currentAvatar, setCurrentAvatar] = useState('/images/avatars/sunflower.svg');
    const [activeFilter, setActiveFilter] = useState('all');

    const [avatars, setAvatars] = useState([
        { id: 1, imageUrl: '/images/avatars/seed.svg', owned: true },
        { id: 2, imageUrl: '/images/avatars/sprout.svg', owned: true },
        { id: 3, imageUrl: '/images/avatars/sunflower.svg', owned: true },
        { id: 4, imageUrl: '/images/avatars/crown.svg', owned: false },
        { id: 5, imageUrl: '/images/avatars/clover.svg', owned: false },
        { id: 6, imageUrl: '/images/avatars/glasses.svg', owned: false },
        { id: 7, imageUrl: '/images/avatars/asl-love.svg', owned: false },
        { id: 8, imageUrl: '/images/avatars/star.svg', owned: false },
        { id: 9, imageUrl: '/images/avatars/tulip.svg', owned: false }
    ]);

    const originalAvatars = [
        { id: 1, imageUrl: '/images/avatars/seed.svg', owned: true },
        { id: 2, imageUrl: '/images/avatars/sprout.svg', owned: true },
        { id: 3, imageUrl: '/images/avatars/sunflower.svg', owned: true },
        { id: 4, imageUrl: '/images/avatars/crown.svg', owned: false },
        { id: 5, imageUrl: '/images/avatars/clover.svg', owned: false },
        { id: 6, imageUrl: '/images/avatars/glasses.svg', owned: false },
        { id: 7, imageUrl: '/images/avatars/asl-love.svg', owned: false },
        { id: 8, imageUrl: '/images/avatars/star.svg', owned: false },
        { id: 9, imageUrl: '/images/avatars/tulip.svg', owned: false }
    ];

    const displayCurrentProfile = (avatar) => {
        setCurrentAvatar(avatar.imageUrl);
    };

    const filterAvatars = (filterType) => {
        let filteredAvatars = [...originalAvatars];
        setActiveFilter(filterType);
        if (filterType === 'owned') {
            filteredAvatars = originalAvatars.filter(avatar => avatar.owned);
        } else if (filterType === 'unowned') {
            filteredAvatars = originalAvatars.filter(avatar => !avatar.owned);
        }
        setAvatars(filteredAvatars);
    };

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
                    <Navbar />
                    <div className={styles.currentAvatarContainer}>
                        <Image
                            src={currentAvatar}
                            alt="Current Avatar"
                            width={100}
                            height={100}
                        />
                    </div>
                    <div className={styles.avatarContainer}>
                        <div className={styles.filterButtonsContainer}>
                            <button
                                className={`${styles.filterButtons} ${activeFilter === 'all' ? styles.activeFilterButton : styles.inactiveFilterButton}`}
                                onClick={() => filterAvatars('all')}
                            > All
                            </button>
                            <button
                                className={`${styles.secondfilterButtons} ${activeFilter === 'owned' ? styles.activeFilterButton : styles.inactiveFilterButton}`}
                                onClick={() => filterAvatars('owned')}
                            > Owned
                            </button>
                            <button
                                className={`${styles.secondfilterButtons} ${activeFilter === 'unowned' ? styles.activeFilterButton : styles.inactiveFilterButton}`}
                                onClick={() => filterAvatars('unowned')}
                            > Unowned
                            </button>
                        </div>
                        <div className={styles.avatarGallery}>
                            {avatars.map(avatar => (
                                <div key={avatar.id} className={styles.avatarItem}>
                                    <Image
                                        src={avatar.imageUrl}
                                        alt="Avatar"
                                        width={100}
                                        height={100}
                                        onClick={() => displayCurrentProfile(avatar)}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                    {currentAvatar && (
                        <Link href="/EditProfile">
                            <ButtonLong title="Save" className={styles.avatarSaveButton}></ButtonLong>
                        </Link>
                    )}
                    <Tabbar />
                </div>
            </main>
        </>
    )
}
