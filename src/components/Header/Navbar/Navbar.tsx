import { Menu } from './Navbar.style';
import { APP_ROUTES_PATH } from '@constants/app';
import { Icons } from '@assets/icons';
import { Text } from '@components/Text';
import { NavbarItem } from './NavbarItem';
import { FC } from 'react';
import { TextStyledProps } from '@components/Text/Text.style';

interface NavbarProps {
  isRow?: boolean;
}

const textStyles: TextStyledProps = {
  fontFamily: 'Roboto',
  fontSize: '24px',
  fontWeight: '400',
  lineheight: '28px',
};

export const Navbar: FC<NavbarProps> = ({ isRow = true }) => {
  return (
    <Menu isRow={isRow}>
      <NavbarItem to={APP_ROUTES_PATH.CATEGORIES}>
        {isRow && <Icons.Category />}
        <Text {...textStyles}>Category</Text>
      </NavbarItem>
      <NavbarItem to={APP_ROUTES_PATH.IMAGES}>
        {isRow && <Icons.Images />}
        <Text {...textStyles}>Images</Text>
      </NavbarItem>
      <NavbarItem to={APP_ROUTES_PATH.FAVORITES}>
        {isRow && <Icons.Favorites />}
        <Text {...textStyles}>Favorites</Text>
      </NavbarItem>
    </Menu>
  );
};
