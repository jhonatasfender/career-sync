import * as React from 'react';
import type { SVGProps } from 'react';
import { memo } from 'react';
const SvgMoreOptions = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={6}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fill="#374557"
      d="M12.001.36a2.641 2.641 0 1 0 .003 5.283A2.641 2.641 0 0 0 12 .36zm-8.4 0a2.641 2.641 0 1 0 .003 5.282A2.641 2.641 0 0 0 3.6.36zm16.8 0a2.641 2.641 0 1 0 .003 5.283A2.641 2.641 0 0 0 20.4.36z"
    />
  </svg>
);
const Memo = memo(SvgMoreOptions);
export default Memo;
