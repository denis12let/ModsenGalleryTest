import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchImageByTag, fetchOneImage } from '@store/actions';
import { IFavoriteImage, IImage } from 'src/types';

interface ImagesState {
  images: IImage[];
  image: IImage | null;
  isLoading: boolean;
  error: string | null;
  favorites: IFavoriteImage[];
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
  reducers: {},
  extraReducers: (builder) => {
    builder
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
