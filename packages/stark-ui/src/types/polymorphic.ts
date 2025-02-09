import type { ComponentPropsWithoutRef, ComponentPropsWithRef, ElementType } from 'react';

export interface AsProp<T extends ElementType> {
  as?: T;
}

export type PolymorphicRef<T extends ElementType> = ComponentPropsWithRef<T>['ref'];

export type PolymorphicComponentPropsWithoutRef<T extends ElementType, Props = {}> = AsProp<T> &
  Props &
  Omit<ComponentPropsWithoutRef<T>, keyof Props>;

export type PolymorphicComponentPropsWithRef<
  T extends ElementType,
  Props = {},
> = PolymorphicComponentPropsWithoutRef<T, Props> & {
  ref?: PolymorphicRef<T>;
};
