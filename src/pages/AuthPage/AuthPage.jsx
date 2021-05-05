import { useState } from "react";
import "./AuthPage.css";
import { Button } from "../../components/UI/Button/Button";
import TextField from "@material-ui/core/TextField";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";

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

  const onChangeEmail = (event) => setEmail(event.target.value);
  const onChangePassword = (event) => setPassword(event.target.value);

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
                  type={password}
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
              onClick={() => {}}
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
            type={"submit"}
            onClick={() => {}}
          />
        </div>
      </div>
    </div>
  );
};
