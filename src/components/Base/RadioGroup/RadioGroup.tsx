import {
  RadioGroupItemI,
  RadioGroupPropsI,
} from "components/Base/RadioGroup/radioGroup.types";
import { Radio } from "components";
import styles from "./radioGroup.module.scss";

function RadioGroup({
  list,
  name,
  selectedId,
  setSelectedId,
}: RadioGroupPropsI) {
  const RadioList = list.map(({ id, label }: RadioGroupItemI) => (
    <Radio
      id={id}
      key={id}
      name={name}
      label={label}
      checked={selectedId === id}
      onChange={() => setSelectedId(id)}
    />
  ));

  return <div className={styles["radio-group"]}>{RadioList}</div>;
}

export default RadioGroup;
