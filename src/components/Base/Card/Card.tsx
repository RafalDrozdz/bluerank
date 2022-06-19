import { CardPropsI } from "./card.types";
import styles from "./card.module.scss";

function Card({ children, className }: CardPropsI) {
  return (
    <div
      className={`${styles["base-card"]}${className ? " " + className : ""}`}
    >
      {children}
    </div>
  );
}

export default Card;
