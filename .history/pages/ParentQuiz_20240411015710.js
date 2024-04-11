import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import { useState } from 'react'
import ChildQuestions from './ChildQuestions'
import Navbar from '@/components/Navbar'
import Tabbar from '@/components/Tabbar'
import Image from 'next/image'

export default function ParentQuiz() {
	const [step, setStep] = useState(1)
	const [previousAnswer, setPreviousAnswer] = useState(null)
	const [selectedAnswers, setSelectedAnswers] = useState([])
	const [quizComplete, setQuizComplete] = useState(false)
	const [score, setScore] = useState(0)
	const [outcome, setOutcome] = useState('')
	const [seedsClaimed, setSeedsClaimed] = useState(false)

	const handleAnswerSelect = (answer) => {
		let points = 0

		switch (step) {
			case 1:
				switch (answer) {
					case 'Awful':
						points = -2
						break
					case 'Bad':
						points = -1
						break
					case 'Decent':
						points = 0
						break
					case 'Good':
						points = 1
						break
					case 'Amazing':
						points = 2
						break
					default:
						break
				}
				break
			case 2:
				switch (answer) {
					case 'Joy':
						points = 1
						break
					case 'Sadness':
					case 'Fear':
						points = -1
						break
					case 'Anger':
						points = -2
						break
					default:
						break
				}
				break
			default:
				break
		}
		setSelectedAnswers([...selectedAnswers, { answer, points }])
		setScore(score + points)

		if (step === 4) {
			calculateOutcome()
		}
		setPreviousAnswer(answer)
	}

	const handleNextStep = () => {
		if (step < 4) {
			setStep(step + 1)
		} else {
			setQuizComplete(true)
			calculateOutcome()
		}
	}

	const calculateOutcome = () => {
		const headspace =
			selectedAnswers[
				selectedAnswers.length - 1
			].answer.toString()
		const totalScore = score
		let message = ''

		if (totalScore >= 0 && totalScore <= 3) {
			message = `You're doing a great job about your ${headspace.toLowerCase()}! Keep it up and you'll do wonders!`
		} else if (totalScore > 3 && totalScore <= 6) {
			message = `You're doing great about your ${headspace.toLowerCase()}!`
		} else if (totalScore >= -7 && totalScore <= -5.5) {
			message = `It sounds like you're having a tough time with your ${headspace.toLowerCase()}. Consider seeking professional help services.`
		} else if (totalScore > -5 && totalScore <= -3) {
			message = `It sounds like you're struggling with your ${headspace.toLowerCase()}. Try some mental exercises to improve your mood.`
		} else if (totalScore > -2.5 && totalScore < 0) {
			message = `It seems like you're having a bit of difficulty with your ${headspace.toLowerCase()}. Mental exercises might help.`
		}
		setOutcome(message)
	}

	const handleClaimSeeds = () => {
		setSeedsClaimed(true)
	}

	const handleMoreActivities = () => {}

	const handlePreviousStep = () => {
		if (step > 1) {
			setStep(step - 1)
		}
	}

	const handleSubmitQuiz = () => {
		setQuizComplete(true)
		calculateOutcome()
	}

	return (
		<>
			<Head>
				<title>CalmQuest</title>
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className={`${styles.main}`}>
				<div className={styles.mainContainer}>
					<Navbar />
					{!quizComplete && (
						<ChildQuestions
							question={
								step === 1
									? 'How are you today?'
									: step === 2
									? 'How do you feel?'
									: step === 3
									? 'Describe your feelings?'
									: "What's taking up most of your headspace right now?"
							}
							onSelect={
								handleAnswerSelect
							}
							previousAnswer={
								previousAnswer
							}
							handleNextStep={
								handleNextStep
							}
							outcome={outcome}
					  />
				  )}
					{quizComplete && (
						<div
							className={styles.outcomeContainer}>
							<Image
								src="/images/check.svg"
								alt="Check"
								width={100}
								height={100}
								className={styles.checkIcon}
							/>
							<h2
								className={styles.checkDone}>Check-In Done!
							</h2>
							<p
								className={`${styles.outcomeMessage}`}
							>
								{outcome}
							</p>
							{!seedsClaimed ? (
								<button
									className={
										styles.primaryButtonQuiz
									}
									onClick={
										handleClaimSeeds
									}
								>
									Claim 3x
									Seeds
								</button>
							) : (
								<p
									className={
										styles.claimedSeeds
									}
								>
									Seeds
									Claimed
								</p>
							)}
							<button
								className={
									styles.primaryButtonQuiz
								}
								onClick={
									handleMoreActivities
								}
							>
								More Activities
							</button>
						</div>
					)}
					<div className={styles.buttonContainer}>
						{step > 1 && !quizComplete && (
							<button
								className={`${styles.secondaryButtonQuiz}`}
								onClick={
									handlePreviousStep
								}
								tabindex="0"
							>
								Back
							</button>
						)}
						{!quizComplete ? (
							<button
								className={`${styles.primaryButtonQuiz}`}
								onClick={
									step ===
									4
										? handleSubmitQuiz
										: handleNextStep
								}
								tabindex="0"
							>
								{step === 4
									? 'Submit'
									: 'Next'}
							</button>
						) : (
							<></>
						)}
					</div>
					<Tabbar />
				</div>
			</main>
		</>
	)
}
