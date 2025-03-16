import {
  NotFoundSubtitle,
  NotFoundTitle,
  NotFoundWrapper,
} from './NotFound.style';

export const NotFound = () => {
  return (
    <NotFoundWrapper>
      <NotFoundTitle>404</NotFoundTitle>
      <NotFoundSubtitle>NOT FOUND</NotFoundSubtitle>
    </NotFoundWrapper>
  );
};
