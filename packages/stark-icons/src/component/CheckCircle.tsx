import { forwardRef } from 'react';
import { color } from 'starkds-tokens';

import type { IconProps } from '@/types/icon.ts';

const CheckCircle = forwardRef<SVGSVGElement, IconProps>(
  (
    { className, width = '24', height = '24', viewBox = '0 0 24 24', stroke = 'border', ...rest },
    ref,
  ) => {
    return (
      <svg
        aria-label="check-circle icon"
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
          d="M7.5 12L10.5 15L16.5 9M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
          stroke={color[stroke]}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </svg>
    );
  },
);

CheckCircle.displayName = 'CheckCircle';
export default CheckCircle;
