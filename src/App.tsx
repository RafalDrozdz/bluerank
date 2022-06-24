import React, { useState } from "react";
import { Quiz, WelcomeBanner, Result } from "components";
import { ResultsContext } from "helpers";
import styles from "./app.module.scss";

function App() {
  const [isWelcome, setIsWelcome] = useState(true);
  const [isChecked, setIsChecked] = useState(false);
  const [results, setResults] = useState<(string | null)[]>([]);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [rerender, setRerender] = useState(new Date().toISOString());

  return (
    <ResultsContext.Provider
      value={{
        results,
        isChecked,
        correctAnswers,
        rerender,
        setResults,
        setIsChecked,
        setCorrectAnswers,
        setRerender,
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
          <Quiz key={rerender} />
        )}
      </div>
    </ResultsContext.Provider>
  );
}

export default App;
