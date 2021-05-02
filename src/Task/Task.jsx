import cs from './Task.module.scss'

export const Task = () => {
  return (
    <div className={cs.Task}>
      <p>DATE</p>
      <input type={'checkbox'}/>
      <span>
        go to the store
      </span>
    </div>
  )
}