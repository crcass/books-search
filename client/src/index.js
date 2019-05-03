import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Normalize } from 'styled-normalize';

const Root = () => (
  <Fragment>
    <Normalize />
    <App />
  </Fragment>
);

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
