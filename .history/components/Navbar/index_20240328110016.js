import styles from './Navbar.module.css'
import Image from 'next/image'

export default function Navbar() {
	return (
		<>
			<div className={styles.navbar}>
				<div className={styles.hamburgerMenu}>
					<Image src="./hamburgerMenu.svg" className={styles.hamburerMenuIcon}></Image>
				
        </div>
				<div className={styles.calmQuest}>CalmQuest</div>
			</div>
		</>
	)
}
