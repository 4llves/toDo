import styles from './Task.module.css'
import { GoTrash } from 'react-icons/go'

interface TaskProps {
  content: string
  onDeleteTask?: (content: string) => void
}

export function Task({ content, ...props }: TaskProps) {
  return (
    <div className={styles.wrapper} {...props}>
      <input type="checkbox" name="" id="" />
      <p>{content}</p>
      <button title="Deletar comentário">
        <GoTrash />
      </button>
    </div>
  )
}
