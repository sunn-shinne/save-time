import { Habit } from '../../UI/Habit/Habit'
import './TodayHabits.css'
import img from '../../../img/Vector3.png'
import {useDispatch, useSelector} from "react-redux";
import {useCallback, useEffect} from "react";
import {getHabits} from "../../../store/actions/task";
import {dateToString} from "../../../utils/dateConfig";

export const TodayHabits = () => {
  const auth = useSelector((store) => store.auth);
  const {profile} = auth;
  const habits_state = useSelector((store) => store.habits);
  const {habits} = habits_state;

  const userHabits = habits.filter(item => {
    if (item.user === profile.username) {
      return item
    }
  })

  const dayString = dateToString(new Date())

    return (
        <div className={'today-habits'}>
            <h1 className={'today-habits-title'}>habits tracker</h1>
            {userHabits.map((habit, index) => <Habit habitText={habit.text} habitId={habit.id}
                                                     habitStat={habit.stat} habitDate={habit.date}
                                                     dayString={dayString}
                                                     key={index}/>)}

            <img alt={''} src={img} className={'today-habits-img'}/>
        </div>
    )
}
