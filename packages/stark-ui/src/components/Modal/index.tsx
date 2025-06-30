'use client';

import { css } from '@styled-system/css';
import React, { useCallback, useEffect, useState } from 'react';

import { Portal } from '../utils/Portal';
import ModalManager from './manager';
import { ModalContainer } from './ModalContainer';
import type { ModalItem } from './types';

export interface Props {
  zIndex?: number | string;
  container?: Element | null;
}

export let modalInstance = new ModalManager();

export const Modal = ({
  zIndex: zIndexProp = 'modal',
  container = document.body,
}: Props): React.ReactElement => {
  const [modalItems, setModalItems] = useState<ModalItem[]>([]);

  useEffect(() => {
    modalInstance = new ModalManager(setModalItems);
    return () => {
      modalInstance = new ModalManager();
    };
  }, []);

  const removeModal = useCallback((id: string) => {
    modalInstance.hide(id);
  }, []);

  return (
    <Portal container={container}>
      <div className={css({ zIndex: zIndexProp })}>
        {modalItems.map((item) => (
          <ModalContainer key={item.id} modalItem={item} onRemove={removeModal} />
        ))}
      </div>
    </Portal>
  );
};

export const modal = {
  show: (config: Omit<ModalItem, 'id'>): string => modalInstance.show(config),
  hide: (id: string): void => modalInstance.hide(id),
  hideAll: (): void => modalInstance.hideAll(),
  confirm: (config: {
    title?: string;
    content: React.ReactNode;
    confirmText?: string;
    cancelText?: string;
    onConfirm?: () => void;
    onCancel?: () => void;
  }): Promise<boolean> => modalInstance.confirm(config),
};

export { ModalContainer } from './ModalContainer';
export type { ModalItem, ModalProps } from './types';
