import { useEffect, useState } from 'react';
import { Chart } from 'components/Chart/Chart';
import css from 'components/CurrencyFluctuation/CurrencyFluctuation.module.css';

const BASE_URL = 'https://api.exchangerate.host/';

export const CurrencyFluctuation = ({ baseDate, fromCurrency, toCurrency }) => {
  const date = new Date();
  date.setDate(date.getDate() - 7);
  const dateISO =
    date.getFullYear() +
    '-' +
    ('0' + (date.getMonth() + 1)).slice(-2) +
    '-' +
    ('0' + date.getDate()).slice(-2);
  const [chartData, setChartData] = useState([]);
  const [lables, setLables] = useState([]);

  useEffect(() => {
    fetch(
      `${BASE_URL}/timeseries?start_date=${dateISO}&end_date=${baseDate}&base=${fromCurrency}&symbols=${toCurrency}`
    )
      .then(res => res.json())
      .then(data => {
        if (fromCurrency && toCurrency) {
          const values = Object.values(data.rates);

          const rates = values.flatMap(rate => console.log(rate[toCurrency]));
          setChartData(rates);
          console.log(data.rates);
          const keys = Object.keys(data.rates);
          console.log(keys);
          setLables(keys);
        }
      });
  }, [dateISO, baseDate, fromCurrency, toCurrency]);

  return (
    <section className={css.fluctuation}>
      <div className="container">
        <h2 className={css.title}>Сurrency fluctuation</h2>
        {chartData.length > 0 && (
          <Chart labels={lables} chartData={chartData} />
        )}
      </div>
    </section>
  );
};
