import { theme } from '@styles/theme';
import { FC, SVGProps } from 'react';

export const Facebook: FC<SVGProps<SVGSVGElement>> = ({ color }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={6.323}
    height={12.175}
    fill="none"
    color={color}
  >
    <path d="M1.86 12.17V6.62H0V4.45h1.86V2.86C1.86 1 3 0 4.65 0c.79 0 1.47.05 1.67.08v1.94H5.17c-.9 0-1.07.42-1.07 1.05v1.38h2.14l-.28 2.17H4.1v5.55H1.86Z" />
  </svg>
);
