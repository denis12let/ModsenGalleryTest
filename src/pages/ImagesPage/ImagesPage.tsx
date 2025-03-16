import { Container } from '@components/Container';
import { HeroSection } from '@components/HeroSection';
import { useLocation } from 'react-router-dom';
import { Gallery } from '@components/Gallery';
import { IMAGES_CATEGORIES } from '@constants/ImagesCategories';
import { useEffect } from 'react';
import { useAppDispatch } from '@hooks/useAppDispatch';
import { useAppSelector } from '@hooks/useAppSelector';
import { fetchAllImages, fetchImageByTag } from '@store/actions';
import { HeroText } from '@components/HeroSection/HeroSection.style';

const ImagesPage = () => {
  const dispatch = useAppDispatch();
  const { images, error, isLoading } = useAppSelector((state) => state.images);
  const location = useLocation();
  // @ts-expect-error
  const path = location.pathname.split('/').at(-1).toLowerCase();
  const isImages = location.pathname.includes('images');

  let imagesArray;

  useEffect(() => {
    if (path === 'images') {
      dispatch(fetchAllImages({}));
    } else {
      dispatch(fetchImageByTag({ query: path }));
    } //сделать images = null
  }, []);

  if (isImages) {
    imagesArray = images;
  } else {
    imagesArray = IMAGES_CATEGORIES;
  }

  return (
    <>
      <HeroSection>
        <HeroText fontSize="48px">
          Let's find some <span>Images</span>
          <br />
          here!
        </HeroText>
      </HeroSection>
      <Container>
        {isLoading || !images.length ? (
          <>Лоадер</>
        ) : (
          <Gallery
            array={imagesArray}
            variant={isImages ? 'image' : 'category'}
          />
        )}
      </Container>
    </>
  );
};

export default ImagesPage;
