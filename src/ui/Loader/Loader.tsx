import logo from '@assets/images/loader.svg';

import { LoaderWrapper } from './Loader.style';

export const Loader = () => {
  return (
    <LoaderWrapper>
      <img src={logo} alt="" />
    </LoaderWrapper>
  );
};
