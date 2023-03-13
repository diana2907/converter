import CurrencyItem from 'components/CurrencyItem/CurrencyItem';
import css from 'components/Converter/Converter.module.scss';
import { IconContext } from 'react-icons';
import { RiSwapBoxLine } from 'react-icons/ri';

export function Converter({
  currencyOptions,
  dateISO,
  fromCurrency,
  toCurrency,
  handleFromAmountChange,
  handleToAmountChange,
  changeCurrency,
  setFromCurrency,
  setToCurrency,
  toAmount,
  fromAmount,
}) {
  return (
    <section className={css.converter}>
      <div className="container">
        <div>
          <h1 className={css.title}>Сurrency rates</h1>
          <p>on the date : {dateISO}</p>
        </div>
        <div className={css.box}>
          <CurrencyItem
            currencyOptions={currencyOptions}
            selectedCurrency={fromCurrency}
            onChangeCurrency={e => setFromCurrency(e.target.value)}
            onChangeAmount={handleFromAmountChange}
            amount={fromAmount}
          />

          <button className={css.btn} type="button" onClick={changeCurrency}>
            <IconContext.Provider value={{ size: '46px', color: '#d2b575' }}>
              <RiSwapBoxLine />
            </IconContext.Provider>
          </button>

          <CurrencyItem
            currencyOptions={currencyOptions}
            selectedCurrency={toCurrency}
            onChangeCurrency={e => setToCurrency(e.target.value)}
            onChangeAmount={handleToAmountChange}
            amount={toAmount}
          />
        </div>
      </div>
    </section>
  );
}
