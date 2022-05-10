import * as React from 'react';
import { About } from './About';
import { Header } from './Header';
import { Hero } from './Hero';
import Grids from './Grids';
import MoreGrids from './MoreGrids';
import { Community } from './Community';
import {Container, makeStyles} from '@material-ui/core';

export interface IHomeProps {
}

const useStyles = makeStyles((theme) => ({
  all: {
    position: "absolute",
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      position: "absolute",
      overflowX: "hidden",
      padding: "0px",
      width: "100%",
    },
  },
}));

export function Home (props: IHomeProps) {
  const classes = useStyles();
  return (
    <Container className={classes.all}>
      <Header />
      <Hero />
      <About />
      <Grids />
      <MoreGrids />
      <Community />
    </Container>
  );
}
