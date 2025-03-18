import { FC, SVGProps } from 'react';

import { APP_ROUTES_PATH } from './app';
import { Icons } from '@assets';

export const FOOTER_LINKS = [
  {
    TITLE: 'Company',
    LINKS: [
      { TEXT: 'About', TO: '/#' },
      { TEXT: 'Features', TO: '/#' },
      { TEXT: 'Works', TO: '/#' },
      { TEXT: 'Career', TO: '/#' },
    ],
  },
  {
    TITLE: 'Help',
    LINKS: [
      { TEXT: 'Customer Support', TO: '/#' },
      { TEXT: 'Delivery Details', TO: '/#' },
      { TEXT: 'Terms & Conditions', TO: '/#' },
      { TEXT: 'Privacy Policy', TO: '/#' },
    ],
  },
  {
    TITLE: 'FAQ',
    LINKS: [
      { TEXT: 'Account', TO: '/#' },
      { TEXT: 'Manage Deliveries', TO: '/#' },
      { TEXT: 'Orders', TO: '/#' },
      { TEXT: 'Payments', TO: '/#' },
    ],
  },
  {
    TITLE: 'Resources',
    LINKS: [
      { TEXT: 'Free eBooks', TO: '/#' },
      { TEXT: 'Development TuTOrial', TO: '/#' },
      { TEXT: 'How to - Blog', TO: '/#' },
      { TEXT: 'Youtube Playlist', TO: '/#' },
    ],
  },
];

interface NavItem {
  to: string;
  icon: FC<SVGProps<SVGSVGElement>>;
  text: string;
}

export const NavItems: NavItem[] = [
  {
    to: APP_ROUTES_PATH.CATEGORIES,
    icon: Icons.Category,
    text: 'Category',
  },
  {
    to: APP_ROUTES_PATH.IMAGES,
    icon: Icons.Images,
    text: 'Images',
  },
  {
    to: APP_ROUTES_PATH.FAVORITES,
    icon: Icons.Favorites,
    text: 'Favorites',
  },
];

export const socials = [
  {
    to: 'https://x.com/',
    icon: Icons.Twitter,
  },
  {
    to: 'https://www.facebook.com/',
    icon: Icons.Facebook,
  },
  {
    to: 'https://www.instagram.com/',
    icon: Icons.Instagram,
  },
  {
    to: 'https://github.com/',
    icon: Icons.Github,
  },
];
