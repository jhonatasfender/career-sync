import * as React from 'react';
import type { SVGProps } from 'react';
import { memo } from 'react';
const SvgApps = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={22}
    height={22}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fill="#fff"
      d="M3 .333A2.667 2.667 0 0 0 .333 3v4A2.667 2.667 0 0 0 3 9.667h4A2.667 2.667 0 0 0 9.667 7V3A2.667 2.667 0 0 0 7 .333zm12 0A2.667 2.667 0 0 0 12.333 3v4A2.667 2.667 0 0 0 15 9.667h4A2.667 2.667 0 0 0 21.667 7V3A2.667 2.667 0 0 0 19 .333zM.333 15A2.667 2.667 0 0 1 3 12.333h4A2.667 2.667 0 0 1 9.667 15v4A2.667 2.667 0 0 1 7 21.667H3A2.667 2.667 0 0 1 .333 19zM15 12.333A2.667 2.667 0 0 0 12.333 15v4A2.667 2.667 0 0 0 15 21.667h4A2.667 2.667 0 0 0 21.667 19v-4A2.667 2.667 0 0 0 19 12.333z"
    />
  </svg>
);
const Memo = memo(SvgApps);
export default Memo;
