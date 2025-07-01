'use client';

import { cva } from '@styled-system/css';
import { Flex, styled } from '@styled-system/jsx';
import { forwardRef, useId, useState } from 'react';
import { Check, Minus } from 'starkds-icons';

import type { CheckboxProps } from './types';

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(function Checkbox(
  {
    children,
    name,
    checked: controlledChecked,
    defaultChecked = false,
    onChange,
    disabled,
    ...props
  },
  ref,
) {
  const isControlled = controlledChecked !== undefined;

  const [internalChecked, setInternalChecked] = useState<CheckboxProps['checked']>(defaultChecked);

  const checked = isControlled ? controlledChecked : internalChecked;

  const isChecked: boolean =
    typeof checked === 'boolean' ? checked : checked === 'checked' || checked === 'unchecked';
  const isIntermediate: boolean = checked === 'intermediate';

  const id = useId();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let newValue: CheckboxProps['checked'];
    if (checked === false || checked === 'unchecked' || checked === 'intermediate') {
      newValue = 'checked';
    } else {
      newValue = false;
    }
    if (!isControlled) {
      setInternalChecked(newValue);
    }
    onChange?.(e);
  };

  return (
    <styled.label
      alignItems="center"
      cursor={disabled ? 'not-allowed' : 'pointer'}
      display="flex"
      gap="md"
      htmlFor={id}
      pointerEvents={disabled ? 'none' : 'auto'}
    >
      <Flex alignItems="center" position="relative">
        <styled.input
          aria-disabled={disabled}
          aria-label={id}
          checked={isChecked}
          disabled={disabled}
          id={id}
          name={name}
          ref={ref}
          role="checkbox"
          type="checkbox"
          className={CheckboxStyle({
            type: disabled
              ? isIntermediate
                ? 'intermediate-disabled'
                : isChecked
                  ? 'checked-disabled'
                  : 'disabled'
              : isIntermediate
                ? 'intermediate'
                : isChecked
                  ? 'checked'
                  : 'default',
          })}
          onChange={handleChange}
          {...props}
        />
        {isChecked && (
          <styled.div left="50%" position="absolute" top="50%" transform="translate(-50%, -50%)">
            <Check height={16} stroke={disabled ? 'disabledBorder' : 'white'} width={16} />
          </styled.div>
        )}
        {isIntermediate && (
          <styled.div left="50%" position="absolute" top="50%" transform="translate(-50%, -50%)">
            <Minus height={16} stroke={disabled ? 'disabledBorder' : 'white'} width={16} />
          </styled.div>
        )}
      </Flex>
      <styled.span textStyle="textMdMedium">{children}</styled.span>
    </styled.label>
  );
});

const CheckboxStyle = cva({
  base: {
    appearance: 'none',
    width: '1.25rem',
    height: '1.25rem',
    borderRadius: 'sm',
    border: '1px solid',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    outline: 'none',
    position: 'relative',
    cursor: 'inherit',
    borderColor: 'border',
  },
  variants: {
    type: {
      default: {
        bg: 'white',
      },
      checked: {
        bg: 'primary',
      },
      intermediate: {
        bg: 'primary',
      },
      disabled: {
        bg: 'disabledBackground',
        borderColor: 'disabledBorder',
      },
      'checked-disabled': {
        bg: 'disabledBackground',
        borderColor: 'disabledBorder',
      },
      'intermediate-disabled': {
        bg: 'disabledBackground',
        borderColor: 'disabledBorder',
      },
    },
  },
  defaultVariants: {
    type: 'default',
  },
});

export type { CheckboxProps };
