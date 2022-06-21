export interface RadioPropsI {
  id: string;
  name: string;
  label: string;
  checked: boolean;
  onChange: () => void;
}
