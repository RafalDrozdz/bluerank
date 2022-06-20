import React, { useState } from "react";
import { Quiz, WelcomeBanner } from "components";
import styles from "./app.module.scss";

function App() {
  const [isWelcome, setIsWelcome] = useState(true);
  return (
    <div className={styles.app}>
      {isWelcome ? <WelcomeBanner setIsWelcome={setIsWelcome} /> : <Quiz />}
    </div>
  );
}

export default App;
