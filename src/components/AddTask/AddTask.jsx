import { useState } from "react";
import { Overlay } from "../UI/Overlay/Overlay";
import "./AddTask.css";
import { Button } from "../UI/Button/Button";
import TextField from "@material-ui/core/TextField";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Radio from "@material-ui/core/Radio";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import { Grid } from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#cfb9a4",
    },
  },
});

export const AddTask = ({ isVisible, setIsVisible }) => {
  const [selectedText, setSelectedText] = useState(null);
  const [selectedComment, setSelectedComment] = useState(null);
  const [selectedRadio, setSelectedRadio] = useState("task");
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const textChange = (event) => {
    setSelectedText(event.target.value);
  };
  const commentChange = (event) => {
    setSelectedComment(event.target.value);
  };
  const radioChange = (event) => {
    setSelectedRadio(event.target.value);
  };
  const timeChange = (date) => {
    setSelectedTime(date);
  };
  const dateChange = (date) => {
    setSelectedDate(date);
  };

  const blockClasses = ["add-task"];
  if (isVisible) {
    blockClasses.push("visible");
  }

  return (
    <>
      <Overlay onClose={() => setIsVisible(false)} isVisible={isVisible} />
      <div className={blockClasses.join(" ")}>
        <h2 className={"add-task-title"}>Creating</h2>

        <form noValidate autoComplete="off" className={"add-task-form"}>
          <ThemeProvider theme={theme}>
            <Grid container spacing={2} alignContent={"space-around"}>
              <Grid item xs={12}>
                <TextField
                  color="primary"
                  fullWidth
                  id="task-text"
                  label="task text"
                  variant="outlined"
                  margin="dense"
                  value={selectedText}
                  onChange={textChange}
                />
              </Grid>

              <Grid item xs={12}>
                <RadioGroup>
                  <FormLabel component="legend">Type</FormLabel>
                  <FormControlLabel
                    value="best"
                    control={
                      <Radio
                        checked={selectedRadio === "task"}
                        onChange={radioChange}
                        value="task"
                        color="primary"
                        name="task"
                        size="small"
                      />
                    }
                    label="task"
                  />

                  <FormControlLabel
                    value="worst"
                    control={
                      <Radio
                        checked={selectedRadio === "habit"}
                        onChange={radioChange}
                        value="habit"
                        color="primary"
                        name="habit"
                        size="small"
                      />
                    }
                    label="habit"
                  />
                </RadioGroup>
              </Grid>

              <Grid item xs={12}>
                <TextField
                  color="primary"
                  fullWidth
                  id="comment"
                  label="comment"
                  value={selectedComment}
                  onChange={commentChange}
                  multiline
                  rows={3}
                  defaultValue=""
                  variant="outlined"
                  margin="dense"
                  disabled={selectedRadio === "habit"}
                />
              </Grid>

              <Grid item xs={12}>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <Grid container justify="space-around">
                    <KeyboardDatePicker
                      margin="dense"
                      id="date"
                      label="select date"
                      format="dd/MM/yyyy"
                      value={selectedDate}
                      onChange={dateChange}
                      KeyboardButtonProps={{
                        "aria-label": "select date",
                      }}
                      disabled={selectedRadio === "habit"}
                    />
                    <KeyboardTimePicker
                      margin="dense"
                      id="time"
                      label="select time"
                      value={selectedTime}
                      onChange={timeChange}
                      KeyboardButtonProps={{
                        "aria-label": "select time",
                      }}
                      disabled={selectedRadio === "habit"}
                    />
                  </Grid>
                </MuiPickersUtilsProvider>
              </Grid>
            </Grid>
          </ThemeProvider>

          <div className={"button-block"}>
            <Button
              text={"creat"}
              type={"submit"}
              size={"thin"}
              color={"primary"}
              onClick={() => {}}
            />
          </div>
        </form>
      </div>
    </>
  );
};
