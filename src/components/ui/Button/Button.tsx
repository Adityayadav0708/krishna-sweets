import type { ButtonHTMLAttributes, PropsWithChildren } from 'react';
import { Link, type LinkProps } from 'react-router-dom';
import styles from './Button.module.css';

type Variant = 'primary' | 'secondary' | 'quiet';

interface CommonProps {
  variant?: Variant;
}

type ButtonProps = PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement> & CommonProps>;
type ButtonLinkProps = PropsWithChildren<LinkProps & CommonProps>;

const classes = (variant: Variant, className = '') =>
  `${styles.button} ${styles[variant]} ${className}`;

export function Button({ children, variant = 'primary', className, ...props }: ButtonProps) {
  return (
    <button className={classes(variant, className)} {...props}>
      {children}
    </button>
  );
}

export function ButtonLink({ children, variant = 'primary', className, ...props }: ButtonLinkProps) {
  return (
    <Link className={classes(variant, className)} {...props}>
      {children}
    </Link>
  );
}
