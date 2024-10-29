import { forwardRef } from 'react';

import type { IconProps } from '@/types/icon.ts';

const Share01 = forwardRef<SVGSVGElement, IconProps>(
  (
    { className, width = '24', height = '24', viewBox = '0 0 24 24', stroke = 'white', ...rest },
    ref,
  ) => {
    return (
      <svg
        aria-label="share-01 icon"
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
          d="M21 12V16.2C21 17.8802 21 18.7202 20.673 19.362C20.3854 19.9265 19.9265 20.3854 19.362 20.673C18.7202 21 17.8802 21 16.2 21H7.8C6.11984 21 5.27976 21 4.63803 20.673C4.07354 20.3854 3.6146 19.9265 3.32698 19.362C3 18.7202 3 17.8802 3 16.2V12M16 7L12 3M12 3L8 7M12 3V15"
          stroke={color[stroke]}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </svg>
    );
  },
);

Share01.displayName = 'Share01';
export default Share01;
