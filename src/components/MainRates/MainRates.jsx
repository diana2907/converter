import { Converter } from 'components/Converter/Converter';
import { CurrencyFluctuation } from 'components/CurrencyFluctuation/CurrencyFluctuation';
import { HistoricalRates } from 'components/HistoricalRates/HistoricalRates';
import { useEffect, useState } from 'react';

const BASE_URL = 'https://api.exchangerate.host/';

export function MainRates() {
  const D = new Date();
  const dateISO =
    D.getFullYear() +
    '-' +
    ('0' + (D.getMonth() + 1)).slice(-2) +
    '-' +
    ('0' + D.getDate()).slice(-2);
  const [currencyOptions, setCurrencyOptions] = useState([]);
  const [fromCurrency, setFromCurrency] = useState();
  const [toCurrency, setToCurrency] = useState();

  useEffect(() => {
    fetch(`${BASE_URL}/symbols`)
      .then(res => res.json())
      .then(data => {
        setCurrencyOptions([...Object.keys(data.symbols)]);
      });
  }, []);

  return (
    <>
      <Converter
        setFromCurrency={setFromCurrency}
        setToCurrency={setToCurrency}
        toCurrency={toCurrency}
        fromCurrency={fromCurrency}
        currencyOptions={currencyOptions}
        dateISO={dateISO}
      />
      <CurrencyFluctuation
        baseDate={dateISO}
        fromCurrency={fromCurrency}
        toCurrency={toCurrency}
      />
      <HistoricalRates currencyOptions={currencyOptions} />
    </>
  );
}
