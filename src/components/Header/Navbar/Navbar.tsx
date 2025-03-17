import { Menu } from './Navbar.style';
import { APP_ROUTES_PATH } from '@constants/app';
import { Icons } from '@assets/icons';
import { Text } from '@components/Text';
import { NavbarItem } from './NavbarItem';
import { FC } from 'react';
import { TextStyledProps } from '@components/Text/Text.style';
import { NavItems } from '@constants/layout';

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
      {NavItems.map(({ icon: Icon, ...item }, index) => (
        <NavbarItem to={item.to} key={index}>
          {isRow && <Icon />}
          <Text {...textStyles}>{item.text}</Text>
        </NavbarItem>
      ))}
    </Menu>
  );
};
