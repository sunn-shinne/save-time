import './TodayPage.css'
import { TodayTasks } from '../../components/TodayPage/TodayTasks/TodayTasks'
import { DayInfo } from '../../components/TodayPage/DayInfo/DayInfo'
import { TodayHabits } from '../../components/TodayPage/TodayHabits/TodayHabits'

export const TodayPage = () => {
  const date = '01.04.2021'
  const day = 'sunday'
    return (
      <div className={'today-page'}>
        <TodayTasks />
        <div className={'today-page-left-side'}>
          <DayInfo date={date} day={day} />
          <TodayHabits />
        </div>
        
      </div>
    )
  }