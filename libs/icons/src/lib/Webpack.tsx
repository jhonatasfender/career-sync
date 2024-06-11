import * as React from 'react';
import type { SVGProps } from 'react';
import { memo } from 'react';
const SvgWebpack = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={800}
    height={800}
    viewBox="0 0 73 73"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill="none" transform="translate(2 2)">
      <rect
        width={71}
        height={71}
        x={-1}
        y={-1}
        fill="#FFF"
        stroke="#1C78C0"
        strokeWidth={2}
        rx={14}
      />
      <path
        fill="#FFF"
        d="M34.25 7 57.5 20.15v26.308l-23.25 13.15L11 46.459V20.151z"
      />
      <path
        fill="#8ED6FB"
        d="m53.348 45.551-18.33 10.37v-8.075l11.421-6.284zm1.255-1.135V22.734L47.9 26.609v13.938zM15.08 45.55l18.33 10.37v-8.075l-11.427-6.284zm-1.255-1.135V22.734l6.704 3.875v13.938zm.787-23.088 18.797-10.633v7.804l-12.045 6.626-.096.054zm39.205 0L35.02 10.695v7.804l12.045 6.62.096.054z"
      />
      <path
        fill="#1C78C0"
        d="m33.408 46.008-11.27-6.2V27.534l11.27 6.506zm1.61 0 11.27-6.194v-12.28l-11.27 6.506zM22.902 26.116l11.313-6.218 11.312 6.218-11.312 6.53z"
      />
    </g>
  </svg>
);
const Memo = memo(SvgWebpack);
export default Memo;
