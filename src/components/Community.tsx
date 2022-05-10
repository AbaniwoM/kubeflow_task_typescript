import * as React from "react";
import { Container, Typography, Link, Button, makeStyles } from "@material-ui/core";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import { FC } from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import LocalPostOfficeIcon from "@mui/icons-material/LocalPostOffice";
import DateRangeIcon from "@mui/icons-material/DateRange";

export interface IAboutProps {}

const useStyles = makeStyles((theme) => ({
  button: {
    textTransform: "capitalize",
    color: "white",
    fontWeight: 600,
    fontSize: "1rem",
    borderRadius: "25px",
    marginTop: "16px",
    width: "19%",
    height: "8vh",
  },
}));

export const Community: FC = (props: IAboutProps) => {
  const classes = useStyles();
  return (
    <Container
      style={{
        backgroundColor: "white",
        marginTop: 100,
        textAlign: "center",
        borderTop: "2px solid #b6d0ff",
        paddingTop: "60px",
      }}
    >
      <Typography
        style={{
          color: "#4279f4",
          fontWeight: 600,
          fontSize: "22.5px",
          marginTop: "40px",
        }}
      >
        Join our community
      </Typography>
      <Typography
        style={{
          fontSize: "20.25px",
          marginTop: "20px",
          marginLeft: "25px"
        }}
      >
        Check out the
        <Link
          href="#"
          style={{
            color: "#4279f4",
            marginLeft: "5px",
            marginRight: "5px",
          }}
          underline="none"
        >
          weekly community call
        </Link>
        , get involved in discussions on the
        <Link
          href="#"
          style={{
            color: "#4279f4",
            marginLeft: "5px",
            marginRight: "5px",
          }}
          underline="none"
        >
          mailing list
        </Link>
        or chat with others on the
        <Link
          href="#"
          style={{
            color: "#4279f4",
            marginLeft: "5px",
            marginRight: "5px",
          }}
          underline="none"
        >
          Slack Workspace!
        </Link>
      </Typography>
      <Button
        variant="contained"
        className={classes.button}
        style={{ backgroundColor: "#4279f4", width: "20%" }}
      >
        Join the community
        <ArrowCircleRightIcon style={{ color: "white", marginLeft: "8px" }} />
      </Button>
      <Container
        style={{
          backgroundColor: "#213d7a",
          backgroundSize: "cover",
          width: "382%",
          height: "15vh",
          marginRight: "-1px",
          padding: 0,
          position: "absolute",
          marginLeft: "13px",
          marginTop: "80px",
          zIndex: "9",
        }}
      >
        <Container style={{ marginTop: "18px", marginLeft: "-643px" }}>
          <DateRangeIcon
            style={{
              position: "absolute",
              color: "white",
              fontSize: "1.9rem",
              marginLeft: "100px",
            }}
          />
          <LocalPostOfficeIcon
            style={{
              position: "absolute",
              color: "white",
              fontSize: "1.9rem",
              marginLeft: "50px",
            }}
          />
          <TwitterIcon
            style={{ position: "absolute", color: "white", fontSize: "1.9rem" }}
          />
        </Container>
        <Typography
          style={{
            color: "white",
            fontSize: "12.8px",
            textAlign: "center",
            marginTop: "30px",
            marginLeft: "50px",
          }}
        >
          &copy; 2022 The Kubeflow Authors. | Documentation Distributed under CC
          BY 4.0
        </Typography>
        <Typography
          style={{
            color: "#4279f4",
            fontSize: "12.8px",
            textAlign: "center",
            marginLeft: "50px",
            marginTop: "5px",
            cursor: "pointer",
          }}
        >
          Privacy Policy
        </Typography>
      </Container>
      <Typography
        style={{
          marginLeft: "-620px",
          marginTop: "80px",
          position: "relative",
          backgroundColor: "#213d7a",
          height: "15vh",
          marginBottom: "0px",
        }}
      ></Typography>
    </Container>
  );
};
