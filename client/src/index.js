import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, } from "react-router-dom";
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import store from './store';
import { initMiddleware, } from 'devise-axios';
import "semantic-ui-css/semantic.min.css";
import { AuthProvider } from './providers/AuthProvider';

initMiddleware();

ReactDOM.render(
  <AuthProvider>
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
  </AuthProvider>,
  document.getElementById('root')
);

serviceWorker.unregister();