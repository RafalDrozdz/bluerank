import { useMemo, useRef, useState } from "react";
import { SelectBtn, SelectList } from "components";
import { useTranslation } from "react-i18next";
import { SelectListItemI, SelectPropsI } from "./select.types";
import styles from "./select.module.scss";
import { useOutside } from "hooks";

function Select({ list, selectedId, setId }: SelectPropsI) {
  const { t } = useTranslation();
  const selectRef = useRef<HTMLDivElement>(null);
  useOutside(selectRef, () => setIsOpen(false));

  const [isOpen, setIsOpen] = useState(false);
  const selectedText = useMemo(
    () =>
      list.find((item: SelectListItemI) => item.id === selectedId)?.text ??
      t("selectValue"),
    [selectedId, list]
  );
  return (
    <div className={styles["base-select"]} ref={selectRef}>
      <SelectBtn
        isOpen={isOpen}
        selectedText={selectedText}
        setIsOpen={setIsOpen}
      />
      {isOpen && (
        <SelectList
          list={list}
          selectedId={selectedId}
          setId={setId}
          setIsOpen={setIsOpen}
        />
      )}
    </div>
  );
}

export default Select;
