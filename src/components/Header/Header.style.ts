import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.gradients.background};
`;

export const HeaderInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1150px;
  padding: 21px 145px 8px;
  margin: 0 auto;
`;
