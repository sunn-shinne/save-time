import "./TodayPage.css";
import { TodayTasks } from "../../components/TodayPage/TodayTasks/TodayTasks";
import { DayInfo } from "../../components/TodayPage/DayInfo/DayInfo";
import { TodayHabits } from "../../components/TodayPage/TodayHabits/TodayHabits";
import { dateToLongString, getDayName } from "../../utils/dateConfig";

export const TodayPage = () => {
  const today = new Date();
  const date = dateToLongString(today);
  const day = getDayName(today);
  return (
    <div className={"today-page"}>
      <TodayTasks />

      <div className={"today-page-left-side"}>
        <DayInfo date={date} day={day} />
        <TodayHabits />
      </div>
    </div>
  );
};
