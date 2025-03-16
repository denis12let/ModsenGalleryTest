import { FC, SVGProps } from 'react';

export const FavoritesAlt: FC<SVGProps<SVGSVGElement>> = ({
  color,
  fill,
  width,
  height,
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 12 16.0001"
    fill={fill || 'none'}
    color={color}
  >
    <path
      id="Vector"
      d="M11 15L6 11.88L1 15L1 2.55C1 2.14 1.15 1.74 1.41 1.45C1.68 1.16 2.04 1 2.42 1L9.57 1C9.95 1 10.31 1.16 10.58 1.45C10.84 1.74 11 2.14 11 2.55L11 15Z"
      fill={fill || 'none'}
      fill-opacity="1.000000"
      fill-rule="nonzero"
    />
    <path
      id="Vector"
      d="M6 11.88L1 15L1 2.55C1 2.14 1.15 1.74 1.41 1.45C1.68 1.16 2.04 1 2.42 1L9.57 1C9.95 1 10.31 1.16 10.58 1.45C10.84 1.74 11 2.14 11 2.55L11 15L6 11.88Z"
      stroke="currentColor"
      stroke-opacity="1.000000"
      stroke-width="2.000000"
      stroke-linejoin="round"
    />
  </svg>
);
