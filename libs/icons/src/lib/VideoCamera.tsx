import * as React from 'react';
import type { SVGProps } from 'react';
import { memo } from 'react';
const SvgVideoCamera = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#video-camera_svg__a)">
      <path
        fill="#374557"
        d="M16.5 8.625v9a1.5 1.5 0 0 1-1.5 1.5H4.5a3.754 3.754 0 0 1-3.75-3.75v-9a1.5 1.5 0 0 1 1.5-1.5h10.5a3.754 3.754 0 0 1 3.75 3.75m6.377-1.774a.75.75 0 0 0-.75-.002l-3.75 2.143a.75.75 0 0 0-.377.65v4.715a.75.75 0 0 0 .378.651l3.75 2.143a.75.75 0 0 0 1.122-.651v-9a.75.75 0 0 0-.373-.649"
      />
    </g>
    <defs>
      <clipPath id="video-camera_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
const Memo = memo(SvgVideoCamera);
export default Memo;
