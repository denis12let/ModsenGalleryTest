import { Container } from '@components/Container';
import { Gallery } from '@components/Gallery';
import { useAppSelector } from '@hooks/useAppSelector';
import {
  FavoritesNotFoundText,
  FavoritesSubtitle,
  FavoritesTitle,
  FavoritesWrapper,
} from './FavoritesPage.style';

const FavoritesPage = () => {
  const { favorites } = useAppSelector((state) => state.images);

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
            <Gallery array={favorites} variant={'image'} />
          </>
        )}
      </Container>
    </FavoritesWrapper>
  );
};

export default FavoritesPage;
