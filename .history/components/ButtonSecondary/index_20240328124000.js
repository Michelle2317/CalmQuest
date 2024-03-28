import styles from './ButtonSecondary.module.css'
import React from 'react'

export default function ButtonSecondary({
	title="default",
	
}) 
	{
	return (
		<>
			<div className={styles.secondary}>
				<button className={styles.secondaryButton}>{title}</button>
			</div>
		</>
	)
}
