import { Navigation } from 'components/Navigation/Navigation';
import css from './Header.module.scss';

export function Header() {
  return (
    <header className={css.header}>
      <div className="container">
        <Navigation />
      </div>
    </header>
  );
}
