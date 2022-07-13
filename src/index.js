import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from "react-redux";
import {persistor, store} from "./store";
import {PersistGate} from "redux-persist/integration/react";
import {BrowserRouter} from 'react-router-dom';

ReactDOM.render(
    <Provider store={store}>
        <PersistGate persistor={persistor} loading={<div>...</div>}>
        <BrowserRouter>
            <App/>
          </BrowserRouter>
        </PersistGate>
    </Provider>
    ,
    document.getElementById('root')
);


// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import {BrowserRouter} from 'react-router-dom'


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>
// );


