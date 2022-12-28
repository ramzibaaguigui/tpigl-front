import React, { Fragment } from "react";
import Navbar from '../components/sharedComponents/NavBar'


class Landing extends React.Component {
    render() {
        return (
            <Fragment>
                <Navbar />
                <div className="shopping-list">landing page</div>
            </Fragment>
            
          );
    }
}


export default Landing;