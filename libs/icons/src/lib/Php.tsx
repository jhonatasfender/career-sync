import * as React from 'react';
import type { SVGProps } from 'react';
import { memo } from 'react';
const SvgPhp = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={800}
    height={800}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M18.532 27.365h4.746c1.393.011 2.402.41 3.028 1.198.625.787.832 1.862.62 3.224a6.17 6.17 0 0 1-.55 1.833c-.271.6-.649 1.14-1.133 1.621-.59.61-1.221.999-1.894 1.163a8.773 8.773 0 0 1-2.09.247h-2.125l-.673 3.348H16l2.532-12.634zm2.072 2.008L19.54 34.66c.071.011.142.017.213.017h.248c1.133.012 2.078-.1 2.833-.335.756-.246 1.263-1.104 1.523-2.572.212-1.234 0-1.944-.638-2.132-.625-.188-1.41-.276-2.355-.265a4.957 4.957 0 0 1-.407.018h-.372l.018-.018zM29.73 24h2.444l-.691 3.366h2.196c1.204.023 2.101.27 2.691.74.602.47.78 1.362.532 2.678l-1.187 5.868h-2.479l1.133-5.604c.118-.587.083-1.004-.106-1.25-.189-.247-.596-.37-1.222-.37l-1.965-.018-1.452 7.242H27.18L29.73 24zM39.526 27.365h4.745c1.393.011 2.403.41 3.028 1.198.626.787.833 1.862.62 3.224a6.166 6.166 0 0 1-.549 1.833c-.271.6-.649 1.14-1.133 1.621-.59.61-1.222.999-1.895 1.163a8.773 8.773 0 0 1-2.09.247h-2.124l-.673 3.348h-2.461l2.532-12.634zm2.072 2.008-1.063 5.287c.071.011.142.017.213.017h.248c1.133.012 2.077-.1 2.833-.335.755-.246 1.263-1.104 1.523-2.572.212-1.234 0-1.944-.638-2.132-.625-.188-1.41-.276-2.355-.265a4.953 4.953 0 0 1-.407.018h-.372l.018-.018z"
      fill="#000"
    />
  </svg>
);
const Memo = memo(SvgPhp);
export default Memo;