import * as React from 'react';
import type { SVGProps } from 'react';
import { memo } from 'react';
const SvgLaravel = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={800}
    height={800}
    preserveAspectRatio="xMinYMin meet"
    viewBox="0 0 256 256"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill="#F35045">
      <path d="M160.445 208c2 2.889 3.222 2.667 4.777 2s81.556-27.667 84-28.555c2.444-.889 1.667-1.667.89-2.89-.778-1.222-27.445-37.444-28.779-39.555s-2-1.667-4.111-1l-84.805 22.067S158.445 205.11 160.445 208M256 171.115v-42.398c-9.541 2.542-21.609 5.756-26.373 7.023 7.187 9.616 18.423 24.665 26.373 35.375m-26.455-87.594c-1.307.297-30.247 5.527-32.03 5.764-1.782.238-1.188 1.248-.475 2.258l25.467 34.943s31.139-7.725 33.041-8.141q.231-.051.452-.107v-4.627c-5.66-7.177-21.08-26.718-22.413-28.544-1.604-2.199-2.734-1.842-4.042-1.546" />
      <path d="M47.456 28.634c6.267-.285 6.839 1.141 9.592 5.224l69.17 115.642 86.974-20.835c-4.819-6.831-26.695-37.846-28.81-40.806-2.376-3.328.06-4.873 3.923-5.526 3.862-.654 37.14-6.24 39.992-6.656 2.853-.416 5.112-1.426 9.746 4.16 2.372 2.858 10.412 12.87 17.957 22.255V48q0-19.833-14.083-33.917Q227.833.001 208 0H48Q28.167 0 14.083 14.083C8.698 19.47 4.865 25.487 2.57 32.134c15.678-1.288 40.501-3.3 44.887-3.5z" />
      <path d="M168.289 223.564c-7.334 2.222-10.623 3.325-15.4-3.342-3.578-4.993-22.927-39.843-32.414-57.023-17.955 4.702-50.814 13.278-60.29 15.555-9.248 2.222-13.198-3.323-14.717-6.74C44.403 169.616 17.289 111.158 0 73.65V208q0 19.833 14.083 33.917Q28.167 255.999 48 256h160q19.833 0 33.917-14.083Q255.999 227.833 256 208v-15.781c-19.64 7.184-82.77 29.848-87.711 31.345" />
      <path d="M60.412 165.288c2.6-.595 51.313-12.253 52.353-12.476s1.708-.817.594-2.747-64.934-112.09-64.934-112.09c-.589-1.011-.421-1.348-2.022-1.264-1.427.076-37.538 3.298-45.898 3.996a51 51 0 0 0-.461 5.331c8.487 17.375 57.199 117.837 57.472 118.655.297.892.297 1.189 2.896.595" />
    </g>
  </svg>
);
const Memo = memo(SvgLaravel);
export default Memo;
