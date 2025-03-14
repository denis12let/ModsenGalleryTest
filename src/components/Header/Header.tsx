import { Logo } from '@assets/icons/Logo';
import { HeaderInner, HeaderWrapper } from './Header.style';
import { NavLink } from '@ui/NavLink/NavLink';
import { Navbar } from './Navbar/Navbar';
import { APP_ROUTES_PATH } from '@constants/app';

export const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderInner>
        <NavLink to={APP_ROUTES_PATH.CATEGORIES}>
          <Logo />
        </NavLink>
        <Navbar />
      </HeaderInner>
    </HeaderWrapper>
  );
};
