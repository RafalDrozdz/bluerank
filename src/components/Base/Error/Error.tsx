import { ErrorPropsI } from "./error.types";
import styles from "./error.module.scss";
import { useTranslation } from "react-i18next";
import { additionalClass } from "utils/css.utils";

function Error({ className }: ErrorPropsI) {
  const { t } = useTranslation();
  return (
    <span className={`${styles["base-error"]}${additionalClass(className)}`}>
      {t("somethingWentWrong")}
    </span>
  );
}

export default Error;
