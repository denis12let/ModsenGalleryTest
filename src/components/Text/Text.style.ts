import styled from 'styled-components';

export interface TextStyledProps {
  color?: string;
  fontSize?: string;
  fontWeight?: string;
  textalign?: string;
  lineheight?: string;
  margin?: string;
  padding?: string;
  fontFamily?: string;
  maxwidth?: string;
}

export const TextStyled = styled.p<TextStyledProps>`
  color: ${({ color }) => color || 'inherit'};
  font-size: ${({ fontSize, theme }) => fontSize || theme.fontSizes.normal};
  font-weight: ${({ fontWeight, theme }) =>
    fontWeight || theme.fontWeights[400]};
  text-align: ${({ textalign }) => textalign || 'left'};
  line-height: ${({ lineheight }) => lineheight || '19px'};
  margin: ${({ margin }) => margin || '0'};
  padding: ${({ padding }) => padding || '0'};
  font-family: ${({ fontFamily }) => fontFamily || 'inherit'};
  text-align: ${({ textalign }) => textalign || 'center'};
  max-width: ${({ maxwidth }) => maxwidth || '100%'};
`;
