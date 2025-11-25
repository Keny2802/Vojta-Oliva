import {
  Fragment
} from "react";

import Header from "./components/Header";
import Hero from "./sections/Hero";
import Portfolio from "./sections/Portfolio";
import References from "./sections/References";
import Pricing from "./sections/Pricing";
import Faq from "./sections/Faq";
import WhyMe from "./sections/WhyMe";
import AboutMe from "./sections/AboutMe";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";

const HomePage = () => {
  return (
    <Fragment>
      <Header />
      <Hero />
      <Portfolio />
      <References />
      <Pricing />
      <Faq />
      <WhyMe />
      <AboutMe />
      <Contact />
      <Footer />
    </Fragment>
  );
};

export default HomePage;