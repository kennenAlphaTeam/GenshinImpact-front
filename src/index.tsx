import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './features/redux/reducers';
import rootSaga from './features/redux/sagas';
import { unstable_HistoryRouter as HistoryRouter } from 'react-router-dom';
import history from './features/history';
import './index.css';
import { ThemeProvider } from 'styled-components';
import theme from './style/theme';

const sagaMiddleware = createSagaMiddleware({
  context: {
    navigate: history,
  },
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware)),
);

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <HistoryRouter history={history}>
      <App></App>
    </HistoryRouter>
  </Provider>,
  document.getElementById('root'),
);
