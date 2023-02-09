import css from 'components/CurrencyRow/CurrencyRow.module.css';

export default function CurrencyRow({
  currencyOptions,
  selectedCurrency,
  onChangeCurrency,
  onChangeAmount,
  amount,
}) {
  return (
    <div>
      <input
        type="number"
        className={css.input}
        value={amount}
        onChange={onChangeAmount}
      />
      <select
        className={css.select}
        value={selectedCurrency}
        onChange={onChangeCurrency}
      >
        {currencyOptions.map(option => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
