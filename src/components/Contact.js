import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { Box, Button, Grid, TextField, Typography } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import Navbar from "./Navbar";

const useStyles = makeStyles((theme) => ({
  form: {
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    position: "absolute",
  },
  button: {
    marginTop: "1rem",
    color: "tomato",
    borderColor: "tomato",
  },
}));

//Custom styling for element
const InputField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "tan",
    },
    "& label": {
      color: "tan",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "tan",
      },
      "&:hover fieldset": {
        borderColor: "tan",
      },
      "&.Mui-focused fieldset": {
        borderColor: "tan",
      },
    },
  },
})(TextField);

const Contact = () => {
  const classes = useStyles();
  return (
    <Box component="div">
      <Navbar />
      <Grid container justify="center">
        <Box component="form" className={classes.form}>
          <Typography
            variant="h5"
            style={{
              color: "tomato",
              textAlign: "center",
              textTransform: "uppercase",
            }}
          >
            contact me...
          </Typography>
          <Grid
            item
            xs={12}
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <InputField
              label="Name"
              variant="outlined"
              inputProps={{ style: { color: "tomato" } }}
              margin="dense"
              size="medium"
            />
            <InputField
              label="Email"
              variant="outlined"
              inputProps={{ style: { color: "tomato" } }}
              margin="dense"
              size="medium"
            />
          </Grid>
          <InputField
            fullWidth={true}
            label="Subject"
            variant="outlined"
            inputProps={{ style: { color: "tomato" } }}
            margin="dense"
            size="medium"
          />
          <InputField
            fullWidth={true}
            label="Message"
            variant="outlined"
            inputProps={{ style: { color: "tomato" } }}
            margin="dense"
            size="medium"
          />
          <Button
            className={classes.button}
            variant="outlined"
            fullWidth={true}
            endIcon={<SendIcon />}
          >
            submit
          </Button>
        </Box>
      </Grid>
    </Box>
  );
};

export default Contact;
