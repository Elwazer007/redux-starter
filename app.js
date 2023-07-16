import { addIngredient } from "./actions/ingredients";
import { addRecipe, fetchRecipes } from "./actions/recipes";
import loadUI from "./ui";
import store from "./store";


loadUI();

store.dispatch(fetchRecipes());

store.dispatch(addRecipe("Scrambled Eggs"));
store.dispatch(addIngredient("Scrambled Eggs", "Egg", 2));

console.log(store.getState());