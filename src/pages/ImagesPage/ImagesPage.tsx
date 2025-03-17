import { Container } from '@components/Container';
import { HeroSection } from '@components/HeroSection';
import { useLocation } from 'react-router-dom';
import { Gallery } from '@components/Gallery';
import { IMAGES_CATEGORIES } from '@constants/ImagesCategories';
import { useEffect, useState } from 'react';
import { useAppDispatch } from '@hooks/useAppDispatch';
import { useAppSelector } from '@hooks/useAppSelector';
import { fetchAllImages, fetchImageByTag } from '@store/actions';
import { HeroText } from '@components/HeroSection/HeroSection.style';
import {
  ImagesNotFoundText,
  InputIcon,
  InputWrapper,
  SelectText,
  SelectWrapper,
} from './ImagesPage.style';
import { Input } from '@ui/Input';
import { Icons } from '@assets/icons';
import useDebounce from '@hooks/UseDebounce';
import { Loader } from '@ui/Loader';
import { clearImages } from '@store/reducers/imageSlice';
import Select from '@ui/Select/Select';

const ImagesPage = () => {
  const dispatch = useAppDispatch();
  const { images, error, isLoading } = useAppSelector((state) => state.images);
  const [value, setValue] = useState('');

  const options = ['Relevant', 'Latest'];
  const [currentSelect, setCurrentSelect] = useState(options[0]);

  const handleSelect = (value: string) => {
    setCurrentSelect(value);
  };

  const debouncedSearch = useDebounce(value, 400);

  useEffect(() => {
    if (debouncedSearch) {
      dispatch(fetchImageByTag({ query: value }));
    }
  }, [debouncedSearch]);

  const location = useLocation();
  // @ts-expect-error
  const path = location.pathname.split('/').at(-1).toLowerCase();
  const isImages = location.pathname.includes('images');

  let imagesArray;

  useEffect(() => {
    if (path === 'images') {
      dispatch(fetchAllImages({}));
    } else {
      dispatch(fetchImageByTag({ query: path }));
    }

    return () => {
      dispatch(clearImages());
    };
  }, []);

  if (isImages) {
    imagesArray = [...images].sort((a, b) => {
      if (currentSelect === 'Latest') {
        return (
          new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
        );
      }
      return a.likes - b.likes;
    });
  } else {
    imagesArray = IMAGES_CATEGORIES;
  }

  return (
    <>
      <HeroSection>
        <HeroText fontSize="48px" lineheight="75px">
          Let's find some <span>Images</span>
          <br />
          here!
        </HeroText>
        <InputWrapper>
          <InputIcon>
            <Icons.Search />
          </InputIcon>
          <Input text={value} setText={setValue} />
        </InputWrapper>
      </HeroSection>
      <Container>
        {isLoading ? (
          <Loader />
        ) : !images.length ? (
          <ImagesNotFoundText>
            The search didn't yield any results, please try <span>again</span>.
          </ImagesNotFoundText>
        ) : (
          <>
            <SelectWrapper>
              <SelectText>Sort by</SelectText>
              <Select options={options} onSelect={handleSelect} />
            </SelectWrapper>
            <Gallery
              array={imagesArray}
              variant={isImages ? 'image' : 'category'}
            />
          </>
        )}
      </Container>
    </>
  );
};

export default ImagesPage;
