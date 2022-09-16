import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getDataFromAPI } from '../../utils/getDataFromAPI';

export const getSliderFromAPI = createAsyncThunk(
  'videos/getVideos', async () => { return await getDataFromAPI("sliders"); }
);

const initialState = {
  sliders: [],
  isLoading: false,
  isSuccess: false,
  isError: false,
};

const slidersSlice = createSlice({
  name: 'sliders',
  initialState,
  reducers: {
    reset(state) {
      state.sliders = [];
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
    },
  },
  extraReducers: {
    // getVideosFromAPI
    [getSliderFromAPI.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getSliderFromAPI.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.videos = action.payload;
    },
    [getSliderFromAPI.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = true;
    },
  },
});

export const { reset } = slidersSlice.actions;
export default slidersSlice.reducer;
