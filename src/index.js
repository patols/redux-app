import React from 'react';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import app from './reducers/rootReducer'

let store = createStore(app)

ReactDOM.render(
    <Provider store={store}>
        <MuiThemeProvider>
            <App />
        </MuiThemeProvider>
    </Provider>,
  document.getElementById('root')
);
