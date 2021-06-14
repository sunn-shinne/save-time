import "./TodayTasks.css";
import { Task } from "../../UI/Task/Task";
import img from "../../../img/Vector2.png";
import { useSelector } from "react-redux";
import { dateToString } from "../../../utils/dateConfig";

export const TodayTasks = () => {
  const tasks_state = useSelector((store) => store.tasks);
  const { tasks } = tasks_state;
  const auth = useSelector((store) => store.auth);
  const { profile } = auth;
  const day = new Date();

  const todayTasks = tasks.filter((item) => {
    if (item.date == dateToString(day) && item.user === profile.username) {
      return item;
    }
  });

  const designTasks = (arr) => {
    const initDate = new Date();
    const stringDate = dateToString(initDate);

    if (arr.length > 0) {
      return arr.map((task, i) => (
        <Task
          text={task.text}
          subtasks={task.subtasks}
          comment={task.comment}
          time={task.time}
          date={{ initDate, stringDate }}
          id={task.id}
          isDone={task.isDone}
        />
      ));
    }
    return (
      <div className={"empty-today"}>
        <p className={"empty-today-title"}>chill day</p>
      </div>
    );
  };

  return (
    <div className={"today-tasks"}>
      <p className={"today-tasks-title"}>my tasks</p>

      {designTasks(todayTasks)}

      <img alt={""} src={img} className={"today-tasks-img"}></img>
    </div>
  );
};
