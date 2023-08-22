import styles from './App.module.css'
import './global.css'

import { LuClipboardList } from 'react-icons/lu' // Importe o ícone corretamente

import { Header } from './components/Header'
import { Task } from './components/Task'

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <main>
          <section className={styles.amountOfTasks}>
            <div className={styles.taskCreated}>
              <p>Tarefas criadas</p>
              <span>2</span>
            </div>
            <div className={styles.taskFinished}>
              <p>Concluídas</p>
              <span>0</span>
            </div>
          </section>

          <section className={styles.createdTasks}>
            <Task content="Test1" key={1} />
            <Task content="Test2" key={1} />
          </section>

          {/* <section className={styles.emptyTasks}>
            <LuClipboardList size={56} />
            <div>
              <p>
                <strong>Você ainda não tem tarefas cadastradas</strong>
              </p>
              <p>Crie tarefas e organize seus itens a fazer</p>
            </div>
          </section> */}
        </main>
      </div>
    </div>
  )
}
