import React, { Fragment } from "react";
import Navbar from "../components/sharedComponents/NavBar";
import Main from "../components/Main";
import About from "../components/About";
import Query from "../components/Query";
import Footer from "../components/sharedComponents/Footer";
import Services from "../components/Services";

class Landing extends React.Component {
  render() {
    return (
      <Fragment>
        <Navbar />
        <Main />
        <About />
        <Services />
        <Query />
        <Footer />
      </Fragment>
    );
  }
}

export default Landing;
