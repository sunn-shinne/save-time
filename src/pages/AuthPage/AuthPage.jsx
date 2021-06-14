import { useCallback, useState } from "react";
import "./AuthPage.css";
import { Button } from "../../components/UI/Button/Button";
import TextField from "@material-ui/core/TextField";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import { Auth } from "../../store/actions/task";
import { useDispatch } from "react-redux";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#cfb9a4",
    },
  },
});

export const AuthPage = () => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const dispatch = useDispatch();
  const stableDispatch = useCallback(dispatch, []);

  const onChangeEmail = (event) => setEmail(event.target.value);
  const onChangePassword = (event) => setPassword(event.target.value);

  const login = (e) => {
    e.preventDefault();
    const data = {
      email,
      password,
      returnSecureToken: true,
    };
    stableDispatch(Auth(data));
  };

  return (
    <div className={"auth-container"}>
      <div className={"auth"}>
        <div className={"auth-title-block"}>
          <span className={"auth-title"}>savetime</span>
        </div>
        <p className={"auth-login"}>Login</p>
        <form>
          <ThemeProvider theme={theme}>
            <Grid container spacing={2} alignContent={"space-around"}>
              <Grid item xs={12}>
                <TextField
                  required
                  color="primary"
                  fullWidth
                  id="e-mail"
                  label="e-mail"
                  variant="outlined"
                  margin="normal"
                  value={email}
                  onChange={onChangeEmail}
                  type={email}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  color="primary"
                  fullWidth
                  id="password"
                  label="password"
                  variant="outlined"
                  margin="normal"
                  value={password}
                  onChange={onChangePassword}
                  type="password"
                />
              </Grid>
            </Grid>
          </ThemeProvider>

          <div className={"button-block in"}>
            <Button
              text={"log in"}
              size={"thin"}
              color={"primary"}
              type={"submit"}
              onClick={login}
            />
          </div>
        </form>

        <div className={"auth-or"}>
          <span>or</span>
        </div>

        <div className={"button-block up"}>
          <Button
            text={"sign up"}
            size={"thin"}
            color={"secondary"}
            to={"/register"}
            // type={"submit"}
            // onClick={() => {}}
          />
        </div>
      </div>
    </div>
  );
};
