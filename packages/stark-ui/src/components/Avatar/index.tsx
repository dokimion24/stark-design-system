import { cva } from '@styled-system/css';
import type { ElementType } from 'react';
import { forwardRef } from 'react';
import { User } from 'starkds-icons';

import type { PolymorphicRef } from '@/types/polymorphic';

import type { AvatarComponent, AvatarProps } from './types';

const AvatarContainerStyle = cva({
  base: {
    borderRadius: 'full',
    borderWidth: '1px',
    borderColor: 'border',
    height: 'fit-content',
    width: 'fit-content',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  variants: {
    size: {
      sm: { gap: '8px' },
      md: { gap: '12px' },
      lg: { gap: '16px' },
      xl: { gap: '20px' },
    },
  },
});

const AvatarStyle = cva({
  base: {
    objectFit: 'cover',
    borderRadius: 'full',
    borderWidth: '1px',
    borderColor: 'border',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  variants: {
    size: {
      sm: { width: '2rem', height: '2rem' },
      md: { width: '2.5rem', height: '2.5rem' },
      lg: { width: '3rem', height: '3rem' },
      xl: { width: '3.5rem', height: '3.5rem' },
    },
  },
});

const AvatarIconStyle = cva({
  variants: {
    size: {
      sm: { width: '1.25rem', height: '1.25rem' },
      md: { width: '1.5rem', height: '1.5rem' },
      lg: { width: '1.75rem', height: '1.75rem' },
      xl: { width: '2rem', height: '2rem' },
    },
  },
});

const AvatarBadgeStyle = cva({
  base: {
    position: 'absolute',
    bottom: '0',
    right: '0',
    bg: 'white',
    borderRadius: 'full',
    border: '1px solid',
    borderColor: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  variants: {
    size: {
      sm: { width: '0.625rem', height: '0.625rem' },
      md: { width: '0.75rem', height: '0.75rem' },
      lg: { width: '0.875rem', height: '0.875rem' },
      xl: { width: '1rem', height: '1rem' },
    },
  },
});

export const Avatar: AvatarComponent = forwardRef(
  <T extends ElementType = 'div'>(
    { as, size = 'lg', ImageComponent, imageUrl, badgeIcon, ...props }: AvatarProps<T>,
    ref: PolymorphicRef<T>,
  ) => {
    const Component = as || 'div';

    return (
      <Component
        ref={ref}
        style={{ position: 'relative' }}
        className={AvatarContainerStyle({
          size,
        })}
        {...props}
      >
        {ImageComponent ? (
          <ImageComponent className={AvatarStyle({ size })} />
        ) : imageUrl ? (
          <img alt="avatar" className={AvatarStyle({ size })} src={imageUrl} />
        ) : (
          <div aria-hidden={!!imageUrl} className={AvatarStyle({ size })}>
            <User className={AvatarIconStyle({ size })} />
          </div>
        )}
        {badgeIcon && <div className={AvatarBadgeStyle({ size })}>{badgeIcon}</div>}
      </Component>
    );
  },
);

export type { AvatarProps };
