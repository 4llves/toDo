import styles from './App.module.css'
import './global.css'

import { Header } from './components/Header'
import { Task, TaskType } from './components/Task'

import { LuClipboardList } from 'react-icons/lu'

import { v4 as uuidv4 } from 'uuid'

const tasks: TaskType[] = [  
  {
    id: uuidv4(),    
    
  }
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

          <section className={styles.createdTasks}>
            {tasks.map(task => {
              return (
                <Task task={task.title} key={task.id}/>
              )
            }}
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
