import { cva } from '@styled-system/css/cva';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'danger';
  children?: React.ReactNode;
}

export const Button = ({ variant = 'primary', children = 'button' }: ButtonProps) => {
  return <button className={ButtonStyle({ variant })}>{children}</button>;
};

const ButtonStyle = cva({
  base: {
    padding: '8px 16px',
    fontSize: '16px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  variants: {
    variant: {
      primary: {
        backgroundColor: '#007bff',
        color: 'white',
      },
      secondary: {
        backgroundColor: '#6c757d',
        color: 'white',
      },
      danger: {
        backgroundColor: '#dc3545',
        color: 'white',
      },
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
});
