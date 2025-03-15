import { FC, ReactNode } from 'react';
import {
  HeroSectionWrapper,
  HeroSectionInner,
  HeroText,
} from './HeroSection.style';

interface HeroSectionProps {
  children?: ReactNode;
}

export const HeroSection: FC<HeroSectionProps> = ({ children }) => {
  return (
    <HeroSectionWrapper>
      <HeroSectionInner>
        <HeroText>
          Let's find some <br />
          <span>Images</span> here!
        </HeroText>
        {children}
      </HeroSectionInner>
    </HeroSectionWrapper>
  );
};
