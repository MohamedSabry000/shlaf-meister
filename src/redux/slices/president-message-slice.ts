import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getDataFromAPI } from '../../utils/getDataFromAPI';
import { IPresidentMessage } from '../Interfaces';

export const getPresidentMessageFromAPI = createAsyncThunk(
  'videos/getPresidentMessage', async () => { return await getDataFromAPI("presidentMessage"); }
);

const initialState = {
  presidentMessage: [] as IPresidentMessage[],
  isLoading: false as boolean,
  isSuccess: false as boolean,
  isError: false as boolean,
};

const presidentMessageSlice = createSlice({
  name: 'presidentMessage',
  initialState,
  reducers: {
    resetPresidentMessage(state: any) {
      state.presidentMessage = [];
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
    },
  },
  extraReducers: {
    [getPresidentMessageFromAPI.pending as any]: (state: any) => {
      state.isLoading = true;
    },
    [getPresidentMessageFromAPI.fulfilled as any]: (state: any, action: any) => {
      state.isLoading = false;
      state.isSuccess = true;
console.log(action.payload.message.president_message);
      state.presidentMessage = action.payload.message.president_message;
    },
    [getPresidentMessageFromAPI.rejected as any]: (state: any) => {
      state.isLoading = false;
      state.isError = true;
    },
  },
});

export const { resetPresidentMessage } = presidentMessageSlice.actions;
export default presidentMessageSlice.reducer;
