import React from "react";
import Hero from "../components/sharedComponents/Hero";
import BestPostings from "../components/landingComponents/BestPostings";


const Landing = () => {
  return (
    <div className="h-fit">
      <Hero />
      <BestPostings />
    </div>
  )
}

export default Landing;
