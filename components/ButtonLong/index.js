import styles from './ButtonLong.module.css'

export default function ButtonLong({ title = 'default', onClick, className }) {
	return (
		<>
			<div>
				<div className={styles.primary}>
					<button className={`${styles.buttonLong} ${className}`} onClick={onClick}>{title}</button>
				</div>
			</div>
		</>
	)
}