import {FC} from "react";
import { About } from "./components/About";
import {Header} from './components/Header';
import { Hero } from "./components/Hero";

const App:FC = () => {
  return (
    <div
      className="App"
      style={{
        marginRight: "-7px",
        marginLeft: "-8px",
      }}
    >
      <Header />
      <Hero />
      <About />
    </div>
  );
}

export default App;
