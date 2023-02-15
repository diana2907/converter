import { Converter } from 'components/Converter/Converter';
import { HistoricalRates } from 'components/HistoricalRates/HistoricalRates';
import { useEffect, useState } from 'react';

const BASE_URL = 'https://api.exchangerate.host/';

export function MainRates() {
  const [currencyOptions, setCurrencyOptions] = useState([]);

  useEffect(() => {
    fetch(`${BASE_URL}/symbols`)
      .then(res => res.json())
      .then(data => {
        // const firstCurrency = Object.keys(data.symbols)[0];
        setCurrencyOptions([...Object.keys(data.symbols)]);
        // setToCurrency(firstCurrency);
        // setExchangeRate(data.symbols[firstCurrency]);
      });
  }, []);
  return (
    <>
      <Converter currencyOptions={currencyOptions} />
      <HistoricalRates currencyOptions={currencyOptions} />
    </>
  );
}
