'use client';

import { css, cva } from '@styled-system/css';
import React, { useEffect, useMemo, useRef } from 'react';

import type { ToastItem, ToastPosition } from './types';

const ANIMATION_DURATION = 300;

export interface ToastBarProps {
  toastItem: ToastItem;
  onRemoveToastItem: (id: string) => void;
  onEmitElementHeight: (id: string, height: number) => void;
  offsetY: number;
  duration: number;
  position: ToastPosition;
}

export const ToastBar = ({
  toastItem,
  onRemoveToastItem,
  onEmitElementHeight,
  offsetY,
  duration,
  position,
}: ToastBarProps): React.ReactElement => {
  const toastDuration = useMemo(() => duration + ANIMATION_DURATION, [duration]);
  const toastBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (toastBarRef.current) {
      const measuredHeight = toastBarRef.current.getBoundingClientRect().height;
      onEmitElementHeight(toastItem.id, measuredHeight);
    }
  }, [toastItem.id, onEmitElementHeight]);

  useEffect(() => {
    if (toastBarRef.current) {
      toastBarRef.current.style.opacity = '1';
    }

    const removeTimeout = setTimeout(() => {
      onRemoveToastItem(toastItem.id);
    }, toastDuration);

    const opacityTimeout = setTimeout(() => {
      if (toastBarRef.current) {
        toastBarRef.current.style.opacity = '0';
      }
    }, toastDuration - ANIMATION_DURATION);

    return () => {
      clearTimeout(removeTimeout);
      clearTimeout(opacityTimeout);
    };
  }, [toastItem.id, onRemoveToastItem, toastDuration]);

  return (
    <div
      aria-live="polite"
      className={toastItemStyle()}
      ref={toastBarRef}
      role="alert"
      style={{
        position: 'absolute',
        [position]: offsetY + 16,
        transition: 'opacity 0.3s, transform 0.3s',
        opacity: 0,
      }}
    >
      <div className={toastStyle({ type: toastItem.type })}>
        <div className={toastContentStyle}>
          {toastItem.title && <h3 className={toastTitleStyle}>{toastItem.title}</h3>}
          <p className={toastDescriptionStyle}>{toastItem.message}</p>
        </div>
        <button
          aria-label="닫기"
          className={closeButtonStyle}
          type="button"
          onClick={() => onRemoveToastItem(toastItem.id)}
        >
          ✕
        </button>
      </div>
    </div>
  );
};

const toastItemStyle = cva({
  base: {
    left: '50%',
    transform: 'translateX(-50%)',
    transition: 'all 0.2s ease-out',
  },
});

const toastStyle = cva({
  base: {
    display: 'flex',
    backgroundColor: 'white',
    borderRadius: 'md',
    boxShadow: 'lg',
    px: 'xl',
    py: 'xl',
    pointerEvents: 'auto',
    minWidth: '340px',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: 'green.50',
  },
  variants: {
    type: {
      success: {},
      error: {},
      warning: {},
      info: {},
    },
  },
  defaultVariants: { type: 'info' },
});

const toastContentStyle = css({
  display: 'flex',
  flexDirection: 'column',
  gap: 'xs',
  flex: 1,
});

const toastTitleStyle = css({
  fontStyle: '',
});

const toastDescriptionStyle = css({
  fontSize: 'sm',
  color: 'gray.700',
});

const closeButtonStyle = css({
  alignSelf: 'flex-start',
  color: 'gray.500',
  cursor: 'pointer',
  marginLeft: 'sm',
});
