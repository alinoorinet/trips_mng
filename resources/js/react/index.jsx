import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App'

import { store } from './redux/store'
import { Provider } from 'react-redux'
import App from "./App";
import {createRoot} from "react-dom/client";


const root = createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </Provider>
);
