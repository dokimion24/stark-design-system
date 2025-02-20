'use client';

import { styled } from '@styled-system/jsx';
import React, { cloneElement, useEffect, useRef } from 'react';

import { Portal } from '../Portal';
import { calculateTooltipPosition, fadeIn, fadeOut, usePortal } from './hooks';

export type TooltipProps = {
  children: React.ReactElement;
  content: React.ReactNode;
  placement?: 'top' | 'bottom' | 'left' | 'right';
  delay?: number;
  disabled?: boolean;
  zIndex?: number;
};

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

  const handleHide = () => {
    if (delayTimer.current) {
      clearTimeout(delayTimer.current);
    }
    if (tooltipRef.current && container) {
      animationRef.current = fadeOut(tooltipRef.current, () => {
        removePortalContainer();
      });
    }
  };

  // container가 생성된 후 tooltip 위치 계산 및 fade-in 효과 적용
  useEffect(() => {
    if (!container) return;
    window.requestAnimationFrame(() => {
      if (wrapperRef.current && tooltipRef.current) {
        calculateTooltipPosition(wrapperRef.current, tooltipRef.current, placement);
        tooltipRef.current.style.opacity = '0';
        animationRef.current = fadeIn(tooltipRef.current);
      }
    });
  }, [container, placement]);

  // Escape 키 입력 시 tooltip 숨김 처리
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleHide();
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

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
