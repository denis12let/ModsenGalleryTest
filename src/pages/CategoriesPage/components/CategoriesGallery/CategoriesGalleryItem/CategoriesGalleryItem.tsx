import { FC } from 'react';
import {
  CategoriesGalleryItemInner,
  CategoriesGalleryItemText,
  CategoriesGalleryItemWrapper,
} from './CategoriesGalleryItem.style';
import { NavLink } from '@ui/NavLink';
import { APP_ROUTES_PATH } from '@constants/app';

interface CategoriesGalleryItemProps {
  text: string;
  img: string;
}

export const CategoriesGalleryItem: FC<CategoriesGalleryItemProps> = ({
  text,
  img,
}) => {
  return (
    <NavLink to={APP_ROUTES_PATH.IMAGES + '/' + text}>
      <CategoriesGalleryItemWrapper img={img} alt={text}>
        <CategoriesGalleryItemInner>
          <CategoriesGalleryItemText>{text}</CategoriesGalleryItemText>
        </CategoriesGalleryItemInner>
      </CategoriesGalleryItemWrapper>
    </NavLink>
  );
};
