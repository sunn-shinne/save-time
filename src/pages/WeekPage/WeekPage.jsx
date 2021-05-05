import { Day } from "../../components/WeekPage/Day/Day";
import "./WeekPage.css";
import { CalendarButton } from "../../components/UI/CalendarButton/CalendarButton";
import { useState } from "react";
import { dateToString, addDays, getDayName } from "../../utils/dateConfig";
import girl from "../../img/girl-checking-phone-during-free-time-1.svg";
import { Arrows } from "../../components/UI/Arrows/Arrows";

export const WeekPage = () => {
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

  const day = new Date();
  const dayString = dateToString(new Date());
  const [date, setDate] = useState({ dayString, day });

  const currentWeekDates = [];

  // создаю массив из дат в формате {initDate: дата, stringDate: дата приведенная к красивому формату, dayName: строковое название дня}
  // считаю всё от начальной даты указанной в стейте (по умолчанию это сегодняшняя дата)
  for (let i = 0; i < 7; i++) {
    currentWeekDates.push({
      initDate: addDays(date.day, i),
      stringDate: dateToString(addDays(date.day, i)),
      dayName: getDayName(addDays(date.day, i)),
    });
  }

  // функции для передистывания при нажатии на стрелочки. меняют дату в стейте
  const setNaxtDate = () => {
    const res = {
      day: addDays(date.day, 7),
      dayString: dateToString(addDays(date.day, 7)),
    };
    setDate(res);
  };

  const setPrevDate = () => {
    const res = {
      dayString: dateToString(addDays(date.day, -7)),
      day: addDays(date.day, -7),
    };
    setDate(res);
  };

  return (
    <>
      <div className={"week-header"}>
        <span>
          {currentWeekDates[0].stringDate} - {currentWeekDates[6].stringDate}
        </span>

        <div className={"calendar-wrapper"}>
          <CalendarButton setDate={setDate} value={date} />
        </div>
      </div>
      <div className={"week"}>
        {/* отрисовываю дни недели */}
        {currentWeekDates.map((date, index) => {
          // Здесь я, для примера, один раз НЕ отправляю в компонент таски, что бы показать как это будет выглядеть
          if (index === 3) {
            return <Day tasks={null} date={date} />;
          }
          return <Day tasks={dayTasks} date={date} />;
        })}
      </div>

      <img alt={""} src={girl} className={"week-img"} />

      <Arrows
        toTopSpace={"40%"}
        marginSpace={"0 130px"}
        onLeftClick={setPrevDate}
        onRightClick={setNaxtDate}
      />
    </>
  );
};
