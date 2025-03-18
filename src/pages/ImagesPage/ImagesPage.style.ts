import { TextStyled } from '@ui/Text/Text.style';
import { styled } from 'styled-components';

export const InputWrapper = styled.div`
  position: relative;
  max-width: 820px;
  width: 100%;
  height: 54px;
  margin-bottom: 10px;
  padding: 0 20px;
  @media (max-width: 900px) {
    height: 50px;
  }
  & input {
    font-family: Montserrat;
    font-size: 14px;
    font-weight: 500;
    line-height: 17px;
    padding: 0 54px;
    @media (max-width: 900px) {
      font-size: 16px;
      line-height: 20px;
      padding: 0 16px;
    }
  }
`;

export const InputIcon = styled.div`
  position: absolute;
  top: 18px;
  width: 17px;
  height: 18px;
  @media (min-width: 900px) {
    left: 45px;
  }
  @media (max-width: 900px) {
    right: 35px;
    top: 12px;
    height: 25px;
    width: 25px;
  }
`;

export const ImagesNotFoundText = styled(TextStyled)`
  font-family: Lexend Deca;
  font-size: 64px;
  font-weight: 700;
  line-height: 80px;
  text-transform: capitalize;
  max-width: 680px;
  padding-bottom: 600px;
  padding-top: 120px;
  @media (max-width: 900px) {
    font-size: 32px;
    line-height: 40px;
    max-width: 400px;
  }
`;

export const SelectWrapper = styled.div`
  width: 100%;
  padding-top: 25px;
  margin-bottom: -10px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 11px;
`;

export const SelectText = styled.p`
  color: rgb(57, 57, 57);
  font-family: Lexend Deca;
  font-size: 17.54px;
  font-weight: 500;
  line-height: 26.32px;
  letter-spacing: -3%;
  text-align: left;
`;
