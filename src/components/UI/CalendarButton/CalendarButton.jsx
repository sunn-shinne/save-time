import './CalendarButton.css'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useState } from 'react';
import calendar from '../../img/icons8-calendar.svg'
import { dateToString } from '../../utils/dateToString'

export const CalendarButton = ({setDate, value}) => {

    const [isCalendarOpen, setCalendar] = useState(false)

    return (
        <>
            <img alt={''} src={calendar} onClick={() => setCalendar(!isCalendarOpen)}/>

            {isCalendarOpen 
            ?  <div className={'calendar'}>
                    <Calendar
                        onChange={value => {
                            setDate({day: value, dayString: dateToString(value)})
                            setCalendar(!isCalendarOpen)
                        }}
                        value={value.day}
                    />
                </div>
        : null}

        { isCalendarOpen && <div className={'dark-bg'} onClick={() => setCalendar(!isCalendarOpen)}></div>}
        </>

        
    )
}