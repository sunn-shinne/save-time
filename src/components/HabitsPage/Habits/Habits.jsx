import "./Habits.css";
import { Habit } from "../../UI/Habit/Habit";
import { CalendarButton } from "../../UI/CalendarButton/CalendarButton";
import { useState } from "react";
import { addDays, dateToString } from "../../../utils/dateConfig";
import { Arrows } from "../../UI/Arrows/Arrows";

export const Habits = ({ habits }) => {
  const day = new Date();
  const dayString = dateToString(new Date());
  const [date, setDate] = useState({ dayString, day });

  const setNaxtDate = () => {
    const res = {
      day: addDays(date.day, 1),
      dayString: dateToString(addDays(date.day, 1)),
    };
    setDate(res);
  };

  const setPrevDate = () => {
    const res = {
      dayString: dateToString(addDays(date.day, -1)),
      day: addDays(date.day, -1),
    };
    setDate(res);
  };

  return (
    <div className={"habits"}>
      <div className={"habits-date"}>
        <p>{date.dayString}</p>
        <CalendarButton setDate={setDate} value={date} />
      </div>
      <div className={"habits-list"}>
        {habits.map((habit, index) => (
          <Habit
            habitText={habit.text}
            habitId={habit.id}
            habitStat={habit.stat}
            habitDate={habit.date}
            dayString={date.dayString}
            key={index}
          />
        ))}
      </div>

      <Arrows
        onLeftClick={setPrevDate}
        onRightClick={setNaxtDate}
        toTopSpace={"0 20px"}
        marginSpace={60}
      />
    </div>
  );
};
