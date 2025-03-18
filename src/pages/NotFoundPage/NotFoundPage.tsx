import { NotFound } from './NotFound';
import { NotFoundText } from './NotFoundPage.style';

const NotFoundPage = () => {
  return (
    <>
      <NotFound />
      <NotFoundText>
        The page was <span>not found</span>, please return to the main page.
      </NotFoundText>
    </>
  );
};

export default NotFoundPage;
