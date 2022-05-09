import * as React from 'react';
import { makeStyles, Typography, Container, Link, Card, Button } from '@material-ui/core';
import { DashFoot } from './DashFoot';

export interface IFeedProps {
}

const useStyles = makeStyles((theme) => ({
  cover: {
    paddingTop: theme.spacing(10),
    borderRight: "1px solid #ece7e7",
    width: "115%",
  },
}));

export function Feed (props: IFeedProps) {
  const classes = useStyles();
  return (
    <Container className={classes.cover}>
      <Container>
        <Typography gutterBottom>
          <Link
            href="#"
            underline="none"
            style={{ marginRight: "5px", color: "#4279f4" }}
          >
            Documentation
          </Link>
          /
          <Link
            href="#"
            underline="none"
            style={{ marginLeft: "5px", color: "#4279f4" }}
          >
            Getting Started
          </Link>
        </Typography>
      </Container>
      <Typography
        variant="h4"
        style={{ fontWeight: 600, marginLeft: "24px", marginTop: "27px" }}
      >
        Getting Started
      </Typography>
      <Typography
        style={{
          fontSize: "20px",
          color: "#222",
          marginTop: "19px",
          marginLeft: "28px",
          borderBottom: "1px solid #ece7e7",
          paddingBottom: "24px",
          width: "93%",
        }}
      >
        How to get started with Kubeflow
      </Typography>
      <Link href="#" underline="none">
        <Typography
          style={{
            color: "#4279f4",
            fontWeight: "600",
            fontSize: "18.4px",
            marginTop: "26px",
            marginLeft: "40px",
          }}
        >
          Introduction
        </Typography>
      </Link>
      <Typography style={{ marginLeft: "40px" }}>
        An introduction to Kubeflow
      </Typography>
      <Link href="#" underline="none">
        <Typography
          style={{
            color: "#4279f4",
            fontWeight: "600",
            fontSize: "18.4px",
            marginTop: "33px",
            marginLeft: "40px",
          }}
        >
          Architecture
        </Typography>
      </Link>
      <Typography style={{ marginLeft: "40px" }}>
        An overview of Kubeflow's architecture
      </Typography>
      <Link href="#" underline="none">
        <Typography
          style={{
            color: "#4279f4",
            fontWeight: "600",
            fontSize: "18.4px",
            marginTop: "33px",
            marginLeft: "40px",
          }}
        >
          Installing Kubeflow
        </Typography>
      </Link>
      <Typography style={{ marginLeft: "40px" }}>
        Deployment options for Kubeflow
      </Typography>
      <Link href="#" underline="none">
        <Typography
          style={{
            color: "#4279f4",
            fontWeight: "600",
            fontSize: "18.4px",
            marginTop: "33px",
            marginLeft: "40px",
          }}
        >
          Get Support
        </Typography>
      </Link>
      <Typography style={{ marginLeft: "40px" }}>
        Where to get support for Kubeflow
      </Typography>
      <Link href="#" underline="none">
        <Typography
          style={{
            color: "#4279f4",
            fontWeight: "600",
            fontSize: "18.4px",
            marginTop: "33px",
            marginLeft: "40px",
          }}
        >
          Examples
        </Typography>
      </Link>
      <Typography style={{ marginLeft: "40px" }}>
        Examples that demonstrate machine learning with Kubeflow
      </Typography>
      <Card
        style={{
          width: "50%",
          marginLeft: "30px",
          marginTop: "45px",
          height: "24vh",
        }}
      >
        <Typography
          style={{
            fontWeight: 600,
            fontSize: "24px",
            marginLeft: "40px",
            marginTop: "20px",
          }}
        >
          Feedback
        </Typography>
        <Typography
          style={{ fontSize: "16px", marginLeft: "40px", marginTop: "5px" }}
        >
          Was this page helpful?
        </Typography>
        <Container style={{ marginTop: "11px", marginLeft: "17px" }}>
          <Button
            variant="contained"
            style={{
              backgroundColor: "#4279f4",
              borderRadius: "19px",
              width: "25%",
              color: "white",
            }}
          >
            Yes
          </Button>
          <Button
            variant="contained"
            style={{
              backgroundColor: "#4279f4",
              marginLeft: 23,
              borderRadius: "19px",
              width: "25%",
              color: "white",
            }}
          >
            No
          </Button>
        </Container>
      </Card>
      <Typography
        style={{
          color: "gray",
          borderTop: "1px solid #ece7e7",
          marginTop: "70px",
          marginLeft: "30px",
          paddingTop: "16px",
        }}
      >
        Last modified November 29, 2021:
        <Link style={{ color: "#4279f4", marginLeft: "5px" }}>
          restructure `About` section (#3007) (6c527dd0)
        </Link>
      </Typography>
      <DashFoot />
    </Container>
  );
}
