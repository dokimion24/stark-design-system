'use client';

import { css } from '@styled-system/css';
import React, { useEffect, useMemo, useRef } from 'react';
import { AlertCircle, CheckCircle, XClose } from 'starkds-icons';

import type { ToastItem, ToastPosition } from './types';

const ANIMATION_DURATION = 300;

export interface ToastBarProps {
  toastItem: ToastItem;
  onRemoveToastItem: (id: string) => void;
  onEmitElementHeight: (id: string, height: number) => void;
  offsetY: number;
  duration: number;
  position: ToastPosition;
  zIndex?: number | string;
}

export const ToastContainer = ({
  toastItem,
  onRemoveToastItem,
  onEmitElementHeight,
  offsetY,
  duration,
  position,
  zIndex: zIndexProp = 'toast',
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
      ref={toastBarRef}
      role="alert"
      style={{ [position]: offsetY + 16 }}
      className={`${toastItemStyle} ${css({
        position: 'absolute',
        transition: 'opacity 0.3s, transform 0.3s',
        opacity: 0,
        zIndex: zIndexProp,
      })}`}
    >
      <div className={toastStyle}>
        <div className={toastContentStyle}>
          <div className={toastIconContainerStyle}>
            <div className={toastIconStyle}>
              {toastItem.type === 'success' ? (
                <CheckCircle data-icon stroke="success" />
              ) : toastItem.type === 'error' ? (
                <AlertCircle data-icon stroke="error" />
              ) : toastItem.type === 'warning' ? (
                <AlertCircle data-icon stroke="warning" />
              ) : null}
            </div>
            <div>
              {toastItem.title && <h3 className={toastTitleStyle}>{toastItem.title}</h3>}
              <p className={toastDescriptionStyle}>{toastItem.message}</p>
            </div>
          </div>
          <button
            aria-label="닫기"
            className={closeButtonStyle}
            type="button"
            onClick={() => onRemoveToastItem(toastItem.id)}
          >
            <XClose stroke="placeholder" />
          </button>
        </div>
      </div>
    </div>
  );
};

const toastItemStyle = css({
  left: '50%',
  transform: 'translateX(-50%)',
  transition: 'all 0.2s ease-out',
});

const toastStyle = css({
  display: 'flex',
  backgroundColor: 'backgroundNormal',
  borderRadius: 'md',
  boxShadow: 'lg',
  px: 'xl',
  py: 'xl',
  pointerEvents: 'auto',
  minWidth: '26rem',
  borderWidth: '1px',
  borderStyle: 'solid',
  borderColor: 'border',
});

const toastIconContainerStyle = css({
  display: 'flex',
  gap: 'sm',
});

const toastContentStyle = css({
  display: 'flex',
  justifyContent: 'space-between',
  gap: 'sm',
  flex: 1,
});

const toastTitleStyle = css({
  textStyle: 'textSmSemibold',
  color: 'textBlack',
});

const toastDescriptionStyle = css({
  textStyle: 'textSmRegular',
  color: 'captionColor',
});

const toastIconStyle = css({
  marginRight: 'sm',
  flexShrink: 0,
});

const closeButtonStyle = css({
  alignSelf: 'flex-start',
  color: 'placeholder',
  cursor: 'pointer',
  background: 'none',
  border: 'none',
  _hover: {
    color: 'textBlack',
  },
});
