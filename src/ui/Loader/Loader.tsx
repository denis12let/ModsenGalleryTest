import logo from '@assets/images/loader.svg';

import { LoaderWrapper } from './Loader.style';
import logo from '@assets/images/loader.svg';

export const Loader = () => {
  return (
    <LoaderWrapper>
      <img src={logo} alt="" />
    </LoaderWrapper>
  );
};
