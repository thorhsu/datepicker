import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import DatepickerInput from './components/DatepickerInput';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <DatepickerInput />,
  document.getElementById('root')
);
registerServiceWorker();
