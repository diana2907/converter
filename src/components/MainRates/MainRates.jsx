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
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('EUR');
  const [date, setDate] = useState(dateISO);
  const [exchangeRate, setExchangeRate] = useState();
  const [amount, setAmount] = useState(1);
  const [amountInFromCurrency, setAmountInFromCurrency] = useState(true);

  let toAmount, fromAmount;
  if (amountInFromCurrency) {
    fromAmount = amount;
    toAmount = amount * exchangeRate;
  } else {
    toAmount = amount;
    fromAmount = amount / exchangeRate;
  }

  useEffect(() => {
    fetch(`${BASE_URL}/symbols`)
      .then(res => res.json())
      .then(data => {
        setCurrencyOptions([...Object.keys(data.symbols)]);
      });
  }, []);

  useEffect(() => {
    if (fromCurrency != null && toCurrency != null) {
      fetch(
        `${BASE_URL}/convert?from=${fromCurrency}&to=${toCurrency}&places=4`
      )
        .then(res => res.json())
        .then(data => {
          setExchangeRate(data.info.rate);
          setDate(data.date);
        });
      if (exchangeRate === null) {
        alert('Відсутній курс на сьогодні');
      }
    }
  }, [fromCurrency, toCurrency, exchangeRate]);

  function handleFromAmountChange(e) {
    setAmount(e.target.value);
    setAmountInFromCurrency(true);
  }

  function handleToAmountChange(e) {
    setAmount(e.target.value);
    setAmountInFromCurrency(false);
  }

  function changeCurrency() {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  }
  return (
    <>
      <Converter
        toCurrency={toCurrency}
        fromCurrency={fromCurrency}
        currencyOptions={currencyOptions}
        dateISO={date}
        handleFromAmountChange={handleFromAmountChange}
        handleToAmountChange={handleToAmountChange}
        changeCurrency={changeCurrency}
        setFromCurrency={setFromCurrency}
        setToCurrency={setToCurrency}
        toAmount={toAmount}
        fromAmount={fromAmount}
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
