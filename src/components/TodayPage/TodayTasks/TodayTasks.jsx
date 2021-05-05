import "./TodayTasks.css";
import { Task } from "../../UI/Task/Task";
import img from "../../../img/Vector2.png";

export const TodayTasks = () => {
  const dayTasks = [
    {
      text: "go to the store",
      subtasks: ["carrot", "potato", "toothpaste"],
      comment: null,
      time: null,
      date: null, // у каждой таски еще должна быть указана дата, но пока нет бд, всё будет null, так как я рисую одни и те же таски на каждый день
    },
    {
      text: "call a colleague",
      subtasks: [],
      comment: "discuss the work plan on the project",
      time: new Date(0, 0, 0, 13, 0, 0, 0),
      date: null,
    },
    {
      text: "send report",
      subtasks: [],
      comment: null,
      time: null,
      date: null,
    },
    {
      text: "hair cutting in a barbershop",
      subtasks: [],
      comment: null,
      time: new Date(0, 0, 0, 17, 0, 0, 0),
      date: null,
    },
  ];

  const designTasks = (arr) => {
    if (arr.length > 0) {
      return arr.map((task, i) => (
        <Task
          text={task.text}
          subtasks={task.subtasks}
          comment={task.comment}
          time={task.time}
          date={new Date()}
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

      {designTasks(dayTasks)}

      <img alt={""} src={img} className={"today-tasks-img"}></img>
    </div>
  );
};
