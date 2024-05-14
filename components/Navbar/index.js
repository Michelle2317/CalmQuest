import styles from './Navbar.module.css'
import Image from 'next/image'
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

	return (
		<>
			<div className={styles.navbar}>
					<div className={styles.burgerMenu} onClick={toggleDropdown}>
						<Image
							src={`/images/hamburgerMenu.svg`}
							alt="hamburger menu"
							width="30"
							height="30"
							className={styles.hamburgerMenuIcon}
						/>
					</div>
				<Link href="/HomePage" className={styles.calmQuest}><div>CalmQuest</div></Link>
			</div>
			{isDropdownOpen && (
				<>
					<div className={styles.screenOverlay} onClick={toggleDropdown}></div>
						<div className={styles.dropdownMenu}>
							<ul className={styles.ulDropdownMenu}>
								<button className={styles.dropMenuButton}>
									<li className={styles.dropMenuListStyle}>
										<Link href="/Shop" className={styles.dropMenuLink}>
												<Image 
													src={`/images/shopPrimary.svg`} 
													alt="shop bag icon" 
													width={20} 
													height={20} 
													className={styles.dropdownIcon}
												/>
												Shop
										</Link>
									</li>
								</button>
								<button className={styles.dropMenuButton}>
									<li className={styles.dropMenuListStyle}>
										<Link href="/Exercise" className={styles.dropMenuLink}>
												<Image 
													src={`/images/icons/mindfulPrimary.svg`} 
													alt="exercise icon" 
													width={20} 
													height={20} 
													className={styles.dropdownIcon}
												/>
												Exercises
										</Link>
									</li>
								</button>
								<button className={styles.dropMenuButton}>
									<li className={styles.dropMenuListStyle}>
										<Link href="/ParentQuiz" className={styles.dropMenuLink}>
												<Image 
													src={`/images/checkInPrimary.svg`} 
													alt="check in icon" 
													width={20} 
													height={20} 
													className={styles.dropdownIcon}
												/>
												Check-In
										</Link>
									</li>
								</button>
								<button className={styles.dropMenuButton}>
									<li className={styles.dropMenuListStyle}>
										<Link href="/Profile" className={styles.dropMenuLink}>
												<Image 
													src={`/images/profilePrimary.svg`} 
													alt="profile icon" 
													width={20} 
													height={20} 
													className={styles.dropdownIcon}
												/>
												Profile
										</Link>
									</li>
								</button>
								<button className={styles.dropMenuButton}>
									<li className={styles.dropMenuListStyle}>
										<Link href="/About" className={styles.dropMenuLink}>
												<Image 
													src={`/images/about.svg`} 
													alt="about icon" 
													width={20} 
													height={20} 
													className={styles.dropdownIcon}
												/>
												About
										</Link>
									</li>
								</button>
								<button className={styles.dropMenuButton}>
									<li className={styles.dropMenuListStyle}>
										<Link href="/Settings" className={styles.dropMenuLink}>
												<Image 
													src={`/images/settings.svg`} 
													alt="settings icon" 
													width={20} 
													height={20} 
													className={styles.dropdownIcon}
												/>
												Settings
										</Link>
									</li>
								</button>
							</ul>
						</div>
				</>
            )}
		</>
	)
}
