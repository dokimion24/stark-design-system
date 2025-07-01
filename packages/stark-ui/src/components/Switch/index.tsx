'use client';

import { styled } from '@styled-system/jsx';
import { forwardRef, useId } from 'react';

import type { SwitchProps } from './types';

export const Switch = forwardRef<HTMLInputElement, SwitchProps>(function (
  { checked, onChange, disabled, size = 'md', ...props },
  ref,
) {
  const defaultId = `switch-${useId()}`;
  const id = props?.id ?? defaultId;

  return (
    <Label checked={checked} disabled={disabled} htmlFor={id} size={size}>
      <HiddenCheckbox
        aria-disabled={disabled}
        checked={checked}
        id={id}
        ref={ref}
        type="checkbox"
        onChange={onChange}
        {...props}
      />
      {/* Thumb에 size prop 전달 */}
      <Thumb checked={checked} size={size} />
    </Label>
  );
});

const Label = styled('label', {
  base: {
    position: 'relative',
    display: 'inline-flex',
    alignItems: 'center',
    cursor: 'pointer',
    borderRadius: 'full',
    transition: 'background-color 0.3s ease',
  },
  variants: {
    checked: {
      true: {
        bg: 'backgroundActive',
      },
      false: {
        bg: 'backgroundInActive',
      },
    },
    disabled: {
      true: {
        cursor: 'not-allowed',
        opacity: 0.6,
      },
    },
    size: {
      sm: {
        width: '2.25rem',
        height: '1.25rem',
      },
      md: {
        width: '2.75rem',
        height: '1.5rem',
      },
    },
  },
  defaultVariants: {
    size: 'md',
    checked: false,
  },
});

const HiddenCheckbox = styled('input', {
  base: {
    opacity: 0,
    width: 0,
    height: 0,
    overflow: 'hidden',
    position: 'absolute',
    cursor: 'inherit',
  },
});

const Thumb = styled('span', {
  base: {
    position: 'absolute',
    borderRadius: 'full',
    top: '0.125rem',
    left: '0.125rem',
    boxShadow: 'skeuomorphicShadow',
    transition: 'transform 0.3s ease, background-color 0.3s ease',
    bg: 'backgroundNormal',
  },
  variants: {
    size: {
      sm: {
        width: '1rem',
        height: '1rem',
      },
      md: {
        width: '1.25rem',
        height: '1.25rem',
      },
    },
    checked: {
      true: {},
      false: {
        transform: 'translateX(0)',
      },
    },
  },
  compoundVariants: [
    {
      size: 'sm',
      checked: true,
      css: {
        transform: 'translateX(1rem)',
      },
    },
    {
      size: 'md',
      checked: true,
      css: {
        transform: 'translateX(1.25rem)',
      },
    },
  ],
  defaultVariants: {
    size: 'md',
    checked: false,
  },
});

export type { SwitchProps };
