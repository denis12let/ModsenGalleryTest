import { APP_ROUTES_PATH } from '@constants/app';
import { CategoriesPage } from '@pages/CategoriesPage';
import { FavoritesPage } from '@pages/FavoritesPage';
import { ImagesPage } from '@pages/ImagesPage';
import { NotFoundPage } from '@pages/NotFoundPage';

export interface AppRoutesProps {
  path: string;
  element: React.LazyExoticComponent<React.ComponentType<any>>;
}

export const routes = {
  [APP_ROUTES_PATH.CATEGORIES]: {
    path: APP_ROUTES_PATH.CATEGORIES,
    element: CategoriesPage,
  },
  [APP_ROUTES_PATH.FAVORITES]: {
    path: APP_ROUTES_PATH.FAVORITES,
    element: FavoritesPage,
  },
  [APP_ROUTES_PATH.IMAGES]: {
    path: APP_ROUTES_PATH.IMAGES + '/*',
    element: ImagesPage,
  },
  [APP_ROUTES_PATH.NOT_FOUND]: {
    path: APP_ROUTES_PATH.NOT_FOUND,
    element: NotFoundPage,
  },
};
