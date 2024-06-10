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
    <g clipPath="url(#a)">
      <path
        d="M12 0.375C5.58751 0.375 0.375 5.58751 0.375 12C0.375 18.4125 5.58751 23.625 12 23.625C18.4125 23.625 23.625 18.4125 23.625 12C23.625 5.58751 18.4125 0.375 12 0.375ZM18.5325 13.125H13.125V18.5325C13.125 19.1475 12.6225 19.6575 12 19.6575C11.3775 19.6575 10.875 19.1475 10.875 18.5325V13.125H5.46748C4.85248 13.125 4.34248 12.6225 4.34248 12C4.34248 11.3775 4.85248 10.875 5.46748 10.875H10.875V5.46748C10.875 4.85248 11.3775 4.34248 12 4.34248C12.6225 4.34248 13.125 4.85248 13.125 5.46748V10.875H18.5325C19.1475 10.875 19.6575 11.3775 19.6575 12C19.6575 12.6225 19.1475 13.125 18.5325 13.125Z"
        fill="#4CBC9A"
      />
    </g>
    <defs>
      <clipPath id="a">
        <rect width={24} height={24} fill="#fff" />
      </clipPath>
    </defs>
  </svg>
);
const Memo = memo(SvgCirclePlus);
export default Memo;
