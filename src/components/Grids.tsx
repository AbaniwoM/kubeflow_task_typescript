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
  note: {
    [theme.breakpoints.down("sm")]: {
      marginLeft: "-100px",
      width: "113%",
    },
  },
  notetext: {
    [theme.breakpoints.down("sm")]: {
      marginLeft: "-100px",
      width: "102%",
      height: "78vh",
    },
  },
  ten: {
    [theme.breakpoints.down("sm")]: {
      width: "86%",
      marginTop: "20px",
      marginLeft: "20px",
    },
  },
  tentext: {
    [theme.breakpoints.down("sm")]: {
      width: "77%",
      marginLeft: "20px",
    },
  },
  training: {
    [theme.breakpoints.down("sm")]: {
      width: "60%",
      paddingLeft: "13px",
      textAlign: "center",
      position: "relative",
    },
  },
  provide: {
    [theme.breakpoints.down("sm")]: {
      paddingTop: "-15px",
      position: "relative",
    }
  },
}));

export default function RowAndColumnSpacing() {
  const classes = useStyles();
  return (
    <Grid
      container
      spacing={{ xs: 2, md: 4 }}
      columns={{ xs: 2, sm: 8, md: 11 }}
      style={{ marginTop: "55px", marginLeft: "-12px" }}
    >
      <Grid item xs={2} sm={4} md={3} style={{ marginLeft: "120px" }}>
        <Item
          style={{
            border: "1px solid rgba(0,0,0,.125)",
            borderRadius: "5px 5px 0px 0px",
          }}
          className={classes.note}
        >
          <CardMedia
            image="https://www.kubeflow.org/docs/images/logos/Jupyter.png"
            title="notebooks"
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
            height: "58vh",
            padding: "23px",
          }}
          className={classes.notetext}
        >
          <Typography
            style={{
              color: "white",
              fontWeight: "600",
              fontSize: "20px",
              marginTop: "-4px",
              marginRight: "190px",
            }}
          >
            Notebooks
          </Typography>
          <Typography
            style={{
              color: "white",
              width: "100%",
              marginTop: "13px",
              fontSize: "16px",
              textAlign: "left",
            }}
          >
            Kubeflow includes services to create and manage interactive
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
              Jupyter notebooks.
            </Link>
            You can customize your notebook deployment and your compute
            resources to suit your data science needs. Experiment with your
            workflows locally, then deploy them to a cloud when you're ready.
          </Typography>
        </Item>
      </Grid>
      <Grid item xs={2} sm={4} md={3}>
        <Item
          style={{
            border: "1px solid rgba(0,0,0,.125)",
            borderRadius: "5px 5px 0px 0px",
          }}
          className={classes.ten}
        >
          <CardMedia
            image="https://www.kubeflow.org/docs/images/logos/TensorFlow.png"
            title="tensorflow"
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
            height: "58vh",
            padding: "23px",
          }}
          className={classes.tentext}
        >
          <Typography
            style={{
              color: "white",
              fontWeight: "600",
              fontSize: "20px",
              marginTop: "-4px",
              marginRight: "170px",
              marginLeft: "-18px",
              width: "110%",
            }}
            className={classes.training}
          >
            TensorFlow model training
          </Typography>
          <Typography
            style={{
              color: "white",
              width: "100%",
              marginTop: "13px",
              fontSize: "16px",
              textAlign: "left",
            }}
            className={classes.provide}
          >
            Kubeflow provides a custom
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
              Tensorflow training job operator
            </Link>
            that you can use to train your ML model. In particular, Kubeflow's
            job operator can handle distributed TensorFlow training jobs.
            Configure the training controller to use CPUs and to suit various
            cluster sizes.
          </Typography>
        </Item>
      </Grid>
      <Grid item xs={2} sm={4} md={3}>
        <Item
          style={{
            border: "1px solid rgba(0,0,0,.125)",
            borderRadius: "5px 5px 0px 0px",
          }}
        >
          <CardMedia
            image="https://www.kubeflow.org/docs/images/logos/Models.png"
            title="Model serving"
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
            height: "58vh",
            padding: "23px",
          }}
        >
          <Typography
            style={{
              color: "white",
              fontWeight: "600",
              fontSize: "20px",
              marginTop: "-4px",
              marginRight: "190px",
              width: "110%",
              marginLeft: "-79px",
            }}
          >
            Model serving
          </Typography>
          <Typography
            style={{
              color: "white",
              width: "105%",
              marginTop: "12px",
              fontSize: "16px",
              textAlign: "left",
            }}
          >
            Kubeflow supports a
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
              TensorFlow Serving
            </Link>
            container to export trained TensorFlow models to Kubernetes.
            Kubeflow is also integrated with
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
              Seldon Core,
            </Link>
            an open source platform for deploying machine learning models on
            Kubernetes,
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
              NVIDIA Triton Inference Server
            </Link>
            for maximized GPU utilization when deploying ML/DL models at scale,
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
              MLRun Serving,
            </Link>
            an open-source serverless framework for deployment and monitoring of
            real-time ML/DL pipelines.
          </Typography>
        </Item>
      </Grid>
    </Grid>
  );
}
