import * as React from 'react';
import { About } from './About';
import { Header } from './Header';
import { Hero } from './Hero';
import Grids from './Grids';
import MoreGrids from './MoreGrids';
import { Community } from './Community';

export interface IHomeProps {
}

export function Home (props: IHomeProps) {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Grids />
      <MoreGrids />
      <Community />
    </div>
  );
}
