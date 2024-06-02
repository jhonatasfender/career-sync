import * as React from 'react';
import type { SVGProps } from 'react';
import { memo } from 'react';
const SvgWork = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={200}
    height={200}
    fill="currentColor"
    stroke="currentColor"
    strokeWidth={0}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="none" stroke="none" d="M0 0h24v24H0z" />
    <path
      stroke="none"
      d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2m-6 0h-4V4h4z"
    />
  </svg>
);
const Memo = memo(SvgWork);
export default Memo;
