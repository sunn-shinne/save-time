import { Base } from "./Base";
import { Switch, Route } from "react-router-dom";
import { AuthPage } from "./pages/AuthPage/AuthPage";
import { RegisterPage } from "./pages/RegisterPage/RegisterPage";
import { useDispatch, useSelector } from "react-redux";
import { useCallback, useEffect } from "react";
import { Auth, checkAuth, getHabits, getTasks } from "./store/actions/task";

const App = () => {
  const dispatch = useDispatch();
  const stableDispatch = useCallback(dispatch, []);
  const auth = useSelector((store) => store.auth);
  const { profile } = auth;

  useEffect(() => {
    stableDispatch(checkAuth());
    stableDispatch(getTasks());
    stableDispatch(getHabits());

    // debugger
  }, []);

  if (profile < 1) {
    return (
      <div>
        <Switch>
          <Route path="/register" component={RegisterPage} />
          <Route path="/" component={AuthPage} />
        </Switch>
      </div>
    );
  } else {
    return (
      <div>
        <Switch>
          <Route path="/auth" component={AuthPage} />
          <Route path="/register" component={RegisterPage} />
          <Route path="/" component={Base} />
        </Switch>
      </div>
    );
  }
};

export default App;
