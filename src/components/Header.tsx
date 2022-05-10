import * as React from 'react';
import {FC} from 'react';
import {
  AppBar,
  CardMedia,
  makeStyles,
  Toolbar,
  Typography,
  Container,
} from "@material-ui/core";

import ArticleIcon from "@mui/icons-material/Article";
import RssFeedIcon from "@mui/icons-material/RssFeed";
import GitHubIcon from "@mui/icons-material/GitHub";
import {Version} from "./Version";
import {Hamburger} from "./Hamburger";


export interface IHeaderProps {

}

const useStyles = makeStyles((theme) => ({
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    // backgroundColor: "#4279f4",
    backgroundColor: "#213d7a",
    position: "fixed",
    width: "98%",
    [theme.breakpoints.down("sm")]: {
      backgroundColor: "#4279f4",
      position: "fixed",
      width: "92%",
    },
  },
  icons: {
    alignItems: "center",
    cursor: "pointer",
  },
  badge: {
    marginRight: theme.spacing(2),
  },
  media: {
    width: "80px",
    height: "80px",
    position: "absolute",
    border: "2px solid #4279f4",
    padding: "6px",
    top: 0,
    borderTop: "none",
    [theme.breakpoints.down("sm")]: {
      zIndex: "1",
    },
  },
  menu: {
    display: "none",
    [theme.breakpoints.down("sm")]: {
      display: "block",
      position: "absolute",
      marginLeft: "267px",
    },
  },
  doc: {
    marginLeft: 700,
    display: "flex",
    "&:hover": {
      color: "#D3D3D3",
      cursor: "pointer",
    },
  },
  blog: {
    marginLeft: 890,
    position: "absolute",
    display: "flex",
    "&:hover": {
      color: "#D3D3D3",
      cursor: "pointer",
    },
  },
  git: {
    marginLeft: 990,
    position: "absolute",
    display: "flex",
    "&:hover": {
      color: "#D3D3D3",
      cursor: "pointer",
    },
  },
  version: {
    marginLeft: 1090,
    position: "absolute",
    display: "flex",
  },
  text: {
    fontSize: "15.4px",
    fontWeight: 800,
    marginLeft: 6,
  },
  article: {
    width: "1rem",
  },
}));


export const Header:FC = (props: IHeaderProps) => {
  const classes = useStyles();

  return (
    <AppBar position="fixed">
      <Toolbar className={classes.toolbar}>
        <CardMedia
          className={classes.media}
          image="https://miro.medium.com/max/410/1*McaVgtf1aeF6bbrJM_09yw.jpeg"
          title="Kubeflow Logo"
        />
        <Container className={classes.doc}>
          <ArticleIcon style={{ fontSize: "1.3rem", marginTop: "2px" }} />
          <Typography variant="h6" className={classes.text}>
            Documentation
          </Typography>
        </Container>
        <Container className={classes.blog}>
          <RssFeedIcon style={{ fontSize: "1.3rem", marginTop: "2px" }} />
          <Typography variant="h6" className={classes.text}>
            Blog
          </Typography>
        </Container>
        <Container className={classes.git}>
          <GitHubIcon style={{ fontSize: "1.3rem", marginTop: "2px" }} />
          <Typography variant="h6" className={classes.text}>
            GitHub
          </Typography>
        </Container>
        <Version />
        <Typography className={classes.menu}>
          <Hamburger />
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
