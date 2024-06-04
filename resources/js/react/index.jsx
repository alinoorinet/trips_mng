import React from 'react'
import ReactDOM from 'react-dom'
// import './index.css'
import './App'
import { store } from './redux/store'
import { Provider } from 'react-redux'
import App from "./App";
import {createRoot} from "react-dom/client";
/*
ReactDOM.render(
    // <Provider store={store}>
        <App />,
    // </Provider>,
    document.getElementById('root')
)*/
const root = createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);
