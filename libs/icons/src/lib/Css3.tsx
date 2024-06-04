import * as React from 'react';
import type { SVGProps } from 'react';
import { memo } from 'react';
const SvgCss3 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={800}
    height={800}
    preserveAspectRatio="xMidYMid"
    viewBox="-52.5 0 361 361"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fill="#264DE4"
      d="M127.844 360.088 23.662 331.166.445 70.766h255.11l-23.241 260.36z"
    />
    <path fill="#2965F1" d="m212.417 314.547 19.86-222.49H128V337.95z" />
    <path
      fill="#EBEBEB"
      d="m53.669 188.636 2.862 31.937H128v-31.937zm-5.752-64.641 2.903 31.937H128v-31.937zM128 271.58l-.14.037-35.568-9.604-2.274-25.471h-32.06l4.474 50.146 65.421 18.16.147-.04z"
    />
    <path d="M60.484 0h38.68v16.176H76.66v16.176h22.506v16.175H60.484zm46.417 0h38.681v14.066h-22.505v2.813h22.505v32.352h-38.68V34.46h22.505v-2.813H106.9zm46.418 0H192v14.066h-22.505v2.813H192v32.352h-38.681V34.46h22.505v-2.813H153.32z" />
    <path
      fill="#FFF"
      d="m202.127 188.636 5.765-64.641H127.89v31.937h45.002l-2.906 32.704H127.89v31.937h39.327l-3.708 41.42-35.62 9.614v33.226l65.473-18.145.48-5.396 7.506-84.08z"
    />
  </svg>
);
const Memo = memo(SvgCss3);
export default Memo;
