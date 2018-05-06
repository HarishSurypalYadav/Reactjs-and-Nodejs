var express = require('express')
var router = express.Router()

var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();


var db = require('./models');

router.get('/categories', function (req, res) {

	db.categories.findAll().then(categories => {
		if(categories && categories.length > 0) {
			res.json({
				'status':true,
				'data':categories,
				'message':'Categories fetched successfully'
			})
		} else {
			res.json({
				'status':false,
				'data':[],
				'message':'No Categories found'
			})			
		}
	})
})

router.get('/category/:id', function (req, res) {

	db.categories.findById(req.params.id).then(category => {
		if(category) {
			res.json({
				'status':true,
				'data':category,
				'message':'Category data fetched successfully'
			})
		} else {
			res.json({
				'status':false,
				'data':[],
				'message':'Category not found'
			})			
		}
	})
})

router.post('/products', jsonParser, function (req, res) {

  	var catid = req.body.catid;
  	var pagenumber = req.body.pagenumber;

  	var limit = 5;   // number of records per page
  	var offset = 0;
	offset = limit * (pagenumber - 1);

	db.products.findAndCountAll({
		where: {
			catid: catid
		},
		offset: offset,
		limit: limit
	})
	.then(result => {
		if(result && result.rows.length > 0) {
			res.json({
				'status':true,
				'data':result,
				'message':'Product fetched successfully'
			})
		} else {
			res.json({
				'status':false,
				'data':[],
				'message':'Product not found'
			})
		}
	});

})
module.exports = router