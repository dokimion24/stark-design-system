import { forwardRef } from 'react';
import { color } from 'starkds-tokens';

import type { IconProps } from '@/types/icon.ts';

const Check = forwardRef<SVGSVGElement, IconProps>(
  (
    { className, width = '24', height = '24', viewBox = '0 0 24 24', stroke = 'border', ...rest },
    ref,
  ) => {
    return (
      <svg
        aria-label="check icon"
        className={className}
        fill="none"
        height={height}
        ref={ref}
        viewBox={viewBox}
        width={width}
        xmlns="http://www.w3.org/2000/svg"
        {...rest}
      >
        <g id="check">
          <path
            d="M20 6L9 17L4 12"
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

Check.displayName = 'Check';
export default Check;
