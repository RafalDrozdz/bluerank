import { MouseEventHandler, ReactNode } from "react";

export interface ButtonPropsI {
  children?: ReactNode | ReactNode[];
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
}
