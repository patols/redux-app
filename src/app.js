import React from 'react';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ReactDOM from 'react-dom';
import Application from './Application';
import './index.css';
import app from './reducers/rootReducer'

let store = createStore(app)

ReactDOM.render(
    <Provider store={store}>
        <MuiThemeProvider>
            <Application />
        </MuiThemeProvider>
    </Provider>,
  document.getElementById('root')
);

if (window.__REDUX_DEVTOOLS_EXTENSION__) { // eslint-disable-line
  enhancer = compose(
    middleware,
    window.__REDUX_DEVTOOLS_EXTENSION__() // eslint-disable-line
  );
} else {
  enhancer = compose(middleware);
}
