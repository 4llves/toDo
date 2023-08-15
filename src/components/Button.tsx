import { ReactNode } from 'react'
import styles from './Button.module.css'
import { IconType } from 'react-icons'

interface ButtonProps {
  icon: IconType
  title: string
  children?: ReactNode
  onClick?: () => void
}

export function Button({
  icon: Icon,
  title,
  children,
  onClick,
  ...props
}: ButtonProps) {
  return (
    <button
      className={styles.wrapper}
      type="button"
      onClick={onClick}
      {...props}
    >
      {title} {children} <Icon />
    </button>
  )
}
