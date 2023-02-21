import { useEffect, useState } from 'react';
import css from 'components/HistoricalRates/HistoricalRates.module.css';

const BASE_URL = 'https://api.exchangerate.host/';

export const HistoricalRates = ({ currencyOptions }) => {
  const D = new Date();
  const dateISO =
    D.getFullYear() +
    '-' +
    ('0' + (D.getMonth() + 1)).slice(-2) +
    '-' +
    ('0' + D.getDate()).slice(-2);
  const [date, setDate] = useState(dateISO);
  const [rates, setRates] = useState({});
  const [symbols, setSymbols] = useState([]);
  const [baseCurrency, setBaseCurrency] = useState('USD');

  useEffect(() => {
    fetch(`${BASE_URL}/${date}?base=${baseCurrency}&symbols=${symbols.join()}`)
      .then(res => res.json())
      .then(data => {
        setDate(data.date);
        setRates(data.rates);
      });
  }, [date, symbols, baseCurrency]);

  const handleToDateChange = e => {
    setDate(e.target.value);
  };

  const onClick = e => {
    console.log(e.target);
    if (symbols.includes(e.target.value)) {
      return;
    }
    setSymbols([...symbols, e.target.value]);
  };

  const deleteCurrency = symb => {
    setSymbols(prevState => prevState.filter(symbols => symbols !== symb));
  };

  return (
    <section className={css.historicalRates}>
      <div className="container">
        <h2 className={css.title}>Hisrorical rates</h2>
        <p>on the date : </p>
        <div className={css.main}>
          <input
            min="1999-01-01"
            max={dateISO}
            className={css.date}
            onChange={handleToDateChange}
            value={date}
            type="date"
          />
          <div>
            <h3 className={css.h3}>Базова валюта</h3>
            <select
              value={baseCurrency}
              onChange={e => setBaseCurrency(e.target.value)}
              name="base"
            >
              {currencyOptions.map(key => (
                <option key={key} value={key}>
                  {key}
                </option>
              ))}
            </select>

            {/* <button type="button">Сформувати порівняльну таюлицю</button> */}
          </div>
          <div>
            <h3 className={css.h3}>
              Оберіть одну або декілька валют для порівняння
            </h3>
            <div className={css.box}>
              <select onChange={onClick} name="symbols">
                {currencyOptions.map(key => (
                  <option key={key} value={key}>
                    {key}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <ul className={css.selected}>
          {symbols.map(item => (
            <li className={css.li} key={item}>
              <p>{item}</p>
              <button onClick={() => deleteCurrency(item)} type="button">
                x
              </button>
            </li>
          ))}
        </ul>

        <div className={css.tableBox}>
          {symbols.length ? (
            <table className={css.table}>
              <caption>Порівняльна таблиця валют до 1 {baseCurrency}</caption>
              <thead>
                <tr>
                  <th>N</th>
                  <th>Currency</th>
                  <th>1 {baseCurrency}</th>
                </tr>
              </thead>
              <tbody>
                {Object.keys(rates).map((key, index) => (
                  <tr key={key}>
                    <td>{index + 1}</td>
                    <td key={key}>{key}</td>
                    <td key={Object.values(rates)[index]}>
                      {Object.values(rates)[index]}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : null}
        </div>
      </div>
    </section>
  );
};
