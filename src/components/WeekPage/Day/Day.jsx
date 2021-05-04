import './Day.css'
import { Task } from '../../UI/Task/Task'
import { EmptyWeekDay } from '../../UI/EmptyWeekDay/EmptyWeekDay'
import zoom from '../../../img/icons8-search.svg'
import { useState } from 'react'

export const Day = ({tasks, dayName, date}) => {

  const designTasks = (arr) => {

    if (arr) {
      return (
        arr.map((task, i) => <Task size={'small'} text={task.text} subtasks={task.subtasks} comment={task.comment} time={task.time}/>)
      )
    }
    return <EmptyWeekDay/>
  }

      const [isZoomed, setIsZoomed] = useState(false)

    let cl = ['day']
    if (isZoomed) {
      cl.push('zoomed')
    }

  return (
    <div className={cl.join(' ')}>

      <div className={'day-title'}><span>{dayName},</span><span>{date}</span></div>
      {designTasks(tasks)}

      {tasks && <img alt={''} src={zoom} className={'day-zoom-button'} onClick={() => setIsZoomed(true)}/>}

    </div>
  )
}