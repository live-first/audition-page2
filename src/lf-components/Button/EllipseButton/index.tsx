import { PropsWithChildren } from 'react'
import { cn } from '../../utils'
import '../button.css'

type ButtonProps = {
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  className?: string
  onClick?: () => void
}

export const EllipseButton = (props:PropsWithChildren<ButtonProps>) => {
  const { size = 'md', disabled = false, className, onClick, children } = props
  return (
    <button
      className={cn(`button-${size} rounded-full p-3 button flex flex-col`, className)}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
