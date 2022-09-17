import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getDataFromAPI } from '../../utils/getDataFromAPI';
import { IPresidentMessage } from '../Interfaces';

export const getVicePresidentMessageFromAPI = createAsyncThunk(
  'videos/getVicePresident', async () => { return await getDataFromAPI("vicePresident"); }
);

const initialState = {
  vicePresident: [] as IPresidentMessage[],
  isViceLoading: false as boolean,
  isViceSuccess: false as boolean,
  isViceError: false as boolean,
};

const VicePresidentSlice = createSlice({
  name: 'vicePresident',
  initialState,
  reducers: {
    resetVicePresident(state: any) {
      state.vicePresident = [];
      state.isViceLoading = false;
      state.isViceSuccess = false;
      state.isViceError = false;
    },
  },
  extraReducers: {
    [getVicePresidentMessageFromAPI.pending as any]: (state: any) => {
      state.isViceLoading = true;
    },
    [getVicePresidentMessageFromAPI.fulfilled as any]: (state: any, action: any) => {
      state.isViceLoading = false;
      state.isViceSuccess = true;
      state.vicePresident = action.payload.message.vice_president;
    },
    [getVicePresidentMessageFromAPI.rejected as any]: (state: any) => {
      state.isViceLoading = false;
      state.isViceError = true;
    },
  },
});

export const { resetVicePresident } = VicePresidentSlice.actions;
export default VicePresidentSlice.reducer;
