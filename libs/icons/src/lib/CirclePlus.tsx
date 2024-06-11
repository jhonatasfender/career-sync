import * as React from 'react';
import type { SVGProps } from 'react';
import { memo } from 'react';
const SvgCirclePlus = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#circle-plus_svg__a)">
      <path
        fill="#4CBC9A"
        d="M12 .375C5.588.375.375 5.588.375 12c0 6.413 5.213 11.625 11.625 11.625 6.413 0 11.625-5.212 11.625-11.625C23.625 5.588 18.413.375 12 .375m6.532 12.75h-5.407v5.407c0 .616-.502 1.125-1.125 1.125s-1.125-.51-1.125-1.125v-5.407H5.467A1.13 1.13 0 0 1 4.342 12c0-.623.51-1.125 1.125-1.125h5.408V5.467c0-.615.502-1.125 1.125-1.125s1.125.51 1.125 1.125v5.408h5.407c.616 0 1.125.502 1.125 1.125s-.51 1.125-1.125 1.125"
      />
    </g>
    <defs>
      <clipPath id="circle-plus_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
const Memo = memo(SvgCirclePlus);
export default Memo;
