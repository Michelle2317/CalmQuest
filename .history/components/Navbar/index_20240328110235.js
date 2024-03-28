import styles from './Navbar.module.css'
import Image from 'next/image'

export default function Navbar() {
	return (
		<>
			<div className={styles.navbar}>
				<div className={styles.hamburgerMenu}>
					<Image src={"/images/hamburgerMenu.svg"} alt="hamburger menu" width = "19.69px" height=15px className={styles.hamburerMenuIcon}/>
        </div>
				<div className={styles.calmQuest}>CalmQuest</div>
			</div>
		</>
	)
}
