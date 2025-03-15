import { HeaderInner, HeaderWrapper } from './Header.style';
import { NavLink } from '@ui/NavLink/NavLink';
import { Navbar } from './Navbar';
import { APP_ROUTES_PATH } from '@constants/app';
import { useScreenWidth } from '@hooks/useScreenWidth';
import { Button } from '@ui/Button';
import { Icons } from '@assets/icons';
import { theme } from '@styles/theme';
import { ResponsiveLogo } from './ResponsiveLogo';
import { useState } from 'react';
import { BurgerMenu } from './BurgerMenu';

export const Header = () => {
  const currentWidth = useScreenWidth();
  const [isActive, setIsActive] = useState(false);

  const handleBurgerMenu = () => setIsActive(!isActive);

  return (
    <HeaderWrapper>
      {isActive ? (
        <BurgerMenu handleBurgerMenu={handleBurgerMenu} />
      ) : (
        <HeaderInner>
          <NavLink to={APP_ROUTES_PATH.CATEGORIES}>
            <ResponsiveLogo />
          </NavLink>
          {currentWidth > 800 ? (
            <Navbar />
          ) : (
            <Button onClick={handleBurgerMenu}>
              <Icons.Burger color={theme.colors.yellow} />
            </Button>
          )}
        </HeaderInner>
      )}
    </HeaderWrapper>
  );
};
