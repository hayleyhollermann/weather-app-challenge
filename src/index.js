import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects'; 
import axios from 'axios';
import App from './components/App/App';

// stores results from server
const forecast = (state = [], action) => {
  if(action.type === 'SET_FORECAST'){
      return action.payload
  } else {
      return state;
  }
}

function* rootSaga() {
  yield takeEvery('GET_FORECAST', getForecast);
}

// sends location input to server
function* getForecast(action) {
  try {
      const response = yield axios.get(`http://localhost:5000/weather/${action.payload.location}`);
      yield put ({ type: 'SET_FORECAST', payload: response.data})
  } catch(error) {
      console.log('error fetching weather', error)
  }
}

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  combineReducers({ 
    forecast
  }),
  applyMiddleware(sagaMiddleware, logger)
);

sagaMiddleware.run(rootSaga);


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
