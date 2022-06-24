export interface SelectPropsI {
  list: SelectListItemI[];
  selectedId: number | null;
  setId: (value: number) => void;
}

export interface SelectListItemI {
  id: number;
  text: string;
}
