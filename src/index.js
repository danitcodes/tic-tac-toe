import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { createStore } from 'redux';
import stepReducer from './reducers/step-reducer';
//import gameReducer from './reducers/game-reducer';
import { Provider } from 'react-redux';

const store = createStore(stepReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);