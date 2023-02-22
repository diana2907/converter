import { useEffect } from 'react';
import { Chart } from 'components/Chart/Chart';
import css from 'components/CurrencyFluctuation/CurrencyFluctuation.module.css';

const BASE_URL = 'https://api.exchangerate.host/';

export const CurrencyFluctuation = ({ baseDate }) => {
  const date = new Date();
  date.setDate(date.getDate() - 7);
  console.log(date);
  const dateISO =
    date.getFullYear() +
    '-' +
    ('0' + (date.getMonth() + 1)).slice(-2) +
    '-' +
    ('0' + date.getDate()).slice(-2);
  console.log(dateISO);
  useEffect(() => {
    fetch(
      `${BASE_URL}/timeseries?start_date=${dateISO}&end_date=${baseDate}&base=USD&symbols=USD`
    )
      .then(res => res.json())
      .then(data => {
        console.log(data);
      });
  }, [dateISO, baseDate]);
  return (
    <section className={css.fluctuation}>
      <div className="container">
        <h2 className={css.title}>Сurrency fluctuation</h2>
      </div>
      <Chart />
    </section>
  );
};
