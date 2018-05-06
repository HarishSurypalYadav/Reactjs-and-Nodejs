import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
//import '../App.css';
import { Link } from "react-router-dom";
import * as categoryActions from "../../actions/category";
var _ = require('lodash');

class Sidebar extends Component {

	constructor(props) {
	  super(props);
	  this.state = {
	    categorylist: [],
	    selCategoryId: props.selCategoryId
	  };

	  this.populateCategoryList();
	}

	populateCategoryList() {
		this.props.actions.getCategories();
	}
	
	componentWillReceiveProps(nextProps) {
		//console.log(nextProps);
	}
	componentDidUpdate(prevProps, prevState) {
		//console.log(prevProps);
	}
			
	render() {
		return (
		    <div id="cssmenu" className="Sidebar">
		      <ul>
		        { ((this.props.categoryList && this.props.categoryList.length > 0) &&
					this.props.categoryList.map((category,i) => 
						<li key={i} className={(this.props.selCategoryId===category.id) ? 'active':'inactive'}><Link to={'/category/'+category.id}>{category.name}</Link></li>
					)
		        )}
		      </ul>        
		    </div>
		);
	}
}

const mapStateToProps = (state, ownProps) => ({
	categoryList : !_.isUndefined(state.categories) ? state.categories : []
});

const mapDispatchToProps =  dispatch => ({
	actions : bindActionCreators(categoryActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);