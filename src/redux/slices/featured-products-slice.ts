import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getDataFromAPI } from '../../utils/getDataFromAPI';
import { IProduct } from '../Interfaces';

export const getFeaturedProductsFromAPI = createAsyncThunk(
  'videos/getFeaturedProducts', async () => { return await getDataFromAPI("featuredProducts"); }
);

const initialState = {
  featuredProducts: [] as IProduct[],
  isLoading: false as boolean,
  isSuccess: false as boolean,
  isError: false as boolean,
};

const featuredProductsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    resetFeaturedProducts(state: any) {
      state.featuredProducts = [];
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
    },
  },
  extraReducers: {
    [getFeaturedProductsFromAPI.pending as any]: (state: any) => {
      state.isLoading = true;
    },
    [getFeaturedProductsFromAPI.fulfilled as any]: (state: any, action: any) => {
      state.isLoading = false;
      state.isSuccess = true;
      console.log(action.payload.message);
      state.featuredProducts = action.payload.message.featuredProducts;
    },
    [getFeaturedProductsFromAPI.rejected as any]: (state: any) => {
      state.isLoading = false;
      state.isError = true;
    },
  },
});

export const { resetFeaturedProducts } = featuredProductsSlice.actions;
export default featuredProductsSlice.reducer;
