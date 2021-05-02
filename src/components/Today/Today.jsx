import './Today.css'
import { Task } from '../Task/Task'
import img from '../../img/Vector2.png'

export const Today = () => {
  return (
    <div className={'today'}>
      <p className={'today-title'}>my tasks</p>
      <Task text={'go to the store'} subtasks={['carrot', 'potato', 'toothpaste']}/>
      <Task text={'call a colleague'} comment={'discuss the work plan on the project'} time={'13:00'}/>
      <Task text={'send report'}/>
      <Task text={'send money to parents'}/>
      <Task text={'hair cutting in a barbershop'} time={'18:00'}/>

      <img alt={''} src={img} className={'today-img'}></img>
    </div>
  )
}