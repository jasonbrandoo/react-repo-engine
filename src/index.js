import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { ThemeProvider } from 'styled-components';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

const theme = {
  primary: '#f38181',
  secondary: '#fce38a',
  tertiary: '#eaffd0',
};

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById('root'),
);
registerServiceWorker();
