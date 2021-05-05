import "./Habit.css";
import { ChangeHabitModal } from "../../ChangeHabitModal/ChangeHabitModal";

export const Habit = (habit) => {
  return (
    <div className={"habit"}>
      <input type={"checkbox"} className={"checkbox"} />
      <span className={"habit-text"}>
        {" "}
        {/* Вот в этой строке необходимо добавить стиль done, что бы перечеркнуть выполненную привычку*/}
        {habit.text}
      </span>
      <ChangeHabitModal habitText={habit.text} />
      {/* <span className={"habit-time"}>{habit.time}</span> */}
    </div>
  );
};
