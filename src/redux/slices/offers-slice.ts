import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getDataFromAPI } from '../../utils/getDataFromAPI';
import { IOffer } from '../Interfaces';

export const getOffersFromAPI = createAsyncThunk(
  'videos/getOffers', async () => { return await getDataFromAPI("offer"); }
);

const initialState = {
  offers: [] as IOffer[],
  isLoading: false as boolean,
  isSuccess: false as boolean,
  isError: false as boolean,
};

const offersSlice = createSlice({
  name: 'offers',
  initialState,
  reducers: {
    resetOffers(state: any) {
      state.offers = [];
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
    },
  },
  extraReducers: {
    [getOffersFromAPI.pending as any]: (state: any) => {
      state.isLoading = true;
    },
    [getOffersFromAPI.fulfilled as any]: (state: any, action: any) => {
      state.isLoading = false;
      state.isSuccess = true;
      console.log(action.payload.message);
      state.offers = action.payload.message.offers;
    },
    [getOffersFromAPI.rejected as any]: (state: any) => {
      state.isLoading = false;
      state.isError = true;
    },
  },
});

export const { resetOffers } = offersSlice.actions;
export default offersSlice.reducer;
