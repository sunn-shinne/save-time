import { Progress } from '../../UI/Progress/Progress'
import { getMonthName, addMonths } from '../../../utils/dateConfig'
import './HabitsStat.css'
import img from '../../../img/Vector5.png'
import { useState } from 'react';
import { Arrows } from '../../UI/Arrows/Arrows'


export const HabitsStat = ({habits}) => {

    const today = new Date()

    const currentMonth = {
        fullDate: today,
        name: getMonthName(today).toLowerCase(),
        number: today.getMonth(),
    }
    const [month, setMonth] = useState(currentMonth)
    
    

    const setNaxtDate = () => {
        const res = {
            fullDate: addMonths(month.fullDate, 1),
            name: getMonthName(addMonths(month.fullDate, 1)).toLowerCase(),
        }
        setMonth(res)
    }   

    const setPrevDate = () => {
        const res = {
            fullDate: addMonths(month.fullDate, -1),
            name: getMonthName(addMonths(month.fullDate, -1)).toLowerCase(),
        }
        setMonth(res)
    }

    return (
        <div className={'habits-stat'}>
            <div className={'habits-stat-block'}>
                <p className={'habits-stat-month'}>{month.name}</p>
                <Arrows toTopSpace={15} marginSpace={'0 150px'}  onLeftClick={setPrevDate} onRightClick={setNaxtDate} />
            </div>
            

            <div className={'habits-stat-progress'}>
                {habits.map((habit, index) => <Progress habit={habit} key={index}/>)}
            </div>

            <img alt={''} src={img} className={'img'}/>
            
            
        </div>
    )
}