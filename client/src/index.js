import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import AppRouter from './AppRouter';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store/configureStore'

const store = configureStore();

const jsx = (
    <Provider store={store}>
      <AppRouter />
    </Provider>
)

store.subscribe(()=>{
    console.log(store.getState())
})

ReactDOM.render(jsx, document.getElementById('root'));
registerServiceWorker();

