import { css } from '@styled-system/css';
import React from 'react';

interface ConfirmModalProps {
  content: React.ReactNode;
  confirmText: string;
  cancelText: string;
  onConfirm: () => void;
  onCancel: () => void;
}

export const ConfirmModal = ({
  content,
  confirmText,
  cancelText,
  onConfirm,
  onCancel,
}: ConfirmModalProps): React.ReactElement => {
  return (
    <div>
      <div className={contentStyle}>{content}</div>
      <div className={buttonGroupStyle}>
        <button className={cancelButtonStyle} onClick={onCancel}>
          {cancelText}
        </button>
        <button className={confirmButtonStyle} onClick={onConfirm}>
          {confirmText}
        </button>
      </div>
    </div>
  );
};

const contentStyle = css({
  mb: 'xl',
});

const buttonGroupStyle = css({
  display: 'flex',
  gap: 'sm',
  justifyContent: 'flex-end',
});

const cancelButtonStyle = css({
  px: 'lg',
  py: 'sm',
  borderWidth: '1px',
  borderStyle: 'solid',
  borderColor: 'gray.300',
  borderRadius: 'sm',
  backgroundColor: 'white',
  cursor: 'pointer',
  _hover: {
    backgroundColor: 'gray.50',
  },
});

const confirmButtonStyle = css({
  px: 'lg',
  py: 'sm',
  border: 'none',
  borderRadius: 'sm',
  backgroundColor: 'blue.500',
  color: 'white',
  cursor: 'pointer',
  _hover: {
    backgroundColor: 'blue.600',
  },
});
