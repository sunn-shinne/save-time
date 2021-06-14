import { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Subtask.css";
import { updateTasks } from "../../../store/actions/task";

export const Subtask = ({
  text,
  size,
  checked,
  lastProps,
  isMainChecked,
  i,
}) => {
  const auth = useSelector((store) => store.auth);
  const { profile } = auth;

  const dispatch = useDispatch();
  const stableDispatch = useCallback(dispatch, []);
  console.log(checked);
  const [isChecked, setIsChecked] = useState(checked);
  const cls = ["subtask-text"];
  if (isChecked) cls.push("done");

  const changeData = (e) => {
    const newSubs = lastProps.subtasks.concat();
    newSubs[i] = { isDone: !checked, text };

    const data = {};
    data[lastProps.id] = {
      text: lastProps.text,
      subtasks: newSubs,
      comment: lastProps.comment,
      time: lastProps.time,
      date: lastProps.date.stringDate,
      user: profile.username,
      isDone: lastProps.isDone,
    };

    setIsChecked(!isChecked);
    stableDispatch(updateTasks(data));
  };

  return (
    <div className={`subtask ${size}`}>
      <input
        type={"checkbox"}
        className={"checkbox"}
        onChange={changeData}
        checked={isChecked}
      />
      <span className={cls.join(" ")}>{text}</span>
    </div>
  );
};
