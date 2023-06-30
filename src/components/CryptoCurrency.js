import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { HiArrowCircleRight } from 'react-icons/hi';

const CryptoCurrency = ({ currency }) => (
  <li>
    <NavLink to={`/currency/${currency.id}`}>
      <HiArrowCircleRight />
      <img src={currency.image} alt={currency.name} />
      <h2>{currency.name}</h2>
      <span>
        ₦
        {currency.current_price}
      </span>
    </NavLink>
  </li>
);

CryptoCurrency.propTypes = {
  currency: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    current_price: PropTypes.number,
    image: PropTypes.string,
  }).isRequired,
};

export default CryptoCurrency;
