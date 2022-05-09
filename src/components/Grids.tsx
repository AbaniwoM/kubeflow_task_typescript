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
}));

export default function RowAndColumnSpacing() {
  const classes = useStyles();
  return (
    <Grid
      container
      spacing={{ xs: 2, md: 4 }}
      columns={{ xs: 2, sm: 8, md: 11 }}
      style={{ marginTop: "55px" }}
    >
      <Grid item xs={2} sm={4} md={3} style={{ marginLeft: "120px" }}>
        <Item
          style={{
            border: "1px solid rgba(0,0,0,.125)",
            borderRadius: "5px 5px 0px 0px",
          }}
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
        >
          <Typography
            style={{
              color: "white",
              fontWeight: "600",
              fontSize: "20px",
              marginTop: "2px",
              marginRight: "190px",
            }}
          >
            Notebooks
          </Typography>
          <Typography
            style={{
              color: "white",
              width: "100%",
              marginTop: "20px",
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
        >
          <Typography
            style={{
              color: "white",
              fontWeight: "600",
              fontSize: "20px",
              marginTop: "2px",
              marginRight: "170px",
              marginLeft: "-35px",
              width: "110%",
            }}
          >
            TensorFlow model training
          </Typography>
          <Typography
            style={{
              color: "white",
              width: "100%",
              marginTop: "20px",
              fontSize: "16px",
              textAlign: "left",
            }}
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
              marginTop: "2px",
              marginRight: "190px",
              width: "110%",
              marginLeft: "-95px",
            }}
          >
            Model serving
          </Typography>
          <Typography
            style={{
              color: "white",
              width: "100%",
              marginTop: "20px",
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
