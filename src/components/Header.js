import React from "react";
import { Avatar, Box, Typography, Grid } from "@material-ui/core";
import profile from "../assets/img/profile.png";
import Typed from "react-typed";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(20),
    height: theme.spacing(20),
    margin: theme.spacing(1),
  },
  subtitle: {
    color: "tan",
    marginBottom: "3rem",
  },
  typedContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "100vw",
    textAlign: "center",
    zIndex: 1,
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <Box className={classes.typedContainer}>
      <Grid container justify="center">
        <Avatar className={classes.avatar} src={profile} alt="Youzhi" />
      </Grid>
      <Typography className={classes.subtitle} variant="h4">
        <Typed
          strings={[
            "I am Youzhi Hu",
            "I am a full-stack web developer",
            "I am comptent in MERN stack",
            "I am craving for creative solutions",
          ]}
          typeSpeed={40}
          backSpeed={50}
          loop
        />
      </Typography>
    </Box>
  );
};

export default Header;
