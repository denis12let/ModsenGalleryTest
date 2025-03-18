import { CategoriesImages } from '@assets/images/categories';
import { Option } from 'src/types/image';

export const IMAGES_CATEGORIES = [
  { CATEGORY: 'Art', IMG: CategoriesImages.art },
  { CATEGORY: 'Cars', IMG: CategoriesImages.cars },
  { CATEGORY: 'Architecture', IMG: CategoriesImages.architecture },
  { CATEGORY: 'Food', IMG: CategoriesImages.food },
  { CATEGORY: 'Religion', IMG: CategoriesImages.religion },
  { CATEGORY: 'Clothes', IMG: CategoriesImages.clothes },
  { CATEGORY: 'Technologies', IMG: CategoriesImages.technologies },
  { CATEGORY: 'Music', IMG: CategoriesImages.music },
  { CATEGORY: 'Business', IMG: CategoriesImages.business },
  { CATEGORY: 'Sport', IMG: CategoriesImages.sport },
  { CATEGORY: 'Social', IMG: CategoriesImages.social },
  { CATEGORY: 'Sky', IMG: CategoriesImages.sky },
];

export const options: Option[] = [
  { id: 1, value: 'popular', label: 'Relevant' },
  { id: 2, value: 'latest', label: 'Latest' },
];
