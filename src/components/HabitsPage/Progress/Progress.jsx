import './Progress.css'

export const Progress = ({habit}) => {
    return (
        <div className={'progress-block'}>
            <p>{habit.text}</p>
            <div className={'progress-bar'}>
                <div className={'progress-value'} style={{width: `${habit.stat}%`}}></div>
            </div>
            <span>{habit.stat}%</span>
        </div>
    )
}