import { FC } from 'react';
import {
  CategoryItemInner,
  CategoryItemText,
  CategoryItemWrapper,
} from './CategoryCard.style';
import { NavLink } from '@ui/NavLink';
import { APP_ROUTES_PATH } from '@constants/app';

interface CategoryCardProps {
  text: string;
  src: string;
}

export const CategoryCard: FC<CategoryCardProps> = ({ text, src }) => {
  return (
    <NavLink to={APP_ROUTES_PATH.IMAGES + '/' + text}>
      <CategoryItemWrapper src={src} alt={text}>
        <CategoryItemInner>
          <CategoryItemText>{text}</CategoryItemText>
        </CategoryItemInner>
      </CategoryItemWrapper>
    </NavLink>
  );
};
