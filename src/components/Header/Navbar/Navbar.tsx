import { Menu } from './Navbar.style';
import { APP_ROUTES_PATH } from '@constants/app';
import { Icons } from '@assets/icons';
import { Text } from '@components/Text';
import { NavbarItem } from './NavbarItem/NavbarItem';

export const Navbar = () => {
  return (
    <Menu>
      <NavbarItem to={APP_ROUTES_PATH.CATEGORIES}>
        <Icons.Category />
        <Text>Category</Text>
      </NavbarItem>
      <NavbarItem to={APP_ROUTES_PATH.IMAGES}>
        <Icons.Images />
        <Text>Images</Text>
      </NavbarItem>
      <NavbarItem to={APP_ROUTES_PATH.FAVORITES}>
        <Icons.Favorites />
        <Text>Favorites</Text>
      </NavbarItem>
    </Menu>
  );
};
