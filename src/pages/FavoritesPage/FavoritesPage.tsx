import { Container, Gallery } from '@components';

import { IImage } from 'src/types';

import {
  FavoritesNotFoundText,
  FavoritesSubtitle,
  FavoritesTitle,
  FavoritesWrapper,
} from './FavoritesPage.style';

const FavoritesPage = () => {
  const favorites: IImage[] = JSON.parse(
    localStorage.getItem('favorites') || '[]'
  );

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
