import './ZoomedDay.css'
import close from '../../../img/крестик.svg'
import { Task } from '../../UI/Task/Task'
import { EmptyWeekDay } from '../../UI/EmptyWeekDay/EmptyWeekDay'
import { Overlay } from '../Overlay/Overlay'

export const ZoomedDay = ({tasks, dayName, date, isZoomed, setIsZoomed}) => {

    const designTasks = (arr) => {

        if (arr) {
          return (
            arr.map((task, i) => <Task size={'small'} text={task.text} subtasks={task.subtasks} comment={task.comment} time={task.time}/>)
          )
        }
        return <EmptyWeekDay/>
    }

    return (
        <div className={'zoomed-day'}>

        <div className={'zoomed-day'}><span>{dayName},</span><span>{date}</span></div>
        {designTasks(tasks)}
        
        {tasks && <img alt={''} src={close} className={'zoomed-day-close-button'} onClick={() => setIsZoomed(false)}/>}
        
        <Overlay isVisible={isZoomed} onClose={setIsZoomed}/>
      </div>
    )
}