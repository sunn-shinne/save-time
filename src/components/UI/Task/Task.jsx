import "./Task.css";
import { Subtask } from "../Subtask/Subtask";
import arrow from "../../../img/icons8-вниз-вправо-50.png";
import { ChangeTaskModal } from "../../ChangeTaskModal/ChangeTaskModal";
import { useDispatch, useSelector } from "react-redux";
import { useCallback, useState } from "react";
import { updateTasks } from "../../../store/actions/task";

export const Task = (props) => {
  const auth = useSelector((store) => store.auth);
  const { profile } = auth;

  const [isChecked, setIsChecked] = useState(props.isDone);
  const cls = ["task-text"];
  if (isChecked) cls.push("done");

  const dispatch = useDispatch();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const stableDispatch = useCallback(dispatch, []);

  const changeData = (e) => {
    setIsChecked(!isChecked);

    console.log(props);
    const data = {};
    data[props.id] = {
      text: props.text,
      subtasks: props.subtasks,
      comment: props.comment,
      time: props.time,
      date: props.date.stringDate,
      user: profile.username,
      isDone: !props.isDone,
    };
    stableDispatch(updateTasks(data));
  };

  return (
    <div className={`task ${props.size}`}>
      <input
        type={"checkbox"}
        className={"checkbox"}
        onClick={changeData}
        checked={isChecked}
      />
      <span className={cls.join(" ")}>{props.text}</span>
      <span className={"task-time"}>{props.time}</span>
      <ChangeTaskModal task={props} />

      {props.subtasks.length > 0 ? (
        <img alt={""} src={arrow} className={`task-arrow ${props.size}`} />
      ) : null}

      {props.subtasks.length > 0
        ? props.subtasks.map((item, index) => (
            <Subtask
              key={index}
              text={item.text}
              size={props.size}
              checked={item.isDone}
              isMainChecked={isChecked}
              lastProps={props}
              i={index}
            />
          ))
        : null}

      <p className={`task-comment ${props.size}`}>{props.comment}</p>
    </div>
  );
};
