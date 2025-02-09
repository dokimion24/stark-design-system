'use client';

import { cva } from '@styled-system/css/cva';
import { styled } from '@styled-system/jsx';
import type { CSSProperties, ElementType, ReactNode } from 'react';
import { forwardRef } from 'react';

import type { PolymorphicComponentPropsWithRef, PolymorphicRef } from '@/types';

export interface ButtonProps {
  children: ReactNode;
  disabled?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  icon?: ReactNode;
  style?: CSSProperties;
  className?: string;
}

type PolymorphicButtonProps<C extends ElementType> = PolymorphicComponentPropsWithRef<
  C,
  ButtonProps
>;

type ButtonComponent = <C extends ElementType = 'button'>(
  props: PolymorphicButtonProps<C>,
) => ReactNode;

const Button: ButtonComponent & { displayName?: string } = forwardRef(
  <C extends ElementType = 'button'>(
    {
      as,
      children,
      disabled = false,
      size = 'lg',
      variant = 'primary',
      icon,
      ...props
    }: PolymorphicButtonProps<C>,
    ref?: PolymorphicRef<C>,
  ) => {
    const Component = as || 'button';

    return (
      <Component
        aria-disabled={disabled}
        className={ButtonStyle({ size, variant })}
        disabled={disabled}
        ref={ref}
        {...props}
      >
        <styled.span className={ContentStyle({ size })}>
          {icon}
          {children}
        </styled.span>
      </Component>
    );
  },
);

const ButtonStyle = cva({
  base: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    boxShadow: 'skeuomorphicShadow',
    _disabled: {
      background: 'disabledBackground',
      color: 'disabledText',
      pointerEvents: 'none',
      cursor: 'not-allowed',
    },
    _active: {
      transform: 'scale(0.95)',
    },
  },
  variants: {
    size: {
      '2xl': {
        py: 'xl',
        px: '3xl',
        borderRadius: 'lg',
      },
      xl: {
        py: 'lg',
        px: '2xl',
        borderRadius: 'md',
      },
      lg: {
        py: 'md',
        px: 'xl',
        borderRadius: 'md',
      },
      md: {
        py: 'md',
        px: 'lg',
        borderRadius: 'md',
      },
      sm: {
        py: 'sm',
        px: 'lg',
        borderRadius: 'md',
      },
    },
    variant: {
      primary: {
        background: 'primary',
        color: 'textWhite',
        borderWidth: '1px',
        borderColor: 'primaryBorder',
        _hover: {
          background: 'primaryHoverBackground',
        },
      },
      secondary: {
        background: 'secondary',
        color: 'textWhite',
        borderWidth: '1px',
        borderColor: 'secondaryBorder',
        _hover: {
          background: 'secondaryHoverBackground',
        },
      },
      outline: {
        background: 'white',
        color: 'whiteBlack',
        borderWidth: '1px',
        borderColor: 'border',
        _hover: {
          background: 'outlineHoverBackground',
        },
      },
      ghost: {
        background: 'white',
        shadow: 'none',
        color: 'secondary',
        _hover: {
          color: 'secondaryHoverBackground',
        },
      },
    },
  },
  compoundVariants: [
    {
      size: 'sm',
      variant: 'outline',
      css: {
        borderColor: 'outline',
        color: 'textBlack',
        _hover: {
          borderColor: 'textBlack',
          color: 'textBlack',
        },
      },
    },
  ],
});

const ContentStyle = cva({
  base: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  variants: {
    size: {
      '2xl': { gap: 'sm', textStyle: 'textLgSemibold' },
      xl: { gap: 'sm', textStyle: 'textMdSemibold' },
      lg: { gap: 'xs', textStyle: 'textMdSemibold' },
      md: { gap: 'xs', textStyle: 'textSmSemibold' },
      sm: { gap: 'xxs', textStyle: 'textSmSemibold' },
    },
  },
});

Button.displayName = 'Button';
export default Button;
