import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getDataFromAPI } from '../../utils/getDataFromAPI';
import { IProductType } from '../Interfaces';

export const getProductTypesFromAPI = createAsyncThunk(
  'videos/getProductTypes', async () => { return await getDataFromAPI("productTypes"); }
);

const initialState = {
  productTypes: [] as IProductType[],
  isLoading: false as boolean,
  isSuccess: false as boolean,
  isError: false as boolean,
};

const productTypesSlice = createSlice({
  name: 'sliders',
  initialState,
  reducers: {
    resetProductTypes(state: any) {
      state.productTypes = [];
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
    },
  },
  extraReducers: {
    [getProductTypesFromAPI.pending as any]: (state: any) => {
      state.isLoading = true;
    },
    [getProductTypesFromAPI.fulfilled as any]: (state: any, action: any) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.productTypes = action.payload.message.productTypes;
    },
    [getProductTypesFromAPI.rejected as any]: (state: any) => {
      state.isLoading = false;
      state.isError = true;
    },
  },
});

export const { resetProductTypes } = productTypesSlice.actions;
export default productTypesSlice.reducer;
