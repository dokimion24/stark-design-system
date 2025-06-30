'use client';

import { css, cva } from '@styled-system/css';
import React, { useCallback, useEffect } from 'react';

import type { ModalProps } from './types';

export const ModalContainer = ({ modalItem, onRemove }: ModalProps): React.ReactElement => {
  const {
    id,
    content,
    title,
    size = 'md',
    closable = true,
    closeOnBackdropClick = true,
    closeOnEscape = true,
    showCloseButton = true,
    onClose,
  } = modalItem;

  const handleClose = useCallback(() => {
    onRemove(id);
    onClose?.();
  }, [id, onRemove, onClose]);

  const handleBackdropClick = useCallback(
    (e: React.MouseEvent) => {
      if (closeOnBackdropClick && e.target === e.currentTarget) {
        handleClose();
      }
    },
    [closeOnBackdropClick, handleClose],
  );

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (closeOnEscape && e.key === 'Escape' && closable) {
        handleClose();
      }
    };

    if (closeOnEscape) {
      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }
  }, [closeOnEscape, closable, handleClose]);

  return (
    <div className={backdropStyle()} onClick={handleBackdropClick}>
      <div className={modalStyle({ size })}>
        {(title || showCloseButton) && (
          <div className={headerStyle}>
            {title && <h2 className={titleStyle}>{title}</h2>}
            {showCloseButton && closable && (
              <button
                aria-label="Close modal"
                className={closeButtonStyle()}
                type="button"
                onClick={handleClose}
              >
                ×
              </button>
            )}
          </div>
        )}
        <div className={contentStyle}>{content}</div>
      </div>
    </div>
  );
};

const backdropStyle = cva({
  base: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 50,
  },
});

const modalStyle = cva({
  base: {
    backgroundColor: 'white',
    borderRadius: 'lg',
    boxShadow: 'xl',
    maxHeight: '90vh',
    overflowY: 'auto',
    position: 'relative',
  },
  variants: {
    size: {
      sm: { maxWidth: '400px', width: '90vw' },
      md: { maxWidth: '600px', width: '90vw' },
      lg: { maxWidth: '800px', width: '90vw' },
      xl: { maxWidth: '1200px', width: '90vw' },
      full: { width: '95vw', height: '95vh', maxWidth: 'none', maxHeight: 'none' },
    },
  },
});

const headerStyle = css({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  px: 'xl',
  py: 'lg',
  borderBottomWidth: '1px',
  borderBottomStyle: 'solid',
  borderBottomColor: 'gray.200',
});

const titleStyle = css({
  margin: 0,
  fontSize: 'lg',
  fontWeight: 'semibold',
  color: 'gray.900',
});

const closeButtonStyle = cva({
  base: {
    background: 'none',
    border: 'none',
    fontSize: '24px',
    cursor: 'pointer',
    color: 'gray.500',
    padding: 'xs',
    lineHeight: 1,
    _hover: {
      color: 'gray.700',
    },
  },
});

const contentStyle = css({
  px: 'xl',
  py: 'lg',
});
