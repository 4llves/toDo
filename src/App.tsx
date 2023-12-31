import styles from './App.module.css'
import './global.css'

import { Header } from './components/Header'
import { Task, TaskType } from './components/Task'

import { LuClipboardList } from 'react-icons/lu'

import { v4 as uuidv4 } from 'uuid'

const tasks: TaskType[] = [
  {
    id: uuidv4(),
    content: 'lalala',
    isCompleted: false,
  },
  {
    id: uuidv4(),
    content: 'lelele',
    isCompleted: true,
  },
]

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

          {tasks.length !== 0 ? (
            <section className={styles.createdTasks}>
              {tasks.map((task) => (
                <Task key={task.id} task={task} />
              ))}
            </section>
          ) : (
            <section className={styles.emptyTasks}>
              <LuClipboardList size={56} />
              <div>
                <p>
                  <strong>Você ainda não tem tarefas cadastradas</strong>
                </p>
                <p>Crie tarefas e organize seus itens a fazer</p>
              </div>
            </section>
          )}
        </main>
      </div>
    </div>
  )
}
