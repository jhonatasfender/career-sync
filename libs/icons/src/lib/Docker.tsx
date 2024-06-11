import * as React from 'react';
import type { SVGProps } from 'react';
import { memo } from 'react';
const SvgDocker = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={800}
    height={800}
    fill="none"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fill="#2396ED"
      d="m12.342 4.536.15-.227.262.159.116.083c.28.216.869.768.996 1.684q.335-.06.673-.06c.534 0 .893.124 1.097.227l.105.057.068.045.191.156-.066.2a2 2 0 0 1-.47.73c-.29.299-.8.652-1.609.698l-.178.005h-.148c-.37.977-.867 2.078-1.702 3.066a7.1 7.1 0 0 1-1.74 1.488 8 8 0 0 1-2.549.968c-.644.125-1.298.187-1.953.185-1.45 0-2.73-.288-3.517-.792-.703-.449-1.243-1.182-1.606-2.177a8.3 8.3 0 0 1-.461-2.83.516.516 0 0 1 .432-.516l.068-.005h10.54l.092-.007.149-.016c.256-.034.646-.11.92-.27-.328-.543-.421-1.178-.268-1.854a3.3 3.3 0 0 1 .3-.81zM2.89 5.784l.04.007a.13.13 0 0 1 .077.082l.006.04v1.315l-.006.041a.13.13 0 0 1-.078.082l-.039.006H1.478a.124.124 0 0 1-.117-.088l-.007-.04V5.912l.007-.04a.13.13 0 0 1 .078-.083l.039-.006H2.89zm1.947 0 .039.007a.13.13 0 0 1 .078.082l.006.04v1.315l-.007.041a.13.13 0 0 1-.078.082l-.039.006H3.424a.125.125 0 0 1-.117-.088L3.3 7.23V5.913a.13.13 0 0 1 .085-.123l.039-.007zm1.976 0 .039.007a.13.13 0 0 1 .077.082l.007.04v1.315l-.007.041a.13.13 0 0 1-.078.082l-.039.006H5.4a.124.124 0 0 1-.117-.088l-.006-.04V5.912l.006-.04a.13.13 0 0 1 .078-.083l.039-.006h1.413zm1.952 0 .039.007a.13.13 0 0 1 .078.082l.007.04v1.315a.13.13 0 0 1-.085.123l-.04.006H7.353a.124.124 0 0 1-.117-.088l-.006-.04V5.912l.006-.04a.13.13 0 0 1 .078-.083l.04-.006h1.412zm1.97 0 .039.007a.13.13 0 0 1 .078.082l.006.04v1.315a.13.13 0 0 1-.085.123l-.039.006H9.322a.124.124 0 0 1-.117-.088l-.006-.04V5.912l.006-.04a.13.13 0 0 1 .078-.083l.04-.006h1.411zm-5.9-1.892.04.007a.13.13 0 0 1 .077.081l.007.041v1.315a.13.13 0 0 1-.085.123l-.039.007H3.424a.125.125 0 0 1-.117-.09l-.007-.04V4.021a.13.13 0 0 1 .085-.122l.039-.007h1.412zm1.976 0 .04.007a.13.13 0 0 1 .077.081l.007.041v1.315a.13.13 0 0 1-.085.123l-.039.007H5.4a.125.125 0 0 1-.117-.09l-.006-.04V4.021l.006-.04a.13.13 0 0 1 .078-.082l.039-.007h1.412zm1.953 0c.054 0 .1.037.117.088l.007.041v1.315a.13.13 0 0 1-.085.123l-.04.007h-1.41a.125.125 0 0 1-.117-.09l-.006-.04V4.021l.006-.04a.13.13 0 0 1 .078-.082l.04-.007h1.412zm0-1.892c.054 0 .1.037.117.088l.007.04v1.316a.13.13 0 0 1-.085.123l-.04.006h-1.41a.124.124 0 0 1-.117-.088l-.006-.04V2.128l.006-.04a.13.13 0 0 1 .078-.082L7.353 2h1.412z"
    />
  </svg>
);
const Memo = memo(SvgDocker);
export default Memo;
