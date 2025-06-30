import type { ReactNode } from 'react';

export interface ModalItem {
  id: string;
  content: ReactNode;
  title?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  closable?: boolean;
  closeOnBackdropClick?: boolean;
  closeOnEscape?: boolean;
  showCloseButton?: boolean;
  onClose?: () => void;
}

export interface ModalProps {
  modalItem: ModalItem;
  onRemove: (id: string) => void;
}

export interface ModalProviderProps {
  children: ReactNode;
}

export interface ModalContainerProps {
  className?: string;
}

export type ModalSubscriber = () => void;
