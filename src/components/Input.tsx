import { Button } from './Button'
import styles from './Input.module.css'

import { BsPlusCircle } from 'react-icons/bs' // Importe o ícone corretamente

export function Input({ ...rest }) {
  return (
    <div className={styles.wrapper}>
      <input {...rest} />
      <Button title="Criar" icon={BsPlusCircle} />
    </div>
  )
}
