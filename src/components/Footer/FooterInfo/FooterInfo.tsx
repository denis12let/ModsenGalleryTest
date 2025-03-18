import { Socials } from '@components';
import { Icons } from '@assets';
import { Text } from '@ui';

import { TextStyledProps } from '@ui/Text/Text.style';
import { FooterInfoStyled, FooterLogo } from './FooterInfo.style';

const textStyles: TextStyledProps = {
  color: 'rgba(255, 255, 255, 0.6)',
  fontFamily: 'Roboto',
  fontSize: '14px',
  fontWeight: '400',
  lineheight: '22px',
  textalign: 'left',
  maxwidth: '250px',
};

export const FooterInfo = () => {
  return (
    <FooterInfoStyled>
      <FooterLogo>
        <Icons.Logo />
      </FooterLogo>
      <Text {...textStyles}>
        We have images that capture every mood and inspire every vision. From
        breathtaking landscapes to vibrant portraits.
      </Text>
      <Socials />
    </FooterInfoStyled>
  );
};
