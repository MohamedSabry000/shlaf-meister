import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getDataFromAPI } from '../../utils/getDataFromAPI';
import { IMissionVision } from '../Interfaces';

export const getMissionVisionFromAPI = createAsyncThunk(
  'videos/getMissionVision', async () => { return await getDataFromAPI("missionVision"); }
);

const initialState = {
  missionVision: [] as IMissionVision[],
  isLoading: false as boolean,
  isSuccess: false as boolean,
  isError: false as boolean,
};

const missionVisionSlice = createSlice({
  name: 'missionVision',
  initialState,
  reducers: {
    resetMissionVision(state: any) {
      state.missionVision = [];
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
    },
  },
  extraReducers: {
    [getMissionVisionFromAPI.pending as any]: (state: any) => {
      state.isLoading = true;
    },
    [getMissionVisionFromAPI.fulfilled as any]: (state: any, action: any) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.missionVision = action.payload.message.mission_vision;
    },
    [getMissionVisionFromAPI.rejected as any]: (state: any) => {
      state.isLoading = false;
      state.isError = true;
    },
  },
});

export const { resetMissionVision } = missionVisionSlice.actions;
export default missionVisionSlice.reducer;
