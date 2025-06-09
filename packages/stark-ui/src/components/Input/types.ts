import type { IconProps } from 'starkds-icons';

export type InputProps = {
  error?: boolean;
  helperText?: string;
  rightIcon?: React.ReactElement<IconProps>;
  label?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;
