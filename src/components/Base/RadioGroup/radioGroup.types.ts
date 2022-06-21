export interface RadioGroupPropsI {
  list: RadioGroupItemI[];
  name: string;
  selectedId: string | null;
  setSelectedId: (id: string) => void;
}

export interface RadioGroupItemI {
  id: string;
  label: string;
}
