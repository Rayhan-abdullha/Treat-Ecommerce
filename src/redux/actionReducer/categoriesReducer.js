import {
  CATEGORIES_FETCH_ERROR,
  CATEGORIES_FETCH_SUCCESS,
  CATEGORIES_LOADING,
} from "../actionTypes/actionTypes";

const inital = {
  category: [],
  error: "",
  loading: false,
};

const categoriesReducer = (state = inital, action) => {
  switch (action.type) {
    case CATEGORIES_FETCH_SUCCESS:
      return {
        ...state,
        category: [...action.payload],
      };
    case CATEGORIES_FETCH_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case CATEGORIES_LOADING:
      return {
        ...state,
        loading: action.payload,
      };

    default:
      return state;
  }
};

export default categoriesReducer;
