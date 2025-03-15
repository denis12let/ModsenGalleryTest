import styled from 'styled-components';

export const LogoWrapper = styled.div`
  width: 290px;
  height: 50px;

  @media ${({ theme }) => theme.media.small} {
    width: 245px;
    height: 40px;
  }
`;
