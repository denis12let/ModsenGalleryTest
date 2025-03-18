import { Container } from '@components/Container';
import { Gallery } from '@components/Gallery';
import {
  FavoritesNotFoundText,
  FavoritesSubtitle,
  FavoritesTitle,
  FavoritesWrapper,
} from './FavoritesPage.style';
import { IImage } from 'src/types';

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
