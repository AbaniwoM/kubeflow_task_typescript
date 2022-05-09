import * as React from 'react';
import {Container, Typography, makeStyles} from '@material-ui/core';
import {FC} from 'react';

export interface IAboutProps {
}

const useStyles = makeStyles((theme) => ({
  about: {
    [theme.breakpoints.down("sm")]: {
      paddingTop: "500px",
      position: "absolute",
      background: "none",
      zIndex: "-1",
    },
  },
}));

export const About:FC = (props: IAboutProps) => {
  const classes = useStyles();
  return (
    <Container
      className={classes.about}
      style={{ backgroundColor: "white", marginTop: 100, textAlign: "center" }}
    >
      <Typography
        style={{ color: "#4279f4", fontWeight: 600, fontSize: "22.5px" }}
      >
        What is Kubeflow?
      </Typography>
      <Typography
        style={{
          fontSize: "20.25px",
          marginTop: "20px",
          borderBottom: "2px solid #b6d0ff",
          paddingBottom: "60px",
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
