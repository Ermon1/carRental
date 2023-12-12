import React from "react";
import Search from "./Search";
import CarCard from "./CarCard";
import Helmet from "./Helmet";
import HeroSlider from "./HeroSlider";
import Footer from "./Footer";
//  import HeroSlider from './HeroSlider';
import AboutUs from './AboutUs'
const Main = () => {
  return (
    <>
      <Helmet title="Home">
        <section>
          <HeroSlider />
        </section>
      </Helmet>
      <AboutUs/>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Main;
