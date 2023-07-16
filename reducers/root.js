import { combineReducers } from "redux";
import ingredientsReducer from "./ingredientsReducer";
import recipesReducer from "./recipesReducer";

/*
const rootReducer = (state, action) => {

  return Object.assign({}, state, {
    recipes: recipesReducer(state.recipes, action),
    ingredients: ingredientsReducer(state.ingredients, action)
    });
};
*/

const rootReducer = combineReducers({
  recipes: recipesReducer,
  ingredients: ingredientsReducer,
});

export default rootReducer;
