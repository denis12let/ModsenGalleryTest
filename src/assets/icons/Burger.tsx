import { FC, SVGProps } from 'react';

export const Burger: FC<SVGProps<SVGSVGElement>> = ({ color }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={26}
    height={18}
    viewBox="0 0 26 18"
    fill="none"
    color={color}
  >
    <path
      fill="currentColor"
      d="M26 9c0 .37-.17.73-.46 1-.29.27-.69.42-1.11.42H1.56c-.42 0-.82-.15-1.11-.42C.16 9.73 0 9.37 0 9c0-.38.16-.74.45-1.01.29-.27.69-.42 1.11-.42h22.87c.42 0 .82.15 1.11.42.29.27.46.63.46 1.01ZM1.56 2.84h22.87c.42 0 .82-.15 1.11-.42.29-.27.46-.63.46-1 0-.38-.17-.74-.46-1.01-.29-.27-.69-.41-1.11-.41H1.56C1.14 0 .74.14.45.41.16.68 0 1.04 0 1.42c0 .37.16.73.45 1 .29.27.69.42 1.11.42Zm22.87 12.31H1.56c-.42 0-.82.15-1.11.42-.29.27-.45.63-.45 1 0 .38.16.74.45 1.01.29.27.69.42 1.11.42h22.87c.42 0 .82-.15 1.11-.42.29-.27.46-.63.46-1.01 0-.37-.17-.73-.46-1-.29-.27-.69-.42-1.11-.42Z"
    />
  </svg>
);
