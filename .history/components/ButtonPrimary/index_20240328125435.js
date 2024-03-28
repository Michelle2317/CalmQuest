import styles from './ButtonPrimary.module.css'
import React from 'react'

export default function ButtonPrimary({ title = 'default' }) {
	return (
		<>
			<div>
				<div className={styles.primary}>
					<button className={styles.primaryButton}>{title}</button>
				</div>
			</div>
		</>
	)
}
