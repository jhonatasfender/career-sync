import * as React from 'react';
import type { SVGProps } from 'react';
import { memo } from 'react';
const SvgDotnet = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={800}
    height={800}
    viewBox="0 0 64 64"
    id="Layer_1"
    data-name="Layer 1"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <defs>
      <style>{'.cls-3{fill:#fff}'}</style>
    </defs>
    <title>{'logo_NET'}</title>
    <circle
      cx={32}
      cy={32}
      r={32}
      style={{
        fill: '#5c2d91',
      }}
    />
    <path
      d="M9.82,9A32,32,0,1,0,55,54.18Z"
      style={{
        fill: '#fff',
        opacity: 0.1,
      }}
    />
    <path
      className="cls-3"
      d="M7.4 41.25a1.35 1.35 0 0 1-1-.42 1.38 1.38 0 0 1-.41-1 1.4 1.4 0 0 1 .41-1 1.34 1.34 0 0 1 1-.43 1.37 1.37 0 0 1 1 .43 1.39 1.39 0 0 1 .42 1 1.37 1.37 0 0 1-.42 1A1.38 1.38 0 0 1 7.4 41.25ZM27.27 41H24.65L15.28 26.46a6.06 6.06 0 0 1-.58-1.14h-.08a18.71 18.71 0 0 1 .1 2.5V41H12.59V22.77h2.77l9.12 14.28q.57.89.74 1.22h.05a19.29 19.29 0 0 1-.13-2.68V22.77h2.13ZM41.69 41H32V22.77h9.24V24.7H34.18v6.06h6.58v1.92H34.18V39h7.52ZM56 24.7H50.7V41H48.57V24.7H43.33V22.77H56Z"
    />
  </svg>
);
const Memo = memo(SvgDotnet);
export default Memo;
