import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { fetchAllImages, fetchImageByTag, fetchOneImage } from '@store';
import { IImage, IImagesResponse } from 'src/types';

interface ImagesState {
  images: IImage[];
  image: IImage | null;
  isLoading: boolean;
  error: string | null;
  favorites: IImage[];
  pagination: {
    total: number | null;
    total_pages: number | null;
  };
}

const initialState: ImagesState = {
  images: [],
  image: null,
  isLoading: false,
  error: null,
  favorites: [],
  pagination: {
    total: null,
    total_pages: null,
  },
};

const imagesSlice = createSlice({
  name: 'images',
  initialState,
  reducers: {
    setFavorite(state, action: PayloadAction<string>) {
      const storeFavorites = JSON.parse(
        localStorage.getItem('favorites') || '[]'
      );

      const newFavorites = state.images
        .filter((item: IImage) => item.id === action.payload)
        .concat(storeFavorites);

      localStorage.setItem('favorites', JSON.stringify(newFavorites));

      state.favorites = newFavorites;
    },

    unsetFavorite(state, action: PayloadAction<string>) {
      const storeFavorites = JSON.parse(
        localStorage.getItem('favorites') || '[]'
      );

      const newFavorites = storeFavorites.filter(
        (item: IImage) => item.id !== action.payload
      );

      localStorage.setItem('favorites', JSON.stringify(newFavorites));

      state.favorites = newFavorites;
    },

    clearImages(state) {
      state.images = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllImages.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(
        fetchAllImages.fulfilled,
        (state, action: PayloadAction<IImage[]>) => {
          state.isLoading = false;
          state.images = action.payload;
        }
      )
      .addCase(fetchAllImages.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      })

      .addCase(fetchImageByTag.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(
        fetchImageByTag.fulfilled,
        (state, action: PayloadAction<IImagesResponse>) => {
          state.isLoading = false;
          state.images = action.payload.results;
          state.pagination = {
            total: action.payload.total,
            total_pages: action.payload.total_pages,
          };
        }
      )
      .addCase(fetchImageByTag.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      })

      .addCase(fetchOneImage.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(
        fetchOneImage.fulfilled,
        (state, action: PayloadAction<IImage>) => {
          state.isLoading = false;
          state.image = action.payload;
        }
      )
      .addCase(fetchOneImage.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });
  },
  selectors: {
    getImages: (state: ImagesState) => state.images,
    getSlice: (state: ImagesState) => state,
  },
});

export const {
  reducer: imageReducer,
  selectors: imageSelectors,
  actions: imagesActions,
} = imagesSlice;
