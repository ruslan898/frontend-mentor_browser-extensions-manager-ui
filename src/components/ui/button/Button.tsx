import type { ReactNode } from 'react';
import styles from './Button.module.scss';

type ButtonProps = {
  children: ReactNode;
};

export default function Button({ children }: ButtonProps) {
  const { btn } = styles;

  return (
    <button type="button" className={btn}>
      {children}
    </button>
  );
}
