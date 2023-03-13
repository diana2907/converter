import { BsCurrencyExchange } from 'react-icons/bs';
import { IconContext } from 'react-icons';
import css from './Navigation.module.scss';
import { NavLink } from 'react-router-dom';

export const Navigation = () => {
  let activeStyle = {
    textStroke: '1px #080858',
    transform: 'scale(1.2)',
    color: '#eadec6',
  };
  return (
    <nav className={css.nav}>
      <NavLink to="/">
        <div className={css.logo}>
          <IconContext.Provider value={{ size: '40px', color: '#d2b575' }}>
            <BsCurrencyExchange />
          </IconContext.Provider>
          <div className={css.logoText}>
            <p>Currency</p>
            <p>Converter</p>
          </div>
        </div>
      </NavLink>
      <div className={css.menu}>
        <NavLink
          className={css.link}
          to="/"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          <p>RATES</p>
        </NavLink>
        <NavLink
          className={css.link}
          to="/about"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          <p>ABOUT</p>
        </NavLink>
        <NavLink
          className={css.link}
          to="/contacts"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          <p>CONTACTS</p>
        </NavLink>
      </div>
      <ul className="menu"></ul>
    </nav>
  );
};
