'use client';

import { styled } from '@styled-system/jsx';
import React, { cloneElement, useCallback, useEffect, useRef } from 'react';

import { usePortal } from '../../hooks/usePortal';
import { Portal } from '../utils/Portal';
import type { TooltipProps } from './types';
import { calculateTooltipPosition, fadeIn, fadeOut } from './utils';

export const Tooltip = ({
  children,
  content,
  placement = 'top',
  delay = 200,
  disabled = false,
  zIndex = 50,
}: TooltipProps) => {
  const { container, createPortalContainer, removePortalContainer } = usePortal();
  const wrapperRef = useRef<HTMLDivElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const delayTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const animationRef = useRef<Animation | null>(null);

  const handleShow = () => {
    if (disabled) return;
    if (!container) {
      createPortalContainer();
    }
  };

  const handleHide = useCallback(
    (immediate = false) => {
      if (delayTimer.current) {
        clearTimeout(delayTimer.current);
        delayTimer.current = null;
      }

      if (immediate) {
        console.log('immediate hide');
        animationRef.current?.cancel();
        removePortalContainer();
        return;
      }

      if (!tooltipRef.current || !container) return;
      animationRef.current = fadeOut(tooltipRef.current, removePortalContainer);
    },
    [container, removePortalContainer],
  );

  // container가 생성된 후 tooltip 위치 계산 및 fade-in 효과 적용
  useEffect(() => {
    if (!container || !wrapperRef.current || !tooltipRef.current) return;

    const tooltipEl = tooltipRef.current;
    const wrapperEl = wrapperRef.current;

    window.requestAnimationFrame(() => {
      calculateTooltipPosition(wrapperEl, tooltipEl, placement);
      animationRef.current = fadeIn(tooltipEl);
    });
  }, [container, placement]);

  // Escape 키 입력 시 tooltip 숨김 처리
  useEffect(() => {
    if (!container) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleHide(true);
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [container, handleHide]);

  useEffect(() => {
    return () => {
      if (delayTimer.current) clearTimeout(delayTimer.current);
      container?.remove();
    };
  }, [container]);

  const onEnter = (e: React.SyntheticEvent) => {
    children.props.onMouseEnter?.(e);
    delayTimer.current = setTimeout(handleShow, delay);
  };

  const onLeave = (e: React.SyntheticEvent) => {
    children.props.onMouseLeave?.(e);
    handleHide();
  };

  const onFocus = (e: React.SyntheticEvent) => {
    children.props.onFocus?.(e);
    delayTimer.current = setTimeout(handleShow, delay);
  };

  const onBlur = (e: React.SyntheticEvent) => {
    children.props.onBlur?.(e);
    handleHide();
  };

  return (
    <>
      <Wrapper ref={wrapperRef}>
        {cloneElement(children, {
          ...children.props,
          tabIndex: 0,
          onMouseEnter: onEnter,
          onMouseLeave: onLeave,
          onFocus: onFocus,
          onBlur: onBlur,
        })}
      </Wrapper>
      {container && (
        <Portal container={container}>
          <TooltipContent ref={tooltipRef} role="tooltip" style={{ zIndex }}>
            {content}
          </TooltipContent>
        </Portal>
      )}
    </>
  );
};

const Wrapper = styled('div', {
  base: {
    display: 'inline-block',
  },
});

const TooltipContent = styled('div', {
  base: {
    position: 'fixed',
    px: 'lg',
    py: 'lg',
    borderRadius: 'lg',
    bg: 'backgroundDimmer',
    color: 'textWhite',
    fontStyle: 'textXsSemibold',
    maxWidth: '18.75rem',
    wordBreak: 'keep-all',
    overflowWrap: 'break-word',
    boxShadow: 'sm',
    pointerEvents: 'none',
    opacity: 0,
  },
});
