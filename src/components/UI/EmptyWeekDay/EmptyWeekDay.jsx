import './EmptyWeekDay.css'
import chillGirl from '../../../img/girl-chatting-with-friends-1.png'
import img from '../../../img/Vector6.png'

export const EmptyWeekDay = () => {
    return (
        <div className={'empty-week-day'}>
            <p className={'empty-week-day-title'}>chill day</p>

            <img src={chillGirl} alt={''} className={'img-chill-girl'}/>
            <img src={img} alt={''} className={'empty-week-day-img'}/>
        </div>
    )
}