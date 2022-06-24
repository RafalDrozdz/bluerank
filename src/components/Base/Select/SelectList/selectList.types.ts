import { SelectListItemI } from "components/Base/Select/select.types";

export interface SelectListPropsI {
  list: SelectListItemI[];
  selectedId: number | null;
  setId: (value: number) => void;
  setIsOpen: (value: boolean) => void;
}
