import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

import { composeWithDevTools } from 'redux-devtools-extension';

//redux
import { createStore } from 'redux';

import { Provider } from 'react-redux';
import rootReducer from './modules';

//redux persist
import {persistStore} from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

//store 
const store = createStore(rootReducer,composeWithDevTools());
const persistor = persistStore(store);


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
     <PersistGate loading={null} persistor={persistor}>
      <React.StrictMode>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </React.StrictMode>
    </PersistGate>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
