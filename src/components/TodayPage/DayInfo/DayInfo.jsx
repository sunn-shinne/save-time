import './DayInfo.css'
import img from '../../../img/Vector4.png'

export const DayInfo = ({date, day}) => {
    return (
        <div className={'day-info'}>
            <span>today is</span>
            <span>{day}</span>
            <span>{date}</span>
            <img alt={''} src={img} className={'img'}/>
        </div>
    )
}