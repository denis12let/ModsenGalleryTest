import styled from 'styled-components';

export interface TextStyledProps {
  color?: string;
  fontSize?: string;
  fontWeight?: string;
  textAlign?: string;
  lineHeight?: string;
  margin?: string;
  padding?: string;
  fontFamily?: string;
}

export const TextStyled = styled.p<TextStyledProps>`
  color: ${({ color }) => color || 'inherit'};
  font-size: ${({ fontSize, theme }) => fontSize || theme.fontSizes.normal};
  font-weight: ${({ fontWeight, theme }) =>
    fontWeight || theme.fontWeights[400]};
  text-align: ${({ textAlign }) => textAlign || 'left'};
  line-height: ${({ lineHeight }) => lineHeight || '19px'};
  margin: ${({ margin }) => margin || '0'};
  padding: ${({ padding }) => padding || '0'};
  font-family: ${({ fontFamily }) => fontFamily || 'inherit'};
`;
