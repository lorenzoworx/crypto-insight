import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, useParams } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import configureMockStore from 'redux-mock-store';
import CryptoCurrencyDetails from '../components/CryptoCurrencyDetails';

const mockStore = configureMockStore([]);
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: jest.fn(),
}));

describe('Details Page', () => {
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
            details: { test: '5000' },
          },
        ],
      },
    });
    store.dispatch = jest.fn();
    useParams.mockReturnValue({ id: '1' });
  });

  it('should render the details page', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <CryptoCurrencyDetails />
        </BrowserRouter>
      </Provider>,
    );
    expect(screen.getByText('Bitcoin Details')).toBeInTheDocument();
    expect(screen.getByText('test')).toBeInTheDocument();
    expect(screen.getByText('₦5,000.00')).toBeInTheDocument();
  });
});
