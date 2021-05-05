import { useState } from "react";
import { Overlay } from "../UI/Overlay/Overlay";
import "./AddTask.css";
import { Button } from "../UI/Button/Button";
import TextField from "@material-ui/core/TextField";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Radio from "@material-ui/core/Radio";
import DateFnsUtils from "@date-io/date-fns";
import InputAdornment from "@material-ui/core/InputAdornment";
import close from "../../img/крестик.svg";

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
  const [selectedType, setSelectedType] = useState("task");
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [subtasks, setSubtasks] = useState([]);
  const [copyOfSubTasks, setCopy] = useState(null);

  const textChange = (event) => {
    setSelectedText(event.target.value);
  };
  const commentChange = (event) => {
    setSelectedComment(event.target.value);
  };
  const typeChange = (event) => {
    if (event.target.value === "habit") {
      setCopy(subtasks);
      setSubtasks([]);
    } else {
      setSubtasks(copyOfSubTasks);
      setCopy(null);
    }

    setSelectedType(event.target.value);
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

  const renderSubtasks = () =>
    subtasks.map((sub, i) => (
      <Grid item xs={4}>
        <TextField
          color="primary"
          label={`sub ${i + 1}`}
          value={subtasks[i]}
          onChange={(e) => {
            const copy = subtasks.concat();
            copy[i] = e.target.value;
            setSubtasks(copy);
          }}
          defaultValue=""
          variant="outlined"
          margin="dense"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <img
                  alt={""}
                  src={close}
                  onClick={() => {
                    const copy = [
                      ...subtasks.concat().slice(0, i),
                      ...subtasks.concat().slice(i + 1),
                    ];
                    setSubtasks(copy);
                  }}
                  className={"close-sub"}
                />
              </InputAdornment>
            ),
          }}
        />
      </Grid>
    ));

  return (
    <>
      <Overlay onClose={() => setIsVisible(false)} isVisible={isVisible} />
      <div className={blockClasses.join(" ")}>
        <img
          alt={""}
          src={close}
          className={"change-task-close"}
          onClick={() => setIsVisible(false)}
        />
        <h2 className={"add-task-title"}>Creating</h2>

        <form noValidate autoComplete="off" className={"add-task-form"}>
          <ThemeProvider theme={theme}>
            <Grid container spacing={2} alignContent={"space-around"}>
              <Grid item xs={12}>
                <RadioGroup
                  name="type"
                  value={selectedType}
                  onChange={typeChange}
                  row
                >
                  <FormControlLabel
                    value="task"
                    control={<Radio color="primary" size="small" />}
                    label="task"
                  />
                  <FormControlLabel
                    value="habit"
                    control={<Radio color="primary" size="small" />}
                    label="habit"
                  />
                </RadioGroup>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
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

              <div classNmae={"add-sub-block"} style={{ width: "100%" }}>
                <input
                  onClick={(e) => {
                    e.preventDefault();
                    const copy = subtasks.concat();
                    copy.push("");
                    setSubtasks(copy);
                  }}
                  className={"add-sub"}
                  value={"add subtask"}
                  type={"button"}
                  disabled={selectedType === "habit"}
                />
              </div>

              {renderSubtasks()}

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
                  disabled={selectedType === "habit"}
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
                      disabled={selectedType === "habit"}
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
                      disabled={selectedType === "habit"}
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
