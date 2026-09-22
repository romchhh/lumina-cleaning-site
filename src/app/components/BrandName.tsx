import { BRAND } from '../brand'
import styles from './BrandName.module.css'

type BrandNameProps = {
  variant?: 'header' | 'footer'
  tone?: 'dark' | 'light'
  className?: string
}

export function BrandName({ variant = 'header', tone = 'light', className }: BrandNameProps) {
  return (
    <span className={`${styles.brand} ${styles[variant]} ${styles[tone]} ${className ?? ''}`}>
      <span className={styles.word}>{BRAND.shortName}</span>
      <span className={styles.sub}>Cleaning</span>
    </span>
  )
}
