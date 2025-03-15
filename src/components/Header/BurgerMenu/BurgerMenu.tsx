import { Icons } from '@assets/icons';
import {
  BurgerMenuButton,
  BurgerMenuLogo,
  BurgerMenuSocials,
  BurgerMenuStyled,
} from './BurgerMenu.style';
import { theme } from '@styles/theme';
import { FC } from 'react';
import { ResponsiveLogo } from '../ResponsiveLogo';
import { Navbar } from '../Navbar/Navbar';
import { Socials } from '@components/Socials';

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
