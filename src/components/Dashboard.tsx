import * as React from 'react';
import {DashHeader} from './DashHeader';
import { Leftbar } from "./Leftbar";
import { Feed } from "./Feed";
import { Rightbar } from "./Rightbar";
import {Grid, makeStyles} from '@material-ui/core';

export interface IDashboardProps {
}

const useStyles = makeStyles((theme) => ({
  right: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));

export function Dashboard (props: IDashboardProps) {
  const classes = useStyles();
  return (
    <div>
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
     
    </div>
  );
}
