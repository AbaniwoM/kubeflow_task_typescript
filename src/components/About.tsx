import * as React from 'react';
import {Container, Typography, makeStyles} from '@material-ui/core';
import {FC} from 'react';

export interface IAboutProps {
}

const useStyles = makeStyles((theme) => ({
  top: {
    [theme.breakpoints.down("sm")]: {
    marginTop: "530px",
    marginLeft: "30px",
    position: "absolute",
  },
  },
  sub: {
    [theme.breakpoints.down("sm")]: {
    paddingTop: "590px",
    position: "relative",
  },
  },
}));

export const About:FC = (props: IAboutProps) => {
 const classes = useStyles();
  return (
    <Container
      style={{ backgroundColor: "white", marginTop: 100, textAlign: "center" }}
    >
      <Typography
        className={classes.top}
        style={{
          color: "#4279f4",
          fontWeight: 600,
          fontSize: "22.5px",
          marginLeft: "40px",
        }}
      >
        What is Kubeflow?
      </Typography>
      <Typography
        className={classes.sub}
        style={{
          fontSize: "20.25px",
          marginTop: "20px",
          borderBottom: "2px solid #b6d0ff",
          paddingBottom: "60px",
          marginLeft: "40px",
        }}
      >
        The Kubeflow project is dedicated to making deployments of machine
        learning (ML) workflows on Kubernetes simple, portable and scalable. Our
        goal is not to recreate other services, but to provide a straightforward
        way to deploy best-of-breed open-source systems for ML to diverse
        infrastructures. Anywhere you are running Kubernetes, you should be able
        to run Kubeflow.
      </Typography>
    </Container>
  );
}
