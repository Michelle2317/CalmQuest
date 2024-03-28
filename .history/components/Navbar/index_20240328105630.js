import styles from './Navbar.module.css'

export default function Navbar() {
	return (
		<>
			<div className={styles.navbar}>
				<div className={styles.hamburgerMenu}>
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
  <path d="M5.15625 22.9688H24.8438M5.15625 15.4688H24.8438M5.15625 7.96875H24.8438" stroke="black" stroke-width="3.5625" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
				</div>
				<div className={styles.calmQuest}>CalmQuest</div>
			</div>
		</>
	)
}
