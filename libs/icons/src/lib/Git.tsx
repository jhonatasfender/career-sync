import * as React from 'react';
import type { SVGProps } from 'react';
import { memo } from 'react';
const SvgGit = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={800}
    height={800}
    fill="none"
    viewBox="0 0 32 32"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fill="#EE513B"
      d="M2.585 17.413a2 2 0 0 1 0-2.826L14.587 2.585c.78-.78 2.046-.78 2.826 0l12.002 12.002c.78.78.78 2.046 0 2.826L17.413 29.415c-.78.78-2.046.78-2.826 0z"
    />
    <path
      fill="#fff"
      d="m12.149 5.062-1.215 1.215 3.139 3.139A2.126 2.126 0 0 0 15.25 12.3v7.679a2.126 2.126 0 1 0 1.718.097v-7.765l3 3a2.125 2.125 0 1 0 1.283-1.147l-3.221-3.223q.093-.3.095-.63a2.125 2.125 0 0 0-2.755-2.03z"
    />
  </svg>
);
const Memo = memo(SvgGit);
export default Memo;
