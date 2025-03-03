import { useCallback, useEffect, useState } from 'react';

const ANIMATION_DURATION_MS = 150;
const TOOLTIP_GAP = 8;

export const usePortal = () => {
  const [container, setContainer] = useState<Element | null>(null);

  const createPortalContainer = useCallback(() => {
    if (!container) {
      const newContainer = document.createElement('div');
      document.body.appendChild(newContainer);
      setContainer(newContainer);
    }
  }, [container]);

  const removePortalContainer = useCallback(() => {
    if (container) {
      container.remove();
      setContainer(null);
    }
  }, [container]);

  useEffect(() => {
    return () => {
      container?.remove();
    };
  }, [container]);

  return { container, createPortalContainer, removePortalContainer };
};

export const calculateTooltipPosition = (
  wrapperEl: HTMLElement,
  tooltipEl: HTMLElement,
  placement: 'top' | 'bottom' | 'left' | 'right',
) => {
  const wrapperRect = wrapperEl.getBoundingClientRect();
  let top = 0;
  let left = 0;

  switch (placement) {
    case 'top':
      top = wrapperRect.top - TOOLTIP_GAP;
      left = wrapperRect.left + wrapperRect.width / 2;
      tooltipEl.style.transform = 'translate(-50%, -100%)';
      break;
    case 'bottom':
      top = wrapperRect.bottom + TOOLTIP_GAP;
      left = wrapperRect.left + wrapperRect.width / 2;
      tooltipEl.style.transform = 'translate(-50%, 0)';
      break;
    case 'left':
      top = wrapperRect.top + wrapperRect.height / 2;
      left = wrapperRect.left - TOOLTIP_GAP;
      tooltipEl.style.transform = 'translate(-100%, -50%)';
      break;
    case 'right':
      top = wrapperRect.top + wrapperRect.height / 2;
      left = wrapperRect.right + TOOLTIP_GAP;
      tooltipEl.style.transform = 'translate(0, -50%)';
      break;
  }

  tooltipEl.style.top = `${top}px`;
  tooltipEl.style.left = `${left}px`;
};

export const fadeIn = (element: HTMLElement) => {
  element.style.opacity = '0';
  const animation = element.animate([{ opacity: 0 }, { opacity: 1 }], {
    duration: ANIMATION_DURATION_MS,
    easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
  });
  element.style.opacity = '1';
  return animation;
};

export const fadeOut = (element: HTMLElement, onFinish: () => void) => {
  const animation = element.animate([{ opacity: 1 }, { opacity: 0 }], {
    duration: ANIMATION_DURATION_MS,
    easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
  });
  animation.onfinish = onFinish;
  return animation;
};
