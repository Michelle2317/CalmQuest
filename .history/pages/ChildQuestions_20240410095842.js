// ChildQuestions.js
import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { useState } from "react";
import Image from "next/image";

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
          <h2>{question}</h2>
          {question === "How are you today?" && (
            <>
               <div className={styles.emojis}>
                <Image
                  src="/images/emojis/awful.svg"
                  alt="Awful"
                  width={80}
                  height={80}
                  className={selectedOption === "Awful" ? styles.selected : styles.unselected}
                  onClick={() => handleOptionSelect("Awful")}
                />
                <Image
                  src="/images/emojis/bad.svg"
                  alt="Bad"
                  width={80}
                  height={80}
                  className={selectedOption === "Bad" ? styles.selected : styles.unselected}
                  onClick={() => handleOptionSelect("Bad")}
                />
                <div className={styles.emojisBold}>
                  <Image
                    src={selectedOption === "Awful" ? "/images/bold-emojis/bawful.svg" : "/images/emojis/awful.svg"}
                    alt="Awful"
                    width={80}
                    height={80}
                    onClick={() => handleOptionSelect("Awful")}
                  />
                </div>
              </div>
              <label>
                <input
                  type="radio"
                  value="Awful"
                  checked={selectedOption === "Awful"}
                  onChange={() => handleOptionSelect("Awful")}
                />
                Awful
              </label>
              <label>
                <input
                  type="radio"
                  value="Bad"
                  checked={selectedOption === "Bad"}
                  onChange={() => handleOptionSelect("Bad")}
                />
                Bad
              </label>
              <label>
                <input
                  type="radio"
                  value="Decent"
                  checked={selectedOption === "Decent"}
                  onChange={() => handleOptionSelect("Decent")}
                />
                Decent
              </label>
              <label>
                <input
                  type="radio"
                  value="Good"
                  checked={selectedOption === "Good"}
                  onChange={() => handleOptionSelect("Good")}
                />
                Good
              </label>
              <label>
                <input
                  type="radio"
                  value="Amazing"
                  checked={selectedOption === "Amazing"}
                  onChange={() => handleOptionSelect("Amazing")}
                />
                Amazing
              </label>
            </>
          )}
          {question === "How do you feel?" && (
            <>
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
              <label>
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
              </label>
              {/* Add similar checkbox input logic for other options */}
            </>
          )}
          {question === "What’s taking up most of your headspace right now?" && (
            <>
               <label>
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
              </label>
              {/* Add similar checkbox input logic for other options */}
            </>
          )}
        </div>
      </main>
    </>
  );
}