import { useState } from "react";
import "./RegisterPage.css";
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

export const RegisterPage = () => {
  const [email, setEmail] = useState(null);
  const [firstPassword, setFirstPassword] = useState(null);
  const [secondPassword, setSecondPassword] = useState(null);
  const [tuched, setTuched] = useState(false); //для валидации

  const onChangeEmail = (event) => setEmail(event.target.value);

  const onChangeFirstPassword = (event) => setFirstPassword(event.target.value);

  const onChangeSecondPassword = (event) => {
    setSecondPassword(event.target.value);
    setTuched(true);
  };

  return (
    <div className={"register-container"}>
      <div className={"register"}>
        <div className={"register-title-block"}>
          <span className={"register-title"}>savetime</span>
        </div>
        <p className={"register-register"}>Sign up</p>
        <form>
          <ThemeProvider theme={theme}>
            <Grid container spacing={2} alignContent={"space-around"}>
              <Grid item xs={12}>
                <TextField
                  required
                  type={"email"}
                  color="primary"
                  fullWidth
                  id="e-mail"
                  label="e-mail"
                  variant="outlined"
                  margin="normal"
                  value={email}
                  onChange={onChangeEmail}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  color="primary"
                  fullWidth
                  id="password-1"
                  label="password"
                  variant="outlined"
                  margin="normal"
                  type={"password"}
                  value={firstPassword}
                  onChange={onChangeFirstPassword}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  type={"password"}
                  color="primary"
                  fullWidth
                  id="password-2"
                  label="password again"
                  variant="outlined"
                  margin="normal"
                  value={secondPassword}
                  onChange={onChangeSecondPassword}
                  error={firstPassword !== secondPassword && tuched.password2}
                />
              </Grid>
            </Grid>
          </ThemeProvider>

          <div className={"button-block in"}>
            <Button
              text={"sign up"}
              size={"thin"}
              color={"primary"}
              type={"submit"}
              onClick={() => {}}
            />
          </div>
        </form>
      </div>
    </div>
  );
};
