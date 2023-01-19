import React, { Fragment } from "react";

import Navbar from "../components/sharedComponents/NavBar";
import Main from "../components/landingComponents/Main";
import About from "../components/landingComponents/About";
import Query from "../components/landingComponents/Query";
import Footer from "../components/sharedComponents/Footer";
import Services from "../components/landingComponents/Services";
import Posts from "../components/landingComponents/Posts";



class Landing extends React.Component {
  render() {
    return (
      <Fragment>
        <Navbar />
        <Main />
        <About />
        <Services />
        <Posts/>
        <Query />
        <Footer />
        
      </Fragment>
    );
  }
}

export default Landing;
