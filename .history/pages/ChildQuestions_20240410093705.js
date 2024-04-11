// ChildQuestions.js
import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { useState } from "react";

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
              <label>
                <input
                  type="radio"
                  value="Awful"
                  checked={selectedOption === "Awful"}
                  onChange={() => handleOptionSelect("Awful")}
                />
                Awful
              </label>
              {/* Similar radio input logic for other options */}
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
              {/* Similar radio input logic for other options */}
            </>
          )}
          {question === "Describe your feelings?" && previousAnswer && (
            <>
              {/* Logic for describing feelings based on previous answer */}
            </>
          )}
          {question === "What’s taking up most of your headspace right now?" && (
            <>
              <label>
                <input
                  type="radio"
                  value="Work"
                  checked={selectedOption === "Work"}
                  onChange={() => handleOptionSelect("Work")}
                />
                Work
              </label>
              {/* Similar radio input logic for other options */}
            </>
          )}
          <button onClick={handleNextStep}>More Activities</button>
        </div>
      </main>
    </>
  );
}