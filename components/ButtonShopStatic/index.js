import styles from './ButtonShopStatic.module.css'

export default function ButtonShopStatic({ title = 'default', onClick, className }) {
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