import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getDataFromAPI } from '../../utils/getDataFromAPI';
import { IProduct } from '../Interfaces';

export const getProductsFromAPI = createAsyncThunk(
  'videos/getProducts', async () => { return await getDataFromAPI("products"); }
);

const initialState = {
  products: [] as IProduct[],
  isLoading: false as boolean,
  isSuccess: false as boolean,
  isError: false as boolean,
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    resetProducts(state: any) {
      state.products = [];
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
    },
  },
  extraReducers: {
    [getProductsFromAPI.pending as any]: (state: any) => {
      state.isLoading = true;
    },
    [getProductsFromAPI.fulfilled as any]: (state: any, action: any) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.products = action.payload.message.products;
    },
    [getProductsFromAPI.rejected as any]: (state: any) => {
      state.isLoading = false;
      state.isError = true;
    },
  },
});

export const { resetProducts } = productsSlice.actions;
export default productsSlice.reducer;
