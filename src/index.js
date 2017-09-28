import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'mobx-react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import './index.scss';
import App from './App';
import stores from './stores';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render((
  <Provider {...stores}>
    <BrowserRouter>
      <MuiThemeProvider>
        <App />
      </MuiThemeProvider>
    </BrowserRouter>
  </Provider>
), document.getElementById('root'));

registerServiceWorker();
