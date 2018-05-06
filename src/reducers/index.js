import { GET_CATEGORIES, GET_CATEGORY_DETAIL, GET_PRODUCTS } from "../actions/index.js";

const initialState = {
  categories: [],
  category: {},
  products: []
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CATEGORIES:
      return {...state, categories: action.payload };
      
    case GET_CATEGORY_DETAIL:
      return {...state, category: action.payload };

    case GET_PRODUCTS:
      return {...state, products: action.payload };
      
    default:
      return state;
  }
};

export default rootReducer;
