// store.js
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { formReducer , resultReducer } from './Reduers/Reducerrr';
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({
  form : formReducer,
 resultReducer
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
