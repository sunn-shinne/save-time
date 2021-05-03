import './Task.css'
import { Subtask } from '../Subtask/Subtask'
import arrow from '../../img/icons8-вниз-вправо-50.png'

export const Task = (props) => {
    return (
        <div className={`task ${props.size}`}>
            <input type={'checkbox'} className={'checkbox'}/>
            <span className={'task-text'}>   {/* Вот в этой строке необходимо добавить стиль done, что бы перечеркнуть выполненную задачу*/}
                {props.text}
            </span>
            <span className={'task-time'}>{props.time}</span>

            {(props.subtasks !== undefined)
            ? <img alt={''} src={arrow} className={`task-arrow ${props.size}`}/>
            : null}

            {(props.subtasks !== undefined)
            ? props.subtasks.map(item => <Subtask text={item}  size={props.size}/>)
            : null}

            <p className={`task-comment ${props.size}`}>{props.comment}</p>
        </div>
    )
} 