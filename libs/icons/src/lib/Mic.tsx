import * as React from 'react';
import type { SVGProps } from 'react';
import { memo } from 'react';
const SvgMic = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={32}
    height={32}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M14.5002 23.3V28.5H12.2103C11.3802 28.5 10.7103 29.17 10.7103 30C10.7103 30.83 11.3802 31.5 12.2103 31.5H19.7902C20.6202 31.5 21.2902 30.83 21.2902 30C21.2902 29.17 20.6202 28.5 19.7902 28.5H17.5002V23.3C22.7302 22.56 26.7202 17.9 26.7202 12.37V10.7C26.7202 9.33002 25.6002 8.20002 24.2202 8.20002H22.2103V6.71002C22.2103 3.28998 19.4302 0.5 16.0002 0.5C12.5703 0.5 9.79022 3.28998 9.79022 6.71002V8.20001H7.78027C6.40027 8.20001 5.28027 9.33001 5.28027 10.7V12.69C5.28027 15.65 6.52026 18.5 8.68023 20.52C10.3203 22.06 12.3403 23 14.5002 23.3ZM8.28027 11.2H9.79022V12.69C9.79022 16.12 12.5703 18.91 16.0002 18.91C19.4302 18.91 22.2103 16.12 22.2103 12.69V11.2H23.7202V12.37C23.7202 16.6 20.5703 20.13 16.5303 20.4C14.3702 20.54 12.3102 19.81 10.7302 18.33C9.15026 16.85 8.28027 14.85 8.28027 12.69V11.2Z"
      fill="#374557"
    />
  </svg>
);
const Memo = memo(SvgMic);
export default Memo;
