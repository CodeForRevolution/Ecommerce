import React from 'react';
import ReactDOM from 'react-dom/client';
// import Dropdown from './dropdownMenuProject/Menubar';
import App from './e-commerce-codingNinja/App';
import { Provider } from 'react-redux';
import { store } from './e-commerce-codingNinja/components/redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Provider store={store}>
      <App/>
      </Provider>

  </React.StrictMode>
);

