import { CardPropsI } from "./card.types";
import styles from "./card.module.scss";
import { additionalClass } from "utils/css.utils";

function Card({ children, className }: CardPropsI) {
  return (
    <div className={`${styles["base-card"]}${additionalClass(className)}`}>
      {children}
    </div>
  );
}

export default Card;
