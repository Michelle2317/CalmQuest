import styles from './ButtonSecondary.module.css'
import React from 'react'

export default function ButtonSecondary() 
	{
	return (
		<>
			<div className={styles.secondary}>
				<button className={styles.secondaryButton}>{title}</button>
			</div>
		</>
	)
}
