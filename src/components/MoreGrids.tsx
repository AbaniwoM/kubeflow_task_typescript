import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { CardMedia, Typography, Link, makeStyles } from "@material-ui/core";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const useStyles = makeStyles((theme) => ({
  custom: {
    "&:hover": {
      color: "white",
      cursor: "pointer",
    },
  },
  pip: {
    [theme.breakpoints.down("sm")]: {
      marginLeft: "-100px",
      marginTop: "20px",
      width: "113%",
    },
  },
  nes: {
    [theme.breakpoints.down("sm")]: {
      marginLeft: "-100px",
      position: "relative",
      width: "101%",
    },
  },
  mul: {
    [theme.breakpoints.down("sm")]: {
      width: "90%",
      marginLeft: "0px",
      marginTop: "20px",
    },
  },
  frm: {
    width: "71%",
    marginLeft: "19px",
  },
  wrk: {
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "-70px",
      position: "relative",
    },
  },
  com: {
    [theme.breakpoints.down("sm")]: {
      width: "79%",
      marginLeft: "19px",
    },
  },
  comcn: {
    [theme.breakpoints.down("sm")]: {
      width: "71%",
      marginLeft: "19px",
    },
  },
  nity: {
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "-70px",
      position: "relative",
    },
  },
}));

export default function RowAndColumnSpacing() {
  const classes = useStyles();
  return (
    <Grid
      container
      spacing={{ xs: 2, md: 4 }}
      columns={{ xs: 2, sm: 8, md: 11 }}
      style={{
        marginTop: "-6px",
        marginLeft: "-13px",
      }}
    >
      <Grid item xs={2} sm={4} md={3} style={{ marginLeft: "120px" }}>
        <Item
          style={{
            border: "1px solid rgba(0,0,0,.125)",
            borderRadius: "5px 5px 0px 0px",
          }}
          className={classes.pip}
        >
          <CardMedia
            image="https://www.kubeflow.org/docs/images/logos/Pipeline.png"
            title="Pipelines"
            style={{
              height: "54vh",
              margin: "0px",
            }}
          />
        </Item>
        <Item
          style={{
            backgroundColor: "#213d7a",
            borderRadius: "0px",
            height: "46vh",
            padding: "23px",
          }}
          className={classes.nes}
        >
          <Typography
            style={{
              color: "white",
              fontWeight: "600",
              fontSize: "20px",
              marginTop: "-4px",
              marginRight: "200px",
              marginLeft: "5px",
            }}
          >
            Pipelines
          </Typography>
          <Typography
            style={{
              color: "white",
              width: "100%",
              marginTop: "12px",
              fontSize: "16px",
              textAlign: "left",
            }}
          >
            <Link
              href="#"
              style={{
                color: "#AFEEEE",
                fontWeight: "600",
                marginLeft: "5px",
                marginRight: "5px",
              }}
              underline="always"
              className={classes.custom}
            >
              Kubeflow Pipelines
            </Link>
            is a comprehensive solution for deploying and managing end-to-end ML
            workflows. Use Kubeflow Pipelines for rapid and reliable
            experimentation. You can schedule and compare runs, and examine
            detailed reports on each run.
          </Typography>
        </Item>
      </Grid>
      <Grid item xs={2} sm={4} md={3}>
        <Item
          style={{
            border: "1px solid rgba(0,0,0,.125)",
            borderRadius: "5px 5px 0px 0px",
          }}
          className={classes.mul}
        >
          <CardMedia
            image="https://www.kubeflow.org/docs/images/logos/MultiPlatform.png"
            title="Multi-Framework"
            style={{
              height: "54vh",
              margin: "0px",
            }}
          />
        </Item>
        <Item
          style={{
            backgroundColor: "#213d7a",
            borderRadius: "0px",
            height: "46vh",
            padding: "23px",
            marginLeft: "-1px",
            width: "85%",
          }}
          className={classes.frm}
        >
          <Typography
            style={{
              color: "white",
              fontWeight: "600",
              fontSize: "20px",
              marginTop: "-4px",
              marginRight: "170px",
              marginLeft: "-65px",
              width: "110%",
            }}
            className={classes.wrk}
          >
            Multi-Framework
          </Typography>
          <Typography
            style={{
              color: "white",
              width: "100%",
              marginTop: "10px",
              fontSize: "16px",
              textAlign: "left",
            }}
          >
            Our development plans extend beyond TensorFlow. We're working hard
            to extend the support of
            <Link
              href="#"
              style={{
                color: "#AFEEEE",
                fontWeight: "600",
                marginLeft: "5px",
                marginRight: "5px",
              }}
              underline="always"
              className={classes.custom}
            >
              PyTorch, Apache MXNet, MPI, XGBoost, Chainer,
            </Link>
            and more. We also integrate with
            <Link
              href="#"
              style={{
                color: "#AFEEEE",
                fontWeight: "600",
                marginLeft: "5px",
                marginRight: "5px",
              }}
              underline="always"
              className={classes.custom}
            >
              Istio
            </Link>
            and
            <Link
              href="#"
              style={{
                color: "#AFEEEE",
                fontWeight: "600",
                marginLeft: "5px",
                marginRight: "5px",
              }}
              underline="always"
              className={classes.custom}
            >
              Ambassador
            </Link>
            for ingress,
            <Link
              href="#"
              style={{
                color: "#AFEEEE",
                fontWeight: "600",
                marginLeft: "5px",
                marginRight: "5px",
              }}
              underline="always"
              className={classes.custom}
            >
              Nuclio
            </Link>
            as a fast multi-purpose serverless framework, and
            <Link
              href="#"
              style={{
                color: "#AFEEEE",
                fontWeight: "600",
                marginLeft: "5px",
                marginRight: "5px",
              }}
              underline="always"
              className={classes.custom}
            >
              Pachyderm
            </Link>
            for managing your data science pipelines.
          </Typography>
        </Item>
      </Grid>
      <Grid item xs={2} sm={4} md={3}>
        <Item
          style={{
            border: "1px solid rgba(0,0,0,.125)",
            borderRadius: "5px 5px 0px 0px",
          }}
          className={classes.com}
        >
          <CardMedia
            image="https://www.kubeflow.org/docs/images/logos/Community.png"
            title="Community"
            style={{
              height: "54vh",
              margin: "0px",
            }}
          />
        </Item>
        <Item
          style={{
            backgroundColor: "#213d7a",
            borderRadius: "0px",
            height: "46vh",
            padding: "23px",
          }}
          className={classes.comcn}
        >
          <Typography
            style={{
              color: "white",
              fontWeight: "600",
              fontSize: "20px",
              marginTop: "-4px",
              width: "110%",
              marginLeft: "-93px",
            }}
            className={classes.nity}
          >
            Community
          </Typography>
          <Typography
            style={{
              color: "white",
              width: "100%",
              marginTop: "12px",
              fontSize: "16px",
              textAlign: "left",
            }}
          >
            We are an open and welcoming community of software developers, data
            scientists, and organizations! Join our
            <Link
              href="#"
              style={{
                color: "#AFEEEE",
                fontWeight: "600",
                marginLeft: "5px",
                marginRight: "5px",
              }}
              underline="always"
              className={classes.custom}
            >
              Slack Workspace!
            </Link>
          </Typography>
        </Item>
      </Grid>
    </Grid>
  );
}
