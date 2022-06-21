import { RadioPropsI } from "./radio.types";
import styles from "./radio.module.scss";

function Radio({ id, name, label, checked, onChange }: RadioPropsI) {
  return (
    <div
      className={`${styles["base-radio"]}${
        checked ? ` ${styles["base-radio--active"]}` : ""
      }`}
    >
      <input
        type="radio"
        id={id}
        name={name}
        checked={checked}
        onChange={onChange}
      />
      <label htmlFor={id} dangerouslySetInnerHTML={{ __html: label }} />
    </div>
  );
}

export default Radio;
