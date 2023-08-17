import styles from './Header.module.css'

import LogoImg from '../assets/Logo.png'
import { Input } from './Input'

export function Header() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.image}>
        <img src={LogoImg} alt="" />
      </div>
      <Input placeholder="Adicione uma nova tarefa" />
    </div>
  )
}
