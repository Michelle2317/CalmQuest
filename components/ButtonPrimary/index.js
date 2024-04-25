import styles from './ButtonPrimary.module.css'

export default function ButtonPrimary({ title = 'default', onClick, className }) {
	return (
		<>
			<div>
				<div className={styles.primary}>
					<button className={`${styles.primaryButton} ${className}`} onClick={onClick}>{title}</button>
				</div>
			</div>
		</>
	)
}