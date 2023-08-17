import styles from './App.module.css'
import './global.css'

import { FaClipboardList } from 'react-icons/fa' // Importe o ícone corretamente

import { Header } from './components/Header'

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <main>
          <section className={styles.amountOfTasks}>
            <div>
              <p>Tarefas criadas</p>
              <span>0</span>
            </div>
            <div>
              <p>Concluídas</p>
              <span>0</span>
            </div>
          </section>

          <section className={styles.emptyTasks}>
            <FaClipboardList size={40} />
            <strong>Você ainda não tem tarefas cadastradas</strong>
            <p>Crie tarefas e organize seus itens a fazer</p>
          </section>
        </main>
      </div>
    </div>
  )
}
