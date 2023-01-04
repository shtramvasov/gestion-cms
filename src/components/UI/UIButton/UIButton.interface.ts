import { ButtonHTMLAttributes } from 'react'

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  secondary?: boolean
  rounded?: boolean
  success?: boolean
  warning?: boolean
  danger?: boolean
  accent?: boolean
  large?: boolean
}
