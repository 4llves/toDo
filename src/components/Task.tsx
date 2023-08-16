import styles from './Input.module.css'

export function Task({ ...props }) {
  return (
    <div className={styles.wrapper} {...props}>
      <input type="checkbox" name="" id="" />
      <p>lalala</p>
      <button></button>
    </div>
  )
}
