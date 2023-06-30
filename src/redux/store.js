import { configureStore } from '@reduxjs/toolkit';
import cryptoReducer from './crypto/cryptoCurrencySlice';

const store = configureStore({
  reducer: {
    crypto: cryptoReducer,
  },
});

export default store;
