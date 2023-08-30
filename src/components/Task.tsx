import styles from './Task.module.css'
import { GoTrash } from 'react-icons/go'

export interface TaskType {
  id: string
  content: string
  onDeleteTask?: (content: string) => void
}

// interface TaskProps {
//   task: TaskType
// }

export function Task({ id, content, onDeleteTask }: TaskType) {
  return (
    <div className={styles.wrapper}>
      <input type="checkbox" name="" id="" />
      <p>{content}</p>
      <button title="Deletar comentário">
        <GoTrash />
      </button>
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
