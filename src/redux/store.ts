import { configureStore } from '@reduxjs/toolkit';
import featuredProductsSlice from './slices/featured-products-slice';
import missionVisionSlice from './slices/mission-vision-slice';
import offersSlice from './slices/offers-slice';
import presidentMessageSlice from './slices/president-message-slice';
import productTypesSlice from './slices/product-types-slice';
import productsSlice from './slices/products-slice';
import slidersSlice from './slices/sliders-slice';
import vicePresidentSlice from './slices/vice-president-slice';

const store = configureStore({
  reducer: {
    sliders: slidersSlice,
    productTypes: productTypesSlice,
    presidentMessage: presidentMessageSlice,
    vicePresident: vicePresidentSlice,
    missionVision: missionVisionSlice,
    products: productsSlice,
    featuredProducts: featuredProductsSlice,
    offers: offersSlice,
  },
});

export default store;
