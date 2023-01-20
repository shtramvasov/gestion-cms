import { InputHTMLAttributes } from 'react'
import { FieldError } from 'react-hook-form'

export interface IInputProps {
	error?: FieldError | undefined
  label?: string
}

type TypeInputProps = InputHTMLAttributes<HTMLInputElement> & IInputProps

export interface IInput extends TypeInputProps {}
