import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
//import {Provider} from 'react-redux';
//import {createStore} from 'redux';
//import allReducers from './redux/reducers/combined-reducers';

//const store = createStore(allReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
//console.log(store.getState());
ReactDOM.render(
  <React.StrictMode>
    {/*<Provider store = {store}>*/}
      <App />
    {/*</Provider>*/}
  </React.StrictMode>,
  document.getElementById('root')
);
