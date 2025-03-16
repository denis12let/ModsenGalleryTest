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

interface ImageCardProps {
  text: string;
  src: string;
  isFavorite: boolean;
}

export const ImageCard: FC<ImageCardProps> = ({ src, text, isFavorite }) => {
  return (
    <ImageItemWrapper src={src} alt={text}>
      <ImageItemInner>
        <ImageItemText>{text}</ImageItemText>
        <Button>
          <FavoriteButton>
            <Icons.Favorites
              color={theme.colors.orange}
              fill={isFavorite ? theme.colors.orange : 'none'}
            />
          </FavoriteButton>
        </Button>
      </ImageItemInner>
    </ImageItemWrapper>
  );
};
