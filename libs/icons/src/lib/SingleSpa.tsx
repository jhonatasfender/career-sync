import * as React from 'react';
import type { SVGProps } from 'react';
import { memo } from 'react';
const SvgSingleSpa = (props: SVGProps<SVGSVGElement>) => (
  <svg
    data-name="Layer 2"
    viewBox="0 0 813.8 945.81"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M719.86 0 524.69 377.98 142.91 142.82z"
      style={{
        fill: '#eb669e',
        strokeWidth: 0,
      }}
    />
    <path
      d="M524.69 377.98 142.91 142.82 55.31 480.8l328.46 167.57L603.7 756.9l145.67-225.64-224.69-153.28Zm51.4 303.7-446.51-234.2 55.21-209.46 487.46 311.32-96.16 132.33Z"
      style={{
        strokeWidth: 0,
        fill: '#f06ca2',
      }}
    />
    <path
      d="M603.7 756.9 242.87 945.81l140.9-297.44z"
      style={{
        strokeWidth: 0,
        fill: '#ea679f',
      }}
    />
  </svg>
);
const Memo = memo(SvgSingleSpa);
export default Memo;
