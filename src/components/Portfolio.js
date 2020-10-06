import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@material-ui/core";
import Navbar from "./Navbar";
import quarantineChef from "../assets/portfolio/quarantineChef.png";
import foodieCrawl from "../assets/portfolio/foodieCrawl.gif";
import workoutTracker from "../assets/portfolio/workoutTracker.png";
import noteTaker from "../assets/portfolio/noteTaker.gif";
import weatherDashboard from "../assets/portfolio/Weather-Dashboard.gif";
import codeQuiz from "../assets/portfolio/codeQuiz.gif";

const useStyles = makeStyles({
  mainConatiner: {
    height: "100%",
  },
  cardConatiner: {
    maxWidth: 345,
    margin: "5rem auto 5rem auto",
  },
});

const Portfolio = () => {
  const classess = useStyles();
  return (
    <>
      <Box component="div" className={classess.mainConatiner}>
        <Navbar />
        <Grid container justify="center">
          {/* Placeholder for project 3 */}
          {/* <Grid item xs={12} sm={8} md={6}>
            <Card className={classess.cardConatiner}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="project name"
                  height="140"
                  image={"projectname"}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5">
                    Project 1
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Some descriptions
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary" href="" target="_blank">
                  GitHub Repository
                </Button>
                <Button size="small" color="primary" href="" target="_blank">
                  Live Demo
                </Button>
              </CardActions>
            </Card>
          </Grid> */}

          {/* Quarantine Chef */}
          <Grid item xs={12} sm={8} md={6}>
            <Card className={classess.cardConatiner}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="project name"
                  height="100%"
                  image={quarantineChef}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5">
                    Quanrantine Chef
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    A handy application which transforms any boring ingredients
                    into incredible, delicious meals.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  size="small"
                  color="primary"
                  href="https://github.com/Vulgarity2Elegance/quarantineChef"
                  target="_blank"
                >
                  GitHub Repository
                </Button>
                <Button
                  size="small"
                  color="primary"
                  href="https://quarantine-chef-41313.herokuapp.com/"
                  target="_blank"
                >
                  Live Demo
                </Button>
              </CardActions>
            </Card>
          </Grid>

          {/* Foodie Crawl */}
          <Grid item xs={12} sm={8} md={6}>
            <Card className={classess.cardConatiner}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="project name"
                  height="100%"
                  image={foodieCrawl}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5">
                    Foodie Crawl
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    An app to organize pub crawls… but for food! Successfully
                    led the integration of Google Map API in a collaboration via
                    Git
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  size="small"
                  color="primary"
                  href="https://github.com/Vulgarity2Elegance/FoodieCrawl"
                  target="_blank"
                >
                  GitHub Repository
                </Button>
                <Button
                  size="small"
                  color="primary"
                  href="https://psiko345.github.io/FoodieCrawl/"
                  target="_blank"
                >
                  Live Demo
                </Button>
              </CardActions>
            </Card>
          </Grid>

          {/* Workout Tracker */}
          <Grid item xs={12} sm={8} md={6}>
            <Card className={classess.cardConatiner}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="project name"
                  height="100%"
                  image={workoutTracker}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5">
                    Workout Tracker
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    An app that helps consumer to reach their fitness goals
                    quicker by tracking them.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  size="small"
                  color="primary"
                  href="https://github.com/Vulgarity2Elegance/17-Workout-Tracker"
                  target="_blank"
                >
                  GitHub Repository
                </Button>
                <Button
                  size="small"
                  color="primary"
                  href="https://yozi-workout-tracker-17.herokuapp.com/"
                  target="_blank"
                >
                  Live Demo
                </Button>
              </CardActions>
            </Card>
          </Grid>

          {/* Note Taker */}
          <Grid item xs={12} sm={8} md={6}>
            <Card className={classess.cardConatiner}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="project name"
                  height="100%"
                  image={noteTaker}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5">
                    Note Taker
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    An application that can be used to write, save, and delete
                    notes.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  size="small"
                  color="primary"
                  href="https://github.com/Vulgarity2Elegance/11-Note-Taker"
                  target="_blank"
                >
                  GitHub Repository
                </Button>
                <Button
                  size="small"
                  color="primary"
                  href="https://yozi-note-taker-11.herokuapp.com/"
                  target="_blank"
                >
                  Live Demo
                </Button>
              </CardActions>
            </Card>
          </Grid>

          {/* Weather Dashboard */}
          <Grid item xs={12} sm={8} md={6}>
            <Card className={classess.cardConatiner}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="project name"
                  height="100%"
                  image={weatherDashboard}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5">
                    Weather Dashboard
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Build a weather dashboard that will run in the browser and
                    feature dynamically updated HTML and CSS.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  size="small"
                  color="primary"
                  href="https://github.com/Vulgarity2Elegance/06-Weather-Dashboard"
                  target="_blank"
                >
                  GitHub Repository
                </Button>
                <Button
                  size="small"
                  color="primary"
                  href="https://vulgarity2elegance.github.io/06-Weather-Dashboard/"
                  target="_blank"
                >
                  Live Demo
                </Button>
              </CardActions>
            </Card>
          </Grid>

          {/* Code Quiz */}
          <Grid item xs={12} sm={8} md={6}>
            <Card className={classess.cardConatiner}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="project name"
                  height="100%"
                  image={codeQuiz}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5">
                    Code Quiz
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    This app features a clean and polished user interface and
                    adapts to either mobile or desktop screensizes.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  size="small"
                  color="primary"
                  href="https://github.com/Vulgarity2Elegance/04-Code-Quiz"
                  target="_blank"
                >
                  GitHub Repository
                </Button>
                <Button
                  size="small"
                  color="primary"
                  href="https://vulgarity2elegance.github.io/04-Code-Quiz/"
                  target="_blank"
                >
                  Live Demo
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Portfolio;
