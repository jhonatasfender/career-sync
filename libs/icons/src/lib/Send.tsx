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
      fill="#fff"
      d="m2.054 9.084 4.667-.933c.417-.083.417-.219 0-.302l-4.667-.934a.83.83 0 0 1-.604-.604L.516 1.644c-.083-.417.163-.611.549-.433l14.242 6.574c.257.118.257.311 0 .43L1.065 14.788c-.386.178-.632-.015-.549-.432l.934-4.667a.83.83 0 0 1 .604-.605"
    />
  </svg>
);
const Memo = memo(SvgSend);
export default Memo;
