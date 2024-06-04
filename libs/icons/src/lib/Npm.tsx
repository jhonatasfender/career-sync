import * as React from 'react';
import type { SVGProps } from 'react';
import { memo } from 'react';
const SvgNpm = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={800}
    height={800}
    fill="none"
    viewBox="0 0 64 64"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fill="#CB3837"
      d="M12 26h40v13.333H32v2.223h-8.889v-2.223H12zm2.222 11.111h4.445v-6.667h2.222v6.667h2.222v-8.889h-8.889v8.89zm11.111-8.889v11.111h4.445v-2.222h4.444v-8.889zm4.445 2.222H32v4.445h-2.222zm6.666-2.222v8.89h4.445v-6.668h2.222v6.667h2.222v-6.667h2.223v6.667h2.222v-8.889z"
    />
    <path
      fill="#fff"
      d="M14.222 37.111h4.445v-6.667h2.222v6.667h2.222v-8.889h-8.889zm11.111-8.889v11.111h4.445v-2.222h4.444v-8.889zM32 34.89h-2.222v-4.445H32zm4.444-6.668v8.89h4.445v-6.668h2.222v6.667h2.222v-6.667h2.223v6.667h2.222v-8.889z"
    />
  </svg>
);
const Memo = memo(SvgNpm);
export default Memo;
