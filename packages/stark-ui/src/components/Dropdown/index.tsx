'use client';

import { cva } from '@styled-system/css/cva';
import { styled } from '@styled-system/jsx';
import {
  cloneElement,
  createContext,
  type ForwardedRef,
  forwardRef,
  useContext,
  useMemo,
  useRef,
  useState,
} from 'react';
import { ChevronDown } from 'starkds-icons';

import { generateUniqueId } from '@/utils/generate';

import { Portal } from '../utils/Portal';
import { useClick, useKeyDown, useOptionListPosition } from './hooks';
import type {
  DefaultDropdownValue,
  DropdownBarProps,
  DropdownProps,
  DropdownTypes,
  OptionListProps,
  OptionProps,
} from './types';

const DropdownContext = createContext<
  Pick<
    DropdownTypes<never>,
    'container' | 'triggerRef' | 'optionListRef' | 'expanded' | 'disabled' | 'close' | 'onChange'
  >
>({
  container: null,
  triggerRef: null,
  optionListRef: null,
  expanded: false,
  disabled: false,
  close: () => null,
  onChange: () => null,
});

export const Dropdown = <T extends string = DefaultDropdownValue>({
  children,
  onChange,
  disabled = false,
  multiple = false,
  isOpen,

  onClose,
}: DropdownProps<T>) => {
  const triggerRef = useRef<HTMLElement>(null);
  const optionListRef = useRef<HTMLUListElement>(null);

  const [container, setContainer] = useState<DropdownTypes['container']>(null);
  const isControlled = typeof isOpen === 'boolean';
  const expanded = isControlled ? isOpen : container !== null;
  const uniqueId = useMemo(() => generateUniqueId(), []);

  const open = () => {
    if (isControlled) return;
    const newContainer = document.createElement('div');
    newContainer.id = uniqueId;
    document.body.appendChild(newContainer);
    setContainer(newContainer);
  };

  const close = () => {
    if (isControlled) {
      onClose?.();
      return;
    }
    const container = document.getElementById(uniqueId);
    container?.remove();
    setContainer(null);
  };

  const toggle = () => {
    expanded ? close() : open();
  };

  useOptionListPosition({ container, triggerRef, optionListRef });
  useClick({ triggerRef, optionListRef, expanded, close, toggle, onChange, disabled, multiple });
  useKeyDown({ triggerRef, optionListRef, expanded, close, toggle, onChange, disabled, multiple });

  return (
    <DropdownContext.Provider
      value={
        { container, triggerRef, optionListRef, expanded, disabled, close, onChange } as Pick<
          DropdownTypes<T>,
          | 'container'
          | 'triggerRef'
          | 'optionListRef'
          | 'expanded'
          | 'disabled'
          | 'close'
          | 'onChange'
        >
      }
    >
      {children}
    </DropdownContext.Provider>
  );
};

const DropdownTrigger = ({ children }: { children: React.ReactElement }) => {
  const { triggerRef, expanded, disabled } = useContext(DropdownContext);

  return cloneElement(children, {
    ...children.props,
    'data-expanded': expanded,
    disabled,
    ref: triggerRef,
  });
};

const DropdownBar = forwardRef(
  (
    { value, placeholder = '선택하세요.', disabled = false, ...props }: DropdownBarProps,
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    console.log(props);
    return (
      <styled.div
        aria-disabled={disabled}
        className={BarStyle()}
        ref={ref}
        role="button"
        tabIndex={disabled ? -1 : 0}
        {...props}
      >
        <span aria-placeholder={value ? undefined : placeholder}>{value || placeholder}</span>
        <ChevronDown className="arrowIcon" stroke="placeholder" />
      </styled.div>
    );
  },
);

const DropdownOptionList = ({ children, zIndex = 10, ...props }: OptionListProps) => {
  const { container, optionListRef } = useContext(DropdownContext);

  return (
    <Portal container={container}>
      <styled.ul
        className={OptionListStyle()}
        ref={optionListRef}
        role="listbox"
        style={{ zIndex }}
        {...props}
      >
        {children}
      </styled.ul>
    </Portal>
  );
};

const DropdownOption = ({
  value,
  label,
  selected = false,
  disabled = false,
  ...props
}: OptionProps) => {
  return (
    <styled.li
      {...props}
      aria-disabled={disabled}
      aria-selected={selected}
      className={OptionStyle()}
      data-value={value}
      key={value}
      role="option"
      tabIndex={selected ? 0 : -1}
    >
      {label ?? value}
    </styled.li>
  );
};

const DropdownListSubHeader = ({ children, ...props }: React.HTMLAttributes<HTMLLIElement>) => {
  return (
    <styled.li aria-selected={false} role="listitem" tabIndex={-1} {...props}>
      {children}
    </styled.li>
  );
};

Dropdown.Trigger = DropdownTrigger;
Dropdown.ListSubHeader = DropdownListSubHeader;
Dropdown.Bar = DropdownBar;
Dropdown.OptionList = DropdownOptionList;
Dropdown.Option = DropdownOption;

const BarStyle = cva({
  base: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    position: 'relative',
    width: '100%',
    borderWidth: '1px',
    borderColor: 'border',
    py: 'lg',
    px: 'xl',
    borderRadius: 'md',
    backgroundColor: 'white',
    cursor: 'pointer',

    '& span': {
      color: 'textBlack',
      '&[aria-placeholder]': {
        color: 'placeholder',
      },
    },

    '& .arrowIcon': {
      pointerEvents: 'none',
      transition: 'transform 250ms',
      willChange: 'transform',
    },

    '&[data-expanded="true"]': {
      borderWidth: '1px',
      borderColor: 'focusBorder',
      '& .arrowIcon': {
        transform: 'rotate(180deg)',
      },
    },

    '&[aria-disabled="true"]': {
      backgroundColor: 'disabledBackground',
      cursor: 'not-allowed',
      '& span': {
        color: 'disabledText',
      },
    },

    _focus: {
      outline: 'none',
    },

    _focusVisible: {
      outline: '2px solid',
      outlineColor: 'primary',
    },
  },
});

const OptionListStyle = cva({
  base: {
    position: 'absolute',
    transformOrigin: 'center top',
    opacity: '0',
    transform: 'scale(0.75)',
    transition:
      'opacity 250ms cubic-bezier(0.4, 0, 0.2, 1), transform 150ms cubic-bezier(0.4, 0, 0.2, 1)',

    boxShadow: 'skeuomorphicShadow',
    backgroundColor: 'white',

    borderWidth: '1px',
    borderColor: 'border',
    borderRadius: 'md',

    maxHeight: '20rem',
    overflowY: 'auto',
    px: 'sm',
  },
});

export const OptionStyle = cva({
  base: {
    display: 'flex',
    alignItems: 'center',
    py: 'lg',
    px: 'md',
    borderRadius: 'sm',
    cursor: 'pointer',

    '&[aria-selected="true"]': {
      color: 'blue500',
      backgroundColor: 'activeBackground',
    },
  },
});
