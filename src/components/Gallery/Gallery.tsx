import { FC } from 'react';
import { GalleryGrid } from './Gallery.style';
import { CategoryCard } from './CategoryCard';
import { ICategory, IImage } from 'src/types';
import { ImageCard } from './ImageCard';

interface GalleryProps {
  array: IImage[] | ICategory[];
  variant: 'category' | 'image';
}

export const Gallery: FC<GalleryProps> = ({ variant = 'image', array }) => {
  let galleryArray;
  console.log(...array);

  switch (variant) {
    case 'category':
      galleryArray = (array as ICategory[]).map((item) => (
        <CategoryCard key={item.CATEGORY} src={item.IMG} text={item.CATEGORY} />
      ));
      break;
    case 'image':
      galleryArray = (array as IImage[]).map((item) => (
        <ImageCard
          key={item.id}
          src={item.urls.small}
          text={
            item.alt_description[0].toUpperCase() +
            item.alt_description.slice(1)
          }
          isFavorite={false}
        />
      ));
      break;
  }

  return <GalleryGrid>{galleryArray}</GalleryGrid>;
};
