import * as React from 'react';
import type { SVGProps } from 'react';
import { memo } from 'react';
const SvgGitlab = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={800}
    height={800}
    fill="none"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fill="#FC6D26"
      d="M14.975 8.904 14.19 6.55l-1.552-4.67a.27.27 0 0 0-.255-.18.27.27 0 0 0-.254.18l-1.552 4.667H5.422L3.87 1.879a.27.27 0 0 0-.254-.179.27.27 0 0 0-.254.18l-1.55 4.667-.784 2.357a.515.515 0 0 0 .193.583l6.78 4.812 6.778-4.812a.52.52 0 0 0 .196-.583"
    />
    <path fill="#E24329" d="m8 14.296 2.578-7.75H5.423z" />
    <path fill="#FC6D26" d="m8 14.296-2.579-7.75H1.813z" />
    <path
      fill="#FCA326"
      d="m1.81 6.549-.784 2.354a.515.515 0 0 0 .193.583L8 14.3z"
    />
    <path
      fill="#E24329"
      d="M1.812 6.549h3.612L3.87 1.882a.27.27 0 0 0-.254-.18.27.27 0 0 0-.255.18z"
    />
    <path fill="#FC6D26" d="m8 14.296 2.578-7.75h3.614z" />
    <path
      fill="#FCA326"
      d="m14.19 6.549.783 2.354a.51.51 0 0 1-.193.583L8 14.296l6.188-7.747h.001z"
    />
    <path
      fill="#E24329"
      d="M14.19 6.549h-3.61l1.551-4.667a.27.27 0 0 1 .255-.18c.115 0 .217.073.254.18l1.552 4.667z"
    />
  </svg>
);
const Memo = memo(SvgGitlab);
export default Memo;
