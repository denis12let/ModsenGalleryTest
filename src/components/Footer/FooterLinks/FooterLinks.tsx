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
      <FooterLinksColumn>
        <FooterTitle>Company</FooterTitle>
        <FooterLink to="/#">
          <FooterLinkText>About</FooterLinkText>
        </FooterLink>
        <FooterLink to="/#">
          <FooterLinkText>Features</FooterLinkText>
        </FooterLink>
        <FooterLink to="/#">
          <FooterLinkText>Works</FooterLinkText>
        </FooterLink>
        <FooterLink to="/#">
          <FooterLinkText>Career</FooterLinkText>
        </FooterLink>
      </FooterLinksColumn>
      <FooterLinksColumn>
        <FooterTitle>Help</FooterTitle>
        <FooterLink to="/#">
          <FooterLinkText>Customer Support</FooterLinkText>
        </FooterLink>
        <FooterLink to="/#">
          <FooterLinkText>Delivery Details</FooterLinkText>
        </FooterLink>
        <FooterLink to="/#">
          <FooterLinkText>Terms & Conditions</FooterLinkText>
        </FooterLink>
        <FooterLink to="/#">
          <FooterLinkText>Privacy Policy</FooterLinkText>
        </FooterLink>
      </FooterLinksColumn>
      <FooterLinksColumn>
        <FooterTitle>FAQ</FooterTitle>
        <FooterLink to="/#">
          <FooterLinkText>Account</FooterLinkText>
        </FooterLink>
        <FooterLink to="/#">
          <FooterLinkText>Manage Deliveries</FooterLinkText>
        </FooterLink>
        <FooterLink to="/#">
          <FooterLinkText>Orders</FooterLinkText>
        </FooterLink>
        <FooterLink to="/#">
          <FooterLinkText>Payments</FooterLinkText>
        </FooterLink>
      </FooterLinksColumn>
      <FooterLinksColumn>
        <FooterTitle>Resources</FooterTitle>
        <FooterLink to="/#">
          <FooterLinkText>Free eBooks</FooterLinkText>
        </FooterLink>
        <FooterLink to="/#">
          <FooterLinkText>Development Tutorial</FooterLinkText>
        </FooterLink>
        <FooterLink to="/#">
          <FooterLinkText>How to - Blog</FooterLinkText>
        </FooterLink>
        <FooterLink to="/#">
          <FooterLinkText>Youtube Playlist</FooterLinkText>
        </FooterLink>
      </FooterLinksColumn>
    </FooterLinksContainer>
  );
};
