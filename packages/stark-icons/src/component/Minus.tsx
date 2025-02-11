import { forwardRef } from 'react';
import { color } from 'starkds-tokens';

import type { IconProps } from '@/types/icon.ts';

const Minus = forwardRef<SVGSVGElement, IconProps>(
  (
    { className, width = '24', height = '24', viewBox = '0 0 24 24', stroke = 'border', ...rest },
    ref,
  ) => {
    return (
      <svg
        aria-label="minus icon"
        className={className}
        fill="none"
        height={height}
        ref={ref}
        viewBox={viewBox}
        width={width}
        xmlns="http://www.w3.org/2000/svg"
        {...rest}
      >
        <g id="minus">
          <path
            d="M5 12H19"
            id="Icon"
            stroke={color[stroke]}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
        </g>
      </svg>
    );
  },
);

Minus.displayName = 'Minus';
export default Minus;
