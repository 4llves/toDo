import styles from './Task.module.css'
import { GoTrash } from 'react-icons/go'

interface TaskType {
  id: string
  content: string
  onDeleteTask?: (content: string) => void
}

interface TaskProps {
  task: TaskType
}

export function Task({ task }: TaskProps) {
  return (
    <div className={styles.wrapper}>
      {task.map((line, index) => (
        <div key={index}>
          <input type="checkbox" name="" id="" />
          <p>{line.content}</p>
          <button title="Deletar comentário">
            <GoTrash />
          </button>
        </div>
      ))}
    </div>
  )
}

/* <div className={styles.wrapper} {...props}>
      <input type="checkbox" name="" id="" />
      <p>{task.title}</p>
      <button title="Deletar comentário">
        <GoTrash />
      </button>
    </div> */
