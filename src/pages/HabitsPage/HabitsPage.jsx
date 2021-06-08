import './HabitsPage.css'
import {Habits} from '../../components/HabitsPage/Habits/Habits'
import {HabitsStat} from '../../components/HabitsPage/HabitsStat/HabitsStat'
import {useDispatch, useSelector} from "react-redux";
import {useCallback, useEffect} from "react";
import {getHabits, getTasks} from "../../store/actions/task";

export const HabitsPage = () => {
  const habits_state = useSelector((store) => store.habits);
  const {habits} = habits_state;
  const auth = useSelector((store) => store.auth);
  const {profile} = auth;

  const userHabits = habits.filter(item => {
    if (item.user === profile.username) {
      return item
    }
  })


  return (
    <div className={'habits-page'}>

      <Habits habits={userHabits}/>
      <HabitsStat habits={userHabits}/>
    </div>
  )
}