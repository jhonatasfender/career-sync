import * as React from 'react';
import type { SVGProps } from 'react';
import { memo } from 'react';
const SvgPower = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={32}
    height={32}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fill="#fff"
      d="M16 31.5c7.695 0 13.955-6.26 13.955-13.954 0-5.318-3.091-10.244-7.873-12.55a1.92 1.92 0 0 0-1.48-.084 1.94 1.94 0 0 0-.203 3.575c3.45 1.664 5.68 5.22 5.68 9.059 0 5.558-4.521 10.08-10.08 10.08-5.557 0-10.08-4.522-10.08-10.08 0-3.84 2.231-7.395 5.683-9.059a1.94 1.94 0 0 0 .904-2.587 1.93 1.93 0 0 0-1.11-.988 1.92 1.92 0 0 0-1.477.085c-4.783 2.305-7.874 7.23-7.874 12.549C2.045 25.24 8.305 31.5 16 31.5"
    />
    <path
      fill="#fff"
      d="M16 11.757a1.94 1.94 0 0 0 1.938-1.938V2.437A1.94 1.94 0 0 0 16 .5a1.94 1.94 0 0 0-1.937 1.938v7.381A1.94 1.94 0 0 0 16 11.757"
    />
  </svg>
);
const Memo = memo(SvgPower);
export default Memo;
