import { ADD_RECIPE } from "../constants/actionTypes";

const recipesReducer = (recipes = [], action) => {
  switch (action.type) {
    case ADD_RECIPE:
      return recipes.concat({ name: action.name });
  }
  return recipes;
};

export default recipesReducer;
