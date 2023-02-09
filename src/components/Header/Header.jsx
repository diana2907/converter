import { Navigation } from 'components/Navigation/Navigation';
import css from './Header.module.css';

export function Header() {
  return (
    <header className={css.header}>
      <div className="container">
        <Navigation />
      </div>
    </header>
  );
}
