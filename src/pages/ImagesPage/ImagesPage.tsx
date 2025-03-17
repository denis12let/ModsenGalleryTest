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
import { clearImages, setImages } from '@store/reducers/imageSlice';
import { Option, Select } from '@ui/Select';
import { Pagination } from '@ui/Pagination';

const ImagesPage = () => {
  const options: Option[] = [
    { id: 1, value: 'popular', label: 'Relevant' },
    { id: 2, value: 'latest', label: 'Latest' },
  ];

  const dispatch = useAppDispatch();
  const { images, isLoading, pagination } = useAppSelector(
    (state) => state.images
  );
  const [currentPage, setCurrentPage] = useState(1);
  const [value, setValue] = useState('');
  const [sortValue, setSortedValue] = useState(options[0].value);

  const handleChangeValue = (text: string) => {
    setValue(text);
  };

  const debouncedSearch = useDebounce(value, 400);

  const sortImages = () =>
    [...images].sort((a, b) => {
      if (sortValue === 'popular') {
        return b.likes - a.likes;
      } else {
        return (
          new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
        );
      }
    });

  useEffect(() => {
    if (debouncedSearch || sortValue) {
      if (value) {
        dispatch(
          fetchImageByTag({
            query: value,
            orderBy: sortValue,
            page: currentPage,
          })
        );
      } else {
        dispatch(setImages(sortImages()));
      }
    }
  }, [debouncedSearch, sortValue, currentPage]);

  const location = useLocation();
  // @ts-expect-error
  const path = location.pathname.split('/').at(-1).toLowerCase();
  const isImages = location.pathname.includes('images');

  let imagesArray;

  useEffect(() => {
    if (path === 'images') {
      dispatch(fetchAllImages({}));
    } else {
      value === '' &&
        dispatch(fetchImageByTag({ query: path, page: currentPage }));
    }

    return () => {
      dispatch(clearImages());
    };
  }, [currentPage]);

  if (isImages) {
    imagesArray = images;
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
          <Input text={value} setText={handleChangeValue} />
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
              <Select
                options={options}
                value={sortValue}
                setValue={setSortedValue}
              />
            </SelectWrapper>
            <Gallery
              array={imagesArray}
              variant={isImages ? 'image' : 'category'}
            />
            {value || path !== 'images' ? (
              <Pagination
                currentPage={currentPage}
                totalPages={pagination.total_pages || 1}
                onPageChange={setCurrentPage}
              />
            ) : (
              <></>
            )}
          </>
        )}
      </Container>
    </>
  );
};

export default ImagesPage;
