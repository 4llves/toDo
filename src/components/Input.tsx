import styles from './Input.module.css'

export function Input({ ...rest }) {
  return (
    <div className={styles.wrapper}>
      <input {...rest} />
    </div>
  )
}
