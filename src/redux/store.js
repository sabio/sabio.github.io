import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import persistState from 'redux-localstorage'
import rootReducer from './reducers/rootReducer';


const enhancer = compose(
  applyMiddleware(thunk),
  persistState(['language'])
);


export default function configureStore(initialState={}) {
  return createStore(
    rootReducer,
    initialState,
    enhancer,
  );
}