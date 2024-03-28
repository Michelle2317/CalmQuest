import styles from './Navbar.module.css'

export default function Navbar() {
	return (
		<>
			<div className={styles.navbar}>
				<div className={styles.hamburgerMenu}>
					<div className="Vector"></div>
				</div>
				<div className={styles.calmQuest}>CalmQuest</div>
			</div>
		</>
	)
}
