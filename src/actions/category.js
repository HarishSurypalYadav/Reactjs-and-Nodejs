
import axios from 'axios';
import { GET_CATEGORIES, GET_CATEGORY_DETAIL } from "./index.js";


export const _getCategoriesSuccess = categories => ({
  type: GET_CATEGORIES, 
  payload: categories 
});

export const _getCategoryDetailSuccess = category => ({
  type: GET_CATEGORY_DETAIL, 
  payload: category 
});

export function getCategories() {
  return function (dispatch) {
    //dispatch(beginAjaxCall());
    return axios.get('http://localhost:4000/api/categories').then(response => {
          if(response.data.status) {
            dispatch(_getCategoriesSuccess(response.data.data));
          }
      },error =>{
        console.log('--error--');
        console.log(error);
        //throw(error);
    });
  };
}

export function getCategoryDetail(id) {
  return function (dispatch) {
    //dispatch(beginAjaxCall());
    return axios.get('http://localhost:4000/api/category/'+id).then(response => {
          if(response.data.status) {
            dispatch(_getCategoryDetailSuccess(response.data.data));
          }
      },error =>{
        console.log('--error--');
        console.log(error);
        //throw(error);
    });
  };
}