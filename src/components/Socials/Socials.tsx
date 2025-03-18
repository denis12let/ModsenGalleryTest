import { theme } from '@styles';
import { socials } from '@constants/layout';
import {
  SocialItemStyled,
  SocialLinkStyled,
  SocialsStyled,
} from './Socials.style';

export const Socials = () => {
  return (
    <SocialsStyled>
      {socials.map((social, index) => (
        <SocialItemStyled key={index} color={theme.colors.black}>
          <SocialLinkStyled to={social.to}>
            <social.icon />
          </SocialLinkStyled>
        </SocialItemStyled>
      ))}
    </SocialsStyled>
  );
};
