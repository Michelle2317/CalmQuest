import styles from './ButtonShop.module.css'

export default function ButtonShop({ title = 'default', onClick, className }) {
	return (
		<>
			<div>
				<div className={styles.primary}>
					<button className={`${styles.shopButton} ${className}`} onClick={onClick}>{title}</button>
				</div>
			</div>
		</>
	)
}