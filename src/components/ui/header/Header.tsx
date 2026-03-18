import { useState, useEffect } from 'react';
import Logo from '../logo/Logo';
import styles from './Header.module.scss';
import moonIcon from '/src/assets/icon-moon.svg';
import sunIcon from '/src/assets/icon-sun.svg';

export default function Header() {
  const [theme, setTheme] = useState<'light' | 'dark'>(getTheme);
  const { header, themeToggleBtn } = styles;

  useEffect(() => {
    const html = document.documentElement;
    html.dataset.theme = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  function getTheme() {
    const themeFromLocalStorage = localStorage.getItem('theme');
    const isValidTheme =
      themeFromLocalStorage === 'light' || themeFromLocalStorage === 'dark';

    if (isValidTheme) {
      return themeFromLocalStorage;
    } else {
      return 'light';
    }
  }

  function toggleTheme() {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }

  return (
    <header className={header}>
      <Logo />
      <button type="button" className={themeToggleBtn} onClick={toggleTheme}>
        {theme === 'light' ? (
          <img src={moonIcon} alt="Moon icon" />
        ) : (
          <img src={sunIcon} alt="Sun icon" />
        )}
      </button>
    </header>
  );
}
