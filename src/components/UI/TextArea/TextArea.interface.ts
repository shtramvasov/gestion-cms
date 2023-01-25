import { TextareaHTMLAttributes } from 'react'
import { IInput } from '../Input/Input.interface'

type TypeTextAreaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & IInput

export interface ITextArea extends TypeTextAreaProps {}
