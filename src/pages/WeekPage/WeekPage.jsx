import { Day } from '../../components/WeekPage/Day/Day';
import './WeekPage.css'
import { CalendarButton } from '../../components/UI/CalendarButton/CalendarButton'
import { useState } from 'react';
import { dateToString, addDays } from '../../utils/dateConfig'
import girl from '../../img/girl-checking-phone-during-free-time-1.svg'
import { Arrows } from '../../components/UI/Arrows/Arrows'

export const WeekPage = () => {

  const daysName =["sunday", "monday", "tuesday", "wednesd", "thursday", "friday", "saturday"]

  const day = new Date()
  const dayString = dateToString(new Date())
  const [date, setDate] = useState({dayString, day});

  const currentWeek  = []

  for (let i = 0; i < 7; i++) {
    currentWeek.push({
      initDate: addDays(date.day, i),
      stringDate: dateToString(addDays(date.day, i)),
      dayName: daysName[addDays(date.day, i).getDay()],
    })
  }

  const setNaxtDate = () => {
    const res = {
        day: addDays(date.day, 7),
        dayString: dateToString(addDays(date.day, 7))
    }
    setDate(res)
  }   

  const setPrevDate = () => {
      const res = {
          dayString: dateToString(addDays(date.day, -7)),
          day: addDays(date.day, -7),
      }
      setDate(res)
  }

  return (
    <>
      <div className={'week-header'}>
        <span>{currentWeek[0].stringDate} - {currentWeek[6].stringDate}</span>

        <div className={'calendar-wrapper'}>
          <CalendarButton setDate={setDate} value={date}/>
        </div>

      </div>
      <div className={'week'}>
        {currentWeek.map(({stringDate, dayName}) => <Day date={stringDate} day={dayName}/>)}
      </div>

      <img alt={''} src={girl} className={'week-img'}/>

      <Arrows toTopSpace={'40%'} marginSpace={'0 130px'}  onLeftClick={setPrevDate} onRightClick={setNaxtDate} />
    </>

  )
}