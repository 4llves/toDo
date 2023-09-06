import { Button } from './Button'
import styles from './Input.module.css'

import { BsPlusCircle } from 'react-icons/bs' // Importe o ícone corretamente

interface InputProps {
  onCreateNewTask: () => void
}

export function Input({ onCreateNewTask, ...props }: InputProps) {
  return (
    <div className={styles.wrapper}>
      <input {...props} />
      <Button title="Criar" icon={BsPlusCircle} onClick={onCreateNewTask} />
    </div>
  )
}
