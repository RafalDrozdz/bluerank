import { SelectListPropsI } from "./selectList.types";
import { SelectListItemI } from "../select.types";
import styles from "./selectList.module.scss";

function SelectList({ selectedId, list, setId, setIsOpen }: SelectListPropsI) {
  const handleClick = (id: number) => {
    setId(id);
    setIsOpen(false);
  };

  return (
    <ul className={styles["base-select__list"]}>
      {list.map((item: SelectListItemI) => (
        <li className={styles["base-select__list-item"]} key={item.id}>
          <button
            onClick={() => handleClick(item.id)}
            className={`${styles["base-select__list-btn"]}${
              item.id === selectedId
                ? ` ${styles["base-select__list-btn--active"]}`
                : ""
            }`}
            dangerouslySetInnerHTML={{ __html: item.text }}
          />
        </li>
      ))}
    </ul>
  );
}

export default SelectList;
