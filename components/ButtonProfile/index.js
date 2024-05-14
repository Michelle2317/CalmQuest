import styles from './ButtonProfile.module.css'

export default function ButtonProfile({ title = 'default', onClick, className }) {
	return (
		<>
			<div>
				<div className={styles.primary}>
					<button className={`${styles.profileButton} ${className}`} onClick={onClick}>{title}</button>
				</div>
			</div>
		</>
	)
}