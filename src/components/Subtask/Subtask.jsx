import './Subtask.css'

export const Subtask = ({text, size}) => {
    return (
        <div className={`subtask ${size}`}>
            <input type={'checkbox'} className={'checkbox'}/>
            <span className={'subtask-text'}>
                {text}
            </span>
        </div>
    )
}