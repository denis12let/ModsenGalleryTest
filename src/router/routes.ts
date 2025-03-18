import { LazyExoticComponent, ComponentType } from 'react';

import { APP_ROUTES_PATH } from '@constants/app';
import {
  CategoriesPage,
  FavoritesPage,
  ImagesPage,
  NotFoundPage,
} from '@pages';

export interface AppRoutesProps {
  path: string;
  element: LazyExoticComponent<ComponentType<any>>;
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
