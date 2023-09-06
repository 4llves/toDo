import { FormEvent, useState } from 'react'
import styles from './Task.module.css'
import { GoTrash } from 'react-icons/go'
import { BsPlusCircle } from 'react-icons/bs'
import { Button } from './Button'

export interface TaskType {
  id: string
  content: string
  isCompleted: boolean
  onDeleteTask?: (taskId: string) => void
}

interface TaskProps {
  task: TaskType
}

export function Task({ task }: TaskProps) {
  const [isChecked, setIsChecked] = useState(task.isCompleted)

  const [tasks, setTasks] = useState(['Teste.'])
  const [newTask, setNewTask] = useState('')

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault()

    setTasks([...tasks, newTask])
    setNewTask('')
  }

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked)
  }

  const handleDeleteTask = () => {
    if (task.onDeleteTask) {
      task.onDeleteTask(task.id)
    }
  }

  return (
    <div className={styles.wrapper}>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      <p>{task.content}</p>
      <button title="Deletar comentário" onClick={handleDeleteTask}>
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
