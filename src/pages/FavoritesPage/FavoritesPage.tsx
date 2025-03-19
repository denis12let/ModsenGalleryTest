import { Container, Gallery } from '@components';

import { imageSelectors } from '@store';
import { useAppSelector } from '@hooks';

import {
  FavoritesNotFoundText,
  FavoritesSubtitle,
  FavoritesTitle,
  FavoritesWrapper,
} from './FavoritesPage.style';

const FavoritesPage = () => {
  const favorites = useAppSelector(imageSelectors.getFavorites);

  return (
    <FavoritesWrapper>
      <Container>
        {!favorites.length ? (
          <FavoritesNotFoundText>
            Your <span>favorites</span> list is empty
          </FavoritesNotFoundText>
        ) : (
          <>
            <FavoritesSubtitle>Saved by you</FavoritesSubtitle>
            <FavoritesTitle>Your favorites list</FavoritesTitle>
            <Gallery array={favorites} variant="image" />
          </>
        )}
      </Container>
    </FavoritesWrapper>
  );
};

export default FavoritesPage;
