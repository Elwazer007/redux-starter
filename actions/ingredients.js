import { ADD_INGREDIENT, SET_INGREDIENTS } from "../constants/actionTypes";

export const addIngredient = (recipe, name, quantity) => {
  return {
    type: ADD_INGREDIENT,
    recipe,
    name,
    quantity,
  };
};

export const setIngredients = (ingredients) => {
  return {
    type: SET_INGREDIENTS,
    ingredients,
  };
};
