import { Flex, styled } from '@styled-system/jsx';
import React, { forwardRef, useId } from 'react';
import type { IconProps } from 'starkds-icons';

export type InputProps = {
  error?: boolean;
  helperText?: string;
  rightIcon?: React.ReactElement<IconProps>;
  label?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { error, helperText, rightIcon, label, ...props },
  ref,
) {
  const id = useId();

  return (
    <Flex flexDirection="column" gap="xxs" width="100%">
      {label && <Label htmlFor={id}>{label}</Label>}
      <InputWrapper>
        <StyledInput error={!!error} id={id} ref={ref} {...props} />
        {rightIcon && <IconWrapper>{rightIcon}</IconWrapper>}
      </InputWrapper>
      {helperText && <HelperText error={!!error}>{helperText}</HelperText>}
    </Flex>
  );
});

const Label = styled('label', {
  base: {
    textStyle: 'textSmRegular',
    color: 'blue.600',
    mb: '4px',
  },
});

const InputWrapper = styled('div', {
  base: {
    position: 'relative',
    width: '100%',
  },
});

const StyledInput = styled('input', {
  base: {
    width: '100%',
    padding: '8px',
    border: '1px solid',
    borderColor: 'gray.300',
    borderRadius: '4px',
    fontSize: 'md',
    '&:focus': {
      outline: 'none',
      borderColor: 'blue.600',
    },
    '&:disabled': {
      backgroundColor: 'gray.100',
      cursor: 'not-allowed',
    },
  },
  variants: {
    error: {
      true: {
        borderColor: 'red.500',
      },
    },
  },
  defaultVariants: {
    error: false,
  },
});

const IconWrapper = styled('div', {
  base: {
    position: 'absolute',
    right: '8px',
    top: '50%',
    transform: 'translateY(-50%)',
    display: 'flex',
    alignItems: 'center',
  },
});

const HelperText = styled('p', {
  base: {
    fontSize: 'sm',
    mt: '4px',
  },
  variants: {
    error: {
      true: {
        color: 'red.500',
      },
      false: {
        color: 'gray.500',
      },
    },
  },
  defaultVariants: {
    error: false,
  },
});
