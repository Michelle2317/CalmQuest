import styles from './ButtonRegular.module.css'

export default function ButtonRegular({ title = 'default', onClick, className }) {
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