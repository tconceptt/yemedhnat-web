'use client'

import { motion } from 'framer-motion'
import { LucideIcon } from 'lucide-react'

interface ButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  icon?: LucideIcon
  href?: string
  onClick?: (e?: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void
  className?: string
  type?: 'button' | 'submit' | 'reset'
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  icon: Icon,
  href,
  onClick,
  className = '',
  type = 'button',
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5'

  const variants = {
    primary: 'bg-gradient-to-br from-primary to-primary-dark hover:from-primary-dark hover:to-primary text-white shadow-lg hover:shadow-xl',
    secondary: 'bg-gradient-to-br from-accent-teal to-accent-teal/80 hover:from-accent-teal/90 hover:to-accent-teal text-white shadow-lg hover:shadow-xl',
    outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-white shadow-md hover:shadow-lg',
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  const Component = href ? 'a' : motion.button
  const props = href ? { href } : { onClick, type, whileHover: { scale: 1.02 }, whileTap: { scale: 0.98 } }

  return (
    <Component
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
      {Icon && <Icon className="w-5 h-5" />}
    </Component>
  )
}
