import { FC } from 'react';

import { NavLink } from '@ui';
import { APP_ROUTES_PATH } from '@constants/app';

import {
  CategoryItemInner,
  CategoryItemText,
  CategoryItemWrapper,
} from './CategoryCard.style';

interface CategoryCardProps {
  text: string;
  src: string;
}

export const CategoryCard: FC<CategoryCardProps> = ({ text, src }) => {
  return (
    <NavLink to={APP_ROUTES_PATH.IMAGES + '/' + text}>
      <CategoryItemWrapper src={src}>
        <CategoryItemInner>
          <CategoryItemText>{text}</CategoryItemText>
        </CategoryItemInner>
      </CategoryItemWrapper>
    </NavLink>
  );
};
