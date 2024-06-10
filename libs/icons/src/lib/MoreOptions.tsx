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
      d="M12.0012 0.359863C11.6543 0.359863 11.3109 0.42818 10.9904 0.560913C10.67 0.693645 10.3788 0.888195 10.1335 1.13345C9.88829 1.37871 9.69374 1.66987 9.56101 1.99032C9.42828 2.31076 9.35996 2.65422 9.35996 3.00106C9.35996 3.34791 9.42828 3.69136 9.56101 4.01181C9.69374 4.33225 9.88829 4.62341 10.1335 4.86867C10.3788 5.11393 10.67 5.30848 10.9904 5.44121C11.3109 5.57395 11.6543 5.64226 12.0012 5.64226C12.7017 5.6421 13.3734 5.36368 13.8686 4.86825C14.3638 4.37281 14.6419 3.70095 14.6418 3.00046C14.6416 2.29997 14.3632 1.62824 13.8677 1.13303C13.3723 0.63782 12.7004 0.359704 12 0.359863H12.0012ZM3.60116 0.359863C3.25431 0.359863 2.91086 0.42818 2.59042 0.560913C2.26997 0.693645 1.97881 0.888195 1.73355 1.13345C1.48829 1.37871 1.29374 1.66987 1.16101 1.99032C1.02828 2.31076 0.959961 2.65422 0.959961 3.00106C0.959961 3.34791 1.02828 3.69136 1.16101 4.01181C1.29374 4.33225 1.48829 4.62341 1.73355 4.86867C1.97881 5.11393 2.26997 5.30848 2.59042 5.44121C2.91086 5.57395 3.25431 5.64226 3.60116 5.64226C4.30165 5.6421 4.97339 5.36368 5.4686 4.86825C5.9638 4.37281 6.24192 3.70095 6.24176 3.00046C6.2416 2.29997 5.96318 1.62824 5.46775 1.13303C4.97231 0.63782 4.30045 0.359704 3.59996 0.359863H3.60116ZM20.4012 0.359863C20.0543 0.359863 19.7109 0.42818 19.3904 0.560913C19.07 0.693645 18.7788 0.888195 18.5336 1.13345C18.2883 1.37871 18.0937 1.66987 17.961 1.99032C17.8283 2.31076 17.76 2.65422 17.76 3.00106C17.76 3.34791 17.8283 3.69136 17.961 4.01181C18.0937 4.33225 18.2883 4.62341 18.5336 4.86867C18.7788 5.11393 19.07 5.30848 19.3904 5.44121C19.7109 5.57395 20.0543 5.64226 20.4012 5.64226C21.1017 5.6421 21.7734 5.36368 22.2686 4.86825C22.7638 4.37281 23.0419 3.70095 23.0418 3.00046C23.0416 2.29997 22.7632 1.62824 22.2677 1.13303C21.7723 0.63782 21.1005 0.359704 20.4 0.359863H20.4012Z"
      fill="#374557"
    />
  </svg>
);
const Memo = memo(SvgMoreOptions);
export default Memo;
