import { useState } from "react";
import { useHistory } from "react-router-dom";
import "./RegisterPage.css";
import { Button } from "../../components/UI/Button/Button";
import TextField from "@material-ui/core/TextField";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import axios from "axios";
import "firebase/auth";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#cfb9a4",
    },
  },
});

export const RegisterPage = () => {
  const history = useHistory();

  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  // const [secondPassword, setSecondPassword] = useState(null);
  // const [tuched, setTuched] = useState(false); //для валидации

  const onChangeName = (event) => setName(event.target.value);
  const onChangeEmail = (event) => setEmail(event.target.value);
  const onChangePassword = (event) => setPassword(event.target.value);

  const registerHandler = (event) => {
    event.preventDefault();
    if (!name || !email || !password) {
      alert("Ошибка! Проверьте введенные данные");
      return;
    }
    const data = {
      username: name,
      email,
      password,
    };
    axios.post(
      "https://save-time-7d3ab-default-rtdb.europe-west1.firebasedatabase.app/user.json",
      data
    );
    history.push("/");
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
                  color="primary"
                  fullWidth
                  id="name"
                  label="name"
                  variant="outlined"
                  margin="normal"
                  type={"text"}
                  value={name}
                  onChange={onChangeName}
                />
              </Grid>
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
                  id="password"
                  label="password"
                  variant="outlined"
                  margin="normal"
                  type={"password"}
                  value={password}
                  onChange={onChangePassword}
                />
              </Grid>

              {/* <Grid item xs={12}>
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
              </Grid> */}
            </Grid>
          </ThemeProvider>

          <div className={"button-block in"}>
            <Button
              text={"sign up"}
              size={"thin"}
              color={"primary"}
              type={"submit"}
              onClick={registerHandler}
            />
          </div>
        </form>
      </div>
    </div>
  );
};
