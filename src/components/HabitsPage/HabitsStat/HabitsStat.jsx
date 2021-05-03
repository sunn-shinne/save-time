import { Progress } from '../../UI/Progress/Progress'
import { getMonthName } from '../../../utils/dateConfig'
import './HabitsStat.css'
import img from '../../../img/Vector5.png'


export const HabitsStat = ({habits}) => {
    
    const month = getMonthName(new Date()).toLowerCase()

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