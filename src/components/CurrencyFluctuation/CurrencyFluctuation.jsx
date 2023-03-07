/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { Chart } from 'components/Chart/Chart';
import css from 'components/CurrencyFluctuation/CurrencyFluctuation.module.css';

const BASE_URL = 'https://api.exchangerate.host/';

export const CurrencyFluctuation = ({ baseDate, fromCurrency, toCurrency }) => {
  const [chartData, setChartData] = useState([]);
  const [lables, setLables] = useState([]);
  const [value, setValue] = useState('за 7 днів');

  const date = new Date();
  if (value === 'за 7 днів') {
    date.setDate(date.getDate() - 7);
  }
  if (value === 'за місяць') {
    date.setMonth(date.getMonth() - 1);
  }
  const dateISO =
    date.getFullYear() +
    '-' +
    ('0' + (date.getMonth() + 1)).slice(-2) +
    '-' +
    ('0' + date.getDate()).slice(-2);

  useEffect(() => {
    fetch(
      `${BASE_URL}/timeseries?start_date=${dateISO}&end_date=${baseDate}&base=${fromCurrency}&symbols=${toCurrency}`
    )
      .then(res => res.json())
      .then(data => {
        if (fromCurrency && toCurrency) {
          const values = Object.values(data.rates);
          const rates = values.flatMap(rate => rate[toCurrency]);
          setChartData(rates);

          const keys = Object.keys(data.rates);
          setLables(keys);
        }
      });
  }, [dateISO, baseDate, fromCurrency, toCurrency, value, date]);

  return (
    <section className={css.fluctuation}>
      <div className="container">
        <h2 className={css.title}>Сurrency fluctuation</h2>
        <select value={value} onChange={e => setValue(e.target.value)}>
          <option key="за 7 днів" value="за 7 днів">
            за 7 днів
          </option>
          <option key="за місяць" value="за місяць">
            за місяць
          </option>
        </select>
        {chartData.length > 0 && (
          <Chart
            toCurrency={toCurrency}
            fromCurrency={fromCurrency}
            lables={lables}
            chartData={chartData}
          />
        )}
      </div>
    </section>
  );
};
