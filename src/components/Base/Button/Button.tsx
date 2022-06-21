import { useEffect, useMemo, useState } from "react";
import { ButtonPropsI } from "components/Base/Button/button.types";
import { additionalClass } from "utils/css.utils";
import styles from "./button.module.scss";

function Button({ children, className, disabled, onClick }: ButtonPropsI) {
  const [isMouseDown, setIsMouseDown] = useState(false);
  const classes = useMemo(
    () =>
      `${styles["base-button"]}${additionalClass(className)}${
        isMouseDown ? ` ${styles["base-button--active"]}` : ""
      }${disabled ? ` ${styles["base-button--disabled"]}` : ""}`,
    [isMouseDown, className, disabled]
  );
  const setIsMouseDownFalsy = () => setIsMouseDown(false);

  useEffect(() => {
    document.addEventListener("mouseup", setIsMouseDownFalsy);
    return () => {
      document.removeEventListener("mouseup", setIsMouseDownFalsy);
    };
  }, []);

  return (
    <button
      className={classes}
      disabled={!!disabled}
      onClick={onClick}
      onMouseDown={() => setIsMouseDown(true)}
      onTouchStart={() => setIsMouseDown(true)}
      onMouseUp={() => setIsMouseDown(false)}
      data-text={children}
    />
  );
}

export default Button;
