import './Habit.css'

export const Habit = ({text, time}) => {
    return (
        <div className={'habit'}>
        <input type={'checkbox'} className={'checkbox'}/>
        <span className={'habit-text'}>   {/* Вот в этой строке необходимо добавить стиль done, что бы перечеркнуть выполненную привычку*/}
            {text}
        </span>
        <span className={'habit-time'}>{time}</span>
    </div>
    )
}