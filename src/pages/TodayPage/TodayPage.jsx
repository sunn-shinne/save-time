import './TodayPage.css'
import { Today } from '../../components/Today/Today'
import { DayInfo } from '../../components/DayInfo/DayInfo'
import { HabitsTracker } from '../../components/HabitTracker/HabitsTracker'

export const TodayPage = () => {
  const date = '01.04.2021'
  const day = 'sunday'
    return (
      <div className={'today-page'}>
        <Today />
        <div className={'today-page-left-side'}>
          <DayInfo date={date} day={day} />
          <HabitsTracker />
        </div>
        
      </div>
    )
  }