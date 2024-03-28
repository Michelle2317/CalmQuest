import styles from './Button.module.css'

export default function Button() {
	return (
		<>
			<div>
				<div className={styles.primary}>
					<div className={styles.button}>Button</div>
				</div>
				<div className={styles.secondary">
					<div className="button">Button</div>
				</div>
			</div>
		</>
	)
}
