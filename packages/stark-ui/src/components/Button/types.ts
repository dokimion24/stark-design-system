import type { CSSProperties, ElementType, ReactNode } from 'react';

import type { PolymorphicComponentPropsWithRef } from '@/types';

export type ButtonProps = {
  children: ReactNode;
  disabled?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  icon?: ReactNode;
  style?: CSSProperties;
  className?: string;
};

export type PolymorphicButtonProps<C extends ElementType> = PolymorphicComponentPropsWithRef<
  C,
  ButtonProps
>;

export type ButtonComponent = <C extends ElementType = 'button'>(
  props: PolymorphicButtonProps<C>,
) => ReactNode;
