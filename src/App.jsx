import { Base } from "./Base";
import { Switch, Route } from "react-router-dom";
import { AuthPage } from "./pages/AuthPage/AuthPage";
import { RegisterPage } from "./pages/RegisterPage/RegisterPage";

const App = () => {
  return (
    <div>
      <Switch>
        <Route path="/auth" component={AuthPage} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/" component={Base} />
      </Switch>
    </div>
  );
};

export default App;
