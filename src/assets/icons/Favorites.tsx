import { FC, SVGProps } from 'react';

export const Favorites: FC<SVGProps<SVGSVGElement>> = ({ color, fill }) => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 16.25 20"
    fill={fill || 'none'}
    color={color}
  >
    <path
      id="Vector"
      d="M8.12 15L1 19L1 3C1 2.46 1.21 1.96 1.59 1.58C1.97 1.21 2.49 1 3.03 1L13.21 1C13.75 1 14.27 1.21 14.65 1.58C15.03 1.96 15.25 2.46 15.25 3L15.25 19L8.12 15Z"
      stroke="currentColor"
      strokeOpacity="1.000000"
      strokeWidth="2.000000"
      strokeLinejoin="round"
    />
  </svg>
);
