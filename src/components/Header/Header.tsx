import { useState } from 'react';

import { APP_ROUTES_PATH } from '@constants/app';
import { useScreenWidth } from '@hooks';
import { Button, NavLink } from '@ui';
import { Icons } from '@assets';
import { theme } from '@styles';

import { Navbar } from './Navbar';
import { ResponsiveLogo } from './ResponsiveLogo';
import { BurgerMenu } from './BurgerMenu';

import { HeaderInner, HeaderWrapper } from './Header.style';

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
