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
              <label>
                <input
                  type="radio"
                  value="Family"
                  checked={selectedOption === "Family"}
                  onChange={() => handleOptionSelect("Family")}
                />
                Family
              </label>
              <label>
                <input
                  type="radio"
                  value="School"
                  checked={selectedOption === "School"}
                  onChange={() => handleOptionSelect("School")}
                />
                School
              </label>
              <label>
                <input
                  type="radio"
                  value="Relationships"
                  checked={selectedOption === "Relationships"}
                  onChange={() => handleOptionSelect("Relationships")}
                />
                Relationships
              </label>
            </>
          )}
        </div>
      </main>
    </>
  );
}