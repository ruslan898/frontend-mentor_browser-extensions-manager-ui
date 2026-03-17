import Logo from '../logo/Logo';
import styles from './Header.module.scss';
import moonIcon from '/src/assets/icon-moon.svg'

export default function Header() {
  const {header, themeToggleBtn} = styles

  return (
    <header className={header}>
      <Logo />
      <button type="button" className={themeToggleBtn}>
        <img src={moonIcon} alt="Moon icon" />
      </button>
    </header>
  );
}