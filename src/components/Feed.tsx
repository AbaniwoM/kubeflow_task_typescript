import * as React from 'react';
import { makeStyles, Typography, Container, Link, Card, Button } from '@material-ui/core';
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import { SubHamburger } from "./SubHamburger";
import TwitterIcon from "@mui/icons-material/Twitter";
import LocalPostOfficeIcon from "@mui/icons-material/LocalPostOffice";
import DateRangeIcon from "@mui/icons-material/DateRange";
import { DashFoot } from './DashFoot';


export interface IFeedProps {
}

const useStyles = makeStyles((theme) => ({
  cover: {
    paddingTop: theme.spacing(10),
    borderRight: "1px solid #ece7e7",
    width: "115%",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "-62px",
      borderRight: "none",
    },
  },
  tai: {
    display: "none",
    [theme.breakpoints.down("sm")]: {
      display: "block",
      marginTop: "20px",
      marginLeft: "7px",
      width: "95%",
    },
  },
  combo: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  submenu: {
    display: "none",
    [theme.breakpoints.down("sm")]: {
      display: "block",
      position: "relative",
      marginLeft: "246px",
      marginTop: "-42px",
    },
  },
  get: {
    [theme.breakpoints.down("sm")]: {
      marginLeft: "-30px",
    },
  },
  crd: {
    [theme.breakpoints.down("sm")]: {
      padding: "5px 130px 50px 10px",
    },
  },
  btnfd: {
    [theme.breakpoints.down("sm")]: {
      display: "flex",
    },
  },
  was: {
    [theme.breakpoints.down("sm")]: {
      width: "120%",
    },
  },
  ftr: {
    display: "none",
    [theme.breakpoints.down("sm")]: {
      display: "block",
    },
  },
  det: {
    [theme.breakpoints.down("sm")]: {
      left: "-60px",
      position: "absolute",
      textAlign: "center",
      width: "22%",
      paddingTop: "30px",
    },
  },
  pri: {
    [theme.breakpoints.down("sm")]: {
      left: "-260px",
      position: "absolute",
      paddingTop: "100px",
      backgroundColor: "#213d7a",
      zIndex: "-1",
      width: "50%",
      marginLeft: "-70px",
      paddingBottom: "30px",
    },
  },
  ext: {
    display: "none",
    [theme.breakpoints.down("sm")]: {
      height: "80vh",
      position: "absolute",
    },
  },
}));

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: "20px",
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "105%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "105%",
    [theme.breakpoints.up("sm")]: {
      width: "14ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export function Feed (props: IFeedProps) {
  const classes = useStyles();
  return (
    <Container className={classes.cover}>
      <Container className={classes.tai}>
        <Search
          style={{
            border: "1px solid #ece7e7",
            borderRadius: "20px",
            width: "105%",
          }}
        >
          <SearchIconWrapper>
            <SearchIcon style={{ marginLeft: "-5px" }} />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search this site"
            inputProps={{ "aria-label": "search" }}
            style={{ marginLeft: "-10px" }}
          />
        </Search>
      </Container>
      <Typography className={classes.submenu}>
        <SubHamburger />
      </Typography>
      <Container className={classes.combo}>
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
            className={classes.get}
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
        className={classes.crd}
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
          className={classes.was}
        >
          Was this page helpful?
        </Typography>
        <Container
          style={{ marginTop: "11px", marginLeft: "17px" }}
          className={classes.btnfd}
        >
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
        <Link
          underline="none"
          style={{ color: "#4279f4", marginLeft: "5px", cursor: "pointer" }}
        >
          restructure `About` section (#3007) (6c527dd0)
        </Link>
      </Typography>
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
        className={classes.ftr}
      >
        <Container
          style={{ left: "-1px", position: "absolute", marginTop: "20px"  }}
        >
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
            marginLeft: "70px",
          }}
          className={classes.det}
        >
          &copy; 2022 The Kubeflow Authors. | Documentation Distributed under CC
          BY 4.0
        </Typography>
        <Typography
          style={{
            color: "#4279f4",
            fontSize: "12.8px",
            textAlign: "center",
            marginLeft: "95px",
            marginTop: "5px",
            cursor: "pointer",
          }}
          className={classes.pri}
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
        className={classes.ext}
      ></Typography>
      <DashFoot />
    </Container>
  );
}
