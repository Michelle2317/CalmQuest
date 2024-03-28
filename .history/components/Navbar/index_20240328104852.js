import styles from './Navbar.module.css'

export default function Navbar() {
	return (
		<>
			<div className={styles.navbar}>
				<div className="HamburgerMenu">
					<div className="Vector"></div>
				</div>
				<div className="Calmquest">CalmQuest</div>
			</div>
		</>
	)
}
