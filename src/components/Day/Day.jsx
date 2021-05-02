import './Day.css'
import { Task } from '../Task/Task'

export const Day = (props) => {
  return (
    <div className={'day'}>
      <div className={'day-title'}><span>{props.day}</span>,<span> {props.date}</span></div>
      <Task size={'small'} text={'go to the store'} subtasks={['carrot', 'potato', 'toothpaste']}/>
      <Task size={'small'} text={'call a colleague'} comment={'discuss the work plan on the project'} time={'13:00'}/>
      <Task size={'small'} text={'send report'}/>
      <Task size={'small'} text={'hair cutting in a barbershop'} time={'18:00'}/>

    </div>
  )
}