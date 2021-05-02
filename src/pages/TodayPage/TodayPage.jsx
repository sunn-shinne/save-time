import './TodayPage.css'
import { TodayTasks } from '../../components/TodayTasks/TodayTasks'
import { DayInfo } from '../../components/DayInfo/DayInfo'
import { TodayHabits } from '../../components/TodayHabits/TodayHabits'

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