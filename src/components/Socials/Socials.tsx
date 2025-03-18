import { theme } from '@styles/theme';
import {
  SocialItemStyled,
  SocialLinkStyled,
  SocialsStyled,
} from './Socials.style';
import { socials } from '@constants/layout';

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
