import { Suspense, useCallback } from 'react';
import { AppRoutesProps, routes } from '@router/routes';
import { Route, Routes } from 'react-router-dom';
import { NotFoundPage } from '@pages/NotFoundPage';
import { Loader } from '@ui/Loader';

export const AppRouter = () => {
  const renderWithWrapper = useCallback((router: AppRoutesProps) => {
    const Element = router.element;

    const element = (
      <Suspense fallback={<Loader />}>
        <Element />
      </Suspense>
    );

    return (
      <Route key={router.path} element={element} path={router.path}></Route>
    );
  }, []);

  return (
    <Routes>
      {Object.values(routes).map(renderWithWrapper)}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
