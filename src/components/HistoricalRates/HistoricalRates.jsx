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
  const [symbols, setSymbols] = useState([]);

  useEffect(() => {
    fetch(`${BASE_URL}/${date}?base=USD&symbols=${symbols.join()}`)
      .then(res => res.json())
      .then(data => {
        setDate(data.date);
        setRates(data.rates);
      });
  }, [date, symbols]);

  console.log(date);
  const handleToDateChange = e => {
    setDate(e.target.value);
  };

  const onClick = e => {
    if (!symbols.includes(e.target.value)) {
      setSymbols([...symbols, e.target.value]);
    }
  };

  const deleteCurrency = symb => {
    setSymbols(prevState => prevState.filter(symbols => symbols !== symb));
  };

  return (
    <div className="container">
      <input onChange={handleToDateChange} value={date} type="date" />
      <select onClick={onClick} name="symbols[]">
        {/* <option disabled selected>
          Оберіть одну валюту або кілька
        </option> */}
        {Object.keys(rates).map(key => (
          <option key={key} value={key}>
            {key}
          </option>
        ))}
      </select>

      {symbols.map(item => (
        <div key={item}>
          <p>{item}</p>
          <button onClick={() => deleteCurrency(item)} type="button">
            x
          </button>
        </div>
      ))}

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
