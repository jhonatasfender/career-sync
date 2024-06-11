import * as React from 'react';
import type { SVGProps } from 'react';
import { memo } from 'react';
const SvgNestjs = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={800}
    height={800}
    preserveAspectRatio="xMidYMid"
    viewBox="0 -0.5 256 256"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fill="#E0234E"
      d="M150.736 0c-1.851 0-3.57.397-5.157.926 3.372 2.247 5.223 5.222 6.148 8.594.067.463.199.794.265 1.256.066.397.132.794.132 1.19.265 5.818-1.52 6.545-2.777 9.983-1.917 4.43-1.388 9.19.926 13.024.198.463.463.992.793 1.455-2.512-16.727 11.438-19.239 14.016-24.462.198-4.561-3.57-7.603-6.545-9.718C155.694.528 153.116 0 150.736 0m21.023 3.768c-.264 1.521-.066 1.124-.132 1.918-.066.529-.066 1.19-.132 1.719-.132.528-.264 1.057-.463 1.586-.132.53-.33 1.058-.528 1.587-.265.529-.463.992-.728 1.52-.198.265-.33.53-.529.794l-.396.595c-.33.463-.661.926-.992 1.322-.397.397-.727.86-1.19 1.19v.066c-.397.331-.793.728-1.256 1.058-1.388 1.058-2.975 1.851-4.43 2.843-.462.33-.925.595-1.322.992-.463.33-.86.66-1.256 1.058-.463.396-.793.793-1.19 1.256-.33.396-.727.86-.992 1.322-.33.463-.66.925-.925 1.388-.265.53-.463.992-.728 1.52-.198.53-.396.993-.528 1.521-.199.595-.331 1.124-.463 1.653-.066.265-.066.595-.132.86-.067.264-.067.529-.132.793 0 .529-.067 1.124-.067 1.653 0 .397 0 .793.067 1.19 0 .529.066 1.058.198 1.653.066.529.198 1.057.33 1.586.199.53.331 1.058.53 1.587.131.33.33.661.462.926L139.63 35.04a163 163 0 0 0-7.669-1.984l-4.165-.991c-3.967-.794-8-1.389-12.032-1.785-.132 0-.199-.067-.33-.067a118 118 0 0 0-11.835-.595c-2.909 0-5.818.132-8.66.33-4.034.265-8.066.794-12.1 1.455-.991.133-1.983.331-2.974.53-2.05.396-4.033.859-5.95 1.322l-2.976.793c-.991.397-1.917.86-2.842 1.256l-2.182.992c-.132.066-.265.066-.33.132-.662.33-1.257.595-1.852.925a3 3 0 0 0-.463.199c-.727.33-1.454.727-2.049 1.058-.463.198-.926.462-1.322.66a6 6 0 0 1-.595.331c-.595.33-1.19.661-1.72.992q-.891.495-1.586.992c-.463.33-.925.595-1.322.925-.066.066-.132.066-.199.132-.396.265-.859.595-1.256.926l-.132.132-.991.793c-.133.067-.265.199-.397.265-.33.264-.661.595-.992.86-.066.131-.198.198-.264.264-.397.397-.794.727-1.19 1.124-.067 0-.067.066-.132.132-.397.33-.794.727-1.19 1.124-.067.066-.067.132-.133.132-.33.33-.66.661-.991 1.058-.132.132-.33.264-.463.396-.33.397-.727.794-1.124 1.19-.066.133-.198.199-.265.331-.528.529-.991 1.058-1.52 1.587l-.198.198c-1.058 1.124-2.182 2.248-3.372 3.24a38 38 0 0 1-3.703 2.909 50 50 0 0 1-3.966 2.512 40 40 0 0 1-4.165 1.983 48 48 0 0 1-4.298 1.587c-2.776.595-5.62 1.719-8.065 1.917-.53 0-1.124.132-1.653.198a67 67 0 0 0-1.653.397l-1.587.595c-.529.198-1.057.463-1.586.727-.463.33-.992.595-1.455.926-.463.33-.925.727-1.322 1.124-.463.33-.926.793-1.322 1.19-.397.463-.794.86-1.124 1.322-.33.529-.727.992-.992 1.52-.33.464-.661.992-.926 1.521-.264.595-.528 1.124-.727 1.72a51 51 0 0 0-.595 1.718c-.132.529-.264 1.058-.33 1.587 0 .066-.067.132-.067.198-.132.595-.132 1.389-.198 1.785-.066.463-.132.86-.132 1.322 0 .265 0 .595.066.86.066.463.132.86.265 1.256.132.397.264.793.463 1.19v.066c.198.397.462.794.727 1.19.264.397.529.794.86 1.19.33.33.726.728 1.123 1.058.397.397.794.727 1.256 1.058 1.587 1.388 1.984 1.851 4.033 2.909.33.198.661.33 1.058.529.066 0 .132.066.198.066 0 .132 0 .198.067.33.066.53.198 1.058.33 1.587.132.595.33 1.124.529 1.587.198.397.33.793.529 1.19.066.132.132.265.198.33.265.53.53.992.794 1.455l.991 1.388c.33.397.727.86 1.124 1.257s.794.727 1.256 1.123c0 0 .067.067.132.067.397.33.794.66 1.19.925.463.33.926.595 1.455.86.463.264.992.529 1.52.727.397.198.86.33 1.323.463.066.066.132.066.264.132.265.066.595.132.86.198-.199 3.57-.265 6.942.264 8.132.595 1.322 3.504-2.71 6.413-7.338-.396 4.561-.66 9.916 0 11.503.727 1.653 4.694-3.504 8.132-9.19 46.874-10.842 89.648 21.553 94.144 67.303-.86-7.14-9.652-11.107-13.685-10.115-1.984 4.892-5.355 11.173-10.776 15.073.462-4.363.264-8.859-.662-13.222-1.454 6.082-4.297 11.768-8.198 16.66-6.28.463-12.56-2.578-15.867-7.14-.264-.198-.33-.595-.528-.86-.199-.462-.397-.925-.53-1.388a5.5 5.5 0 0 1-.396-1.388c-.066-.463-.066-.926-.066-1.455v-.991c.066-.463.198-.926.33-1.389s.265-.925.463-1.388c.265-.463.463-.926.793-1.388 1.124-3.174 1.124-5.752-.925-7.273a7.5 7.5 0 0 0-1.256-.66c-.265-.067-.595-.2-.86-.265-.198-.067-.33-.133-.529-.199-.462-.132-.925-.264-1.388-.33a5 5 0 0 0-1.388-.199c-.463-.066-.992-.132-1.455-.132-.33 0-.66.066-.992.066-.528 0-.991.067-1.454.199-.463.066-.926.132-1.388.264-.463.132-.926.265-1.389.463s-.86.397-1.322.595c-.397.198-.793.463-1.256.661-15.404 10.05-6.215 33.585 4.297 40.395-3.967.727-8 1.587-9.123 2.446l-.132.132c2.842 1.72 5.817 3.174 8.925 4.43 4.231 1.388 8.727 2.644 10.71 3.173v.066a64 64 0 0 0 16.66 1.19c29.288-2.05 53.287-24.329 57.65-53.683.132.595.265 1.124.397 1.719.198 1.19.463 2.446.595 3.702v.067c.132.595.198 1.19.265 1.719v.264c.066.595.132 1.19.132 1.719.066.727.132 1.454.132 2.182v1.057c0 .331.066.728.066 1.058 0 .397-.066.794-.066 1.19v.926c0 .463-.066.86-.066 1.322 0 .265 0 .529-.067.86 0 .462-.066.925-.066 1.454-.066.198-.066.397-.066.595-.066.529-.132.992-.199 1.52 0 .199 0 .397-.066.596-.066.66-.198 1.256-.264 1.917v.132c-.132.595-.265 1.257-.397 1.852v.198l-.397 1.785c0 .066-.066.198-.066.264-.132.595-.264 1.19-.463 1.786v.198c-.198.661-.396 1.256-.528 1.851-.067.066-.067.132-.067.132l-.595 1.983c-.264.662-.462 1.257-.727 1.918-.264.66-.463 1.322-.727 1.917-.265.661-.53 1.256-.793 1.917h-.067c-.264.595-.529 1.256-.86 1.851a3 3 0 0 1-.198.463c-.066.067-.066.132-.132.199-4.297 8.66-10.644 16.263-18.577 22.213-.53.33-1.058.728-1.587 1.124-.132.132-.33.199-.463.33-.463.331-.925.662-1.454.992l.198.397h.066l2.777-.397h.066c1.72-.264 3.438-.595 5.157-.925.463-.066.992-.198 1.454-.33.331-.067.595-.133.926-.199.463-.066.926-.198 1.388-.265.397-.132.794-.198 1.19-.33 6.612-1.587 13.025-3.769 19.173-6.347-10.512 14.346-24.594 25.916-41.056 33.519 7.603-.529 15.206-1.785 22.545-3.9 26.643-7.868 49.055-25.784 62.476-49.915a105.5 105.5 0 0 1-17.785 42.51 104 104 0 0 0 17.652-14.677c14.81-15.47 24.528-35.106 27.834-56.196a105.3 105.3 0 0 1 1.917 31.867c47.733-66.576 3.967-135.597-14.346-153.778-.067-.132-.132-.198-.132-.33-.067.066-.067.066-.067.132 0-.067 0-.067-.066-.132 0 .793-.066 1.586-.132 2.38-.198 1.52-.397 2.975-.661 4.43-.33 1.454-.727 2.908-1.124 4.363a55 55 0 0 1-1.587 4.23 57 57 0 0 1-1.983 4.034c-.727 1.256-1.52 2.578-2.38 3.768a51 51 0 0 1-2.71 3.57c-.993 1.19-2.05 2.248-3.108 3.306a43 43 0 0 1-1.917 1.652c-.53.463-.992.86-1.521 1.323-1.19.925-2.38 1.785-3.702 2.578-1.256.793-2.579 1.587-3.9 2.248-1.39.661-2.778 1.256-4.166 1.851a47 47 0 0 1-4.297 1.388 53 53 0 0 1-4.43.992c-1.52.265-3.04.397-4.495.529-1.058.066-2.116.132-3.174.132-1.52 0-3.041-.132-4.495-.264-1.521-.133-3.042-.331-4.496-.662-1.52-.264-2.975-.66-4.43-1.123h-.066c1.455-.133 2.91-.265 4.364-.53a48 48 0 0 0 4.43-.991 47 47 0 0 0 4.296-1.388c1.455-.53 2.843-1.19 4.166-1.852 1.388-.66 2.644-1.388 3.966-2.181 1.256-.86 2.513-1.72 3.703-2.645a36 36 0 0 0 3.371-2.975c1.124-.992 2.116-2.115 3.108-3.24a65 65 0 0 0 2.776-3.57c.132-.198.265-.462.397-.66.661-1.058 1.322-2.116 1.917-3.174a46 46 0 0 0 1.984-4.033 46 46 0 0 0 1.586-4.23c.463-1.39.794-2.844 1.124-4.298.265-1.52.53-2.975.661-4.43.132-1.52.265-3.04.265-4.495 0-1.058-.066-2.116-.132-3.174-.132-1.52-.33-2.975-.53-4.43a48 48 0 0 0-.99-4.429c-.464-1.388-.926-2.843-1.455-4.231-.53-1.388-1.19-2.777-1.851-4.099-.728-1.322-1.455-2.645-2.248-3.9a73 73 0 0 0-2.645-3.637 140 140 0 0 0-3.041-3.372 41 41 0 0 0-1.719-1.652 122 122 0 0 0-9.19-6.48 12 12 0 0 0-1.322-.66c-2.181-1.389-4.23-2.116-6.28-2.777"
    />
  </svg>
);
const Memo = memo(SvgNestjs);
export default Memo;
