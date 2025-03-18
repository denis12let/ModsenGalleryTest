import { FC } from 'react';

import { Text } from '@ui';
import { NavItems } from '@constants/layout';

import { NavbarItem } from './NavbarItem';

import { TextStyledProps } from '@ui/Text/Text.style';
import { Menu } from './Navbar.style';

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
