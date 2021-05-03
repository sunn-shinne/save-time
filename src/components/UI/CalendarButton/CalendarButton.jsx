import './CalendarButton.css'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useState } from 'react';
import calendar from '../../../img/icons8-calendar.svg'
import { dateToString } from '../../../utils/dateConfig'
import { Overlay } from '../Overlay/Overlay'

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

        <Overlay onClose={() => setCalendar(false)} isVisible={isCalendarOpen} />
        </>

        
    )
}