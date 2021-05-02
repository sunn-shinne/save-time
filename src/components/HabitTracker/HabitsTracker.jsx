import { Habit } from '../Habit/Habit'
import './HabitsTracker.css'
import img from '../../img/Vector3.png'

export const HabitsTracker = () => {
    return (
        <div className={'habits-tracker'}>
            <h1 className={'habits-tracker-title'}>habits tracker</h1>

            <Habit text={'read 30 minutes'}/>
            <Habit text={'drink 5 glasses of water'}/>
            <Habit text={'workout 45 minutes'}/>

            <img alt={''} src={img} className={'habits-tracker-img'}/>
        </div>
    )
}
