import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
        <div className="App-header">
            <h3> ReactJs Practical Test </h3>
            <Link to={'/category'}>Go To Category ListingPage</Link>
        </div>
    );
  }
}

export default Header;