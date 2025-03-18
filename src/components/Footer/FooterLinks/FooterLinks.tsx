import { FOOTER_LINKS } from '@constants/layout';

import {
  FooterLink,
  FooterLinksColumn,
  FooterLinksContainer,
  FooterLinkText,
  FooterTitle,
} from './FooterLinks.style';

export const FooterLinks = () => {
  return (
    <FooterLinksContainer>
      {FOOTER_LINKS.map((column, index) => (
        <FooterLinksColumn key={index}>
          <FooterTitle>{column.TITLE}</FooterTitle>
          {column.LINKS.map((link, linkIndex) => (
            <FooterLink to={link.TO} key={linkIndex}>
              <FooterLinkText>{link.TEXT}</FooterLinkText>
            </FooterLink>
          ))}
        </FooterLinksColumn>
      ))}
    </FooterLinksContainer>
  );
};
