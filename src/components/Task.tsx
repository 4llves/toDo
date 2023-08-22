import styles from './Task.module.css'

interface TaskProps {
  content: string
  onDeleteTask?: (content: string) => void
}

export function Task({ content, ...props }: TaskProps) {
  return (
    <div className={styles.wrapper} {...props}>
      <input type="checkbox" name="" id="" />
      <p>{content}</p>
      <button></button>
    </div>
  )
}
