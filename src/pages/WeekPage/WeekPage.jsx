import { Day } from '../../components/WeekPage/Day/Day';
import './WeekPage.css'
import calendar from '../../img/icons8-calendar.svg'
import girl from '../../img/girl-checking-phone-during-free-time-1.svg'

export const WeekPage = () => {
  const week = [
    {day: 'monday', date: '01.05'}, 
    {day: 'tuesday', date: '02.05'}, 
    {day: 'wednesd', date: '03.05'}, 
    {day: 'thursday', date: '04.05'},
    {day: 'friday', date: '05.05'},
    {day: 'saturday', date: '06.05'},
    {day: 'sunday', date: '07.05'}]
  return (
    <>
      <div className={'week-header'}>
        <span>01.05 - 07.05</span>
        <img alt={''} src={calendar}/>
      </div>
      <div className={'week'}>
        {week.map(({date, day}) => <Day date={date} day={day}/>)}
      </div>

      <img alt={''} src={girl} className={'week-img'}/>
    </>

  )
}