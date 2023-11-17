import React from 'react';
import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './components/App/App';
import store from './components/store/store';

import 'typeface-barlow';
import 'typeface-montserrat';
import 'typeface-barlow-condensed';
import 'typeface-quicksand';

import './styles/index.scss';
import 'semantic-ui-css/semantic.min.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const root = createRoot(document.getElementById('root') as Element);

root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
