import React from "react";
import Hero from "../components/home/Hero.tsx";
import Features from "../components/home/Features.tsx";
import Comparison from "../components/home/Comparison.tsx";
import ChoosePath from "../components/home/ChoosePath.tsx";

const Home = () => {
  return (
    <>
      <Hero />
      <Features />
      <Comparison />
      <ChoosePath />
    </>
  );
};

export default Home;
