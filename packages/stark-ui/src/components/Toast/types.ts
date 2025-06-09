export type ToastPosition = 'top' | 'bottom';
export type ToastType = 'success' | 'error' | 'warning' | 'info';

export interface ToastItem {
  id: string;
  title?: string;
  message: string;
  type?: ToastType;
}
