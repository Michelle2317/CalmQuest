// ChildQuestions.js
import styles from "@/styles/Home.module.css";
import { useState } from "react";

export default function ChildQuestions({ step, onSelect, onNextStep, onPreviousStep }) {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    onSelect(option);
  };

  const handleSubmit = () => {
    if (step < 4) {
      onNextStep();
    } else {
      // Handle submit for the final step
    }
  };

  return (
    <>
      {step === 1 && (
        <div>
          {/* UI for question 1 */}
          <button onClick={() => handleOptionSelect("Option 1")}>Option 1</button>
          <button onClick={() => handleOptionSelect("Option 2")}>Option 2</button>
        </div>
      )}
      {step === 2 && (
        <div>
          {/* UI for question 2 */}
          <button onClick={() => handleOptionSelect("Option 1")}>Option 1</button>
          <button onClick={() => handleOptionSelect("Option 2")}>Option 2</button>
        </div>
      )}
      {step === 3 && (
        <div>
          {/* UI for question 3 */}
          <button onClick={() => handleOptionSelect("Option 1")}>Option 1</button>
          <button onClick={() => handleOptionSelect("Option 2")}>Option 2</button>
        </div>
      )}
      {step === 4 && (
        <div>
          {/* UI for question 4 */}
          <button onClick={() => handleOptionSelect("Option 1")}>Option 1</button>
          <button onClick={() => handleOptionSelect("Option 2")}>Option 2</button>
        </div>
      )}
      <div className={styles.buttonContainer}>
        {step > 1 && (
          <button onClick={onPreviousStep}>Back</button>
        )}
        <button onClick={handleSubmit}>{step === 4 ? "Submit" : "Next"}</button>
      </div>
    </>
  );
}
