import React, { useState } from "react";
import { Quiz, WelcomeBanner, Result } from "components";
import { ResultsContext } from "helpers";
import styles from "./app.module.scss";

function App() {
  const [isWelcome, setIsWelcome] = useState(true);
  const [isChecked, setIsChecked] = useState(false);
  const [results, setResults] = useState<(string | null)[]>([]);
  const [correctAnswers, setCorrectAnswers] = useState(0);

  return (
    <ResultsContext.Provider
      value={{
        results,
        isChecked,
        correctAnswers,
        setResults,
        setIsChecked,
        setCorrectAnswers,
      }}
    >
      <div className={styles.app}>
        {isWelcome ? (
          <WelcomeBanner setIsWelcome={setIsWelcome} />
        ) : isChecked ? (
          <Result
            numberOfCorrectAnswers={correctAnswers}
            numberOfAnswers={results.length}
          />
        ) : (
          <Quiz />
        )}
      </div>
    </ResultsContext.Provider>
  );
}

export default App;
