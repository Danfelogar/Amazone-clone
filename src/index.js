import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { StateProvider } from './state/StateProvider';
import reducer, { initialState } from './reducer/reducer';

ReactDOM.render(
  <React.StrictMode>
    <StateProvider initialState={ initialState } reducer={reducer}>
      <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
