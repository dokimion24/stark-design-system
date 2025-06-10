import React, { type Dispatch, type SetStateAction } from 'react';

import { generateUniqueId } from '@/utils';

import { ConfirmModal } from './ConfirmModal';
import type { ModalItem } from './types';

type SetModalItems = Dispatch<SetStateAction<ModalItem[]>>;

class ModalManager {
  private setModalItems: SetModalItems;

  constructor(setState?: SetModalItems) {
    this.setModalItems = setState ?? (() => {});
  }

  public show({
    content,
    title,
    size = 'md',
    closable = true,
    closeOnBackdropClick = true,
    closeOnEscape = true,
    showCloseButton = true,
    onClose,
  }: Omit<ModalItem, 'id'>): string {
    const id = generateUniqueId();
    this.setModalItems((state) => [
      ...state,
      {
        id,
        content,
        title,
        size,
        closable,
        closeOnBackdropClick,
        closeOnEscape,
        showCloseButton,
        onClose,
      },
    ]);
    return id;
  }

  public hide(modalId: string): void {
    this.setModalItems((state) => {
      const modal = state.find((m) => m.id === modalId);
      if (modal?.onClose) {
        modal.onClose();
      }
      return state.filter(({ id }) => id !== modalId);
    });
  }

  public hideAll(): void {
    this.setModalItems((state) => {
      state.forEach((modal) => {
        if (modal.onClose) {
          modal.onClose();
        }
      });
      return [];
    });
  }

  public confirm({
    title = '확인',
    content,
    confirmText = '확인',
    cancelText = '취소',
    onConfirm,
    onCancel,
  }: {
    title?: string;
    content: React.ReactNode;
    confirmText?: string;
    cancelText?: string;
    onConfirm?: () => void;
    onCancel?: () => void;
  }): Promise<boolean> {
    return new Promise((resolve) => {
      const id = this.show({
        title,
        content: React.createElement(ConfirmModal, {
          content,
          confirmText,
          cancelText,
          onConfirm: () => {
            this.hide(id);
            onConfirm?.();
            resolve(true);
          },
          onCancel: () => {
            this.hide(id);
            onCancel?.();
            resolve(false);
          },
        }),
        size: 'sm',
        closeOnBackdropClick: false,
        showCloseButton: false,
        onClose: () => {
          onCancel?.();
          resolve(false);
        },
      });
    });
  }
}

export default ModalManager;
