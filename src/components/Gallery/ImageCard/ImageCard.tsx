import { FC } from 'react';
import {
  ImageItemWrapper,
  ImageItemInner,
  ImageItemText,
  FavoriteButton,
} from './ImageCard.style';
import { Button } from '@ui/Button';
import { Icons } from '@assets/icons';
import { theme } from '@styles/theme';
import { truncateText } from '@utils/imageUtils';
import { useAppSelector } from '@hooks/useAppSelector';
import { useAppDispatch } from '@hooks/useAppDispatch';
import { setFavorite, unsetFavorite } from '@store/reducers/imageSlice';
import { useScreenWidth } from '@hooks/useScreenWidth';

interface ImageCardProps {
  text: string;
  src: string;
  id: string;
  isModal: boolean;
}

export const ImageCard: FC<ImageCardProps> = ({ src, text, id, isModal }) => {
  const width = useScreenWidth();

  const dispatch = useAppDispatch();
  const { favorites } = useAppSelector((state) => state.images);

  const isFavorite = favorites.some((item) => item.id === id);

  const handleFavoriteToggle = () => {
    if (isFavorite) {
      dispatch(unsetFavorite(id));
    } else {
      dispatch(setFavorite(id));
    }
  };

  let textWidth = isModal
    ? width > 900
      ? 50
      : 20
    : (width <= 900 && width > 650) || width < 450
      ? 17
      : 30;

  const iconProperties = {
    width: isModal
      ? width > 1000
        ? '20px'
        : '12px'
      : width > 1000
        ? '10px'
        : '8px',
    height: isModal
      ? width > 1000
        ? '30px'
        : '16px'
      : width > 1000
        ? '14px'
        : '12px',
    fill: isFavorite ? theme.colors.orange : 'none',
    color: theme.colors.orange,
  };

  return (
    <>
      <ImageItemWrapper src={src} alt={text}>
        <ImageItemInner>
          <ImageItemText
            maxWidth={isModal ? (width > 900 ? '400px' : '200px') : '200px'}
          >
            {truncateText(text, textWidth)}
          </ImageItemText>
          <Button onClick={handleFavoriteToggle}>
            <FavoriteButton>
              <Icons.FavoritesAlt {...iconProperties} />
            </FavoriteButton>
          </Button>
        </ImageItemInner>
      </ImageItemWrapper>
    </>
  );
};
