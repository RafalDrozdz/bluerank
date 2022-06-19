import { CardPropsI } from "./card.types";
import styles from "./card.module.scss";

function Card({ children }: CardPropsI) {
  return <div className={styles["base-card"]}>{children}</div>;
}

export default Card;
