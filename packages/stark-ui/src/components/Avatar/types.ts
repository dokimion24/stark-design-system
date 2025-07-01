import type { ElementType, PropsWithChildren, ReactNode } from 'react';

import type {
  PolymorphicComponentPropsWithoutRef,
  PolymorphicComponentPropsWithRef,
} from '@/types/polymorphic';

export type AvatarPropsBase = {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  ImageComponent?: ElementType;
  imageUrl?: string;
  badgeIcon?: ReactNode;
};

export type AvatarProps<T extends ElementType> = PolymorphicComponentPropsWithoutRef<
  T,
  AvatarPropsBase
> &
  PropsWithChildren;

export type AvatarComponent = <T extends ElementType = 'div'>(
  props: PolymorphicComponentPropsWithRef<T, AvatarProps<T>>,
) => ReactNode;
