import styles from './DottedProgressBar.module.css'

export default function DottedProgressBar({ currentStep }) {
	const steps = ['1', '2', '3']

	return (
		<>
			<div className={styles.progressBarContainer}>
				<div className={styles.progressBar}>
					{steps.map((stepNumber, index) => (
						<div
							key={index}
							className={`${styles.dot} ${currentStep >= index + 1? styles.activeDot: ''}`}
						/>
					))}
				</div>
			</div>

		</>
	)
}
