import { applyMiddleware, createStore } from 'redux';
import rootReducer from './reducers/root';

import loggerMiddleware from './middleware/logs';
import apiMiddleware from './middleware/api.js';

const initialState = {
  recipes: [{ name: 'Omelette' }],
  ingredients: [{ recipe: 'Omelette', name: 'Egg', quantity: 2 }]
};

const store = createStore(rootReducer, initialState , applyMiddleware(loggerMiddleware , apiMiddleware ));

window.store = store;

export default store;
