import { useState } from 'react'
import styles from './Task.module.css'
import { GoTrash } from 'react-icons/go'

export interface TaskType {
  id: string
  content: string
  isCompleted: boolean
  onDeleteTask?: (content: string) => void
}

interface TaskProps {
  task: TaskType
}

export function Task({ task }: TaskProps) {
  const [isChecked, setIsChecked] = useState(task.isCompleted)

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked)
  }

  return (
    <div className={styles.wrapper}>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      <p>{task.content}</p>
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
