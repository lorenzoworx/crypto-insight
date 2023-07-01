import reducer from '../redux/crypto/cryptoCurrencySlice';

test('should return the initial state', () => {
  expect(reducer(undefined, { type: undefined })).toEqual({
    cryptoCurrencies: [], isLoading: true,
  });
});
