import * as React from 'react';
import type { SVGProps } from 'react';
import { memo } from 'react';
const SvgSearch = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={32}
    height={32}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fill="#4CBC9A"
      d="m27.414 24.586-5.077-5.077A9.93 9.93 0 0 0 24 14c0-5.514-4.486-10-10-10S4 8.486 4 14s4.486 10 10 10a9.93 9.93 0 0 0 5.509-1.663l5.077 5.077a2 2 0 1 0 2.828-2.828M7 14c0-3.86 3.14-7 7-7s7 3.14 7 7-3.14 7-7 7-7-3.14-7-7"
    />
  </svg>
);
const Memo = memo(SvgSearch);
export default Memo;
