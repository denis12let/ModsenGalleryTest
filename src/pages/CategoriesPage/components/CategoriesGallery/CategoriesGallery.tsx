import { IMAGES_CATEGORIES } from '@constants/ImagesCategories';
import { CategoriesGalleryGrid } from './CategoriesGallery.style';
import { CategoriesGalleryItem } from './CategoriesGalleryItem';

export const CategoriesGallery = () => {
  return (
    <CategoriesGalleryGrid>
      {IMAGES_CATEGORIES.map((item) => (
        <CategoriesGalleryItem src={item.IMG} text={item.CATEGORY} />
      ))}{' '}
    </CategoriesGalleryGrid>
  );
};
