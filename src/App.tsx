import styles from './App.module.css'
import './global.css'

import LogoImg from './assets/Logo.png'
import { Input } from './components/Input'

export function App() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.image}>
        <img src={LogoImg} alt="" />
      </div>
      <main>
        <Input />
      </main>
    </div>
  )
}
