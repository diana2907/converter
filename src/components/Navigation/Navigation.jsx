import { BsCurrencyExchange } from 'react-icons/bs';
import { IconContext } from 'react-icons';
import css from './Navigation.module.css';
import { NavLink } from 'react-router-dom';

export const Navigation = () => {
  return (
    <nav className={css.nav}>
      <NavLink to="/">
        <div className={css.logo}>
          <IconContext.Provider value={{ size: '30px', color: 'black' }}>
            <BsCurrencyExchange />
          </IconContext.Provider>
          <div>
            <p>Currency</p>
            <p>Converter</p>
          </div>
        </div>
      </NavLink>
      <div className={css.menu}>
        <NavLink className={css.link} to="/">
          <p>RATES</p>
        </NavLink>
        <NavLink className={css.link} to="/about">
          <p>ABOUT</p>
        </NavLink>
        <NavLink className={css.link} to="/contacts">
          <p>CONTACTS</p>
        </NavLink>
      </div>
      <ul className="menu"></ul>
    </nav>
  );
};
