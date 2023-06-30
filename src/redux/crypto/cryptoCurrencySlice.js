import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import getCryptoCurrencies from '../../api/getCryptoCurrencies';
import getCurrencyDetails from '../../api/getCurrencyDetails';

const initialState = {
  cryptoCurrencies: [],
  isLoading: true,
};

const getCurrencies = createAsyncThunk('crypto/getCurrencies', getCryptoCurrencies);
const getCryptoDetails = createAsyncThunk('crypto/getCryptoDetails', getCurrencyDetails);

const cryptoCurrencySlice = createSlice({
  name: 'crypto',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCurrencies.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(getCurrencies.fulfilled, (state, action) => {
        const currencyList = action.payload;
        return ({
          ...state,
          cryptoCurrencies: currencyList,
          isLoading: false,
        });
      })
      .addCase(getCurrencies.rejected, (state, action) => ({
        ...state,
        isLoading: false,
        error: action.payload,
      }))
      .addCase(getCryptoDetails.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(getCryptoDetails.fulfilled, (state, action) => {
        const currencyDetails = action.payload[0];
        const updateCurrency = (state.cryptoCurrencies.map((coin) => {
          if (coin.id !== currencyDetails.id) return coin;
          return currencyDetails;
        }));
        return ({
          ...state,
          cryptoCurrencies: updateCurrency,
          isLoading: false,
        });
      })
      .addCase(getCryptoDetails.rejected, (state, action) => ({
        ...state,
        isLoading: false,
        error: action.payload,
      }));
  },
});

export { getCurrencies, getCryptoDetails };
export default cryptoCurrencySlice.reducer;
