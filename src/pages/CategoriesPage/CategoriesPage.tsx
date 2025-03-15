import { HeroSection } from '@components/HeroSection';
import { CategoriesGallery } from './components/CategoriesGallery';
import { Container } from '@components/Container';

const CategoriesPage = () => {
  return (
    <>
      <HeroSection></HeroSection>
      <Container>
        <CategoriesGallery />
      </Container>
    </>
  );
};

export default CategoriesPage;
