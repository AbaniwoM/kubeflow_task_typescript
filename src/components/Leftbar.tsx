import * as React from 'react';
import {Container, makeStyles, Typography, Link} from '@material-ui/core';
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";


export interface ILeftbarProps {
}

const useStyles = makeStyles((theme) => ({
  cover: {
    height: "100vh",
    color: "white",
    marginLeft: theme.spacing(-1),
    paddingTop: theme.spacing(10),
    marginTop: "30px",
    width: "15vw",
    position: "fixed",
    top: 0,
    backgroundColor: "rgba(66,121,244,3%)",
    [theme.breakpoints.up("sm")]: {
      backgroundColor: "rgba(66,121,244,3%)",
      color: "#555",
      border: "1px solid #ece7e7",
      width: "17vw",
      position: "fixed",
      top: 0,
    },
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  container: {
    marginTop: "2px",
    width: "115%",
    marginLeft: "-40px",
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

export function Leftbar (props: ILeftbarProps) {
  const classes = useStyles();
  return (
    <Container className={classes.cover}>
      <Container className={classes.container}>
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
      <Link href="#" underline="none">
        <Typography
          style={{
            color: "#4279f4",
            borderBottom: "1px solid #4279f4",
            fontWeight: "600",
            marginTop: "17px",
            paddingBottom: "5px",
          }}
        >
          Documentation
        </Typography>
      </Link>
      <Link href="#" underline="none">
        <Container
          style={{
            display: "flex",
            marginTop: "15px",
            marginLeft: "-33px",
            color: "black",
          }}
        >
          <ArrowRightIcon />
          <Typography>About</Typography>
        </Container>
      </Link>
      <Link href="#" underline="none">
        <Container
          style={{
            display: "flex",
            marginTop: "8px",
            marginLeft: "-33px",
            color: "black",
            width: "110%",
          }}
        >
          <ArrowRightIcon />
          <Typography style={{ fontWeight: 600 }}>Getting Started</Typography>
        </Container>
      </Link>
      <Link href="#" underline="none">
        <Container
          style={{
            display: "flex",
            marginTop: "8px",
            marginLeft: "-33px",
            color: "black",
          }}
        >
          <ArrowRightIcon />
          <Typography>Components</Typography>
        </Container>
      </Link>
      <Link href="#" underline="none">
        <Container
          style={{
            display: "flex",
            marginTop: "8px",
            marginLeft: "-33px",
            color: "black",
            width: "110%",
          }}
        >
          <ArrowRightIcon />
          <Typography>External Add-Ons</Typography>
        </Container>
      </Link>
      <Link href="#" underline="none">
        <Container
          style={{
            display: "flex",
            marginTop: "8px",
            marginLeft: "-33px",
            color: "black",
          }}
        >
          <ArrowRightIcon />
          <Typography>Distributions</Typography>
        </Container>
      </Link>
      <Link href="#" underline="none">
        <Container
          style={{
            display: "flex",
            marginTop: "8px",
            marginLeft: "-33px",
            color: "black",
          }}
        >
          <ArrowRightIcon />
          <Typography>Releases</Typography>
        </Container>
      </Link>
    </Container>
  );
}
