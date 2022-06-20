import { RadioPropsI } from "./radio.types";
import styles from "./radio.module.scss";

function Radio({ id, name, label, checked }: RadioPropsI) {
  return (
    <div
      className={`${styles["base-radio"]}${
        checked ? ` ${styles["base-radio--active"]}` : ""
      }`}
    >
      <input type="radio" id={id} name={name} checked={checked} />
      <label htmlFor={id}>{label}</label>
    </div>
  );
}

export default Radio;
