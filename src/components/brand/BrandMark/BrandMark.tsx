import styles from './BrandMark.module.css';
import { business } from '@/data/site';

interface BrandMarkProps {
  light?: boolean;
}

export function BrandMark({ light = false }: BrandMarkProps) {
  return (
    <div className={`${styles.brand} ${light ? styles.light : ''}`} aria-label={business.name}>
      <span className={styles.seal} aria-hidden="true">
        <span>KS</span>
      </span>
      <span className={styles.copy}>
        <strong>{business.name}</strong>
        <small>Handcrafted since {business.founded}</small>
      </span>
    </div>
  );
}
