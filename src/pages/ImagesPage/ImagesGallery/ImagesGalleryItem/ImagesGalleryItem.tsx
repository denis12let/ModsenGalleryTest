import { FC } from 'react';
import {
  ImagesGalleryItemInner,
  ImagesGalleryItemText,
  ImagesGalleryItemWrapper,
} from './ImagesGalleryItem.style';
import { NavLink } from '@ui/NavLink';
import { APP_ROUTES_PATH } from '@constants/app';

interface ImagesGalleryItemProps {
  text: string;
  src: string;
}

export const CategoriesGalleryItem: FC<ImagesGalleryItemProps> = ({
  text,
  src,
}) => {
  return (
    <NavLink to={APP_ROUTES_PATH.IMAGES + '/' + text}>
      <ImagesGalleryItemWrapper src={src} alt={text}>
        <ImagesGalleryItemInner>
          <ImagesGalleryItemText>{text}</ImagesGalleryItemText>
        </ImagesGalleryItemInner>
      </ImagesGalleryItemWrapper>
    </NavLink>
  );
};
