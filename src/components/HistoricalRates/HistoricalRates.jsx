import { useEffect, useState } from 'react';

const BASE_URL = 'https://api.exchangerate.host/';

export const HistoricalRates = () => {
  const D = new Date();
  const dateISO =
    D.getFullYear() +
    '-' +
    ('0' + (D.getMonth() + 1)).slice(-2) +
    '-' +
    ('0' + D.getDate()).slice(-2);
  const [date, setDate] = useState(dateISO);
  const [rates, setRates] = useState({});

  useEffect(() => {
    fetch(`${BASE_URL}/${date}?base=USD`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setDate(data.date);
        setRates(data.rates);
      });
  }, [date]);

  console.log(date);
  const handleToDateChange = e => {
    setDate(e.target.value);
  };

  return (
    <div className="container">
      <input onChange={handleToDateChange} value={date} type="date" />
      <select name="currency[]" multiple="multiple">
        {Object.keys(rates).map(key => (
          <option key={key} value={key}>
            {key}
          </option>
        ))}
      </select>

      <table>
        {Object.keys(rates).map((key, index) => (
          <tr key={key}>
            <th key={key}>{key}</th>
            <td key={Object.values(rates)[index]}>
              {Object.values(rates)[index]}
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};
