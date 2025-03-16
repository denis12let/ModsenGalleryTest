import styled from 'styled-components';

export const FooterWrapper = styled.div`
  width: 100%;
  padding: 80px 95px;
  background: ${({ theme }) => theme.gradients.background};
  @media (max-width: 1000px) and (min-width: 500px) {
    padding: 40px 33px;
  }
  @media (max-width: 500px) {
    padding: 33px 23px;
  }
  z-index: 1001;
`;

export const FooterInner = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1250px;
  margin: 0 auto;
  @media (max-width: 500px) {
    flex-direction: column;
    align-items: start;
    gap: 34px;
  }
`;
