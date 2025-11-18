import {
  Fragment
} from "react";

import Header from "./components/Header";
import Hero from "./sections/Hero";
import Portfolio from "./sections/Portfolio";
import Pricing from "./sections/Pricing";
import Contact from "./sections/Contact";

const HomePage = () => {
  return (
    <Fragment>
      <Header />
      <Hero />
      <Portfolio />
      <Pricing />
      <Contact />
    </Fragment>
  );
};

export default HomePage;