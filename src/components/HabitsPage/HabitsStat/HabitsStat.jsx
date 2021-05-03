import { Progress } from '../Progress/Progress'
import './HabitsStat.css'
import img from '../../img/Vector5.png'


export const HabitsStat = ({habits}) => {
    const month = 'may'


    return (
        <div className={'habits-stat'}>
            <p className={'habits-stat-month'}>{month}</p>

            <div className={'habits-stat-progress'}>
                {habits.map((habit, index) => <Progress habit={habit} key={index}/>)}
            </div>

            <img alt={''} src={img} />
        </div>
    )
}