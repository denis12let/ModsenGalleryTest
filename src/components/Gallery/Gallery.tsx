import { FC } from 'react';
import { GalleryGrid } from './Gallery.style';
import { CategoryCard } from './CategoryCard';
import { ICategory, IImage } from 'src/types';
import { ImageCard } from './ImageCard';

interface GalleryProps {
  array: IImage[] | ICategory[];
  variant?: 'category' | 'image';
}

export const Gallery: FC<GalleryProps> = ({ variant = 'image', array }) => {
  let galleryArray;

  switch (variant) {
    case 'category':
      galleryArray = (array as ICategory[]).map((item) => (
        <CategoryCard key={item.CATEGORY} src={item.IMG} text={item.CATEGORY} />
      ));
      break;
    case 'image':
      galleryArray = (array as ICategory[]).map((item) => (
        <ImageCard
          key={item.CATEGORY}
          src={item.IMG}
          text={item.CATEGORY}
          isFavorite={false}
        />
      ));
      break;
  }

  return <GalleryGrid>{galleryArray}</GalleryGrid>;
};
