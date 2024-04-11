import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Tabbar from "@/components/Tabbar";
import { useState } from "react";

export default function ChildQuestions({ question, onSelect, previousAnswer, handleNextStep }) {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isClicked, setIsClicked] = useState(false);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setIsClicked(true);
    onSelect(option);
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
              <div className={styles.questionDescription}>Which emotion do you feel most intensely?</div>
              <div className={styles.emojisEmotion}>
                <Image
                  src="/images/emotions/joy.svg"
                  alt="Joy"
                  width={100}
                  height={100}
                  className={selectedOption === "Joy" ? styles.selectedEmoji : ""}
                  onClick={() => handleOptionSelect("Joy")}
                  className={styles.emotionRegular}
                />
                <Image
                  src="/images/emotions/sadness.svg"
                  alt="Sadness"
                  width={100}
                  height={100}
                  className={selectedOption === "Sadness" ? styles.selectedEmoji : ""}
                  onClick={() => handleOptionSelect("Sadness")}
                />
                  <Image
                    src="/images/emotions/fear.svg"
                    alt="Fear"
                    width={100}
                    height={100}
                    className={selectedOption === "Fear" ? styles.selectedEmoji : ""}
                    onClick={() => handleOptionSelect("Fear")}
                  />
                <Image
                  src="/images/emotions/anger.svg"
                  alt="Anger"
                  width={100}
                  height={100}
                  className={selectedOption === "Anger" ? styles.selectedEmoji : ""}
                  onClick={() => handleOptionSelect("Anger")}
                />
              </div>
            </>
          )}
            {question === "Describe your feelings?" && previousAnswer && (
            <>
              <div className={styles.multiSelectContainer}>
                <div
                  className={`${styles.rectangle} ${selectedOptions.includes("Happy") ? styles.selected : ""}`}
                  onClick={() => handleMultiSelect("Happy")}
                >
                  Happy
                </div>
                <div
                  className={`${styles.rectangle} ${selectedOptions.includes("Optimistic") ? styles.selected : ""}`}
                  onClick={() => handleMultiSelect("Optimistic")}
                >
                  Optimistic
                </div>
                <div
                  className={`${styles.rectangle} ${selectedOptions.includes("Excited") ? styles.selected : ""}`}
                  onClick={() => handleMultiSelect("Excited")}
                >
                  Excited
                </div>
              </div>
            </>
          )}
          {question === "What’s taking up most of your headspace right now?" && (
            <>
               <div className={styles.emojis}>
                <div className={styles.headspaceEmoji}>
                  <Image
                    src="/images/headspace/work.svg"
                    alt="Work"
                    width={120}
                    height={60}
                    className={selectedOption === "Work" ? styles.selectedHeadspace : ""}
                    onClick={() => handleOptionSelect("Work")}
                  />
                  <div className={styles.headspaceText}>Work</div>
                </div>
                {/* Add similar div elements for other options */}
              </div>
            </>
          )}
        <Tabbar />
        </div>
      </main>
    </>
  );
}