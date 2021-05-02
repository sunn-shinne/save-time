import cs from './Day.module.css'

export const Day = () => {
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