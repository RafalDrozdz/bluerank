import { LoaderPropsI } from "./loader.types";
import { additionalClass } from "utils/css.utils";
import styles from "./loader.module.scss";

function Loader({ className }: LoaderPropsI) {
  return (
    <span className={`${styles["base-loader"]}${additionalClass(className)}`} />
  );
}

export default Loader;
