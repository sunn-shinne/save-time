import "./Task.css";
import { Subtask } from "../Subtask/Subtask";
import arrow from "../../../img/icons8-вниз-вправо-50.png";
import { ChangeTaskModal } from "../../ChangeTaskModal/ChangeTaskModal";
import { timeToString } from "../../../utils/dateConfig.js";

export const Task = (props) => {
  return (
    <div className={`task ${props.size}`}>
      <input type={"checkbox"} className={"checkbox"} />
      <span className={"task-text"}>
        {/* Вот в этой строке необходимо добавить стиль done, что бы перечеркнуть выполненную задачу*/}
        {props.text}
      </span>
      <span className={"task-time"}>{timeToString(props.time)}</span>
      <ChangeTaskModal task={props} />

      {props.subtasks.length > 0 ? (
        <img alt={""} src={arrow} className={`task-arrow ${props.size}`} />
      ) : null}

      {props.subtasks.length > 0
        ? props.subtasks.map((item) => (
            <Subtask text={item} size={props.size} />
          ))
        : null}

      <p className={`task-comment ${props.size}`}>{props.comment}</p>
    </div>
  );
};
