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
  alt_description: string;
  urls: ImageUrls;
  tags: Tag[];
  likes: number;
}

export interface IFavoriteImage {
  iamgeId: string;
}

export interface ICategory {
  CATEGORY: string;
  IMG: string;
}
