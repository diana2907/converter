import CurrencyRow from 'components/CurrencyRow/CurrencyRow';
import { useEffect, useState } from 'react';
import css from 'components/Converter/Converter.module.css';
import { IconContext } from 'react-icons';
import { RiSwapBoxLine } from 'react-icons/ri';

const BASE_URL = 'https://api.exchangerate.host/';

export function Converter({ currencyOptions }) {
  const [fromCurrency, setFromCurrency] = useState();
  const [toCurrency, setToCurrency] = useState();
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
    if (fromCurrency != null && toCurrency != null) {
      fetch(`${BASE_URL}/convert?from=${fromCurrency}&to=${toCurrency}`)
        .then(res => res.json())
        .then(data => {
          console.log(data);
          setExchangeRate(data.info.rate);
        });
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
    <div className="container">
      <h1 className={css.title}>Сurrency rates</h1>
      <div className={css.box}>
        <CurrencyRow
          currencyOptions={currencyOptions}
          selectedCurrency={fromCurrency}
          onChangeCurrency={e => setFromCurrency(e.target.value)}
          onChangeAmount={handleFromAmountChange}
          amount={fromAmount}
        />

        <button className={css.btn} type="button" onClick={changeCurrency}>
          <IconContext.Provider value={{ size: '40px' }}>
            <RiSwapBoxLine />
          </IconContext.Provider>
        </button>

        <CurrencyRow
          currencyOptions={currencyOptions}
          selectedCurrency={toCurrency}
          onChangeCurrency={e => setToCurrency(e.target.value)}
          onChangeAmount={handleToAmountChange}
          amount={toAmount}
        />
      </div>
    </div>
  );
}
