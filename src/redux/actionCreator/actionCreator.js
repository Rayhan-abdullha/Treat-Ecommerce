import {
  ADD_TO_CART,
  CATEGORIES_FETCH_ERROR,
  CATEGORIES_FETCH_SUCCESS,
  CATEGORIES_LOADING,
  DELETE_TO_CART,
  FOODS_FETCH_ERROR,
  FOODS_FETCH_SUCCESS,
  FOODS_LOADING,
  FOOD_DETAILS_FETCH,
} from "../actionTypes/actionTypes";

export function foodsFetchSuccess(data) {
  return { type: FOODS_FETCH_SUCCESS, payload: data };
}
export function foodsFetchError(err) {
  return { type: FOODS_FETCH_ERROR, payload: err };
}
export function foodsFetchLoading(isOK) {
  return { type: FOODS_LOADING, payload: isOK };
}
export function foodDetailsFetch(data) {
  return { type: FOOD_DETAILS_FETCH, payload: data };
}

export function categoriesFetchSuccess(data) {
  return { type: CATEGORIES_FETCH_SUCCESS, payload: data };
}
export function categoriesFetchError(err) {
  return { type: CATEGORIES_FETCH_ERROR, payload: err };
}
export function categoriesFetchLoading(isOK) {
  return { type: CATEGORIES_LOADING, payload: isOK };
}

// add to cart
export function addToCart(data) {
  return { type: ADD_TO_CART, payload: data };
}

// delete to cart
export function deleteToCart(data) {
  return { type: DELETE_TO_CART, payload: data };
}
