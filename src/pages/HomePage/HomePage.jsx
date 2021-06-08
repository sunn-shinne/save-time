import "./HomePage.css";
import girl from "../../img/drawing-2194233-0 1.svg";
import girlBg from "../../img/Vector.png";
import {Button} from "../../components/UI/Button/Button";
import {useDispatch, useSelector} from "react-redux";
import {useCallback, useEffect} from "react";
import {getHabits, getTasks} from "../../store/actions/task";
import {addDays, dateToString} from "../../utils/dateConfig";

export const HomePage = () => {
  const tasks_state = useSelector((store) => store.tasks);
  const {tasks} = tasks_state;
  const auth_state = useSelector((store) => store.auth);
  const {profile} = auth_state;

  const day = new Date()

  const todayTasks = tasks.filter(item => {
    if (item.date == dateToString(day) && item.user === profile.username) {
      return item
    }
  })

  return (
    <div className={"home-page"}>
      <div className={"hello-block"}>
        <p className={"hello-block-title"}>
          Good day, <span>{profile.username}</span>
        </p>
        <p className={"hello-block-text"}>
          You have {todayTasks.length} tasks for today
        </p>
      </div>

      <Button to={"/today"} text={"start"} color={"primary"}/>

      <div className={"home-page-img"}>
        <img alt={""} src={girl} className={"girl"}/>
        <img alt={""} src={girlBg} className={"girl-bg"}/>
      </div>
    </div>
  );
};
