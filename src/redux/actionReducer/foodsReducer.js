import {
  ADD_TO_CART,
  DELETE_TO_CART,
  FOODS_FETCH_ERROR,
  FOODS_FETCH_SUCCESS,
  FOODS_LOADING,
  FOOD_DETAILS_FETCH,
} from "./../actionTypes/actionTypes";
const initial = {
  allfoods: [],
  singleFoodDetials: {},
  cart: [],
  error: "",
  loading: false,
};

export const foodsReducer = (state = initial, action) => {
  switch (action.type) {
    case FOODS_FETCH_SUCCESS:
      return {
        ...state,
        allfoods: action.payload,
        loading: false,
        error: "",
      };
    case FOODS_FETCH_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case FOODS_LOADING:
      return {
        ...state,
        loading: action.payload,
        error: "",
      };
    case FOOD_DETAILS_FETCH:
      return {
        ...state,
        singleFoodDetials: { ...action.payload },
      };
    case ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case DELETE_TO_CART:
      return {
        ...state,
        cart: action.payload,
      };
    default:
      return state;
  }
};

export default foodsReducer;
