import { IMAGES_CATEGORIES } from '@constants/ImagesCategories';
import { ImagesGalleryGrid } from './ImagesGallery.style';
import { CategoriesGalleryItem } from './ImagesGalleryItem';

export const ImagesGallery = () => {
  return (
    <ImagesGalleryGrid>
      {IMAGES_CATEGORIES.map((item) => (
        <CategoriesGalleryItem src={item.IMG} text={item.CATEGORY} />
      ))}{' '}
    </ImagesGalleryGrid>
  );
};
