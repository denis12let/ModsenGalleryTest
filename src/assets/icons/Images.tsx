import { FC, SVGProps } from 'react';

export const Images: FC<SVGProps<SVGSVGElement>> = ({ color }) => (
  <svg width="18" height="18" fill="none" viewBox="0 0 20 20" color={color}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M1 4.6c0-1.26 0-1.9.21-2.38.19-.42.5-.76.88-.98C2.51 1 3.08 1 4.2 1h11.6c1.12 0 1.68 0 2.1.24.38.22.69.56.88.98.22.48.22 1.11.22 2.37V15.4c0 .54 0 .97-.02 1.32-.03.45-.08.77-.2 1.05-.19.42-.5.76-.88.98-.42.25-.98.25-2.1.25H4.19c-1.12 0-1.68 0-2.1-.25-.38-.22-.69-.56-.88-.98-.2-.46-.21-1.04-.21-2.15V4.6Zm0 11.02 4.76-6.26h0c.43-.55.64-.83.89-.93a.89.89 0 0 1 .68 0c.25.11.46.39.88.95l2.67 3.61c.38.52.58.78.81.89.21.09.44.1.66.03.24-.08.45-.33.88-.81l.5-.56c.44-.49.66-.74.9-.82a.94.94 0 0 1 .66.04c.24.12.44.39.82.93l2.87 4.03m0 0 .02.02M12 6.62c0-.62.44-1.12 1-1.12.55 0 1 .5 1 1.12 0 .62-.45 1.13-1 1.13-.56 0-1-.51-1-1.13Z"
    />
  </svg>
);
