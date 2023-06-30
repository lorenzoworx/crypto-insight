import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { HiArrowCircleRight } from 'react-icons/hi';
import { getCryptoDetails } from '../redux/crypto/cryptoCurrencySlice';

const CryptoCurrencyDetails = () => {
  const { cryptoCurrencies, isLoading } = useSelector((state) => state.crypto);
  const { id } = useParams();
  const dispatch = useDispatch();
  const currency = cryptoCurrencies.find((currency) => currency.id === id);
  useEffect(() => {
    if (!currency.details) {
      dispatch(getCryptoDetails(id));
    }
  }, [dispatch, currency.details, id]);

  if (isLoading) {
    return (<h1>Loading...</h1>);
  }

  return (
    <>
      <div className="detailsHeading">
        <img src={currency.image} alt={currency.name} />
        <h2>{currency.name}</h2>
        <span>{new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN' }).format(currency.current_price)}</span>
      </div>
      <div className="detailsPageDivider">
        <span>
          {currency.name}
          {' '}
          Details
        </span>
      </div>
      <ul className="detailsList">
        {Object.keys(currency.details).map((currencyDetail) => (
          <li key={currencyDetail}>
            <span>{currencyDetail}</span>
            <div>
              <span>
                {new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN' }).format(currency.details[currencyDetail])}
              </span>
              <HiArrowCircleRight className="rightArrow" />
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default CryptoCurrencyDetails;
