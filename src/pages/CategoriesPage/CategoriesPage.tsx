import { HeroSection } from '@components/HeroSection';
import { Container } from '@components/Container';
import { Gallery } from '@components/Gallery';
import { IMAGES_CATEGORIES } from '@constants/Images';
import { HeroText } from '@components/HeroSection/HeroSection.style';

const CategoriesPage = () => {
  return (
    <>
      <HeroSection>
        <HeroText fontSize="96px" lineheight="113px">
          Let's find some
          <br />
          <span>Images</span> here!
        </HeroText>
      </HeroSection>
      <Container>
        <Gallery array={IMAGES_CATEGORIES} variant="category" />
      </Container>
    </>
  );
};

export default CategoriesPage;
