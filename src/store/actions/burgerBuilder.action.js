import * as actionTypes from "./actionTypes";
import axios from "../../axios-orders";

export const addIngredient = (ingredient) => {
  return {
    type: actionTypes.ADD_INGREDIENT,
    ingredientName: ingredient,
  };
};
export const removeIngredient = (ingredient) => {
  return {
    type: actionTypes.REMOVE_INGREDIENT,
    ingredientName: ingredient,
  };
};

export const setIngredients = (ingredients) => {
  return {
    type: actionTypes.SET_INGREDIENTS,
    ingredients: ingredients,
  };
};

export const fetchIngredientsFailed = () => {
  return {
    type: actionTypes.FETCH_INGREDIENTS_FAILED,
    error: true,
  };
};

export const fetchInitIngredients = () => {
  return (dispatch) => {
    axios
      .get("ingredients.json")
      .then((res) => {
        dispatch(setIngredients(res.data));
      })
      .catch((error) => {
        dispatch(fetchIngredientsFailed());
      });
  };
};
