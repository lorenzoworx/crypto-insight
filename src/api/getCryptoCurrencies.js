const API_URL = 'https://api.coingecko.com/api/v3/coins/markets'
const getCryptoCurrencies = async () => {
 try {
   const response = await fetch(`${API_URL}?${new URLSearchParams({
    vs_currency: 'ngn',
    order: 'market_cap_desc',
    per_page: '10',
    page: '2',
    sparkline: 'false',
    locale: 'en',
   })}`, {
    headers: {
      'Content-Type': 'application/json',
    },
   });
   const data = await response.json();
   const cryptoCurrencies = (data.map((currency) => ({
    id: currency.id,
    name: currency.name,
    image: currency.image,
    current_price: currency.market_data.current_price,
    details: {
      market_cap: currency.market_cap,
      market_cap_rank: currency.market_cap_rank,
      fully_diluted_valuation: currency.fully_diluted_valuation,
      total_volume: currency.total_volume,
      high_24h: currency.high_24h,
      low_24h: currency.low_24h,
      price_change_24h: currency.price_change_24h,
      price_change_percentage_24h: currency.price_change_percentage_24h,
      market_cap_change_24h: currency.market_cap_change_24h,
      circulating_supply: currency.circulating_supply,
      total_supply: currency.total_supply,
      max_supply: currency.max_supply,
      ath: currency.ath,
      ath_change_percentage: currency.ath_change_percentage,      
    },
    last_updated: currency.last_updated,
   })));
   return cryptoCurrencies;
 } catch(err) {
    return err;
 }
};

export default getCryptoCurrencies;
