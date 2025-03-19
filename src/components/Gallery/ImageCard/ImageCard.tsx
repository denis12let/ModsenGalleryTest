import { FC, MouseEvent, useEffect } from 'react';

import { useAppDispatch, useAppSelector, useScreenWidth } from '@hooks';
import { getIconSize, getTextWidth, truncateText } from '@utils';
import { imagesActions, imageSelectors } from '@store';
import { Icons } from '@assets';
import { Button } from '@ui';

import { theme } from '@styles/theme';
import {
  ImageItemWrapper,
  ImageItemInner,
  ImageItemText,
  FavoriteButton,
} from './ImageCard.style';

interface ImageCardProps {
  text: string;
  src: string;
  id: string;
  isModal: boolean;
}

export const ImageCard: FC<ImageCardProps> = ({ src, text, id, isModal }) => {
  const width = useScreenWidth();

  const dispatch = useAppDispatch();
  const favorites = useAppSelector(imageSelectors.getFavorites);

  const isFavorite = favorites.some((item) => item.id === id);

  const handleFavoriteToggle = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();

    dispatch(imagesActions.toggleFavorite(id));
  };

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

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
