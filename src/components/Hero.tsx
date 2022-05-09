import * as React from 'react';
import {Button, CardMedia, Container} from '@material-ui/core';
import { makeStyles, Typography} from '@material-ui/core';
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import ModeIcon from "@mui/icons-material/Mode";
import ArrowDropDownCircleIcon from "@mui/icons-material/ArrowDropDownCircle";
import {useNavigate}  from "react-router-dom";

export interface IHeroProps {
}

const useStyles = makeStyles((theme) => ({
  cover: {
    width: "150%",
    height: "100vh",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    [theme.breakpoints.down("sm")]: {
      position: "fixed",
    },
  },
  over: {
    backgroundColor: "#213d7a",
    width: "100%",
    height: "100vh",
    overflowX: "hidden",
    [theme.breakpoints.down("sm")]: {
      position: "fixed",
      width: "26%",
      marginTop: "-45px",
      marginLeft: "-10px",
    },
  },
  main: {
    marginTop: "-450px",
    color: "white",
    textAlign: "center",
    fontWeight: 650,
    fontSize: "48px",
    [theme.breakpoints.down("sm")]: {
      marginTop: "120px",
    },
  },
  paragraph: {
    color: "white",
    fontSize: "20px",
    marginTop: "6rem",
    fontWeight: "lighter",
    marginLeft: 412,
    [theme.breakpoints.down("sm")]: {
      marginLeft: "2px",
      textAlign: "center",
      width: "100%",
      position: "relative",
    },
  },
  button: {
    textTransform: "capitalize",
    color: "white",
    fontWeight: 600,
    fontSize: "1rem",
    borderRadius: "25px",
    width: "14%",
    height: "8vh",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "-375px",
      position: "fixed",
    },
  },
  buttontwo: {
    textTransform: "capitalize",
    fontWeight: 600,
    fontSize: "1rem",
    borderRadius: "25px",
    width: "13%",
    height: "8vh",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "-250px",
      position: "fixed",
    },
  },
  overlay: {},
}));

export const Hero = (props: IHeroProps) => {
  const classes = useStyles();
  const navigate = useNavigate();
  return (
    <Container className={classes.over}>
      <CardMedia
        className={classes.cover}
        image="https://www.kubeflow.org/homepage-background_huac7d4ee4bcda6617c71a2dd699485ce4_55788_1920x1080_fill_catmullrom_center_3.png"
      />
      <Typography
        style={{
          marginTop: "-569px",
          marginLeft: "-59px",
          color: "black",
          position: "absolute",
          backgroundColor: "#213d7a",
          height: "91vh",
          width: "20%",
        }}       
      ></Typography>
      <Typography
        style={{
          marginTop: "-569px",
          marginLeft: "1021px",
          color: "black",
          position: "absolute",
          backgroundColor: "#213d7a",
          height: "91vh",
          width: "20%",
        }}
      ></Typography>
      <Typography variant="h4" className={classes.main}>
        Kubeflow
      </Typography>
      <Typography variant="h4" className={classes.paragraph}>
        The Machine Learning Toolkit for Kubernetes
      </Typography>
      <Container style={{ marginLeft: 416, marginTop: 16 }}>
        <Button
          variant="contained"
          className={classes.button}
          style={{ backgroundColor: "#4279f4" }}
          onClick={() => navigate("/dashboard/")}
        >
          Get Started
          <ArrowCircleRightIcon style={{ color: "white", marginLeft: "8px" }} />
        </Button>
        <Button
          variant="contained"
          className={classes.buttontwo}
          style={{ backgroundColor: "white", marginLeft: 23 }}
        >
          Contribute
          <ModeIcon style={{ color: "black", marginLeft: "8px" }} />
        </Button>
      </Container>
      <ArrowDropDownCircleIcon
        style={{
          color: "white",
          fontSize: "4.2rem",
          marginLeft: 590,
          marginTop: 80,
          cursor: "pointer",
        }}
      />
    </Container>
  );
}
