import { theme } from '@styles/theme';
import { FC, SVGProps } from 'react';

export const Arrow: FC<SVGProps<SVGSVGElement>> = ({
  color = theme.colors.black,
}) => (
  <svg
    width="21.000000"
    height="12.000000"
    viewBox="0 0 21 12"
    fill="none"
    color={color}
  >
    <path
      id="Vector 2 (Stroke)"
      d="M0 1.96L2.06 0L10.5 8.06L18.93 0L21 1.96L10.5 12L0 1.96Z"
      fill="#C4C4C4"
      fill-opacity="1.000000"
      fill-rule="evenodd"
    />
  </svg>
);
