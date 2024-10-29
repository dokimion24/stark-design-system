import { forwardRef } from 'react';

import type { IconProps } from '@/types/icon.ts';

const XClose = forwardRef<SVGSVGElement, IconProps>(
  (
    { className, width = '24', height = '24', viewBox = '0 0 24 24', stroke = 'white', ...rest },
    ref,
  ) => {
    return (
      <svg
        aria-label="x-close icon"
        className={className}
        fill="none"
        height={height}
        ref={ref}
        viewBox={viewBox}
        width={width}
        xmlns="http://www.w3.org/2000/svg"
        {...rest}
      >
        <path
          d="M18 6L6 18M6 6L18 18"
          stroke={color[stroke]}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </svg>
    );
  },
);

XClose.displayName = 'XClose';
export default XClose;
