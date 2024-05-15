import { useState } from "react";
import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Tabbar from "@/components/Tabbar";
import Navbar from "@/components/Navbar";
import ButtonSave from "@/components/ButtonSave";
import ButtonProfile from "@/components/ButtonProfile";
import Link from "next/link";
import Image from "next/image";

export default function ChangeFrame() {
    const [currentFrame, setCurrentFrame] = useState('/images/frames/redframe.svg');
    const [activeFilter, setActiveFilter] = useState('all');
    const [isNewFrameSelected, setIsNewFrameSelected] = useState(false);

    const [frames, setFrames] = useState([
        { id: 1, imageUrl: '/images/frames/redframe.svg', owned: true },
        { id: 2, imageUrl: '/images/frames/brownframe.svg', owned: false },
        { id: 3, imageUrl: '/images/frames/yellowframe.svg', owned: true },
        { id: 4, imageUrl: '/images/frames/greenframe.svg', owned: false },
        { id: 5, imageUrl: '/images/frames/blueframe.svg', owned: true },
        { id: 6, imageUrl: '/images/frames/purpleframe.svg', owned: false },
    ]);

    const originalFrames = [
        { id: 1, imageUrl: '/images/frames/redframe.svg', owned: true },
        { id: 2, imageUrl: '/images/frames/brownframe.svg', owned: false },
        { id: 3, imageUrl: '/images/frames/yellowframe.svg', owned: true },
        { id: 4, imageUrl: '/images/frames/greenframe.svg', owned: true },
        { id: 5, imageUrl: '/images/frames/blueframe.svg', owned: false },
        { id: 6, imageUrl: '/images/frames/purpleframe.svg', owned: false },
    ];

    const displayCurrentProfile = (frame) => {
        setCurrentFrame(frame.imageUrl);
        setIsNewFrameSelected(true);
    };

    const filterFrames = (filterType) => {
        let filteredFrames = [...originalFrames];
        setActiveFilter(filterType);
        if (filterType === 'owned') {
            filteredFrames = originalFrames.filter(frame => frame.owned);
        } else if (filterType === 'unowned') {
            filteredFrames = originalFrames.filter(frame => !frame.owned);
        }
        setFrames(filteredFrames);
    };

    const saveFrame = () => {
        localStorage.setItem('chosenFrame', currentFrame);
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
                    <Link href="/EditProfile" className={styles.frameBackButton}>
                        <Image src="/images/leftArrow.svg" className={styles.profileLeftArrow} width={15} height={15}></Image>Go Back
                    </Link>
                    <div className={styles.currentFrameContainer}>
                        <Image
                            src={currentFrame}
                            alt="Current Frame"
                            width={100}
                            height={100}
                        />
                    </div>
                    <div className={styles.avatarContainer}>
                        <div className={styles.filterButtonsContainer}>
                            <button
                                className={`${styles.filterButtons} ${activeFilter === 'all' ? styles.activeFilterButton : styles.inactiveFilterButton}`}
                                onClick={() => filterFrames('all')}
                            > All
                            </button>
                            <button
                                className={`${styles.secondfilterButtons} ${activeFilter === 'owned' ? styles.activeFilterButton : styles.inactiveFilterButton}`}
                                onClick={() => filterFrames('owned')}
                            > Owned
                            </button>
                            <button
                                className={`${styles.secondfilterButtons} ${activeFilter === 'unowned' ? styles.activeFilterButton : styles.inactiveFilterButton}`}
                                onClick={() => filterFrames('unowned')}
                            > Unowned
                            </button>
                        </div>
                        <div className={styles.avatarGallery}>
                            {frames.map(frame => (
                                <div key={frame.id} className={styles.avatarItem}>
                                    <Image
                                        src={frame.imageUrl}
                                        alt="Frame"
                                        width={100}
                                        height={100}
                                        onClick={() => displayCurrentProfile(frame)}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                    {isNewFrameSelected && (
                          <Link href="/EditProfile">
                            <ButtonSave title="Save" className={styles.avatarSaveButton} onClick={saveFrame}></ButtonSave>
                          </Link>
                    )}
                    <Tabbar />
                </div>
            </main>
        </>
    )
}
