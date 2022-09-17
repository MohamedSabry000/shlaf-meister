import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getDataFromAPI } from '../../utils/getDataFromAPI';
import { ISlider } from '../Interfaces';

export const getSliderFromAPI = createAsyncThunk(
  'videos/getSlides', async () => { return await getDataFromAPI("sliders"); }
);

const initialState = {
  sliders: [] as ISlider[],
  isLoading: false as boolean,
  isSuccess: false as boolean,
  isError: false as boolean,
};

const slidersSlice = createSlice({
  name: 'sliders',
  initialState,
  reducers: {
    resetSliders(state: any) {
      state.sliders = [];
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
    },
  },
  extraReducers: {
    [getSliderFromAPI.pending as any]: (state: any) => {
      state.isLoading = true;
    },
    [getSliderFromAPI.fulfilled as any]: (state: any, action: any) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.sliders = action.payload.message.sliders;
    },
    [getSliderFromAPI.rejected as any]: (state: any) => {
      state.isLoading = false;
      state.isError = true;
    },
  },
});

export const { resetSliders } = slidersSlice.actions;
export default slidersSlice.reducer;
