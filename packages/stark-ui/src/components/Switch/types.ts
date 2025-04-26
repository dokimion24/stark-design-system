export type SwitchProps = { size?: 'sm' | 'md' } & Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'size'
>;
