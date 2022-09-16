import { configureStore } from '@reduxjs/toolkit';
import slidersSlice from './slices/sliders-slice.js';

const store = configureStore({
  reducer: {
    sliders: slidersSlice,
  },
});

export default store;
