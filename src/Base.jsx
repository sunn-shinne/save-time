import { NavBar } from "./components/NavBar/NavBar";
import { Menu } from "./components/Menu/Menu";
import { WeekPage } from "./pages/WeekPage/WeekPage";
import { HomePage } from "./pages/HomePage/HomePage";
import { TodayPage } from "./pages/TodayPage/TodayPage";
import { Switch, Route } from "react-router-dom";
import { HabitsPage } from "./pages/HabitsPage/HabitsPage";

export const Base = () => {
  return (
    <div>
      <NavBar />
      <Menu />
      <div
        style={{
          right: "5%",
          top: "100px",
          position: "absolute",
          width: "70%",
        }}
      >
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/this-week" component={WeekPage} />
          <Route path="/today" component={TodayPage} />
          <Route path="/habits-tracker" component={HabitsPage} />
        </Switch>
      </div>
    </div>
  );
};
