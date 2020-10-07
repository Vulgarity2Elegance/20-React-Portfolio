import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Divider,
  Box,
} from "@material-ui/core";
import Navbar from "./Navbar";
import Header from "./Header";
import CloudDownloadIcon from "@material-ui/icons/CloudDownload";
import MyPDF from "../assets/resume/Youzhi Hu - CV.pdf";
import MyDoc from "../assets/resume/Youzhi Hu - CV.docx";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIphoneIcon from "@material-ui/icons/PhoneIphone";

const useStyles = makeStyles(() => ({
  button: {
    position: "absolute",
    top: 40,
    right: -30,
    textAlign: "center",
    zIndex: 1,
  },
  list: {
    position: "fixed",
    bottom: 0,
    left: 0,
    color: "tan",
  },
}));

const About = () => {
  const classes = useStyles();
  return (
    <Box>
      <Navbar />
      <Header />
      <Grid item sm={12}>
        <Grid container justify="center">
          <List className={classes.button}>
            <ListItem>
              <a href={MyPDF} download="Youzhi Hu - CV.pdf">
                <Button
                  style={{ background: "transparent", color: "tomato" }}
                  variant="contained"
                  startIcon={<CloudDownloadIcon />}
                >
                  Resume.PDF
                </Button>
              </a>
            </ListItem>
            <ListItem>
              <a href={MyDoc} download="Youzhi Hu - CV.docx">
                <Button
                  style={{ background: "transparent", color: "tomato" }}
                  variant="contained"
                  startIcon={<CloudDownloadIcon />}
                >
                  Resume.docx
                </Button>
              </a>
            </ListItem>
          </List>
        </Grid>
        <Grid container justify="center">
          <List className={classes.list}>
            <ListItem>
              <ListItemAvatar>
                <LocationOnIcon />
              </ListItemAvatar>
              <ListItemText primary="Turramurra, Sydney, NSW 2074" />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem>
              <ListItemAvatar>
                <EmailIcon />
              </ListItemAvatar>
              <ListItemText primary="jyzhu0101@gmail.com" />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem>
              <ListItemAvatar>
                <PhoneIphoneIcon />
              </ListItemAvatar>
              <ListItemText primary="+61 452 539 401" />
            </ListItem>
          </List>
        </Grid>
      </Grid>
    </Box>
  );
};

export default About;
