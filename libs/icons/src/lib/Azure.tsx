import * as React from 'react';
import type { SVGProps } from 'react';
import { memo } from 'react';
const SvgAzure = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={800}
    height={800}
    fill="none"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fill="#0089D6"
      d="m7.47 12.412 3.348-.592.031-.007-1.722-2.049a292 292 0 0 1-1.723-2.058c0-.01 1.779-4.909 1.789-4.926a789 789 0 0 1 2.934 5.066l2.95 5.115.023.039-10.948-.001zM.9 11.788c0-.003.811-1.412 1.803-3.131L4.507 5.53l2.102-1.764C7.765 2.797 8.714 2 8.717 2a.4.4 0 0 1-.033.085L6.4 6.981l-2.24 4.808-1.63.002c-.897.001-1.63 0-1.63-.003"
    />
  </svg>
);
const Memo = memo(SvgAzure);
export default Memo;
