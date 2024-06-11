import * as React from 'react';
import type { SVGProps } from 'react';
import { memo } from 'react';
const SvgMic = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={32}
    height={32}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fill="#374557"
      d="M14.5 23.3v5.2h-2.29c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5h7.58c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5H17.5v-5.2c5.23-.74 9.22-5.4 9.22-10.93V10.7c0-1.37-1.12-2.5-2.5-2.5h-2.01V6.71C22.21 3.29 19.43.5 16 .5S9.79 3.29 9.79 6.71V8.2H7.78c-1.38 0-2.5 1.13-2.5 2.5v1.99c0 2.96 1.24 5.81 3.4 7.83 1.64 1.54 3.66 2.48 5.82 2.78M8.28 11.2h1.51v1.49c0 3.43 2.78 6.22 6.21 6.22s6.21-2.79 6.21-6.22V11.2h1.51v1.17c0 4.23-3.15 7.76-7.19 8.03a7.67 7.67 0 0 1-5.8-2.07 7.65 7.65 0 0 1-2.45-5.64z"
    />
  </svg>
);
const Memo = memo(SvgMic);
export default Memo;
