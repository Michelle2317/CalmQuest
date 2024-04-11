import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Tabbar from "@/components/Tabbar";
import { useState } from "react";

export default function ChildQuestions({ question, onSelect, previousAnswer, handleNextStep, outcome }) {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isClicked, setIsClicked] = useState(false);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setIsClicked(true);
    onSelect(option);
  };

  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleMultiSelect = (option) => {
    const updatedOptions = selectedOptions.includes(option)
      ? selectedOptions.filter((selectedOption) => selectedOption !== option)
      : [...selectedOptions, option];
    setSelectedOptions(updatedOptions);
    onSelect(updatedOptions);
  };

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
          <h2 className={styles.questionOne}>{question}</h2>
          {question === "How are you today?" && (
              <>
                <div className={styles.emojis}>
                  <div className={styles.emojisBold}>
                    <Image
                      src={selectedOption === "Awful" ? "/images/bold-emojis/bawful.svg" : "/images/emojis/awful.svg"}
                      alt="Awful"
                      width={isClicked && selectedOption === "Awful" ? 90 : 80}
                      height={isClicked && selectedOption === "Awful" ? 90 : 80}
                      onClick={() => handleOptionSelect("Awful")}
                    />
                    <Image
                      src={selectedOption === "Bad" ? "/images/bold-emojis/bbad.svg" : "/images/emojis/bad.svg"}
                      alt="Bad"
                      width={isClicked && selectedOption === "Bad" ? 90 : 80}
                      height={isClicked && selectedOption === "Bad" ? 90 : 80}
                      onClick={() => handleOptionSelect("Bad")}
                    />
                    <Image
                      src={selectedOption === "Decent" ? "/images/bold-emojis/bdecent.svg" : "/images/emojis/decent.svg"}
                      alt="Decent"
                      width={isClicked && selectedOption === "Decent" ? 90 : 80}
                      height={isClicked && selectedOption === "Decent" ? 90 : 80}
                      onClick={() => handleOptionSelect("Decent")}
                    />
                    <Image
                      src={selectedOption === "Good" ? "/images/bold-emojis/bgood.svg" : "/images/emojis/good.svg"}
                      alt="Good"
                      width={isClicked && selectedOption === "Good" ? 90 : 80}
                      height={isClicked && selectedOption === "Good" ? 90 : 80}
                      onClick={() => handleOptionSelect("Good")}
                    />
                    <Image
                      src={selectedOption === "Amazing" ? "/images/bold-emojis/bamazing.svg" : "/images/emojis/amazing.svg"}
                      alt="Amazing"
                      width={isClicked && selectedOption === "Amazing" ? 90 : 80}
                      height={isClicked && selectedOption === "Amazing" ? 90 : 80}
                      onClick={() => handleOptionSelect("Amazing")}
                    />
                  </div>
                </div>
              </>
            )}
          {question === "How do you feel?" && (
            <>
              <div className={styles.questionTwoDescription}>Which emotion do you feel most intensely?</div>
              <div className={styles.emojisEmotion}>
                <div className={styles.emotionContainer}>
                  <Image
                    src="/images/emotions/joy.svg"
                    alt="Joy"
                    width={100}
                    height={100}
                    className={`${styles.emotionRegular} ${selectedOption === "Joy" ? styles.selectedEmoji : ""}`}
                    onClick={() => handleOptionSelect("Joy")}
                  />
                  <Image
                    src="/images/emotions/sadness.svg"
                    alt="Sadness"
                    width={100}
                    height={100}
                    className={`${styles.emotionRegular} ${selectedOption === "Sadness" ? styles.selectedEmoji : ""}`}
                    onClick={() => handleOptionSelect("Sadness")}
                  />
                </div>
                <div className={styles.emotionContainer}>
                  <Image
                    src="/images/emotions/anger.svg"
                    alt="Anger"
                    width={100}
                    height={100}
                    className={`${styles.emotionRegular} ${selectedOption === "Anger" ? styles.selectedEmoji : ""}`}
                    onClick={() => handleOptionSelect("Anger")}
                  />
                  <Image
                    src="/images/emotions/fear.svg"
                    alt="Fear"
                    width={100}
                    height={100}
                    className={`${styles.emotionRegular} ${selectedOption === "Fear" ? styles.selectedEmoji : ""}`}
                    onClick={() => handleOptionSelect("Fear")}
                  />
                </div>
              </div>
            </>
          )}
          {question === "Describe your feelings?" && previousAnswer && (
            <>
              {selectedOption === "Joy" && (
              <>
              <div className={styles.questionThreeDescription}>Tap any words that best describes how you are feeling</div>
              <div className={styles.multiSelectContainer}>
                <Image
                      src="/images/emotions/title-joy.svg"
                      alt="Title Joy"
                      width={140}
                      height={65}
                      className={styles.titleEmotion}
                />
                <div
                  className={`${styles.rectangle} ${selectedOptions.includes("Happy") ? styles.selectedEmoji : ""}`}
                  onClick={() => handleMultiSelect("Happy")}
                >
                  Happy
                </div>
                <div
                  className={`${styles.rectangle} ${selectedOptions.includes("Optimistic") ? styles.selectedEmoji : ""}`}
                  onClick={() => handleMultiSelect("Optimistic")}
                >
                  Optimistic
                </div>
                <div
                  className={`${styles.rectangle} ${selectedOptions.includes("Excited") ? styles.selectedEmoji : ""}`}
                  onClick={() => handleMultiSelect("Excited")}
                >
                  Excited
                </div>
                <div
                  className={`${styles.rectangle} ${selectedOptions.includes("Proud") ? styles.selectedEmoji : ""}`}
                  onClick={() => handleMultiSelect("Proud")}
                >
                  Proud
                </div>
                <div
                  className={`${styles.rectangle} ${selectedOptions.includes("Bliss") ? styles.selectedEmoji : ""}`}
                  onClick={() => handleMultiSelect("Bliss")}
                >
                  Bliss
                </div>
                <div
                  className={`${styles.rectangle} ${selectedOptions.includes("Content") ? styles.selectedEmoji : ""}`}
                  onClick={() => handleMultiSelect("Content")}
                >
                  Content
                </div>
              </div>
            </>
          )}
          {selectedOption === "Sadness" && (
            <>
              <div className={styles.questionThreeDescription}>Tap any words that best describe how you are feeling</div>
              <div className={styles.multiSelectContainer}>
                <Image
                      src="/images/emotions/title-sadness.svg"
                      alt="Title Sadness"
                      width={230}
                      height={65}
                      className={styles.titleEmotion}
                />
                <div
                  className={`${styles.rectangle} ${selectedOptions.includes("Grief") ? styles.selectedEmoji : ""}`}
                  onClick={() => handleMultiSelect("Grief")}
                >
                  Grief
                </div>
                <div
                  className={`${styles.rectangle} ${selectedOptions.includes("Lonely") ? styles.selectedEmoji : ""}`}
                  onClick={() => handleMultiSelect("Lonely")}
                >
                  Lonely
                </div>
                <div
                  className={`${styles.rectangle} ${selectedOptions.includes("Melancholic") ? styles.selectedEmoji : ""}`}
                  onClick={() => handleMultiSelect("Melancholic")}
                >
                  Melancholic
                </div>
                <div
                  className={`${styles.rectangle} ${selectedOptions.includes("Despair") ? styles.selectedEmoji : ""}`}
                  onClick={() => handleMultiSelect("Despair")}
                >
                  Despair
                </div>
                <div
                  className={`${styles.rectangle} ${selectedOptions.includes("Regret") ? styles.selectedEmoji : ""}`}
                  onClick={() => handleMultiSelect("Regret")}
                >
                  Regret
                </div>
                <div
                  className={`${styles.rectangle} ${selectedOptions.includes("Disappointed") ? styles.selectedEmoji : ""}`}
                  onClick={() => handleMultiSelect("Disappointed")}
                >
                  Disappointed
                </div>
              </div>
            </>
          )}
          {selectedOption === "Fear" && (
            <>
              <div className={styles.questionThreeDescription}>Tap any words that best describe how you are feeling</div>
              <div className={styles.multiSelectContainer}>
                <Image
                      src="/images/emotions/title-fear.svg"
                      alt="Title Fear"
                      width={160}
                      height={65}
                      className={styles.titleEmotion}
                />
                <div
                  className={`${styles.rectangle} ${selectedOptions.includes("Nervous") ? styles.selectedEmoji : ""}`}
                  onClick={() => handleMultiSelect("Nervous")}
                >
                  Nervous
                </div>
                <div
                  className={`${styles.rectangle} ${selectedOptions.includes("Dread") ? styles.selectedEmoji : ""}`}
                  onClick={() => handleMultiSelect("Dread")}
                >
                  Dread
                </div>
                <div
                  className={`${styles.rectangle} ${selectedOptions.includes("Panic") ? styles.selectedEmoji : ""}`}
                  onClick={() => handleMultiSelect("Panic")}
                >
                  Panic
                </div>
                <div
                  className={`${styles.rectangle} ${selectedOptions.includes("Anxiety") ? styles.selectedEmoji : ""}`}
                  onClick={() => handleMultiSelect("Anxiety")}
                >
                  Anxiety
                </div>
                <div
                  className={`${styles.rectangle} ${selectedOptions.includes("Unease") ? styles.selectedEmoji : ""}`}
                  onClick={() => handleMultiSelect("Unease")}
                >
                  Unease
                </div>
                <div
                  className={`${styles.rectangle} ${selectedOptions.includes("Fright") ? styles.selectedEmoji : ""}`}
                  onClick={() => handleMultiSelect("Fright")}
                >
                  Fright
                </div>
              </div>
            </>
          )}
          {selectedOption === "Anger" && (
            <>
              <div className={styles.questionThreeDescription}>Tap any words that best describe how you are feeling</div>
              <div className={styles.multiSelectContainer}>
                <Image
                      src="/images/emotions/title-anger.svg"
                      alt="Title Anger"
                      width={200}
                      height={65}
                      className={styles.titleEmotion}
                />
                <div
                  className={`${styles.rectangle} ${selectedOptions.includes("Rage") ? styles.selectedEmoji : ""}`}
                  onClick={() => handleMultiSelect("Rage")}
                >
                  Rage
                </div>
                <div
                  className={`${styles.rectangle} ${selectedOptions.includes("Frustrated") ? styles.selectedEmoji : ""}`}
                  onClick={() => handleMultiSelect("Frustrated")}
                >
                  Frustrated
                </div>
                <div
                  className={`${styles.rectangle} ${selectedOptions.includes("Irritated") ? styles.selectedEmoji : ""}`}
                  onClick={() => handleMultiSelect("Irritated")}
                >
                  Irritated
                </div>
                <div
                  className={`${styles.rectangle} ${selectedOptions.includes("Resented") ? styles.selectedEmoji : ""}`}
                  onClick={() => handleMultiSelect("Resented")}
                >
                  Resented
                </div>
                <div
                  className={`${styles.rectangle} ${selectedOptions.includes("Envy") ? styles.selectedEmoji : ""}`}
                  onClick={() => handleMultiSelect("Envy")}
                >
                  Envy
                </div>
                <div
                  className={`${styles.rectangle} ${selectedOptions.includes("Hatred") ? styles.selectedEmoji : ""}`}
                  onClick={() => handleMultiSelect("Hatred")}
                >
                  Hatred
                </div>
              </div>
            </>
          )}
        </>
      )}
      {question === "What's taking up most of your headspace right now?" && (
        <>
          <div className={styles.emojisEmotion}>
            <div className={styles.emotionContainer}>
                <Image
                  src="/images/headspace/work.svg"
                  alt="Work"
                  width={100}
                  height={100}
                  className={`${styles.emotionRegular} ${selectedOption === "Work" ? styles.selectedEmoji : ""}`}
                  onClick={() => handleOptionSelect("Work")}
                />
                <Image
                  src="/images/headspace/family.svg"
                  alt="Family"
                  width={100}
                  height={100}
                  className={`${styles.emotionRegular} ${selectedOption === "Family" ? styles.selectedEmoji : ""}`}
                  onClick={() => handleOptionSelect("Family")}
                />
              </div>
              <div className={styles.emotionContainer}>
                <Image
                  src="/images/headspace/school.svg"
                  alt="School"
                  width={100}
                  height={100}
                  className={`${styles.emotionRegular} ${selectedOption === "School" ? styles.selectedEmoji : ""}`}
                  onClick={() => handleOptionSelect("School")}
                />
                <Image
                  src="/images/headspace/relationships.svg"
                  alt="Relationships"
                  width={100}
                  height={100}
                  className={`${styles.emotionRegular} ${selectedOption === "Relationships" ? styles.selectedEmoji : ""}`}
                  onClick={() => handleOptionSelect("Relationships")}
                />
              </div>
            </div>
            {outcome && (
        <div className={styles.outcome}>
          <p>{outcome}</p>
        </div>
      )}
    </>
          </>
        )}
        <Tabbar />
        </div>
      </main>
    </>
  );
}
