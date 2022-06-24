import { SelectBtnPropsI } from "./selectBtn.types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import styles from "./selectBtn.module.scss";

function SelectBtn({ isOpen, selectedText, setIsOpen }: SelectBtnPropsI) {
  return (
    <button
      className={styles["base-select__btn"]}
      onClick={() => setIsOpen(!isOpen)}
    >
      <span
        className={styles["base-select__btn-text"]}
        dangerouslySetInnerHTML={{ __html: selectedText }}
      />
      <FontAwesomeIcon
        icon={faChevronDown}
        aria-hidden="true"
        className={`${styles["base-select__btn-arrow"]}${
          isOpen ? ` ${styles["base-select__btn-arrow--active"]}` : ""
        }`}
      />
    </button>
  );
}

export default SelectBtn;
