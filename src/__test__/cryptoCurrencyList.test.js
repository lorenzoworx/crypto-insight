import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import configureMockStore from 'redux-mock-store';
import CryptoCurrencyList from '../components/CryptoCurrencyList';

const mockStore = configureMockStore([]);

describe('Currency Component', () => {
  let store;
  beforeEach(() => {
    store = mockStore({
      crypto: {
        cryptoCurrencies: [
          {
            id: '1',
            name: 'Bitcoin',
            current_price: 1000,
            image: '#',
          },
          {
            id: '2',
            name: 'Ethereum',
            current_price: 500,
            image: '#',
          },
        ],
      },
    });
    store.dispatch = jest.fn();
  });

  it('should render the currency component from store', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <CryptoCurrencyList />
        </BrowserRouter>
      </Provider>,
    );
    expect(screen.getByText('Bitcoin')).toBeInTheDocument();
    expect(screen.getByText('Ethereum')).toBeInTheDocument();
  });
  it('currency count should be 2', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <CryptoCurrencyList />
        </BrowserRouter>
      </Provider>,
    );
    const bitcoinElement = screen.getByText('Bitcoin');
    const ethereumElement = screen.getByText('Ethereum');

    expect(bitcoinElement).toBeInTheDocument();
    expect(ethereumElement).toBeInTheDocument();

    const bitcoinPriceElement = screen.queryByText(/1000/);
    const ethereumPriceElement = screen.queryByText(/500/);

    expect(bitcoinPriceElement).toBeInTheDocument();
    expect(ethereumPriceElement).toBeInTheDocument();
  });
});
