import { useState } from "react";
import { Card } from "components";

import styles from "./quiz.module.scss";

function Quiz() {
  const [actualQuestion, setActualQuestion] = useState(1);

  return <Card className={styles.quiz}></Card>;
}

export default Quiz;
