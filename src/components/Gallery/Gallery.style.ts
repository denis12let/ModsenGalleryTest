import styled from 'styled-components';

export const GalleryGrid = styled.div`
  display: grid;
  gap: 26px;
  padding: 40px 0 95px;
  width: 100%;

  grid-template-columns: repeat(3, 1fr);

  @media (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 650px) {
    grid-template-columns: repeat(1, 1fr);
    padding: 20px 0;
  }
`;
