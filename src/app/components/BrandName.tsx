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
        width={256}
        height={218}
        sizes={variant === 'footer' ? '112px' : '(max-width: 480px) 44px, (max-width: 768px) 48px, 58px'}
        className={styles.logo}
        priority={variant === 'header'}
        quality={85}
      />
    </span>
  )
}
