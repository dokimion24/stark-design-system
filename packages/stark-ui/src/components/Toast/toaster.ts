import { type Dispatch, type SetStateAction } from 'react';

import { generateUniqueId } from '@/utils';

import type { ToastItem } from './types';

type SetToastItems = Dispatch<SetStateAction<ToastItem[]>>;

class Toaster {
  private setToastItems: SetToastItems;

  constructor(setState?: SetToastItems) {
    this.setToastItems = setState ?? (() => {});
  }

  public addToastItem({ type, message, title }: Omit<ToastItem, 'id'>): void {
    this.setToastItems((state) => [{ id: generateUniqueId(), type, message, title }, ...state]);
  }

  public removeToastItem(toastId: ToastItem['id']): void {
    this.setToastItems((state) => state.filter(({ id }) => id !== toastId));
  }

  public success(message: ToastItem['message'], title?: ToastItem['title']): void {
    this.addToastItem({ type: 'success', message, title });
  }

  public info(message: ToastItem['message'], title?: ToastItem['title']): void {
    this.addToastItem({ type: 'info', message, title });
  }

  public warning(message: ToastItem['message'], title?: ToastItem['title']): void {
    this.addToastItem({ type: 'warning', message, title });
  }

  public error(message: ToastItem['message'], title?: ToastItem['title']): void {
    this.addToastItem({ type: 'error', message, title });
  }
}

export default Toaster;
