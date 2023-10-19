import { configureStore } from '@reduxjs/toolkit';
import productsReducer from '../features/Products/ProductsSlice';
import filtersReducer from '../features/filter/filterSlice';

export const store = configureStore({
  reducer: {
    products: productsReducer,
    filter : filtersReducer
  },
});
