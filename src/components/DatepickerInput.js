import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import reducer from '../reducers/reducer';
import Datepicker from './Datepicker';
import './Datepicker.css';

const store = createStore(reducer);
export default () => (
  <Provider store={store}>
    <Datepicker />
  </Provider>
);
