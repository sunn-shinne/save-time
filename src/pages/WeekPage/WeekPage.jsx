import { Day } from "../../components/WeekPage/Day/Day";
import "./WeekPage.css";
import { CalendarButton } from "../../components/UI/CalendarButton/CalendarButton";
import { useState } from "react";
import { dateToString, addDays, getDayName } from "../../utils/dateConfig";
import girl from "../../img/girl-checking-phone-during-free-time-1.svg";
import { Arrows } from "../../components/UI/Arrows/Arrows";
import { useSelector } from "react-redux";
import { Loader } from "../../components/UI/Loader/Loader";

export const WeekPage = () => {
  const tasks_state = useSelector((store) => store.tasks);
  const { tasks, loading } = tasks_state;
  const auth = useSelector((store) => store.auth);
  const { profile } = auth;

  const day = new Date();
  const dayString = dateToString(new Date());
  const [date, setDate] = useState({ dayString, day });

  const currentWeekDates = [];

  for (let i = 0; i < 7; i++) {
    const todayTasks = tasks.filter((item) => {
      if (
        item.date == dateToString(addDays(date.day, i)) &&
        item.user === profile.username
      ) {
        return item;
      }
    });

    currentWeekDates.push({
      initDate: addDays(date.day, i),
      stringDate: dateToString(addDays(date.day, i)),
      dayName: getDayName(addDays(date.day, i)),
      todayTasks,
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

  if (loading) {
    return <Loader />;
  } else {
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
          {currentWeekDates.map((item, index) => {
            if (item.todayTasks.length === 0) {
              return <Day tasks={null} date={item} />;
            }
            return <Day tasks={item.todayTasks} date={item} />;
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
  }
};
