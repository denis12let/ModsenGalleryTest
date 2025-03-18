import { FC, MouseEvent } from 'react';
import {
  ImageItemWrapper,
  ImageItemInner,
  ImageItemText,
  FavoriteButton,
} from './ImageCard.style';
import { Button } from '@ui/Button';
import { Icons } from '@assets/icons';
import { theme } from '@styles/theme';
import { getIconSize, getTextWidth, truncateText } from '@utils/imageUtils';
import { useAppSelector } from '@hooks/useAppSelector';
import { useAppDispatch } from '@hooks/useAppDispatch';
import { imagesActions } from '@store/reducers/imageSlice';
import { useScreenWidth } from '@hooks/useScreenWidth';
import { IImage } from 'src/types';

interface ImageCardProps {
  text: string;
  src: string;
  id: string;
  isModal: boolean;
}

export const ImageCard: FC<ImageCardProps> = ({ src, text, id, isModal }) => {
  const width = useScreenWidth();

  const dispatch = useAppDispatch();

  const favorites: IImage[] = JSON.parse(
    localStorage.getItem('favorites') || '[]'
  );

  const isFavorite = favorites.some((item) => item.id === id);

  const handleFavoriteToggle = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    if (isFavorite) {
      dispatch(imagesActions.unsetFavorite(id));
    } else {
      dispatch(imagesActions.setFavorite(id));
    }
  };

  const iconProperties = {
    ...getIconSize(isModal, width),
    fill: isFavorite ? theme.colors.orange : 'none',
    color: theme.colors.orange,
  };

  return (
    <ImageItemWrapper src={src}>
      <ImageItemInner>
        <ImageItemText
          maxWidth={isModal ? (width > 900 ? '400px' : '200px') : '200px'}
        >
          {truncateText(text, getTextWidth(isModal, width))}
        </ImageItemText>
        <Button onClick={handleFavoriteToggle}>
          <FavoriteButton>
            <Icons.FavoritesAlt {...iconProperties} />
          </FavoriteButton>
        </Button>
      </ImageItemInner>
    </ImageItemWrapper>
  );
};
