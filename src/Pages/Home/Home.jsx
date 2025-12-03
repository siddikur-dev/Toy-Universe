import React from "react";
import AllToys from "../../Component/Toys/AllToys";
import Slider from "../../Component/Slider/Slider";
import Review from "../Review/Review";
import Newsletter from "../Newsletter/Newsletter";
import PromoBanner from "../../Component/PromoBanner/PromoBanner";

const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <PromoBanner />
      <AllToys></AllToys>
      <Review />
      <Newsletter></Newsletter>
    </div>
  );
};

export default Home;
