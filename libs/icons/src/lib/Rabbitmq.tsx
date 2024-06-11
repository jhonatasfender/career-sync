import * as React from 'react';
import type { SVGProps } from 'react';
import { memo } from 'react';
const SvgRabbitmq = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={800}
    height={800}
    preserveAspectRatio="xMidYMid"
    viewBox="-0.5 0 257 257"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fill="#F60"
      d="M245.734 102.437h-81.911a10.2 10.2 0 0 1-10.263-10.263v-81.91a10.2 10.2 0 0 0-10.263-10.2h-30.66a10.2 10.2 0 0 0-10.264 10.2v81.91a10.2 10.2 0 0 1-10.263 10.263H61.45a10.2 10.2 0 0 1-10.263-10.263v-81.91A10.2 10.2 0 0 0 40.924 0H10.199A10.2 10.2 0 0 0 0 10.263v235.535a10.2 10.2 0 0 0 10.263 10.263h235.47a10.2 10.2 0 0 0 10.264-10.263V112.893a10.2 10.2 0 0 0-10.263-10.456m-41.18 86.979a15.33 15.33 0 0 1-15.33 15.394h-20.526a15.33 15.33 0 0 1-15.33-15.394v-20.462a15.33 15.33 0 0 1 15.33-15.394h20.525a15.33 15.33 0 0 1 15.33 15.394z"
    />
  </svg>
);
const Memo = memo(SvgRabbitmq);
export default Memo;
