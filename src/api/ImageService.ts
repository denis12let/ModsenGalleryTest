import { IImagesResponse } from './../types/image';
import { IImage } from 'src/types';
import { apiService } from './service';

export class ImageService {
  static async getAll(
    page: number = 1,
    perPage: number = 10,
    orderBy: string = 'popular'
  ) {
    const { data } = await apiService.get<IImage[]>('/photos', {
      params: {
        page,
        per_page: perPage,
        order_by: orderBy,
      },
    });
    return data;
  }

  static async getOne(id: string) {
    const { data } = await apiService.get<IImage>(`/photos/${id}`);
    return data;
  }

  static async getImageByTag(
    tag: string,
    page: number = 1,
    perPage: number = 10,
    orderBy: string = 'popular'
  ) {
    const { data } = await apiService.get<IImagesResponse>('/search/photos', {
      params: {
        query: tag,
        page,
        per_page: perPage,
        order_by: orderBy,
      },
    });

    return data;
  }
}
