import { HeroSection } from '@components/HeroSection';
import { Container } from '@components/Container';
import { Gallery } from '@components/Gallery';
import { IMAGES_CATEGORIES } from '@constants/ImagesCategories';

const CategoriesPage = () => {
  return (
    <>
      <HeroSection></HeroSection>
      <Container>
        <Gallery array={IMAGES_CATEGORIES} variant="category" />
      </Container>
    </>
  );
};

export default CategoriesPage;
