export type CheckboxProps = {
  name: string;
  checked?: boolean | 'checked' | 'unchecked' | 'intermediate';
  disabled?: boolean;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, 'checked'>;
