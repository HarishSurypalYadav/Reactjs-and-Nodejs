import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import * as productActions from "../../actions/product";
import Pagination from "react-js-pagination";


class ProductListingPage extends Component {

	constructor(props) {
	  super(props);
	  this.state = {
	    categoryDetail: props.categoryDetail,
	    productList: [],
	    productCount: 0,
	    activePage: 1
	  };

	  this.populateProductListByCategory(props.categoryDetail.id, this.state.activePage);
	  this.handlePageChange = this.handlePageChange.bind(this);
	}

	populateProductListByCategory(catid, activePage) {
		this.props.actions.getProducts(catid, activePage);
	}
		
	handlePageChange(pageNumber) {
		console.log('active page is '+pageNumber);
		this.setState({activePage: pageNumber});
	}		
	componentDidUpdate(prevProps, prevState) {
		if(this.props.categoryDetail.id !== prevProps.categoryDetail.id) {
			this.setState({activePage: 1});
			this.populateProductListByCategory(this.props.categoryDetail.id, 1);
		}

		if(prevState.activePage !== this.state.activePage) {
			this.populateProductListByCategory(this.props.categoryDetail.id, this.state.activePage);
		}

	}

	render() {
		return (
		    <div>
			    <div>
			    	<div className="Breadcrumb">
			    		<span> Categories </span>
			    		<span> > </span>
			    		<span> {this.props.categoryDetail.name} </span>
			    	</div>
			    	<br />
				    <div className="PaginationSection">    
				        <Pagination
				          activePage={this.state.activePage}
				          itemsCountPerPage={5}
				          totalItemsCount={this.props.productCount}
				          pageRangeDisplayed={5}
				          onChange={this.handlePageChange}
				          hideNavigation="false"
				          hideFirstLastPages="false"
				        />
			        </div>
	      		</div>
	      		<div className="ProductSection">

			        { ((this.props.productList && this.props.productList.length > 0) ?
						this.props.productList.map((product,i) => 
					    	<div className="ProductListing">
					    		<div><img alt={product.name} height="150" src={'http://localhost:4000/images/product/'+product.image} /></div>
					    		<div>Price : ${product.price}</div>
					    		<div>Product Name : <b>{product.name}</b></div>
					    	</div>
						) : (
							<div>No Product Found</div>
						)
			        )}
			    </div>
		    </div>
		);
	}
}

const mapStateToProps = function (state, ownProps) {
	var val = { 'productList' : state.products.rows, 'productCount' : state.products.count };
	return val;
};

const mapDispatchToProps =  dispatch => ({
	actions : bindActionCreators(productActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductListingPage);