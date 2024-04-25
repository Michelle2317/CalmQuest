import styles from './ButtonSecondary.module.css'

export default function ButtonSecondary({ title = 'default', onClick, className }) 
	{
	return (
		<>
			<div className={styles.secondary}>
				<button className={`${styles.secondaryButton} ${className}`} onClick={onClick}>{title}</button>
			</div>
		</>
	)
}
