import styles from './Navbar.module.css'
import Image from 'next/image'

export default function Navbar() {
	return (
		<>
			<div className={styles.navbar}>
				<Image
					src={`/images/hamburgerMenu.svg`}
					alt="hamburger menu"
					width="30"
					height="30"
					className={styles.hamburgerMenuIcon}
				/>
				<div className={styles.calmQuest}>
					CalmQuest
				</div>
			</div>
		</>
	)
}
