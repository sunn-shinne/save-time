import './HabitsPage.css'
import { Habits } from '../../components/HabitsPage/Habits/Habits'
import { HabitsStat } from '../../components/HabitsPage/HabitsStat/HabitsStat'

export const HabitsPage = () => {
  const habits = [
    {text: 'read 30 minutes', stat: 12}, 
    {text: 'drink 5 glasses of water', stat: 72}, 
    {text: 'workout 45 minutes', stat: 35}]
    return (
      <div className={'habits-page'}>
        <Habits  habits={habits} />
        <HabitsStat habits={habits} />
      </div>
    )
  }