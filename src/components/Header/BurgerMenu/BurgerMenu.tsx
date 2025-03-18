import { FC } from 'react';

import { Icons } from '@assets';
import { Socials } from '@components';

import { Navbar } from '../Navbar/Navbar';
import { ResponsiveLogo } from '../ResponsiveLogo';

import { theme } from '@styles';
import {
  BurgerMenuButton,
  BurgerMenuLogo,
  BurgerMenuSocials,
  BurgerMenuStyled,
} from './BurgerMenu.style';

interface BurgerMenuProps {
  handleBurgerMenu: () => void;
}

export const BurgerMenu: FC<BurgerMenuProps> = ({ handleBurgerMenu }) => {
  return (
    <BurgerMenuStyled>
      <BurgerMenuButton onClick={handleBurgerMenu}>
        <Icons.Burger color={theme.colors.yellow} />
      </BurgerMenuButton>
      <BurgerMenuLogo>
        <ResponsiveLogo />
      </BurgerMenuLogo>
      <Navbar isRow={false} />
      <BurgerMenuSocials>
        <Socials />
      </BurgerMenuSocials>
    </BurgerMenuStyled>
  );
};
