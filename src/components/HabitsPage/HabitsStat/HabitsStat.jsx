import { Progress } from "../../UI/Progress/Progress";
import { getMonthName } from "../../../utils/dateConfig";
import "./HabitsStat.css";
import img from "../../../img/Vector5.png";
import { useState } from "react";

export const HabitsStat = ({ habits }) => {
  const today = new Date();

  const currentMonth = {
    fullDate: today,
    name: getMonthName(today).toLowerCase(),
    number: today.getMonth(),
  };
  const [month, setMonth] = useState(currentMonth);

  return (
    <div className={"habits-stat"}>
      <div className={"habits-stat-block"}>
        <p className={"habits-stat-month"}>{month.name}</p>
      </div>

      <div className={"habits-stat-progress"}>
        {habits.map((habit, index) => (
          <Progress habit={habit} key={index} />
        ))}
      </div>

      <img alt={""} src={img} className={"img"} />
    </div>
  );
};
