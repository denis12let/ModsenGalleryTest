interface ImageUrls {
  raw: string;
  full: string;
  regular: string;
  small: string;
  thumb: string;
  small_s3: string;
}

interface Tag {
  type: string;
  title: string;
}

export interface IImage {
  id: string;
  created_at: string;
  updated_at: string;
  width: number;
  height: number;
  color: string;
  description: string;
  alt_description: string;
  urls: ImageUrls;
  tags: Tag[];
  likes: number;
}

export interface ICategory {
  CATEGORY: string;
  IMG: string;
}

export interface IImagesResponse {
  results: IImage[];
  total: number;
  total_pages: number;
}

export interface IPaginationParams {
  page?: number;
  perPage?: number;
  orderBy?: string;
}

export interface IPaginationQuerryParams extends IPaginationParams {
  query: string;
}

export interface Option {
  id: number;
  value: string;
  label: string;
}
