import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchAllImages, fetchImageByTag, fetchOneImage } from '@store/actions';
import { IImage } from 'src/types';

interface ImagesState {
  images: IImage[];
  image: IImage | null;
  isLoading: boolean;
  error: string | null;
  favorites: IImage[];
}

const initialState: ImagesState = {
  images: [],
  image: null,
  isLoading: false,
  error: null,
  favorites: [],
};

const imagesSlice = createSlice({
  name: 'images',
  initialState,
  reducers: {
    setFavorite(state, action: PayloadAction<string>) {
      state.favorites = [
        ...state.favorites,
        ...state.images.filter((item) => item.id === action.payload),
      ];
    },

    unsetFavorite(state, action: PayloadAction<string>) {
      state.favorites = state.favorites.filter(
        (item) => item.id !== action.payload
      );
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
        (state, action: PayloadAction<IImage[]>) => {
          state.isLoading = false;
          state.images = action.payload;
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
});

export const { reducer: imageReducer, selectors: imageSelectors } = imagesSlice;
export const { setFavorite, unsetFavorite, clearImages } = imagesSlice.actions;
