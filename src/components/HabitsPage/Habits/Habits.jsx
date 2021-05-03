import './Habits.css'
import { Habit } from '../../UI/Habit/Habit'
import { CalendarButton } from '../../UI/CalendarButton/CalendarButton'
import { useState } from 'react';
import { dateToString } from '../../../utils/dateConfig'


export const Habits = ({habits}) => {

    const day = new Date()
    const dayString = dateToString(new Date())
    const [date, setDate] = useState({dayString, day});

    return (
        <div className={'habits'}>
            <div className={'habits-date'} >
                <p>{date.dayString}</p>
                <CalendarButton setDate={setDate} value={date}/>
            </div>
            <div className={'habits-list'} >
                {habits.map((habit, index) => <Habit text={habit.text} key={index}/>)}
            </div>
        </div>
    )
}