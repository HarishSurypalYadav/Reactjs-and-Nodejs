import React, { Component } from 'react';
//import '../App.css';
import Sidebar from "./Sidebar";

class Home extends Component {
  render() {
    return (
    	<div>
	    	<Sidebar />
	        <div className="Content"> 
	            <h2> Dashboard  : Please select category to view products</h2>
	        </div>
	    </div>
    );
  }
}

export default Home;