import {
  SiTelegram,
  SiInstagram,
  SiViber,
  SiFacebook,
  SiLinkedin,
} from 'react-icons/si';
import css from 'components/Footer/Footer.module.css';
import { IconContext } from 'react-icons';

export const Footer = () => {
  return (
    <footer className={css.footer}>
      <div className="container">
        <div className={css.wrap}>
          <p>Currency Converter</p>
          <ul className={css.list}>
            <IconContext.Provider value={{ size: '22px', color: '#d2b575' }}>
              <li className={css.item}>
                <a href="https://web.telegram.org/k/">
                  <SiTelegram />
                </a>
              </li>
              <li className={css.item}>
                <a href="https://www.instagram.com">
                  <SiInstagram />
                </a>
              </li>
              <li className={css.item}>
                <a href="https://www.viber.com/ua/">
                  <SiViber />
                </a>
              </li>
              <li className={css.item}>
                <a href="https://uk-ua.facebook.com/">
                  <SiFacebook />
                </a>
              </li>
              <li className={css.item}>
                <a href="https://ua.linkedin.com/">
                  <SiLinkedin />
                </a>
              </li>
            </IconContext.Provider>
          </ul>
        </div>
      </div>
    </footer>
  );
};

// #eadec6, светлый
// #d2b575, песочный
// #03675b, зеленый
// #033742, зелен-сини темн
// #03162f синий темный
