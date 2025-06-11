'use client';

import { cva } from '@styled-system/css';
import React, { useCallback, useEffect, useState } from 'react';

import { Portal } from '../utils/Portal';
import Toaster from './manager';
import { ToastContainer } from './ToastContainer';
import type { ToastItem, ToastPosition } from './types';

export interface Props {
  duration?: number;
  zIndex?: number;
  gap?: number;
  position?: ToastPosition;
  container?: Element | null;
}

export let toastInstance = new Toaster();

export const Toast = ({
  duration = 3000,
  zIndex = 9999,
  gap = 8,
  position = 'top',
  container = document.body,
}: Props): React.ReactElement => {
  const [toastItems, setToastItems] = useState<ToastItem[]>([]);
  const [heights, setHeights] = useState<Record<string, number>>({});

  useEffect(() => {
    toastInstance = new Toaster(setToastItems);
    return () => {
      toastInstance = new Toaster();
    };
  }, []);

  const removeToast = useCallback((id: string) => {
    toastInstance.removeToastItem(id);
    setHeights((prev) => {
      const newHeights = { ...prev };
      delete newHeights[id];
      return newHeights;
    });
  }, []);

  // 각 ToastBar에서 높이를 측정한 값을 받아서 저장
  const onEmitElementHeight = useCallback((id: string, height: number) => {
    setHeights((prev) => ({ ...prev, [id]: height }));
  }, []);

  // 토스트들의 높이와 gap을 누적하여 오프셋 계산
  const getOffsetY = useCallback(
    (index: number): number =>
      toastItems.slice(0, index).reduce((acc, item) => {
        const height = heights[item.id] || 0;
        return acc + (height ? height + gap : 0);
      }, 0),
    [toastItems, heights, gap],
  );

  return (
    <Portal container={container}>
      <div className={toastContainerStyle()} style={{ zIndex }}>
        {toastItems.map((item, index) => {
          const offsetY = getOffsetY(index);
          return (
            <ToastContainer
              duration={duration}
              key={item.id}
              offsetY={offsetY}
              position={position}
              toastItem={item}
              onEmitElementHeight={onEmitElementHeight}
              onRemoveToastItem={removeToast}
            />
          );
        })}
      </div>
    </Portal>
  );
};

const toastContainerStyle = cva({
  base: {
    position: 'fixed',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    pointerEvents: 'none',
  },
});

export const toast = {
  success: (message: ToastItem['message'], title?: ToastItem['title']): void =>
    toastInstance.success(message, title),
  info: (message: ToastItem['message'], title?: ToastItem['title']): void =>
    toastInstance.info(message, title),
  error: (message: ToastItem['message'], title?: ToastItem['title']): void =>
    toastInstance.error(message, title),
  warning: (message: ToastItem['message'], title?: ToastItem['title']): void =>
    toastInstance.warning(message, title),
  addToastItem: (props: Omit<ToastItem, 'id'>): void => toastInstance.addToastItem(props),
  removeToastItem: (id: ToastItem['id']): void => toastInstance.removeToastItem(id),
};
