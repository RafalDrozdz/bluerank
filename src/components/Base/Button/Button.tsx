import { ButtonPropsI } from "components/Base/Button/button.types";
import styles from "./button.module.scss";

function Button({ children, className, onClick }: ButtonPropsI) {
  return (
    <button
      className={`${styles["base-button"]}${className ? " " + className : ""}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
