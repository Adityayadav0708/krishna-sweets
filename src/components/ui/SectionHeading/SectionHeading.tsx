import styles from './SectionHeading.module.css';

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  body?: string;
  align?: 'left' | 'center';
}

export function SectionHeading({ eyebrow, title, body, align = 'left' }: SectionHeadingProps) {
  return (
    <header className={`${styles.heading} ${styles[align]}`}>
      <span className={styles.eyebrow}>{eyebrow}</span>
      <h2>{title}</h2>
      {body && <p>{body}</p>}
    </header>
  );
}
