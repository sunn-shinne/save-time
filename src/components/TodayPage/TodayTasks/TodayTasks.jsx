import './TodayTasks.css'
import { Task } from '../../UI/Task/Task'
import img from '../../../img/Vector2.png'

export const TodayTasks = () => {
  return (
    <div className={'today-tasks'}>
      <p className={'today-tasks-title'}>my tasks</p>
      <Task text={'go to the store'} subtasks={['carrot', 'potato', 'toothpaste']}/>
      <Task text={'call a colleague'} comment={'discuss the work plan on the project'} time={'13:00'}/>
      <Task text={'send report'}/>
      <Task text={'send money to parents'}/>
      <Task text={'hair cutting in a barbershop'} time={'18:00'}/>

      <img alt={''} src={img} className={'today-tasks-img'}></img>
    </div>
  )
}