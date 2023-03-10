import {
  SiTelegram,
  SiInstagram,
  SiViber,
  SiFacebook,
  SiLinkedin,
} from 'react-icons/si';
import css from 'components/Contacts/Contacts.module.css';
import { IconContext } from 'react-icons';

export const Contacts = () => {
  return (
    <section>
      <div className="container">
        <h2 className={css.title}>Contacts</h2>
        <ul>
          <li className={css.point}>
            <h4 className={css.head}>ADDRESS</h4>
            <p>123 Anywhere St., Any City ST 12345</p>
          </li>
          <li className={css.point}>
            <h4 className={css.head}>PHONE</h4>
            <p>+38 (098) 456-78-90</p>
          </li>
          <li className={css.point}>
            <h4 className={css.head}>EMAIL</h4>
            <p>convertercurrency@email.com</p>
          </li>
          <li className={css.point}>
            <h4 className={css.head}>SOCIAL</h4>
            <ul className={css.list}>
              <IconContext.Provider value={{ size: '32px', color: '#d2b575' }}>
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
          </li>
        </ul>
      </div>
    </section>
  );
};
