import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  width: 100%;
  padding: 21px 12px 8px 17px;
  background: ${({ theme }) => theme.gradients.background};
  z-index: 1001;
`;

export const HeaderInner = styled.div`
  position: relative;
  top: -4px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1150px;
  height: 80px;
  margin: 0 auto;
  padding: 0 20px;
  @media ${({ theme }) => theme.media.small} {
    padding: 0;
  }
`;
