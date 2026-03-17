import styles from './Logo.module.scss';
import LogoImg from '/src/assets/logo.svg?react';

export default function Logo() {
  const { logo } = styles;

  return <LogoImg className={logo} />;
}
