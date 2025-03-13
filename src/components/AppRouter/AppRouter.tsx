import { Suspense, useCallback } from 'react';
import { AppRoutesProps, routes } from '@router/routes';
import { Route, Routes } from 'react-router-dom';

export const AppRouter = () => {
  const renderWithWrapper = useCallback((router: AppRoutesProps) => {
    const Element = router.element;

    const element = (
      <Suspense fallback={<div>Какой-то лоадинг</div>}>
        <Element />
      </Suspense>
    );

    return (
      <Route key={router.path} element={element} path={router.path}></Route>
    );
  }, []);

  return <Routes>{Object.values(routes).map(renderWithWrapper)}</Routes>;
};
