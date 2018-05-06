
import axios from 'axios';
import { GET_PRODUCTS } from "./index.js";


export const _getProductsSuccess = products => ({
  type: GET_PRODUCTS, 
  payload: products 
});

export function getProducts(catid, pagenumber) {
  return function (dispatch) {
    var jsondata = { catid: catid, pagenumber: pagenumber };
    return axios.post('http://localhost:4000/api/products', jsondata, 
      {headers: {
            'Content-Type': 'application/json',
      }}
    ).then(response => {
          if(response.data.status) {
            console.log(response.data.data);
            dispatch(_getProductsSuccess(response.data.data));
          } else {
            dispatch(_getProductsSuccess({ 'rows': [], 'count':0}));
          }
      },error =>{
        console.log('--error--');
        console.log(error);
        //throw(error);
    });


/*    return axios.post('http://localhost:4000/api/products', jsondata).then(response => {


          if(response.data.status) {
            dispatch(_getProductsSuccess(response.data.data));
          }
      },error =>{
        console.log('--error--');
        console.log(error);
        //throw(error);
    });*/
  };
}