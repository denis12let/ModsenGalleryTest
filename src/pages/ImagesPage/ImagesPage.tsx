import { Container } from '@components/Container';
import { HeroSection } from '@components/HeroSection';
import { ImagesGallery } from './ImagesGallery/ImagesGallery';
import { useNavigate } from 'react-router-dom';
import { Gallery } from '@components/Gallery';
import { IMAGES_CATEGORIES } from '@constants/ImagesCategories';

const ImagesPage = () => {
  const p = useNavigate();

  return (
    <>
      <HeroSection></HeroSection>
      <Container>
        <Gallery array={IMAGES_CATEGORIES} variant="image" />
      </Container>
    </>
  );
};

export default ImagesPage;
