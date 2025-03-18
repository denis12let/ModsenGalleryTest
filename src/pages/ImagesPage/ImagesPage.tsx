import { Container } from '@components/Container';
import { HeroSection } from '@components/HeroSection';
import { useLocation } from 'react-router-dom';
import { Gallery } from '@components/Gallery';
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
import { Select } from '@ui/Select';
import { Pagination } from '@ui/Pagination';
import { options } from '@constants/Images';
import { imagesActions, imageSelectors } from '@store/reducers/imageSlice';

const ImagesPage = () => {
  const dispatch = useAppDispatch();
  const { images, isLoading, pagination } = useAppSelector(
    imageSelectors.getSlice
  );
  const [currentPage, setCurrentPage] = useState(1);
  const [value, setValue] = useState('');
  const [sortValue, setSortedValue] = useState(options[0].value);

  const location = useLocation();
  // @ts-expect-error
  const path = location.pathname.split('/').at(-1).toLowerCase();

  const handleChangeValue = (text: string) => {
    setValue(text);
  };

  const debouncedSearch = useDebounce(value, 400);

  useEffect(() => {
    if (value !== '') setCurrentPage(1);
    if (debouncedSearch) {
      dispatch(
        fetchImageByTag({
          query: value,
          orderBy: sortValue,
          page: currentPage,
        })
      );
    }
  }, [debouncedSearch]);

  useEffect(() => {
    if (path === 'images' && value === '') {
      dispatch(fetchAllImages({ page: currentPage, orderBy: sortValue }));
    } else {
      dispatch(
        fetchImageByTag({
          query: path === 'images' ? value : path,
          page: currentPage,
          orderBy: sortValue,
        })
      );
    }

    return () => {
      dispatch(imagesActions.clearImages());
    };
  }, [currentPage, sortValue]);

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
        <SelectWrapper>
          <SelectText>Sort by</SelectText>
          <Select
            options={options}
            value={sortValue}
            setValue={setSortedValue}
          />
        </SelectWrapper>
        {isLoading ? (
          <Loader />
        ) : !images.length ? (
          <ImagesNotFoundText>
            The search didn't yield any results, please try <span>again</span>.
          </ImagesNotFoundText>
        ) : (
          <Gallery array={images} variant={'image'} />
        )}
        <Pagination
          currentPage={currentPage || 1}
          totalPages={pagination.total_pages || 1000}
          onPageChange={setCurrentPage}
        />
      </Container>
    </>
  );
};

export default ImagesPage;
