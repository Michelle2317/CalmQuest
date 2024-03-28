import styles from './Navbar.module.css'
import Image from 'next/image'

export default function Navbar() {
	return (
		<>
			<div className={styles.navbar}>
				<div className={styles.hamburgerMenu}>
					<div className={styles.hamburerMenuIcon}></div>
				</div>
				<div className={styles.calmQuest}>CalmQuest</div>
			</div>
		</>
	)
}
