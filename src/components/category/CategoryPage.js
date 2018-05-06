import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

//import '../App.css';
//import { Link } from "react-router-dom";
import * as categoryActions from "../../actions/category";

import Sidebar from "../common/Sidebar";
import ProductListingPage from "../product/ProductListingPage";

class CategoryPage extends Component {

	constructor(props) {
	  super(props);
	  this.state = {
	    categoryId: ((props.match.params.id) ? props.match.params.id : null)
	  };

	  if(props.match.params.id) {
	  	this.populateCategoryDetail(props.match.params.id);
	  }
	}

	componentWillReceiveProps(nextProps) {
		//console.log(nextProps);
	}
	componentDidUpdate(prevProps, prevState) {
		if(this.props.match.params.id !== prevProps.match.params.id) {

			this.populateCategoryDetail(this.props.match.params.id);
		}

	}

	populateCategoryDetail(id) {
		this.props.actions.getCategoryDetail(id);
	}

	// static getDerivedStateFromProps(nextProps, prevState) {
	// 	//console.log(nextProps.categoryDetail);
	// 	return prevState;
	// }

	render() {

		//console.log(this.props.categoryDetail);


		return (

			<div>
				<Sidebar selCategoryId={this.props.match.params.id}/>
			    <div className="Content">
			    	<div className="CatDetail">
			    		<img alt={this.props.categoryDetail.name} className="CatBanner" height="150" src={'http://localhost:4000/images/category/'+this.props.categoryDetail.banner} />
			    		<div className="CatDesc">{this.props.categoryDetail.description}</div>
			    	</div>
	      
	      			<ProductListingPage categoryDetail={this.props.categoryDetail}/>
			    </div>
			</div>
		);
	}
}

const mapStateToProps = (state, ownProps) => ({
	categoryDetail : state.category
});

// const mapStateToProps = function (state, ownProps) {
	
// 	//entity : !_.isUndefined(state.entity.data) ? state.entity.data : [],

// 	console.log(state.category);
// 	var val = { categoryDetail : state.category };
// 	return val;
// };

// function mapStateToProps(state, ownProps) {
//   return {
//       category : !_.isUndefined(state.entity.data) ? state.entity.data : [],
//       entityCount : !_.isUndefined(state.entity.count) ? state.entity.count : 0
//     };
// }

const mapDispatchToProps =  dispatch => ({
	actions : bindActionCreators(categoryActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryPage);