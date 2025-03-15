import { FooterInner, FooterWrapper } from './Footer.style';
import { FooterInfo } from './FooterInfo';
import { FooterLinks } from './FooterLinks';

export const Footer = () => {
  return (
    <FooterWrapper>
      <FooterInner>
        <FooterInfo />
        <FooterLinks />
      </FooterInner>
    </FooterWrapper>
  );
};
