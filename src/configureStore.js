/* eslint-disable no-underscore-dangle */

import { createStore, applyMiddleware, compose } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import reducers from './reducers';
// import thunk from 'redux-thunk';
// import { routerMiddleware } from 'react-router-redux';

// import rootReducer from 'src/reducers';
// import { INITIAL_STATE as SelectOptionsInitialState } from 'src/reducers/selectOptions';


export default configureStore({
  reducer : reducers
})

// export default (preloadedState, history) => {
//   const middleware = [];
//   middleware.push(routerMiddleware(history));
//   middleware.push(thunk);
//   middleware.push(searchForm);

//   const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//   const enhancer = composeEnhancers(applyMiddleware(...middleware));

//   const initialState = Object.assign({}, preloadedState, {});
//   initialState.selectOptions = { ...initialState.selectOptions, ...SelectOptionsInitialState };

//   if ((initialState.currentUser || {}).email) {
//     initialState.currentUser = { isAuthorized: true, ...initialState.currentUser };
//   } else {
//     initialState.currentUser = { isAuthorized: false };
//   }

//   return createStore(rootReducer, initialState, enhancer);
// };
