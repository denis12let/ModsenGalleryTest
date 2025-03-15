import { IImage } from 'src/types';
import { apiService } from './service';

export class ImageService {
  static async getOne(id: string) {
    const { data } = await apiService.get<IImage>(`/photos/${id}`);
    return data;
  }

  static async getImageByTag(
    tag: string,
    page: number = 1,
    perPage: number = 10
  ) {
    const { data } = await apiService.get<{ results: IImage[] }>(
      '/search/photos',
      {
        params: {
          query: tag,
          page,
          per_page: perPage,
        },
      }
    );
    return data.results;
  }
}
