import styled from 'styled-components';
import { TextStyled } from '@components/Text/Text.style';

interface CategoriesGalleryItemWrapperProps {
  src: string;
  alt: string;
}

export const CategoriesGalleryItemWrapper = styled.div<CategoriesGalleryItemWrapperProps>`
  width: 285px;
  height: 244px;

  margin: 0 auto;

  background: url(${({ src }) => src});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  padding: 10px;

  @media (max-width: 1000px) {
    width: 100%;
    height: 180px;
  }
`;

export const CategoriesGalleryItemInner = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

export const CategoriesGalleryItemText = styled(TextStyled)`
  position: absolute;
  left: 0;
  bottom: 0;
  color: #fff;
  font-family: Roboto;
  font-size: 20px;
  font-weight: 600;
  line-height: 23px;
  text-transform: capitalize;
  text-shadow:
    -1px -1px 0 black,
    1px -1px 0 black,
    -1px 1px 0 black,
    1px 1px 0 black;
`;
