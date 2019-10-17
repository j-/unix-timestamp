import * as React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import rootReducer from './store';
import { setCurrentTime } from './store/actions';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider as StoreProvider } from 'react-redux';
import App from './components/App';
import 'bootstrap/dist/css/bootstrap.css';

const store = createStore(rootReducer, composeWithDevTools());

store.dispatch(
  setCurrentTime(Date.now())
);

render(
  <StoreProvider store={store}>
    <App />
  </StoreProvider>,
  document.getElementById('root')
);
