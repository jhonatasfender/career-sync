import * as React from 'react';
import type { SVGProps } from 'react';
import { memo } from 'react';
const SvgPhone = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#phone_svg__a)">
      <path
        fill="#374557"
        d="M22.8 14.865a1.13 1.13 0 0 0-.773-.51l-7.095-1.14a1.13 1.13 0 0 0-.922.27 5.8 5.8 0 0 0-1.342 1.725 10.4 10.4 0 0 1-2.198-1.68 10.4 10.4 0 0 1-1.68-2.197 5.8 5.8 0 0 0 1.725-1.343c.225-.255.322-.593.27-.923l-1.14-7.094a1.13 1.13 0 0 0-.51-.773 4.9 4.9 0 0 0-1.62-.653 5.2 5.2 0 0 0-1.35-.172c-3.188 0-5.79 2.602-5.79 5.79 0 9.63 7.83 17.46 17.46 17.46 3.188 0 5.79-2.602 5.79-5.79 0-.473-.06-.93-.157-1.29a5 5 0 0 0-.668-1.68"
      />
    </g>
    <defs>
      <clipPath id="phone_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
const Memo = memo(SvgPhone);
export default Memo;
