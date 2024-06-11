import * as React from 'react';
import type { SVGProps } from 'react';
import { memo } from 'react';
const SvgDotnet = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={800}
    height={800}
    data-name="Layer 1"
    viewBox="0 0 64 64"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle
      cx={32}
      cy={32}
      r={32}
      style={{
        fill: '#5c2d91',
      }}
    />
    <path
      d="M9.82 9A32 32 0 1 0 55 54.18Z"
      style={{
        fill: '#fff',
        opacity: 0.1,
      }}
    />
    <path
      d="M7.4 41.25a1.35 1.35 0 0 1-1-.42 1.38 1.38 0 0 1-.41-1 1.4 1.4 0 0 1 .41-1 1.34 1.34 0 0 1 1-.43 1.37 1.37 0 0 1 1 .43 1.4 1.4 0 0 1 .42 1 1.37 1.37 0 0 1-.42 1 1.38 1.38 0 0 1-1 .42M27.27 41h-2.62l-9.37-14.54a6 6 0 0 1-.58-1.14h-.08a19 19 0 0 1 .1 2.5V41h-2.13V22.77h2.77l9.12 14.28q.57.89.74 1.22h.05a19 19 0 0 1-.13-2.68V22.77h2.13Zm14.42 0H32V22.77h9.24v1.93h-7.06v6.06h6.58v1.92h-6.58V39h7.52ZM56 24.7h-5.3V41h-2.13V24.7h-5.24v-1.93H56Z"
      style={{
        fill: '#fff',
      }}
    />
  </svg>
);
const Memo = memo(SvgDotnet);
export default Memo;
