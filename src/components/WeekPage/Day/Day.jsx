import "./Day.css";
import { Task } from "../../UI/Task/Task";
import { EmptyWeekDay } from "../../UI/EmptyWeekDay/EmptyWeekDay";

export const Day = ({ tasks, date }) => {
  const designTasks = (arr) => {
    if (arr) {
      return arr.map((task, i) => (
        <Task
          size={"small"}
          text={task.text}
          subtasks={task.subtasks}
          comment={task.comment}
          time={task.time}
          date={date} // здесь должно быть task.date, но пока что оно всегда равно null, поэтому использую временный date
          id={task.id}
        />
      ));
    }
    return <EmptyWeekDay />;
  };

  return (
    <div className={"day"}>
      <div className={"day-title"}>
        <span>{date.dayName},</span>
        <span>{date.stringDate}</span>
      </div>
      {designTasks(tasks)}
    </div>
  );
};
