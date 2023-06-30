import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { TbSortAscending2, TbSortDescending2 } from 'react-icons/tb';
import { getCurrencies } from '../redux/crypto/cryptoCurrencySlice';
import CryptoCurrency from './CryptoCurrency';
import logo from '../assets/coingecko_logo_with_dark_text.png';
import crypSight from '../assets/cryptoInsight.png';

const CryptoCurrencyList = () => {
  const { cryptoCurrencies, isLoading, error } = useSelector((state) => state.crypto);
  const dispatch = useDispatch();
  const [searchList, setSearchList] = useState(cryptoCurrencies);

  useEffect(() => {
    if (!cryptoCurrencies.length) {
      dispatch(getCurrencies());
    }
  }, [dispatch, cryptoCurrencies.length]);

  useEffect(() => {
    setSearchList(cryptoCurrencies);
  }, [cryptoCurrencies]);

  const handleAscending = () => {
    setSearchList([...searchList].sort((a, b) => b.current_price - a.current_price));
  };

  const handleDescending = () => {
    setSearchList([...searchList].sort((a, b) => a.current_price - b.current_price));
  };

  if (isLoading) {
    return (<h1>Loading...</h1>);
  }

  if (cryptoCurrencies.length) {
    return (
      <div>
        <div>
          <div>
            <img className="crypSight" src={crypSight} alt="Crypto Insight Logo" />
            <p>is powered by Coin Gecko</p>
            <img className="coinGecko" src={logo} alt="logo" />
          </div>
        </div>
        <div className="pageDivider">
          <span>Crypto Currencies</span>
          <div>
            <TbSortAscending2 onClick={handleAscending} />
            <TbSortDescending2 onClick={handleDescending} />
          </div>
        </div>
        <ul className="cryptoCurrencyList">
          {searchList.map((currency) => <CryptoCurrency key={currency.id} currency={currency} />)}
        </ul>
      </div>
    );
  }
  return (<span>{error}</span>);
};

export default CryptoCurrencyList;
