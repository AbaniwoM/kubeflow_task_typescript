import * as React from 'react';
import {Button, CardMedia, Container} from '@material-ui/core';
import { makeStyles, Typography, Link } from '@material-ui/core';
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import ModeIcon from "@mui/icons-material/Mode";
import ArrowDropDownCircleIcon from "@mui/icons-material/ArrowDropDownCircle";
import {useNavigate}  from "react-router-dom";

export interface IHeroProps {
}

const useStyles = makeStyles((theme) => ({
  cover: {
    width: "100%",
    height: "100vh",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  over: {
    backgroundColor: "#213d7a",
    width: "100%",
    height: "100vh",
    overflowX: "hidden"
  },
  main: {
    marginTop: "-450px",
    color: "white",
    textAlign: "center",
    fontWeight: 650,
    fontSize: "48px",
  },
  paragraph: {
    color: "white",
    fontSize: "20px",
    marginTop: "6rem",
    fontWeight: "lighter",
    marginLeft: 412,
  },
  button: {
    textTransform: "capitalize",
    color: "white",
    fontWeight: 600,
    fontSize: "1rem",
    borderRadius: "25px",
    width: "14%",
    height: "8vh",
  },
  buttontwo: {
    textTransform: "capitalize",
    fontWeight: 600,
    fontSize: "1rem",
    borderRadius: "25px",
    width: "13%",
    height: "8vh",
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
            onClick={() => navigate('/dashboard/')}
          >
            Get Started
            <ArrowCircleRightIcon
              style={{ color: "white", marginLeft: "8px" }}
            />
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
