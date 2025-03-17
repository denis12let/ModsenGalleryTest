import { ImageService } from '@api/ImageService';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { IImage, IImagesResponse } from 'src/types';

export const fetchAllImages = createAsyncThunk<
  IImage[],
  { page?: number; perPage?: number; orderBy?: string },
  { rejectValue: string }
>(
  'images/fetchAll',
  async (
    { page = 1, perPage = 12, orderBy = 'latest' },
    { rejectWithValue }
  ) => {
    try {
      const data = await ImageService.getAll(page, perPage, orderBy);
      return data;
    } catch (error) {
      return rejectWithValue('Failed to fetch images');
    }
  }
);

export const fetchOneImage = createAsyncThunk<
  IImage,
  string,
  { rejectValue: string }
>('images/fetchOne', async (id, { rejectWithValue }) => {
  try {
    const data = await ImageService.getOne(id);
    return data;
  } catch (error) {
    return rejectWithValue('Error fetch one images');
  }
});

export const fetchImageByTag = createAsyncThunk<
  IImagesResponse,
  { query: string; page?: number; perPage?: number; orderBy?: string },
  { rejectValue: string }
>(
  'images/search',
  async (
    { query, page = 1, perPage = 12, orderBy = 'latest' },
    { rejectWithValue }
  ) => {
    try {
      const data = await ImageService.getImageByTag(
        query,
        page,
        perPage,
        orderBy
      );
      return data;
    } catch (error) {
      return rejectWithValue('Error fetch search images');
    }
  }
);
