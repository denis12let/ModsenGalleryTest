import { FC } from 'react';
import {
  SocialItemStyled,
  SocialLinkStyled,
  SocialsStyled,
} from './Socials.style';
import { Icons } from '@assets/icons';
import { theme } from '@styles/theme';

interface SocialsProps {
  variant?: 'default' | 'highlighted';
}

export const Socials: FC<SocialsProps> = ({ variant = 'default' }) => {
  return (
    <SocialsStyled>
      <SocialItemStyled>
        <SocialLinkStyled to="https://x.com/">
          <Icons.Twitter />
        </SocialLinkStyled>
      </SocialItemStyled>
      <SocialItemStyled
        backgroundcolor={
          variant === 'highlighted' ? theme.colors.yellow : theme.colors.white
        }
      >
        <SocialLinkStyled to="https://www.facebook.com/">
          <Icons.Facebook
            color={
              variant === 'highlighted'
                ? theme.colors.white
                : theme.colors.black
            }
          />
        </SocialLinkStyled>
      </SocialItemStyled>
      <SocialItemStyled>
        <SocialLinkStyled to="https://www.instagram.com/">
          <Icons.Instagram />
        </SocialLinkStyled>
      </SocialItemStyled>
      <SocialItemStyled>
        <SocialLinkStyled to="https://github.com/">
          <Icons.Github />
        </SocialLinkStyled>
      </SocialItemStyled>
    </SocialsStyled>
  );
};
