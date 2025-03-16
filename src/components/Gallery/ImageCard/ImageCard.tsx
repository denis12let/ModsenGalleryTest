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

import { useState } from 'react';
import Modal from '@ui/Modal/Modal';

interface ImageCardProps {
  text: string;
  src: string;
  id: string;
}

export const ImageCard: FC<ImageCardProps> = ({ src, text, id }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  let textWidth = 30;
  if ((width <= 900 && width > 650) || width < 450) {
    textWidth = 17;
  }

  return (
    <>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(!isModalOpen)}>
        <ImageItemWrapper
          src={src}
          alt={text}
          onClick={() => setIsModalOpen(!isModalOpen)}
        >
          <ImageItemInner>
            <ImageItemText>{truncateText(text, textWidth)}</ImageItemText>
            <Button onClick={handleFavoriteToggle}>
              <FavoriteButton>
                <Icons.FavoritesAlt
                  color={theme.colors.orange}
                  fill={isFavorite ? theme.colors.orange : 'none'}
                  width="20px"
                  height="30px"
                />
              </FavoriteButton>
            </Button>
          </ImageItemInner>
        </ImageItemWrapper>
      </Modal>
      <ImageItemWrapper
        src={src}
        alt={text}
        onClick={() => setIsModalOpen(!isModalOpen)}
      >
        <ImageItemInner>
          <ImageItemText>{truncateText(text, textWidth)}</ImageItemText>
          <Button onClick={handleFavoriteToggle}>
            <FavoriteButton>
              <Icons.FavoritesAlt
                color={theme.colors.orange}
                fill={isFavorite ? theme.colors.orange : 'none'}
                width={width > 1000 ? '10px' : '8px'}
                height={width > 1000 ? '14px' : '12px'}
              />
            </FavoriteButton>
          </Button>
        </ImageItemInner>
      </ImageItemWrapper>
    </>
  );
};
