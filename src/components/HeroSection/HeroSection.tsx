import { FC, ReactNode } from 'react';
import { HeroSectionWrapper, HeroSectionInner } from './HeroSection.style';

interface HeroSectionProps {
  children?: ReactNode;
}

export const HeroSection: FC<HeroSectionProps> = ({ children }) => {
  return (
    <HeroSectionWrapper>
      <HeroSectionInner>{children}</HeroSectionInner>
    </HeroSectionWrapper>
  );
};
