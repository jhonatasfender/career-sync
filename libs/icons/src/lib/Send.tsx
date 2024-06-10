import * as React from 'react';
import type { SVGProps } from 'react';
import { memo } from 'react';
const SvgSend = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={16}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M2.05404 9.08429L6.72129 8.15079C7.13804 8.06754 7.13804 7.93204 6.72129 7.84879L2.05404 6.91529C1.77604 6.85979 1.50529 6.58879 1.44979 6.31104L0.51629 1.64379C0.43279 1.22679 0.67854 1.03304 1.06479 1.21129L15.307 7.78454C15.5643 7.90329 15.5643 8.09629 15.307 8.21504L1.06479 14.7883C0.67854 14.9665 0.43279 14.7728 0.51629 14.3558L1.44979 9.68854C1.50529 9.41079 1.77604 9.13979 2.05404 9.08429Z"
      fill="#fff"
    />
  </svg>
);
const Memo = memo(SvgSend);
export default Memo;
