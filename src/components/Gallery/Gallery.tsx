import { FC, useState } from 'react';
import { GalleryGrid, GalleryItemWrapper } from './Gallery.style';
import { CategoryCard } from './CategoryCard';
import { ICategory, IImage } from 'src/types';
import { ImageCard } from './ImageCard';
import Modal from '@ui/Modal/Modal';
import { capitalizeWord } from '@utils/imageUtils';

interface GalleryProps {
  array: IImage[] | ICategory[];
  variant: 'category' | 'image';
}

export const Gallery: FC<GalleryProps> = ({ variant = 'image', array }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState<IImage | undefined>();

  const handleOpenModal = (image: IImage) => {
    setCurrentImage(image);
    setIsModalOpen(!isModalOpen);
  };

  const getGalleryArray = ({ variant, array }: GalleryProps) => {
    switch (variant) {
      case 'category':
        return (array as ICategory[]).map((item) => (
          <GalleryItemWrapper
            onClick={() => setIsModalOpen(!isModalOpen)}
            key={item.CATEGORY}
          >
            <CategoryCard src={item.IMG} text={item.CATEGORY} />
          </GalleryItemWrapper>
        ));

      case 'image':
        return (array as IImage[]).map((item) => (
          <GalleryItemWrapper
            onClick={() => handleOpenModal(item)}
            key={item.id}
          >
            <ImageCard
              src={item.urls.small}
              text={capitalizeWord(item.description || item.alt_description)}
              id={item.id}
              isModal={false}
            />
          </GalleryItemWrapper>
        ));
    }
  };

  const galleryArray = getGalleryArray({ variant, array });

  return (
    <GalleryGrid>
      {isModalOpen && (
        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(!isModalOpen)}
        >
          {currentImage && (
            <ImageCard
              src={currentImage.urls.full}
              text={capitalizeWord(
                currentImage.description || currentImage.alt_description
              )}
              id={currentImage.id}
              isModal={true}
            />
          )}
        </Modal>
      )}
      {galleryArray}
    </GalleryGrid>
  );
};
