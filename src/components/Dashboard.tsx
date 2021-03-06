import * as React from 'react';
import {DashHeader} from './DashHeader';
import { Leftbar } from "./Leftbar";
import { Feed } from "./Feed";
import { Rightbar } from "./Rightbar";
import {Grid, makeStyles, Container} from '@material-ui/core';

export interface IDashboardProps {
}

const useStyles = makeStyles((theme) => ({
  right: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  contin: {
    position: "absolute",
    width: "100%",
    marginLeft: "-24px",
    [theme.breakpoints.down("sm")]: {
      position: "absolute",
      overflowX: "hidden",
      padding: "0px",
      width: "100%",
    },
  },
}));

export function Dashboard (props: IDashboardProps) {
  const classes = useStyles();
  return (
    <Container className={classes.contin}>
      <DashHeader />
      <Grid container>
        <Grid item sm={2} xs={2}>
          <Leftbar />
        </Grid>
        <Grid item sm={7} xs={10}>
          <Feed />
        </Grid>
        <Grid item sm={3} className={classes.right}>
          <Rightbar />
        </Grid>
        </Grid>
      </Container>
  );
}
