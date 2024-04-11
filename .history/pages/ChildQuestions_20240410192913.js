// ChildQuestions.js
import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Tabbar from "@/components/Tabbar";

export default function ChildQuestions({ question, onSelect, previousAnswer, handleNextStep }) {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
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
          <h2>{question}</h2>
          {question === "How are you today?" && (
            <>
               <div className={styles.emojis}>
                <div className={styles.emojisBold}>
                  <Image
                    src={selectedOption === "Awful" ? "/images/bold-emojis/bawful.svg" : "/images/emojis/awful.svg"}
                    alt="Awful"
                    width={80}
                    height={80}
                    onClick={() => handleOptionSelect("Awful")}
                    className={styles.emojiAnimation}
                  />
                  <Image
                    src={selectedOption === "Bad" ? "/images/bold-emojis/bbad.svg" : "/images/emojis/bad.svg"}
                    alt="Bad"
                    width={80}
                    height={80}
                    onClick={() => handleOptionSelect("Bad")}
                    className={styles.emojiAnimation}
                  />
                  <Image
                    src={selectedOption === "Decent" ? "/images/bold-emojis/bdecent.svg" : "/images/emojis/decent.svg"}
                    alt="Decent"
                    width={80}
                    height={80}
                    onClick={() => handleOptionSelect("Decent")}
                    className={styles.emojiAnimation}
                  />
                  <Image
                    src={selectedOption === "Good" ? "/images/bold-emojis/bgood.svg" : "/images/emojis/good.svg"}
                    alt="Good"
                    width={80}
                    height={80}
                    onClick={() => handleOptionSelect("Good")}
                    className={styles.emojiAnimation}
                  />
                  <Image
                    src={selectedOption === "Amazing" ? "/images/bold-emojis/bamazing.svg" : "/images/emojis/amazing.svg"}
                    alt="Amazing"
                    width={80}
                    height={80}
                    onClick={() => handleOptionSelect("Amazing")}
                    className={styles.emojiAnimation}
                  />
                </div>
              </div>
            </>
          )}
          {question === "How do you feel?" && (
            <>
              <div className={styles.questionDescription}>Which emotion do you feel most intensely?</div>
              <label>
                <input
                  type="radio"
                  value="Joy"
                  checked={selectedOption === "Joy"}
                  onChange={() => handleOptionSelect("Joy")}
                />
                Joy
              </label>
              <label>
                <input
                  type="radio"
                  value="Sadness"
                  checked={selectedOption === "Sadness"}
                  onChange={() => handleOptionSelect("Sadness")}
                />
                Sadness
              </label>
              <label>
                <input
                  type="radio"
                  value="Fear"
                  checked={selectedOption === "Fear"}
                  onChange={() => handleOptionSelect("Fear")}
                />
                Fear
              </label>
              <label>
                <input
                  type="radio"
                  value="Anger"
                  checked={selectedOption === "Anger"}
                  onChange={() => handleOptionSelect("Anger")}
                />
                Anger
              </label>
            </>
          )}
          {question === "Describe your feelings?" && previousAnswer && (
            <>
              {/* <label>
                <input
                  type="checkbox"
                  value="Happy"
                  checked={selectedOptions.includes("Happy")}
                  onChange={() => handleOptionSelect("Happy")}
                />
                Happy
              </label>
              <label>
                <input
                  type="checkbox"
                  value="Optimistic"
                  checked={selectedOptions.includes("Optimistic")}
                  onChange={() => handleOptionSelect("Optimistic")}
                />
                Optimistic
              </label>
              <label>
                <input
                  type="checkbox"
                  value="Excited"
                  checked={selectedOptions.includes("Excited")}
                  onChange={() => handleOptionSelect("Excited")}
                />
                Excited
              </label> */}
              {/* Add similar checkbox input logic for other options */}
            </>
          )}
          {question === "What’s taking up most of your headspace right now?" && (
            <>
                <div className={styles.emojis}>
                  <Image
                    src={selectedOption === "Work" ? styles.selectedHeadspace : "/images/headspace/work.svg"}
                    alt="Work"
                    width={80}
                    height={80}
                    onClick={() => handleOptionSelect("Work")}
                  />
                  <div className={styles.headspaceText}>Work</div>
                </div>
                <div className={styles.emojis}>
                  <Image
                    src={selectedOption === "Family" ? styles.selectedHeadspace : "/images/headspace/house.svg"}
                    alt="Family"
                    width={80}
                    height={80}
                    onClick={() => handleOptionSelect("Family")}
                  />
                  <div className={styles.headspaceText}>Family</div>
                </div>
                <div className={styles.emojis}>
                  <Image
                    src={selectedOption === "School" ? styles.selectedHeadspace : "/images/headspace/school.svg"}
                    alt="School"
                    width={80}
                    height={80}
                    onClick={() => handleOptionSelect("School")}
                  />
                  <div className={styles.headspaceText}>School</div>
                </div>
                <div className={styles.emojis}>
                  <Image
                    src={selectedOption === "Relationships" ? styles.selectedHeadspace :  "/images/headspace/relationships.svg"}
                    alt="Relationships"
                    width={80}
                    height={80}
                    onClick={() => handleOptionSelect("Relationships")}
                  />
                  <div className={styles.headspaceText}>Relationships</div>
                </div>
            </>
          )}
        <Tabbar />
        </div>
      </main>
    </>
  );
}