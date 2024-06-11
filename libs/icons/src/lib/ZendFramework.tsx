import * as React from 'react';
import type { SVGProps } from 'react';
import { memo } from 'react';
const SvgZendFramework = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={800}
    height={800}
    preserveAspectRatio="xMidYMid"
    viewBox="0 -66 256 256"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill="#6FB643">
      <path d="M120.43 36.02s0-33.818 33.82-33.818h101.456s0 33.819-33.82 33.819zm0 43.213s0-33.819 33.82-33.819h50.727s0 33.82-33.82 33.82zm0 43.213s0-33.818 33.82-33.818h16.907s0 33.818-33.817 33.818z" />
      <path d="M109.076 96.055v26.98H.32l70.06-95.568H10.236V.486h113.456L53.956 96.055z" />
    </g>
  </svg>
);
const Memo = memo(SvgZendFramework);
export default Memo;
