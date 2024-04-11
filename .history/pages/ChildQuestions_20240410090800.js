import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { useState } from "react";

export default function ChildQuestions({ question, onSelect, previousAnswer }) {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleOptionSelect = (option) => {
    const alreadySelected = selectedOptions.includes(option);
    if (alreadySelected) {
      setSelectedOptions(selectedOptions.filter((selected) => selected !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  const handleMultiSelect = () => {
    onSelect(selectedOptions);
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
              <button onClick={() => onSelect("Awful", -2)}>Awful</button>
              <button onClick={() => onSelect("Bad", -1)}>Bad</button>
              <button onClick={() => onSelect("Decent", 0)}>Decent</button>
              <button onClick={() => onSelect("Good", 1)}>Good</button>
              <button onClick={() => onSelect("Amazing", 2)}>Amazing</button>
            </>
          )}
          {question === "How do you feel?" && (
            <>
              <button onClick={() => onSelect("Joy", 1)}>Joy</button>
              <button onClick={() => onSelect("Sadness", -1)}>Sadness</button>
              <button onClick={() => onSelect("Fear", -1)}>Fear</button>
              <button onClick={() => onSelect("Anger", -2)}>Anger</button>
            </>
          )}
          {question === "Describe your feelings?" && previousAnswer && (
            <>
              {/* Render options based on selected answer in question 2 */}
              {previousAnswer === "Joy" && (
                <>
                  <button onClick={() => handleOptionSelect("Happy")}>Happy</button>
                  <button onClick={() => handleOptionSelect("Optimistic")}>Optimistic</button>
                  {/* Add more options for joy */}
                </>
              )}
              {previousAnswer === "Sadness" && (
                <>
                  <button onClick={() => handleOptionSelect("Grief")}>Grief</button>
                  <button onClick={() => handleOptionSelect("Lonely")}>Lonely</button>
                  {/* Add more options for sadness */}
                </>
              )}
              {/* Add similar logic for Fear and Anger */}
            </>
          )}
          {question === "What's taking up most of your headspace right now?" && (
            <>
              <button onClick={() => onSelect("Work")}>Work</button>
              <button onClick={() => onSelect("Family")}>Family</button>
              <button onClick={() => onSelect("School")}>School</button>
              <button onClick={() => onSelect("Relationships")}>Relationships</button>
            </>
          )}
          <button onClick={handleMultiSelect}>Next</button>
        </div>
      </main>
    </>
  );
}
