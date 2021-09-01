import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from "./redux/redux-store";
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom';

let renderEntireTree = (state) => {
  ReactDOM.render(

    <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <App state={state} dispatch={store.dispatch.bind(store)} store={store} />
        </BrowserRouter>
      </Provider>
    </React.StrictMode>,

    document.getElementById('root')
  );
}

renderEntireTree(store.getState());

store.subscribe(() => {
  let state = store.getState()
  renderEntireTree(state);
})