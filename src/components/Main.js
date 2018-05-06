import React, { Component } from 'react';
import '../App.css';
import '../bootstrap.css';

import Header from "./common/Header";

class Main extends Component {
  render() {
    return (
        <div>
          <Header />
          {this.props.children}
        </div> 
    );
  }
}

export default Main;