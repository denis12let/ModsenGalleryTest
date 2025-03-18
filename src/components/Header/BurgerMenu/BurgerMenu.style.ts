import styled from 'styled-components';

import { Button } from '@ui';

export const BurgerMenuStyled = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  top: -10px;
`;

export const BurgerMenuButton = styled(Button)`
  position: absolute;
  left: 0;
  top: 17px;
`;

export const BurgerMenuLogo = styled.div`
  margin-bottom: 40px;
  width: 185px;
  height: 46px;
`;

export const BurgerMenuSocials = styled.div`
  margin: 18px 0 3px;
`;
