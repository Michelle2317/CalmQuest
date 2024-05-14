import styles from './ButtonSave.module.css'

export default function ButtonSave({ title = 'default', onClick, className }) {
	return (
		<>
			<div>
				<div className={styles.primary}>
					<button className={`${styles.saveButton} ${className}`} onClick={onClick}>{title}</button>
				</div>
			</div>
		</>     
	)
}