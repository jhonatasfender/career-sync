import * as React from 'react';
import type { SVGProps } from 'react';
import { memo } from 'react';
const SvgExtjs = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={800}
    height={800}
    viewBox="0 0 32 32"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fill="#444"
      d="M16.281 7.633a.6.6 0 0 1 .165.061c.518.265.86.424.977.958.188.855.752 1.347 1.555 1.614.569.189 1.098.108 1.615-.181.771-.43 1.053-.379 1.72.284.636.631.74 1.062.309 1.773-.725 1.198.055 2.983 1.277 3.306 1.007.266 1.417 1.563.82 2.452-.139.207-.429.364-.681.436-1.008.288-1.557.978-1.675 1.969-.05.421.094.884.228 1.302.128.4.404.76.15 1.249l-2.72-2.569c.963-1.297 1.336-2.725 1.083-4.284-.207-1.277-.797-2.372-1.794-3.215-1.93-1.631-4.601-1.657-6.514-.117-1.813 1.46-2.98 4.687-.857 7.629l-2.577 2.657c-.298-.257-.29-.551-.206-.852.039-.139.106-.274.18-.4.539-.922.365-1.791-.191-2.629-.265-.399-.671-.59-1.112-.735-.981-.32-1.375-1.775-.674-2.551.158-.175.415-.313.648-.358 1.343-.258 2.078-2.097 1.434-3.195-.502-.855-.42-1.241.428-2.046.516-.489.861-.547 1.473-.173.759.464 1.483.409 2.232.008.459-.246.812-.593.927-1.096.169-.737.527-1.235 1.327-1.312.16 0 .129-.027.453.015m6.256 17.321H9.485l6.519-6.551z"
    />
  </svg>
);
const Memo = memo(SvgExtjs);
export default Memo;
