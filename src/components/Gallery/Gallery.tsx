import { FC, useState } from 'react';
import { GalleryGrid, GalleryItemWrapper } from './Gallery.style';
import { CategoryCard } from './CategoryCard';
import { ICategory, IImage } from 'src/types';
import { ImageCard } from './ImageCard';
import Modal from '@ui/Modal/Modal';

interface GalleryProps {
  array: IImage[] | ICategory[];
  variant: 'category' | 'image';
}

export const Gallery: FC<GalleryProps> = ({ variant = 'image', array }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState<IImage | undefined>();

  let galleryArray;

  switch (variant) {
    case 'category':
      galleryArray = (array as ICategory[]).map((item) => (
        <GalleryItemWrapper
          width="285px"
          height="244px"
          onClick={() => setIsModalOpen(!isModalOpen)}
        >
          <CategoryCard
            key={item.CATEGORY}
            src={item.IMG}
            text={item.CATEGORY}
          />
        </GalleryItemWrapper>
      ));
      break;
    case 'image':
      galleryArray = (array as IImage[]).map((item) => (
        <GalleryItemWrapper
          width="285px"
          height="232px"
          onClick={() => handleOpenModal(item)}
        >
          <ImageCard
            key={item.id}
            src={item.urls.small}
            text={
              item.alt_description[0].toUpperCase() +
              item.alt_description.slice(1)
            }
            id={item.id}
            isModal={false}
          />
        </GalleryItemWrapper>
      ));
      break;
  }

  const handleOpenModal = (image: IImage) => {
    setCurrentImage(image);
    setIsModalOpen(!isModalOpen);
  };

  return (
    <GalleryGrid>
      {isModalOpen && (
        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(!isModalOpen)}
        >
          <ImageCard
            key={currentImage.id}
            src={currentImage.urls.full}
            text={
              currentImage.alt_description[0].toUpperCase() +
              currentImage.alt_description.slice(1)
            }
            id={currentImage.id}
            isModal={true}
          />
        </Modal>
      )}
      {galleryArray}
    </GalleryGrid>
  );
};
