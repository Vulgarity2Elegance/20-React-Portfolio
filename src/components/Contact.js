import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import {
  Box,
  Button,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  TextField,
  Typography,
} from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIphoneIcon from "@material-ui/icons/PhoneIphone";
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
  list: {
    color: "tan",
    justifyContent: "center",
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
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
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
          <Grid container justify="center">
            <List className={classes.list}>
              <ListItem>
                <ListItemAvatar>
                  <LocationOnIcon />
                </ListItemAvatar>
                <ListItemText primary="Location: Turramurra, Sydney, NSW 2074" />
              </ListItem>
              <Divider variant="inset" component="li" />
              <ListItem>
                <ListItemAvatar>
                  <EmailIcon />
                </ListItemAvatar>
                <ListItemText primary="Email: jyzhu0101@gmail.com" />
              </ListItem>
              <Divider variant="inset" component="li" />
              <ListItem>
                <ListItemAvatar>
                  <PhoneIphoneIcon />
                </ListItemAvatar>
                <ListItemText primary="Phone: +61 452 539 401" />
              </ListItem>
            </List>
          </Grid>
        </Box>
      </Grid>
    </Box>
  );
};

export default Contact;
