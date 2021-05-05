import "./ChangeHabitModal.css";
import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";
import { useState } from "react";
import edit from "../../img/icons8-edit.svg";
import { Button } from "../UI/Button/Button";
import TextField from "@material-ui/core/TextField";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
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
  "change-habit-modal": {
    position: "absolute",
    width: 526,
    backgroundColor: "var(--main-bg-color)",
    padding: theme.spacing(2, 4, 4),
    outline: "none",
    borderRadius: "10px",
    border: "none",
  },
}));

export const ChangeHabitModal = ({ habitText }) => {
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);

  const [isOpen, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const [selectedText, setSelectedText] = useState(habitText);

  const textChange = (event) => {
    setSelectedText(event.target.value);
  };

  return (
    <div>
      <img
        alt=""
        src={edit}
        className={"habit-edit-button"}
        onClick={handleOpen}
      />
      <Modal open={isOpen} onClose={handleClose} aria-labelledby="change-habit">
        <div style={modalStyle} className={classes["change-habit-modal"]}>
          <img
            alt={""}
            src={cross}
            className={"change-habit-close"}
            onClick={() => setOpen(false)}
          />
          <h2 className={"change-habit-title"}>habit changing</h2>

          <form noValidate autoComplete="off" className={"change-habit-form"}>
            <ThemeProvider theme={theme}>
              <Grid container spacing={2} alignContent={"space-around"}>
                <Grid item xs={12}>
                  <TextField
                    color="primary"
                    fullWidth
                    id="habit-text"
                    label="habit text"
                    variant="outlined"
                    margin="dense"
                    value={selectedText}
                    onChange={textChange}
                  />
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
