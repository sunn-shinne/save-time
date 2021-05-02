import { Habit } from '../Habit/Habit'
import './TodayHabits.css'
import img from '../../img/Vector3.png'

export const TodayHabits = () => {
    return (
        <div className={'today-habits'}>
            <h1 className={'today-habits-title'}>habits tracker</h1>

            <Habit text={'read 30 minutes'}/>
            <Habit text={'drink 5 glasses of water'}/>
            <Habit text={'workout 45 minutes'}/>

            <img alt={''} src={img} className={'today-habits-img'}/>
        </div>
    )
}
