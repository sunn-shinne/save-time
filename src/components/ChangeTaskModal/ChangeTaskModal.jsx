import "./ChangeTaskModal.css";
import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";
import { useState } from "react";
import edit from "../../img/icons8-edit.svg";
import { Button } from "../UI/Button/Button";
import TextField from "@material-ui/core/TextField";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import { Grid } from "@material-ui/core";
import cross from "../../img/крестик.svg";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#cfb9a4",
    },
  },
});

function getModalStyle() {
  return {
    top: `50%`,
    left: `50%`,
    transform: `translate(-50%, -50%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  "change-task-modal": {
    position: "absolute",
    width: 526,
    backgroundColor: "var(--main-bg-color)",
    padding: theme.spacing(2, 4, 4),
    outline: "none",
    borderRadius: "10px",
    border: "none",
  },
}));

export const ChangeTaskModal = ({ task }) => {
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);

  const [isOpen, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const [selectedText, setSelectedText] = useState(task.text);
  const [selectedComment, setSelectedComment] = useState(task.comment);
  const [selectedTime, setSelectedTime] = useState(task.time);
  const [selectedDate, setSelectedDate] = useState(task.date.initDate);

  const textChange = (event) => {
    setSelectedText(event.target.value);
  };
  const commentChange = (event) => {
    setSelectedComment(event.target.value);
  };
  const timeChange = (date) => {
    setSelectedTime(date);
  };
  const dateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div>
      <img alt="" src={edit} className={"edit-button"} onClick={handleOpen} />
      <Modal open={isOpen} onClose={handleClose} aria-labelledby="change-task">
        <div style={modalStyle} className={classes["change-task-modal"]}>
          <img
            alt={""}
            src={cross}
            className={"change-task-close"}
            onClick={() => setOpen(false)}
          />
          <h2 className={"change-task-title"}>task changing</h2>

          <form noValidate autoComplete="off" className={"change-task-form"}>
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
                      />
                    </Grid>
                  </MuiPickersUtilsProvider>
                </Grid>
              </Grid>
            </ThemeProvider>

            <div className={"button-block"}>
              <Button text={"save"} small={true} type={"submit"} />
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
};
