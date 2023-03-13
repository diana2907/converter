import css from 'components/CurrencyItem/CurrencyItem.module.scss';

export default function CurrencyItem({
  currencyOptions,
  selectedCurrency,
  onChangeCurrency,
  onChangeAmount,
  amount,
}) {
  return (
    <div className={css.box}>
      <input
        min="1"
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
