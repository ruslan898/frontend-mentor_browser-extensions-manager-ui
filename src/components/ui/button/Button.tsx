import type { ReactNode } from 'react';
import clsx from 'clsx';
import styles from './Button.module.scss';

type ButtonProps = {
  children: ReactNode;
  onClick?: () => void;
  isActive: boolean
};

export default function Button({ children, onClick, isActive }: ButtonProps) {
  const { btn, active } = styles;
  console.log(isActive);
  const classes = clsx(btn, isActive && active)

  return (
    <button type="button" className={classes} onClick={onClick}>
      {children}
    </button>
  );
}
