import Image from 'next/image'
import { BRAND } from '../brand'
import styles from './BrandName.module.css'

type BrandNameProps = {
  variant?: 'header' | 'footer'
  className?: string
}

export function BrandName({ variant = 'header', className }: BrandNameProps) {
  return (
    <span className={`${styles.brand} ${styles[variant]} ${className ?? ''}`}>
      <Image
        src="/logo.png"
        alt={BRAND.name}
        width={variant === 'footer' ? 160 : 64}
        height={variant === 'footer' ? 160 : 64}
        className={styles.logo}
        priority={variant === 'header'}
      />
    </span>
  )
}
